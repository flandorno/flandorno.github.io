import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import Landing from "../home/Landing";
import { EluxScene, N4mScene, ProcessScene, YogaScene } from "../home/cases";
import FooterScene from "../home/FooterScene";
import { powerOn } from "../home/powerOn";
import { useGridContext } from "../grid/useGrid";
import { usePrefs } from "../lib/prefs";
import { useT } from "../i18n";
import { discharge } from "../lib/battery";
import { playSlide } from "../lib/sound";

gsap.registerPlugin(Observer);

const SCENES = [Landing, N4mScene, YogaScene, ProcessScene, EluxScene, FooterScene];
const LAST = SCENES.length - 1;
/** Longest spread, in seconds, between the first and last tile of one lane. */
const WAVE_BUDGET = 0.45;

/* The scene the visitor was on, so coming back from a case study returns to
   it. In memory only: a reload starts again from the landing. */
let remembered = 0;

type Focus = "first" | "last" | "scene";

/** The controls of a scene that Tab stops on, in order. */
function controlsOf(scene: HTMLElement): HTMLElement[] {
  return [...scene.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")].filter((c) => c.tabIndex >= 0);
}

/* ── Lanes ───────────────────────────────────────────────────────────────── */

/** Rows a tile covers, read from its grid placement: [first, last], 1-based. */
function rowsOf(tile: Element): [number, number] {
  const style = getComputedStyle(tile);
  const start = parseInt(style.gridRowStart, 10) || 1;
  const span = /span\s+(\d+)/.exec(style.gridRowEnd);
  return [start, start + (span ? parseInt(span[1], 10) : 1) - 1];
}

/** Lane index for each tile. Rows joined by a tall tile share a lane. */
function buildLanes(tiles: Element[]): Map<Element, number> {
  const spans = tiles.map(rowsOf);
  const rows = Math.max(...spans.map(([, last]) => last));
  /* joined[r] is true when row r and row r + 1 belong to the same lane. */
  const joined = Array.from({ length: rows + 1 }, () => false);
  spans.forEach(([first, last]) => {
    for (let r = first; r < last; r++) joined[r] = true;
  });
  const laneOfRow: number[] = [];
  let lane = 0;
  for (let r = 1; r <= rows; r++) {
    laneOfRow[r] = lane;
    if (!joined[r]) lane++;
  }
  return new Map(tiles.map((tile, i) => [tile, laneOfRow[spans[i][0]]]));
}

/** Each pattern gives every lane its place in the running order. */
const PATTERNS: ((count: number) => number[])[] = [
  (n) => Array.from({ length: n }, (_, i) => i),
  (n) => Array.from({ length: n }, (_, i) => n - 1 - i),
  (n) => Array.from({ length: n }, (_, i) => Math.abs(i - (n - 1) / 2) * 2),
  (n) => Array.from({ length: n }, (_, i) => (n - 1) / 2 - Math.abs(i - (n - 1) / 2)),
  (n) => gsap.utils.shuffle(Array.from({ length: n }, (_, i) => i)),
  (n) => Array.from({ length: n }, (_, i) => (i % 2) * 1.5 + i * 0.25),
];

/* ─────────────────────────────────────────────────────────────────────────────
   The home page: six scenes.

   STAGE (animations on, five rows fit the viewport). The page is one viewport
   tall and does not scroll. One gesture — a wheel notch, a swipe, an arrow key
   — moves one scene, and the move is a fixed sequence that always plays whole:
   the screens switch off, the new tiles come in from the right behind the old
   ones, which leave to the left, the screens switch on one by one, each in its
   own way (see powerOn). Lanes go in a
   different order every time, and the tiles of a lane start unevenly. Going back mirrors it. Scenes that are not showing are inert.

   STACK (animations off, or a small screen). The same six scenes one under the
   other, scrolled natively, with no movement at all.
   ───────────────────────────────────────────────────────────────────────────── */
export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const grid = useGridContext();
  const { motion } = usePrefs();
  const t = useT();
  const stage = grid.fits && motion;

  const location = useLocation();
  const wanted = (location.state as { scene?: number } | null)?.scene;

  const [index, setIndex] = useState(() => wanted ?? remembered);
  const current = useRef(index);
  const busy = useRef(false);
  /* A wheel gesture keeps sending events after the scene has changed. The
     next move is allowed only once the input has gone quiet. */
  const armed = useRef(true);
  /* Where focus goes once the new scene is in: its first or last control
     (Tab and Shift+Tab walked off the end of the old one), or the scene
     itself. */
  const refocus = useRef<Focus | null>(null);
  /* The move was asked for from a case scene's counter: focus lands on the
     current number of the new scene's counter, so a keyboard can keep
     stepping from there without looking for it again. */
  const pager = useRef<string | undefined>(undefined);

  const { contextSafe } = useGSAP({ scope: root });

  const lastPattern = useRef(-1);

  const go = contextSafe((to: number, focus?: Focus) => {
    const n = Math.max(0, Math.min(LAST, to));
    const el = root.current;
    if (!el || busy.current || n === current.current) return;
    const scenes = el.querySelectorAll<HTMLElement>(":scope > .mx-scene");
    const from = scenes[current.current];
    const next = scenes[n];
    const dir = n > current.current ? 1 : -1;
    const outTiles = [...from.querySelectorAll<HTMLElement>(".mx-tile")];
    const inTiles = [...next.querySelectorAll<HTMLElement>(".mx-tile")];
    const outScreens = from.querySelectorAll(".mx-screen");
    const inScreens = next.querySelectorAll(".mx-screen");

    /* The push. A lane is a row, or a run of rows tied together by a tile
       that spans them in either scene. The new tiles of a lane come in behind
       its old ones along the same path at the same speed.

       Inside a lane the tiles do not start together: going along the
       direction of travel, each one starts with or after the one ahead of it,
       by an uneven amount. Because a tile never starts before the one ahead,
       it can never catch it up, so nothing overlaps — but the row loosens and
       closes like a queue instead of sliding as one bar. */
    const lanes = buildLanes([...outTiles, ...inTiles]);
    const count = Math.max(...lanes.values()) + 1;
    /* What changes from one transition to the next: the order in which the
       lanes go (never the same pattern twice running), how far apart, and
       where the breaks fall inside each lane. */
    let pattern = Math.floor(Math.random() * PATTERNS.length);
    if (pattern === lastPattern.current) pattern = (pattern + 1) % PATTERNS.length;
    lastPattern.current = pattern;
    const order = PATTERNS[pattern](count);
    const gap = 0.06 + Math.random() * 0.07;

    const width = el.clientWidth;
    const incoming = new Set<Element>(inTiles);
    const delays = new Map<Element, number>();
    for (let lane = 0; lane < count; lane++) {
      /* Position along the direction of travel; the new tiles queue up one
         stage-width behind the old ones. */
      const queue = [...lanes.entries()]
        .filter(([, l]) => l === lane)
        .map(([tile]) => {
          const r = tile.getBoundingClientRect();
          const ahead = dir > 0 ? r.left : width - r.right;
          return { tile, at: Math.round(ahead + (incoming.has(tile) ? width : 0)) };
        })
        .sort((a, b) => a.at - b.at);
      const waits: number[] = [];
      let wait = 0;
      queue.forEach((q, i) => {
        if (i > 0 && q.at !== queue[i - 1].at) wait += Math.random() < 0.35 ? 0 : 0.03 + Math.random() * 0.08;
        waits.push(wait);
      });
      /* Keep the whole lane's spread inside a fixed budget. */
      const scale = wait > WAVE_BUDGET ? WAVE_BUDGET / wait : 1;
      queue.forEach((q, i) => delays.set(q.tile, order[lane] * gap + waits[i] * scale));
    }
    const delay = (_: number, tile: Element) => delays.get(tile) ?? 0;

    const shift = dir * (width - parseFloat(getComputedStyle(el).fontSize) * 0.25);
    const move = { duration: 0.8, ease: "power3.inOut", delay };
    const travel = 0.8 + Math.max(...delays.values());

    busy.current = true;
    /* The push has a sound too, as long as the tiles take to cross. */
    playSlide(dir, 0.15 + travel);
    refocus.current = focus ?? (from.contains(document.activeElement) ? "scene" : null);
    pager.current = document.activeElement instanceof HTMLElement ? document.activeElement.dataset.pager : undefined;
    gsap
      .timeline({
        onComplete: () => {
          current.current = n;
          remembered = n;
          busy.current = false;
          setIndex(n);
        },
      })
      .to(outScreens, { opacity: 0, duration: 0.2, ease: "steps(3)" }, 0)
      .set(next, { visibility: "visible" }, 0.15)
      .set(inScreens, { opacity: 0 }, 0.15)
      .to(outTiles, { x: -shift, ...move }, 0.15)
      .fromTo(inTiles, { x: shift }, { x: 0, ...move }, 0.15)
      /* The screens come on as the last tiles settle, each in its own way. */
      .add(powerOn([...inScreens]), 0.15 + travel - 0.25);
  });

  /* After the swap is committed, hand the scenes back to the stylesheet. */
  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    gsap.set(el.querySelectorAll(":scope > .mx-scene, .mx-tile, .mx-screen, .mx-screen:not(.mx-screen-live) .mx-ch"), {
      clearProps: "transform,opacity,visibility",
    });
    if (refocus.current) {
      const scene = el.querySelectorAll<HTMLElement>(":scope > .mx-scene")[index];
      const stops = scene ? controlsOf(scene) : [];
      const same = pager.current ? scene?.querySelector<HTMLElement>("[data-pager][aria-current]") : null;
      const target = refocus.current === "first" ? stops[0] : refocus.current === "last" ? stops.at(-1) : same;
      refocus.current = null;
      (target ?? scene)?.focus();
    }
    if (index === LAST) discharge();
  }, [index]);

  /* Opening the page: the screens of the scene on show come on, as they do
     when a scene arrives. Only with animations on. */
  useGSAP(
    () => {
      const scene = root.current?.querySelectorAll<HTMLElement>(":scope > .mx-scene")[current.current];
      if (!scene || !motion) return;
      const screens = [...scene.querySelectorAll(".mx-screen")];
      busy.current = true;
      powerOn(screens).eventCallback("onComplete", () => {
        busy.current = false;
        gsap.set([...screens, ...scene.querySelectorAll(".mx-screen:not(.mx-screen-live) .mx-ch")], {
          clearProps: "opacity",
        });
      });
    },
    { scope: root },
  );

  /* Jump without the sequence: used off the stage. */
  const scrollTo = useCallback((n: number, smooth: boolean) => {
    current.current = n;
    remembered = n;
    document.getElementById(`scene-${n}`)?.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
  }, []);

  /* A link asked for a scene: the fixed row's "Case studies" and home tiles,
     or the footer's way back up. location.key changes on every click. */
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      if (!stage && current.current > 0) scrollTo(current.current, false);
      return;
    }
    if (wanted === undefined) return;
    if (stage) go(wanted);
    else scrollTo(wanted, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- runs per navigation
  }, [location.key]);

  /* Stage input: wheel, touch and keyboard. */
  useGSAP(
    () => {
      if (!stage) return;
      const step = (d: number) => {
        if (!armed.current || busy.current) return;
        armed.current = false;
        go(current.current + d);
      };
      const observer = Observer.create({
        target: window,
        type: "wheel,touch",
        wheelSpeed: -1,
        tolerance: 12,
        preventDefault: true,
        /* Not ours: Ctrl or Cmd with the wheel is the browser's zoom, and so
           is a trackpad pinch, which arrives as a wheel event with ctrlKey.
           Two fingers on a touch screen are a pinch too. */
        ignoreCheck: (e) =>
          (e instanceof WheelEvent && (e.ctrlKey || e.metaKey)) ||
          (typeof TouchEvent !== "undefined" && e instanceof TouchEvent && e.touches.length > 1),
        onUp: () => step(1),
        onDown: () => step(-1),
        onStop: () => {
          armed.current = true;
        },
        onStopDelay: 0.15,
      });
      /* Tab runs through every scene, not only the one showing: off the last
         control of a scene it brings in the next one and lands on its first
         control, and Shift+Tab does the same backwards. Without this the
         case studies could not be reached with Tab at all. */
      const onTab = (e: KeyboardEvent) => {
        const scene = root.current?.querySelectorAll<HTMLElement>(":scope > .mx-scene")[current.current];
        if (!scene) return;
        if (busy.current) return e.preventDefault();
        const stops = controlsOf(scene);
        const active = document.activeElement;
        const inScene = scene.contains(active);
        const forward = !e.shiftKey;
        /* Focus on the scene itself counts as before its first control. */
        const atEnd = forward ? active === stops.at(-1) : active === stops[0] || active === scene;
        const empty = inScene && stops.length === 0;
        if (!(inScene && (atEnd || empty))) return;
        const to = current.current + (forward ? 1 : -1);
        if (to < 0 || to > LAST) return;
        e.preventDefault();
        go(to, forward ? "first" : "last");
      };
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Tab" && !e.metaKey && !e.ctrlKey && !e.altKey) return onTab(e);
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        const onControl = e.target instanceof Element && e.target.closest("a, button, input, select, textarea");
        let to: number | null = null;
        if (e.key === "ArrowDown" || e.key === "PageDown") to = current.current + 1;
        else if (e.key === "ArrowUp" || e.key === "PageUp") to = current.current - 1;
        else if (e.key === " " && !onControl) to = current.current + (e.shiftKey ? -1 : 1);
        else if (e.key === "Home") to = 0;
        else if (e.key === "End") to = LAST;
        if (to === null) return;
        e.preventDefault();
        go(to);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        observer.kill();
        window.removeEventListener("keydown", onKey);
      };
    },
    /* Without revertOnUpdate the cleanup would not run when animations are
       switched off, and the wheel would go on driving the stage. */
    { dependencies: [stage], revertOnUpdate: true },
  );

  /* Leaving the stage (animations switched off, window resized): show the
     scene the visitor was on, now as a place in the scroll. */
  const wasStage = useRef(stage);
  useEffect(() => {
    if (wasStage.current && !stage) scrollTo(current.current, false);
    wasStage.current = stage;
  }, [stage, scrollTo]);

  /* Off the stage the battery runs flat when the last scene comes into view. */
  useEffect(() => {
    if (stage) return;
    const footer = document.getElementById(`scene-${LAST}`);
    if (!footer) return;
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && discharge(), { threshold: 0.6 });
    io.observe(footer);
    return () => io.disconnect();
  }, [stage]);

  return (
    <div className="mx-stage" ref={root}>
      {SCENES.map((SceneAt, i) => (
        <SceneAt key={i} off={stage && i !== index} />
      ))}
      {/* The stage's scenes are reached by wheel, swipe or arrow keys. This
          button is the same move for anyone tabbing or using a screen reader;
          it shows only when focused. */}
      {stage && index < LAST && (
        <button type="button" className="mx-next" onClick={() => go(current.current + 1, "scene")}>
          {t.home.next}
        </button>
      )}
    </div>
  );
}

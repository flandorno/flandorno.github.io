import { useEffect, useRef } from "react";

/* The one ambitious moment.
 *
 * A field of short line segments whose orientation comes from a smooth
 * trigonometric field. A lead cursor arrives carrying "Join me!", bursts, and
 * four collaborators fly in and settle. Each cursor bends the field around
 * itself, so the longer they stay the more local order appears — the work's
 * own claim, acted out: a messy field resolved by people working on it
 * together.
 *
 * Canvas2D rather than WebGL: this ships on GitHub Pages and has to stay
 * cheap. The loop pauses off-screen and on tab hide, and never starts at all
 * under reduced motion, where the finished arrangement is drawn once instead.
 *
 * The collaborator colours are the system's one documented exception to the
 * single-accent rule: in a multiplayer cursor, colour IS identity.
 */

type Collab = {
  label: string;
  color: string;
  /** entry point and anchor station, in 0..1 of the canvas box */
  from: [number, number];
  to: [number, number];
  /** ms after the burst */
  delay: number;
  /** how far this cursor roams from its anchor, as a fraction of the box */
  ax: number;
  ay: number;
  /** roaming speeds, rad/s */
  wx: number;
  wy: number;
  /** seconds between this cursor's click pulses */
  beat: number;
  /** ms between this cursor's trips to the centre, and where in that cycle it starts */
  visit: number;
  visitPhase: number;
};

const LEAD_LABEL = "Join me!";

/* The cast was composed inside a rectangle; the mask is a circle inscribed in
   it, which is smaller. The four anchors below are fractions of the box, and a
   cursor at (0.70, 0.22) of a 674 × 773 box sits at 76% of the mask radius
   before it starts roaming — measured, the swing took it past 100% and it
   dissolved on its way out. Scaling every settled position and every roaming
   offset toward the centre by this factor fits the whole arrangement inside the
   disc while keeping its proportions: the relative geometry is untouched, it is
   simply more compact. The fly-in is deliberately NOT scaled — the four still
   enter from outside the frame.

   **The value is derived, not tuned by eye.** Each cursor's radius has a
   supremum: its anchor's offset from the centre plus the full roaming
   amplitude — the three sinusoids per axis are incommensurable, so their sum
   does reach the sum of their amplitudes (0.46 + 0.34 + 0.20 = 1) — and the
   centre visits only ever move inward. Worst case is Engineering at **1.055R**
   unscaled. Allow ~0.09R for the arrow and for the pill corner perpendicular
   to whichever inward placement it took, and a label stays inside the mask's
   82% solid stop only while `1.055 x CAST_FIT + 0.09 <= 0.82`, so CAST_FIT
   must not exceed 0.69.
   Sampling is not a check here. An earlier pass sampled eight moments at
   CAST_FIT 0.82, measured 83% and passed it — the true bound at that value is
   96%, and the cycles are long enough that no feasible number of samples finds
   it. Redo the arithmetic if the anchors, the amplitudes or the mask stop
   change; they are one decision. */
const CAST_FIT = 0.66;

const COLLABS: Collab[] = [
  { label: "Product",     color: "#5B9BFF", from: [-0.18, 0.14], to: [0.28, 0.28], delay: 0,   ax: 0.10, ay: 0.09, wx: 1.26, wy: 1.00, beat: 2.3, visit: 19300, visitPhase: 0 },
  { label: "Engineering", color: "#49D6B8", from: [1.20, 0.08],  to: [0.70, 0.22], delay: 80,  ax: 0.08, ay: 0.11, wx: 1.07, wy: 1.39, beat: 3.1, visit: 26900, visitPhase: 9700 },
  { label: "Research",    color: "#F5A524", from: [1.22, 0.96],  to: [0.68, 0.70], delay: 160, ax: 0.11, ay: 0.08, wx: 1.48, wy: 0.91, beat: 2.7, visit: 23300, visitPhase: 17300 },
  { label: "Data",        color: "#FF6FB5", from: [-0.20, 0.94], to: [0.26, 0.74], delay: 240, ax: 0.09, ay: 0.10, wx: 0.93, wy: 1.19, beat: 3.7, visit: 31700, visitPhase: 4900 },
];

/* Timeline, ms. The invitation is deliberately given room to be read — it is
   the only words in the piece — and the burst waits for it. Nothing here gates
   the page: the headline and the action are plain HTML on the first frame. */
/** The lead arrives hugely oversized, label already legible, and scales down
 *  along its travel. There is no pause at the end: reaching full size IS the
 *  cue to go off. */
const LEAD_SCALE_IN = 7;

const T_LEAD_IN = 200;
const T_LEAD_SETTLED = 1150;
const T_BURST = T_LEAD_SETTLED + 60;
const T_IDLE = T_BURST + 900;

/* Once settled the four never park. Each roams its own zone and, on its own
   long cycle, goes to the centre alone to work on the shared thing and comes
   back. They never travel together: the periods below are mutually
   incommensurable, so the combined pattern does not repeat in any session
   anyone will sit through. */
const VISIT_IN = 1300;
const VISIT_HOLD = 900;
const VISIT_OUT = 1500;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
const clamp01 = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);

function readPalette() {
  const cs = getComputedStyle(document.documentElement);
  return {
    ink: cs.getPropertyValue("--ink").trim() || "#F3F2F7",
    accent: cs.getPropertyValue("--accent").trim() || "#9B7CFF",
    onAccent: cs.getPropertyValue("--on-accent").trim() || "#16151B",
  };
}

type Particle = { x: number; y: number; vx: number; vy: number; color: string; r: number };
/** a collaborator's click: a ring that expands and fades where they acted */
type Ring = { x: number; y: number; color: string; born: number };
const RING_MS = 440;

/* ── Furniture scale ───────────────────────────────────────────────────────
   Everything in this piece except the field grid — the arrow, the label pill,
   the click ring, the burst — was authored in absolute pixels against a canvas
   about this wide. Those pixels do not shrink when the box does, so in a
   narrower frame the furniture grows relative to everything around it.
   Measured: the "Engineering" pill is 84px on every device, which is 12% of a
   674px desktop canvas and 23% of a 363px phone one; four pills end to end are
   38% of the desktop width and 71% of the phone width, and at 390px two of the
   four visibly overlap. `ui` puts the proportion back.
   The floor stops the glyph disappearing on a very small canvas: at 0.55 the
   arrow is 2.9% of the width at phone size, which is what it is at desktop. */
const REF_W = 680;
const UI_MIN = 0.55;

/* Below this canvas width the names come off and the four keep only their
   colours — in a multiplayer cursor, colour IS identity. It is a legibility
   floor, derived: the label is 12px x `ui`, and `ui` at this width is
   510/680 = 0.75, so the text lands at 9px. Below that it is not a label, it
   is a smudge, and scaling the pill to fit only makes it smaller.
   It must stay under the smallest canvas that actually ships. The stacked
   artwork is capped in CSS, and at a 30rem cap the canvas came out 509px — one
   pixel under this floor — and every tablet silently lost its four names. The
   cap is 34rem for that reason; the two are one decision. The lead's "Join
   me!" is never dropped: it arrives oversized and is the only copy in the
   piece. */
const LABEL_MIN_W = 510;

/* ── Coming to rest ────────────────────────────────────────────────────────
   The piece loops forever only where you can reach into it. On a touch device
   the pointer layer is dead — measured, a finger drag across the canvas yields
   one `pointermove` before the browser takes the gesture for scrolling — so
   what is left is an animation playing at the reader with no way to join in,
   on the screen where it has the least room. There it runs its sequence once
   and decelerates onto the resolved field, which is the truer picture anyway:
   the work got done. A tap runs it again. */
const T_REST = 8000;   // real ms before the slowdown starts
const REST_MS = 2500;  // how long the slowdown takes

export default function FieldCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const palette = readPalette();

    let w = 0, h = 0, dpr = 1;
    let ui = 1;            // furniture scale, see REF_W
    let showLabels = true; // see LABEL_MIN_W
    /* A phone hides `.fl-hero-art` outright, so the box is 0 x 0 here. Nothing
       starts: no loop, no field, no cost. Re-read on every resize, because the
       box comes back if the window widens past the breakpoint. */
    let hidden = false;
    let raf = 0, running = false, onScreen = true;
    let t = 0;              // field phase
    let elapsed = 0;        // ms of story time — the slowdown stretches this
    let wall = 0;           // real ms since the run started — the slowdown does not
    let rested = false;     // the sequence has finished and the loop is parked
    let last = 0;

    /* Only where there is no pointer to revive it. `(hover: none)` is the exact
       test: it is the same capability the interactive layer needs, so the piece
       keeps looping precisely where looping still earns something. */
    const restsWhenDone = window.matchMedia("(hover: none)").matches;
    let particles: Particle[] = [];
    let burstDone = false;
    let rings: Ring[] = [];
    // each collaborator keeps its own beat, offset so they never click together
    let nextPulse = COLLABS.map((c, i) => T_IDLE + 500 + i * 420 + c.beat * 160);
    let lastPulse = COLLABS.map(() => -9999);
    let atCentre = COLLABS.map(() => false);

    // the visitor's own pointer, in canvas space
    let px = -9999, py = -9999, hasPointer = false;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      hidden = rect.width < 2 || rect.height < 2;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ui = Math.min(1, Math.max(UI_MIN, w / REF_W));
      showLabels = w >= LABEL_MIN_W;
    };

    /* ── the lead cursor's path: a curve in from the bottom-left ─────────── */
    const leadPos = (e: number): { x: number; y: number; on: boolean; p: number } => {
      const start = { x: w * 0.04, y: h * 1.08 };
      const mid = { x: w * 0.22, y: h * 0.72 };
      const end = { x: w * 0.5, y: h * 0.46 };
      if (e < T_LEAD_IN) return { x: start.x, y: start.y, on: false, p: 0 };
      const p = clamp01((e - T_LEAD_IN) / (T_LEAD_SETTLED - T_LEAD_IN));
      const k = easeOutCubic(p);
      const inv = 1 - k;
      return {
        x: inv * inv * start.x + 2 * inv * k * mid.x + k * k * end.x,
        y: inv * inv * start.y + 2 * inv * k * mid.y + k * k * end.y,
        on: true,
        p,
      };
    };

    /* Arrival, then work. Once a cursor lands it never parks: it roams its own
       looping path around its anchor, each on a different pair of speeds so the
       four never fall into step. */
    /** 0 while this one works its own zone, 1 while it is at the centre.
     *  Each cursor has its own period and phase, so they take turns. */
    const visitAt = (c: Collab, e: number) => {
      const t0 = T_IDLE + 900;
      if (e < t0) return 0;
      const tc = (e - t0 + c.visitPhase) % c.visit;
      if (tc < VISIT_IN) return easeInOutCubic(tc / VISIT_IN);
      if (tc < VISIT_IN + VISIT_HOLD) return 1;
      const out = tc - VISIT_IN - VISIT_HOLD;
      if (out < VISIT_OUT) return 1 - easeInOutCubic(out / VISIT_OUT);
      return 0;
    };

    const collabPos = (c: Collab, i: number, e: number) => {
      const since = e - (T_BURST + 90 + c.delay);
      const k = easeOutExpo(clamp01(since / 420));
      const fx = c.from[0] * w, fy = c.from[1] * h;
      /* Settled stations pulled into the mask's disc; entry points left alone,
         so the arrival still comes from off the frame. */
      const cxm = w / 2, cym = h / 2;
      const tx = cxm + (c.to[0] * w - cxm) * CAST_FIT;
      const ty = cym + (c.to[1] * h - cym) * CAST_FIT;
      const s = e / 1000;
      const ph = c.delay * 0.012;
      // three incommensurable components per axis, including one very slow
      // one: the path never closes, so the eye cannot find the loop
      // weighted toward the quicker terms: the slow one only drifts the centre
      // of the path, it must not become the motion the eye reads
      const ox = (Math.sin(s * c.wx + ph) * 0.46
                + Math.sin(s * c.wx * 2.37 + ph * 1.7) * 0.34
                + Math.sin(s * c.wx * 0.31 + ph * 0.6) * 0.20) * c.ax * w * k * CAST_FIT;
      const oy = (Math.cos(s * c.wy + ph) * 0.44
                + Math.cos(s * c.wy * 1.93 + ph * 1.3) * 0.36
                + Math.cos(s * c.wy * 0.27 + ph * 0.9) * 0.20) * c.ay * h * k * CAST_FIT;
      const roamX = fx + (tx - fx) * k + ox;
      const roamY = fy + (ty - fy) * k + oy;

      // each goes to the centre alone, on its own cycle; the tiny offset only
      // stops two stacking exactly on the rare frames where visits overlap
      const g = k >= 1 ? visitAt(c, e) : 0;
      const ang = (i / COLLABS.length) * Math.PI * 2 - Math.PI / 2;
      const rr = Math.min(w, h) * 0.028;
      const cx = w * 0.5 + Math.cos(ang) * rr;
      const cy = h * 0.46 + Math.sin(ang) * rr;

      return { x: roamX + (cx - roamX) * g, y: roamY + (cy - roamY) * g, on: since > 0, k, g };
    };

    const spawnBurst = (x: number, y: number) => {
      particles = [];
      const colors = [palette.accent, ...COLLABS.map((c) => c.color)];
      const N = 64;
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2 + Math.random() * 0.35;
        const sp = (2.6 + Math.random() * 7.4) * ui;
        particles.push({
          x, y,
          vx: Math.cos(a) * sp,
          vy: Math.sin(a) * sp,
          color: colors[i % colors.length],
          r: (1.3 + Math.random() * 2.3) * ui,
        });
      }
    };

    /* Halo gradients are built once per colour and reused, with the context
       scaled to size them: rebuilding four radial gradients every frame was
       the other half of the stutter. */
    let haloCache = new Map<string, CanvasGradient>();
    let haloCacheR = -1;
    const haloFor = (color: string, rad: number) => {
      if (haloCacheR !== rad) { haloCache = new Map(); haloCacheR = rad; }
      let g = haloCache.get(color);
      if (!g) {
        g = ctx.createRadialGradient(0, 0, 0, 0, 0, rad);
        g.addColorStop(0, color);
        g.addColorStop(1, "transparent");
        haloCache.set(color, g);
      }
      return g;
    };

    /* ── cursor glyph + label ────────────────────────────────────────────── */
    const drawCursor = (x: number, y: number, color: string, label: string, scale = 1, alpha = 1, labelAlpha = 1) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(x, y);
      /* One multiplier for the whole glyph: the arrow, the pill and the label
         all live inside this transform, so the text renders at 12 × scale × ui
         and the pill around it follows without a second set of numbers. */
      const sc = scale * ui;
      ctx.scale(sc, sc);

      // arrow
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 17);
      ctx.lineTo(4.4, 13.1);
      ctx.lineTo(7.2, 19.4);
      ctx.lineTo(10.1, 18.1);
      ctx.lineTo(7.4, 12.0);
      ctx.lineTo(12.6, 11.6);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      ctx.lineJoin = "round";
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = palette.onAccent;
      ctx.globalAlpha = alpha * 0.55;
      ctx.stroke();
      ctx.globalAlpha = alpha;

      // label pill
      if (label && labelAlpha > 0.01) {
        ctx.globalAlpha = alpha * labelAlpha;
        /* The page face, not a second one. This asked for Geist, which this
           project has never loaded, so every role label has in fact been
           drawing in the system fallback — a different typeface from the
           rest of the page, by accident. Canvas takes no CSS variable, so
           the family is spelled out; it must track --font-sans. */
        ctx.font = '600 12px "Schibsted Grotesk", system-ui, sans-serif';
        const padX = 8;
        const tw = ctx.measureText(label).width;
        const bw = tw + padX * 2, bh = 22, r = 5;

        /* The pill goes below-right of the arrow, and steps to whichever side
           of it points further INTO the circle rather than run into the fade —
           a dissolved role label is the one thing in this layer that actually
           carries meaning.
           **It is a radius test on both axes, not an x test.** The mask is a
           circle (`circle closest-side`, solid to 82% of the radius), so what
           matters is a pill's distance from the CENTRE. The old test compared x
           against 91% of the width and saw nothing wrong with a pill sitting
           high and to the right: measured at 1440, "Engineering" was at 86% of
           the width — inside the old limit — and at 97% of the radius, so it
           dissolved mid-word, reading "Engineerin". Flipping left could not
           save it either, because the excursion that took it out there was
           vertical. Hence four placements, and the furthest corner of each is
           what is measured, not its anchor.
           SOLID must track the mask's solid stop; they are one decision. */
        const SOLID = 0.82;
        const R = Math.min(w, h) / 2;   // closest-side, as in the mask
        const cx0 = w / 2, cy0 = h / 2;
        const farCorner = (ox: number, oy: number) => {
          let m = 0;
          for (const qx of [ox, ox + bw]) {
            for (const qy of [oy, oy + bh]) {
              m = Math.max(m, Math.hypot(x + qx * sc - cx0, y + qy * sc - cy0));
            }
          }
          return m;
        };
        let bx = 14, by = 16;
        if (farCorner(bx, by) > SOLID * R) {
          let best = Infinity;
          for (const [qx, qy] of [[14, 16], [-(bw + 10), 16], [14, -(bh + 6)], [-(bw + 10), -(bh + 6)]]) {
            const m = farCorner(qx, qy);
            if (m < best) { best = m; bx = qx; by = qy; }
          }
        }
        ctx.beginPath();
        ctx.moveTo(bx + r, by);
        ctx.arcTo(bx + bw, by, bx + bw, by + bh, r);
        ctx.arcTo(bx + bw, by + bh, bx, by + bh, r);
        ctx.arcTo(bx, by + bh, bx, by, r);
        ctx.arcTo(bx, by, bx + bw, by, r);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.fillStyle = palette.onAccent;
        ctx.textBaseline = "middle";
        ctx.fillText(label, bx + padX, by + bh / 2 + 0.5);
      }
      ctx.restore();
    };

    /* ── one frame ───────────────────────────────────────────────────────── */
    const draw = (still = false) => {
      ctx.clearRect(0, 0, w, h);

      const e = still ? T_IDLE + 2000 : elapsed;

      // who is bending the field right now
      const influencers: { x: number; y: number; s: number }[] = [];
      const lead = leadPos(e);
      const leadFaded = e > T_BURST;
      // the oversized arrival bends a correspondingly wider patch of field,
      // so the scale reads as presence rather than as a big drawing
      const leadEntry = 1 + (LEAD_SCALE_IN - 1) * Math.pow(1 - lead.p, 1.5);
      if (lead.on && !leadFaded) influencers.push({ x: lead.x, y: lead.y, s: 1 + (leadEntry - 1) * 0.4 });
      const collabStates = COLLABS.map((c, i) => ({ c, i, p: collabPos(c, i, e) }));
      for (const { i, p } of collabStates) {
        if (!p.on) continue;
        // a click briefly deepens that cursor's pull, so the field answers it
        const since = e - lastPulse[i];
        const kick = since >= 0 && since < 420 ? (1 - since / 420) * 0.55 : 0;
        influencers.push({ x: p.x, y: p.y, s: p.k * (1 + kick) });
      }
      if (hasPointer) influencers.push({ x: px, y: py, s: 1 });

      /* the burst's shockwave, which the field itself carries */
      const shockAge = e - T_BURST;
      const shockOn = !still && shockAge >= 0 && shockAge < 820;
      const shockR = shockOn ? easeOutExpo(shockAge / 820) * Math.hypot(w, h) * 0.62 : 0;
      const shockK = shockOn ? 1 - shockAge / 820 : 0;
      const bx = w * 0.5, by = h * 0.46;

      /* the field */
      const step = Math.max(20, Math.min(34, w / 26));
      const len = step * 0.52;
      /* The floor used to be 130, which binds for any canvas under 542px and
         so never shrank on a phone: 130 is 36% of a 363px canvas against 24%
         of a 674px one, and four cursors at that reach nominally covered 196%
         of the box against 63% on desktop. Every segment was being pulled all
         of the time, which leaves no calm field for the order to emerge
         against — the whole claim of the piece, invisible. At 70 the floor
         stops binding above 292px and the reach stays 24% of the width
         everywhere. */
      const radius = Math.min(230, Math.max(70, w * 0.24));
      const r2 = radius * radius;
      ctx.lineCap = "round";
      ctx.lineWidth = 1.25;

      // Segments are batched into one path per (colour, opacity step) instead
      // of being stroked individually: ~900 stroke calls a frame was the whole
      // reason the field stuttered. 10 steps is below the eye's threshold here.
      const STEPS = 10;
      const inkPaths: Path2D[] = [];
      const accPaths: Path2D[] = [];
      const inkUsed: boolean[] = [];
      const accUsed: boolean[] = [];
      for (let i = 0; i < STEPS; i++) {
        inkPaths.push(new Path2D()); accPaths.push(new Path2D());
        inkUsed.push(false); accUsed.push(false);
      }

      for (let gy = 0, row = 0; gy < h + step; gy += step, row++) {
        for (let gx = 0, col = 0; gx < w + step; gx += step, col++) {
          const x = gx + (row % 2 ? step * 0.5 : 0);
          const y = gy;

          // the three phase speeds are in irrational-ish ratio on purpose:
          // in simple ratios the whole field would visibly repeat
          const a =
            Math.sin(x * 0.0085 + t) * 1.1 +
            Math.cos(y * 0.011 - t * 0.617) * 0.9 +
            Math.sin((x + y) * 0.004 + t * 0.283);

          let vx = Math.cos(a), vy = Math.sin(a);
          let alpha = 0.46;
          const hash = (col * 73856093) ^ (row * 19349663);
          let tint: string | null = (hash >>> 0) % 11 === 0 ? palette.accent : null;

          for (const inf of influencers) {
            const dx = inf.x - x, dy = inf.y - y;
            // squared compare first: most segments are out of range, and
            // Math.hypot here was costing more than the drawing
            const d2 = dx * dx + dy * dy;
            if (d2 >= r2) continue;
            const d = Math.sqrt(d2);
            const pull = Math.pow(1 - d / radius, 1.6) * inf.s;
            const ta = Math.atan2(dy, dx) + Math.PI / 2;
            vx += (Math.cos(ta) - vx) * pull * 0.95;
            vy += (Math.sin(ta) - vy) * pull * 0.95;
            alpha += pull * 0.5;
          }

          // the wavefront snaps whatever it passes to point away from the blast
          if (shockOn) {
            const ddx = x - bx, ddy = y - by;
            const db = Math.sqrt(ddx * ddx + ddy * ddy);
            const prox = 1 - Math.min(1, Math.abs(db - shockR) / 95);
            if (prox > 0) {
              const ra = Math.atan2(ddy, ddx);
              const f = prox * shockK;
              vx += (Math.cos(ra) - vx) * f;
              vy += (Math.sin(ra) - vy) * f;
              alpha += f * 0.8;
            }
          }

          const m = Math.hypot(vx, vy) || 1;
          vx /= m; vy /= m;
          const hl = len * 0.5;
          const aFinal = Math.min(1, tint ? alpha + 0.3 : alpha);
          const bi = Math.max(0, Math.min(STEPS - 1, Math.round(aFinal * (STEPS - 1))));
          const path = tint ? accPaths[bi] : inkPaths[bi];
          if (tint) accUsed[bi] = true; else inkUsed[bi] = true;
          path.moveTo(x - vx * hl, y - vy * hl);
          path.lineTo(x + vx * hl, y + vy * hl);
          tint = null;
        }
      }

      for (let i = 1; i < STEPS; i++) {
        const a = i / (STEPS - 1);
        ctx.globalAlpha = a;
        if (inkUsed[i]) { ctx.strokeStyle = palette.ink; ctx.stroke(inkPaths[i]); }
        if (accUsed[i]) { ctx.strokeStyle = palette.accent; ctx.stroke(accPaths[i]); }
      }
      ctx.globalAlpha = 1;

      /* each collaborator leaves a soft halo so their territory reads */
      for (const { c, p } of collabStates) {
        if (!p.on) continue;
        const haloR = radius * 0.72;
        const sc = (0.62 + p.g * 0.18) / 0.72;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.scale(sc, sc);
        // brighter while it is working the centre: the shared point should glow
        ctx.globalAlpha = (0.24 + p.g * 0.14) * p.k;
        ctx.fillStyle = haloFor(c.color, haloR);
        ctx.beginPath();
        ctx.arc(0, 0, haloR, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.globalAlpha = 1;

      /* the collaborators' clicks */
      if (!still) {
        for (const r of rings) {
          const k = clamp01((e - r.born) / RING_MS);
          if (k >= 1) continue;
          ctx.globalAlpha = (1 - k) * 0.75;
          ctx.strokeStyle = r.color;
          ctx.lineWidth = 1.6 - k;
          ctx.beginPath();
          ctx.arc(r.x, r.y, (4 + easeOutExpo(k) * 34) * ui, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      /* burst ring + particles */
      if (!still && shockAge >= 0 && shockAge < 1000) {
        // a white-hot core for the first instant
        if (shockAge < 180) {
          const fk = 1 - shockAge / 180;
          const fg = ctx.createRadialGradient(bx, by, 0, bx, by, 150 * (1 - fk * 0.6));
          fg.addColorStop(0, palette.ink);
          fg.addColorStop(1, "transparent");
          ctx.globalAlpha = fk * 0.5;
          ctx.fillStyle = fg;
          ctx.beginPath();
          ctx.arc(bx, by, 150 * ui, 0, Math.PI * 2);
          ctx.fill();
        }
        // three rings leaving at staggered speeds
        for (let ri = 0; ri < 3; ri++) {
          const off = ri * 110;
          const age = shockAge - off;
          if (age < 0 || age > 900) continue;
          const k = age / 900;
          ctx.globalAlpha = (1 - k) * (0.85 - ri * 0.18);
          ctx.strokeStyle = ri === 0 ? palette.accent : COLLABS[ri].color;
          ctx.lineWidth = 2.6 - k * 2 - ri * 0.4;
          ctx.beginPath();
          ctx.arc(bx, by, 12 * ui + easeOutExpo(k) * radius * (1.5 - ri * 0.28), 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }
      if (!still && particles.length) {
        const pk = Math.max(0, 1 - (e - T_BURST) / 1100);
        for (const p of particles) {
          ctx.globalAlpha = pk;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * (0.4 + pk * 0.6), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }

      /* cursors */
      if (!still && lead.on && e <= T_BURST) {
        // Oversized on arrival, scaling down along the travel, label legible
        // the whole way. Reaching full size is the cue to go off — no hold.
        drawCursor(lead.x, lead.y, palette.accent, LEAD_LABEL, leadEntry, 1, 1);
      }
      for (const { c, p } of collabStates) {
        if (!p.on) continue;
        drawCursor(p.x, p.y, c.color, showLabels ? c.label : "", 1, Math.min(1, p.k * 1.4));
      }
    };

    const frame = (now: number) => {
      const real = last ? Math.min(48, now - last) : 16;
      last = now;
      wall += real;

      /* The ramp is read off `wall`, not off `elapsed`. Scaling the clock that
         decides how far the slowdown has got makes it slow its own approach:
         it asymptotes and the loop never actually stops. One multiplier on dt
         then decelerates the field, the roaming, the beats and the rings
         together, because all of them are driven from it. */
      const restK =
        !restsWhenDone || wall <= T_REST
          ? 1
          : 1 - easeInOutCubic(clamp01((wall - T_REST) / REST_MS));
      const dt = real * restK;

      elapsed += dt;
      t += dt * 0.00026;

      if (!burstDone && elapsed >= T_BURST) {
        burstDone = true;
        spawnBurst(w * 0.5, h * 0.46);
      }
      if (particles.length) {
        for (const p of particles) { p.x += p.vx; p.y += p.vy; p.vx *= 0.962; p.vy *= 0.962; }
        if (elapsed > T_BURST + 1100) particles = [];
      }

      // the work never stops: each collaborator clicks on its own beat
      COLLABS.forEach((c, i) => {
        const p = collabPos(c, i, elapsed);
        if (!p.on) return;

        // its own working beat, out in its zone
        if (elapsed >= nextPulse[i]) {
          rings.push({ x: p.x, y: p.y, color: c.color, born: elapsed });
          lastPulse[i] = elapsed;
          nextPulse[i] = elapsed + c.beat * 1000;
        }

        // at the centre it actually works: a burst of clicks while it is there,
        // which is what distinguishes a visit from a fly-past
        const here = p.g > 0.97;
        if (here && (!atCentre[i] || elapsed - lastPulse[i] > 210)) {
          rings.push({ x: p.x, y: p.y, color: c.color, born: elapsed });
          lastPulse[i] = elapsed;
        }
        atCentre[i] = here;
      });
      if (rings.length) rings = rings.filter((r) => elapsed - r.born < RING_MS);

      draw();
      if (restK <= 0) {
        rested = true;
        stop();
        return;
      }
      raf = window.requestAnimationFrame(frame);
    };

    const start = () => {
      /* `rested` is checked here and not only in `frame`: the piece sits at the
         top of the page, so it leaves and re-enters the viewport every time the
         reader comes back up. Replaying on each return is the opposite of
         coming to rest. Only a tap starts it again. */
      if (running || rested || hidden || reduce.matches || !onScreen || document.hidden) return;
      running = true;
      last = 0;
      raf = window.requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      if (raf) window.cancelAnimationFrame(raf);
      raf = 0;
    };

    const replay = () => {
      if (reduce.matches) return;
      elapsed = 0; wall = 0; rested = false;
      burstDone = false; particles = []; rings = []; last = 0;
      nextPulse = COLLABS.map((c, i) => T_IDLE + 500 + i * 420 + c.beat * 160);
      lastPulse = COLLABS.map(() => -9999);
      atCentre = COLLABS.map(() => false);
      start(); // after a rest there is no loop left to pick the reset up
    };

    const onPointerMove = (ev: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      px = ev.clientX - rect.left;
      py = ev.clientY - rect.top;
      hasPointer = true;
    };
    const onPointerLeave = () => { hasPointer = false; px = -9999; py = -9999; };

    const ro = new ResizeObserver(() => {
      resize();
      if (hidden) { stop(); return; }   /* a phone: nothing to draw into */
      draw(reduce.matches);
    });
    ro.observe(wrap);
    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) start(); else stop();
    }, { threshold: 0 });
    io.observe(wrap);

    const onVisibility = () => (document.hidden ? stop() : start());
    const onMotionChange = () => { stop(); if (reduce.matches) draw(true); else { replay(); start(); } };

    resize();
    if (!hidden) draw(reduce.matches);
    if (!hidden && !reduce.matches) {
      canvas.addEventListener("pointermove", onPointerMove);
      canvas.addEventListener("pointerleave", onPointerLeave);
      canvas.addEventListener("click", replay);
      start();
    }
    document.addEventListener("visibilitychange", onVisibility);
    reduce.addEventListener("change", onMotionChange);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("click", replay);
      document.removeEventListener("visibilitychange", onVisibility);
      reduce.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div className="fl-canvas-wrap" ref={wrapRef}>
      <canvas ref={canvasRef} aria-hidden="true" role="presentation" />
    </div>
  );
}

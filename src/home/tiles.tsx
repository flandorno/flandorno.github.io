/* The interactive tiles of the landing scene. Each one is a single control
   that fills its tile, so the whole tile is the target. */
import { useEffect, useMemo, useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useT } from "../i18n";
import { setLang, setMotion, setSound, usePrefs } from "../lib/prefs";
import { startCharge, useBattery } from "../lib/battery";
import { SOUND_EVENT } from "../lib/sound";
import { BatteryIcon, HornIcon } from "../grid/icons";
import ScreenText from "../grid/ScreenText";

type TileProps = { style: CSSProperties };

export function AnimationTile({ style }: TileProps) {
  const t = useT();
  const { motion } = usePrefs();
  return (
    <button
      type="button"
      role="switch"
      aria-checked={motion}
      className="mx-tile mx-anim mx-label mx-caps"
      style={style}
      onClick={() => setMotion(!motion)}
    >
      {t.landing.animation}
      <span className="mx-switch" />
    </button>
  );
}

export function LanguageTile({ style }: TileProps) {
  const t = useT();
  const { lang } = usePrefs();
  return (
    <button
      type="button"
      className="mx-tile mx-col mx-label mx-caps"
      style={style}
      aria-label={t.landing.languageSwitch}
      onClick={() => setLang(lang === "en" ? "it" : "en")}
    >
      {t.landing.language}
      <span className="mx-lang" aria-hidden="true">
        <span className={lang === "en" ? "is-on" : undefined}>EN</span>
        <span className={lang === "it" ? "is-on" : undefined}>ITA</span>
      </span>
    </button>
  );
}

/* The speaker grill: dots on a square lattice, clipped to a circle. */
const GRILL = (() => {
  const dots: { x: number; y: number; d: number }[] = [];
  for (let i = -5; i <= 5; i++)
    for (let j = -5; j <= 5; j++) {
      const d = Math.hypot(i, j);
      if (d <= 5.4) dots.push({ x: 50 + i * 8.5, y: 50 + j * 8.5, d });
    }
  return dots;
})();

export function SoundTile({ style }: TileProps) {
  const t = useT();
  const { sound, motion } = usePrefs();
  const grill = useRef<SVGSVGElement>(null);

  /* The dots never move. Switched on, they turn orange from the centre
     outwards (a transition delay per dot, in the stylesheet). Each sound
     after that runs the same wave again: the dots drop back to ink for a
     frame, without a transition, and colour up once more. */
  useEffect(() => {
    const svg = grill.current;
    if (!svg || !sound || !motion) return;
    let frame = 0;
    const replay = () => {
      /* While the battery charges the grill follows the waves instead. */
      if (document.documentElement.dataset.charge) return;
      svg.classList.add("is-reset");
      cancelAnimationFrame(frame);
      /* Two frames: one for the reset to be painted, one to let go of it. */
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => svg.classList.remove("is-reset"));
      });
    };
    window.addEventListener(SOUND_EVENT, replay);
    return () => {
      window.removeEventListener(SOUND_EVENT, replay);
      cancelAnimationFrame(frame);
      svg.classList.remove("is-reset");
    };
  }, [sound, motion]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={sound}
      aria-label={t.landing.sound}
      className="mx-tile mx-col mx-sound"
      style={style}
      onClick={() => setSound(!sound)}
    >
      <span className="mx-horn">
        <HornIcon on={sound} />
      </span>
      <svg ref={grill} className="mx-grill" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        {GRILL.map((p) => (
          <circle key={`${p.x}-${p.y}`} cx={p.x} cy={p.y} r="1.5" style={{ "--d": p.d } as CSSProperties} />
        ))}
      </svg>
    </button>
  );
}

export function BatteryTile({ style }: TileProps) {
  const t = useT();
  const { level, charging } = useBattery();
  const label = charging ? t.landing.batteryCharging : level === 4 ? t.landing.batteryFull : t.landing.batteryFlat;
  return (
    <button
      type="button"
      className="mx-tile mx-battery"
      style={style}
      aria-label={label}
      aria-disabled={charging || level === 4}
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        startCharge({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
      }}
    >
      <BatteryIcon level={level} />
    </button>
  );
}

export function ResumeTile({ style }: TileProps) {
  const t = useT();
  /* The PDF is supplied by the owner. Until it is in public/, this is a
     plain tile: a link to a file that is not there is worse than no link. */
  if (!__HAS_CV__)
    return (
      <div className="mx-tile mx-label mx-caps" style={style}>
        {t.landing.resume}
      </div>
    );
  return (
    <a
      className="mx-tile mx-label mx-caps"
      style={style}
      href="/federico-landorno-cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={0}
    >
      {t.landing.resume}
      <span className="sr-only"> ({t.landing.resumeNewTab})</span>
    </a>
  );
}

/* The screen that cycles through the sectors. Each word is lit character by
   character, held, then switched off before the next one. With animations off
   it shows the first word and does not change; the full list is always
   available as text. */
export function SectorScreen({ style }: TileProps) {
  const t = useT();
  const { motion } = usePrefs();
  const root = useRef<HTMLParagraphElement>(null);
  const words = useMemo(() => t.landing.sectors.map((s) => `${s.toUpperCase()}.`), [t]);

  useGSAP(
    () => {
      if (!motion) return;
      const slots = gsap.utils.toArray<HTMLElement>(".mx-sector", root.current);
      gsap.set(slots, { display: "none" });
      const tl = gsap.timeline({ repeat: -1 });
      slots.forEach((slot) => {
        const chars = slot.querySelectorAll(".mx-ch");
        tl.set(slot, { display: "inline" })
          .fromTo(chars, { opacity: 0 }, { opacity: 1, duration: 0.04, stagger: 0.045 })
          .to(chars, { opacity: 0, duration: 0.04, stagger: { each: 0.025, from: "end" } }, "+=2.4")
          .set(slot, { display: "none" });
      });
    },
    { dependencies: [motion, words], scope: root, revertOnUpdate: true },
  );

  return (
    <p className="mx-screen mx-screen-live mx-display" style={style} ref={root}>
      <span className="sr-only">{t.landing.sectorsSpoken}</span>
      {words.map((w, i) => (
        <span key={w} className={i === 0 ? "mx-sector" : "mx-sector mx-sector-later"}>
          <ScreenText text={w} accent={[w.length - 1, w.length]} />
        </span>
      ))}
    </p>
  );
}

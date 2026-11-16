import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { endCharge, setLevel, useBattery } from "../lib/battery";
import { usePrefs } from "../lib/prefs";
import { playTone } from "../lib/sound";

/** Seconds a wave takes to cross the page, and between one wave and the next. */
const WAVE = 0.9;
const EVERY = 0.65;

/* The ground behind the mosaic. Normally it is just black. While the battery
   charges, four waves cross it from the battery tile — red, orange, yellow,
   green — each an expanding circle that shows through the gaps and the
   screens. Every tile dips as the front of a wave reaches it, so the wave
   reads on the tiles too. Each wave adds a bar to the battery and plays a
   note; after the green one the battery is full, its tile bounces and the
   ground goes back to black. With animations off the battery simply becomes
   full. */
export default function GroundFx() {
  const root = useRef<HTMLDivElement>(null);
  const { charging, origin } = useBattery();
  const { motion } = usePrefs();

  useGSAP(
    () => {
      if (!charging) return;
      if (!motion) {
        endCharge();
        return;
      }
      const width = window.innerWidth;
      const height = window.innerHeight;
      const at = origin ?? { x: width, y: height };
      /* Far enough to reach the farthest corner. */
      const reach = Math.hypot(Math.max(at.x, width - at.x), Math.max(at.y, height - at.y));
      const circle = (r: number) => `circle(${r}px at ${at.x}px ${at.y}px)`;

      const layers = gsap.utils.toArray<HTMLElement>(".mx-charge", root.current);
      /* The tiles on screen, each with the moment the front reaches it. The
         front eases out (power2), so the time for a distance is the inverse
         of that curve. */
      /* document.querySelectorAll, not a GSAP selector: inside useGSAP those
         are scoped to the ground, and the tiles live outside it. */
      const tiles = [...document.querySelectorAll<HTMLElement>(".mx-head .mx-tile, .mx-scene:not([inert]) .mx-tile")]
        .map((tile) => {
          const r = tile.getBoundingClientRect();
          const far = Math.hypot(r.left + r.width / 2 - at.x, r.top + r.height / 2 - at.y);
          return { tile, r, hit: WAVE * (1 - Math.sqrt(1 - Math.min(far / reach, 1))) };
        })
        .filter(({ r }) => r.bottom > 0 && r.top < height && r.width > 0);
      const battery = document.querySelector<HTMLElement>(".mx-battery");

      const tl = gsap.timeline();
      tl.set(layers, { opacity: 1, clipPath: circle(0) }, 0);
      layers.forEach((layer, i) => {
        const start = i * EVERY;
        tl.call(
          () => {
            if (i < 3) setLevel((i + 1) as 1 | 2 | 3);
            /* The speaker grill takes the colour of the wave (mosaic.css). */
            document.documentElement.dataset.charge = String(i + 1);
            playTone(i as 0 | 1 | 2 | 3);
          },
          [],
          start,
        ).to(layer, { clipPath: circle(reach), duration: WAVE, ease: "power2.out" }, start);
        tiles.forEach(({ tile, hit }) => {
          tl.to(tile, { scale: 0.96, duration: 0.12, ease: "power2.out" }, start + hit).to(
            tile,
            { scale: 1, duration: 0.3, ease: "power2.out" },
            start + hit + 0.12,
          );
        });
      });
      const full = 3 * EVERY + WAVE;
      tl.call(
        () => {
          endCharge();
          delete document.documentElement.dataset.charge;
        },
        [],
        full,
      )
        /* Green covers everything now. Put the three under it away first, or
           they would show through it as it fades. */
        .set(layers.slice(0, 3), { opacity: 0 }, full)
        .to(layers[3], { opacity: 0, duration: 0.9, ease: "power1.inOut" }, full + 0.15)
        .set(layers, { clearProps: "opacity,clipPath" })
        /* By now the last dips, on the far tiles, are over too. */
        .set(tiles.map((t) => t.tile), { clearProps: "transform" });
      if (battery)
        tl.fromTo(battery, { scale: 1 }, { scale: 1.06, duration: 0.14, ease: "power2.out" }, full)
          .to(battery, { scale: 1, duration: 0.5, ease: "back.out(3)" }, full + 0.14)
          .set(battery, { clearProps: "scale" });
    },
    { dependencies: [charging], scope: root },
  );

  return (
    <div className="mx-ground" ref={root} aria-hidden="true">
      <span className="mx-charge mx-charge-1" />
      <span className="mx-charge mx-charge-2" />
      <span className="mx-charge mx-charge-3" />
      <span className="mx-charge mx-charge-4" />
    </div>
  );
}

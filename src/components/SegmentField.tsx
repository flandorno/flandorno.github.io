import { useMemo } from "react";

/* Static sibling of the hero canvas: the same segment field, frozen.
 *
 * These stand in for the project mockups until real ones exist. They are
 * deterministic per seed, so a given case study always shows the same
 * composition, and each is replaced one-for-one when its real mockup lands.
 */

const W = 640;
const H = 400;

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Seg = { x1: number; y1: number; x2: number; y2: number; accent: boolean; o: number };

function build(seed: number): Seg[] {
  const rnd = mulberry32(seed);
  const step = 30;
  const len = 16;
  // the field's character varies per seed, so the three cases are siblings,
  // not copies
  const fx = 0.006 + rnd() * 0.006;
  const fy = 0.008 + rnd() * 0.007;
  const phase = rnd() * Math.PI * 2;

  const segs: Seg[] = [];
  for (let gy = step * 0.6, row = 0; gy < H; gy += step, row++) {
    for (let gx = step * 0.6, col = 0; gx < W; gx += step, col++) {
      const x = gx + (row % 2 ? step * 0.5 : 0);
      const y = gy;
      const a =
        Math.sin(x * fx + phase) * 1.2 +
        Math.cos(y * fy - phase * 0.5) * 0.9 +
        Math.sin((x + y) * 0.0035 + phase);
      const hl = len * 0.5;
      const vx = Math.cos(a);
      const vy = Math.sin(a);
      segs.push({
        x1: +(x - vx * hl).toFixed(1),
        y1: +(y - vy * hl).toFixed(1),
        x2: +(x + vx * hl).toFixed(1),
        y2: +(y + vy * hl).toFixed(1),
        accent: rnd() < 0.085,
        o: 0.3 + rnd() * 0.25,
      });
    }
  }
  return segs;
}

export default function SegmentField({ seed }: { seed: number }) {
  const segs = useMemo(() => build(seed), [seed]);
  return (
    <svg
      className="fl-field"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      role="presentation"
    >
      {segs.map((s, i) => (
        <line
          key={i}
          x1={s.x1}
          y1={s.y1}
          x2={s.x2}
          y2={s.y2}
          stroke={s.accent ? "var(--violet)" : "var(--ink)"}
          strokeOpacity={s.accent ? 0.85 : s.o}
          strokeWidth={1.2}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

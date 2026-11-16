import { useMemo } from "react";

type Props = {
  side: "left" | "right";
  /** Columns the rail is wide. */
  cols: number;
  /** Rows it runs beside. */
  rows: number;
  /** Same seed, same tiles: a page looks the same every time it is opened. */
  seed: number;
};

type Piece = { col: number; row: number; w: number; h: number; tone: string; quad: string[] | null };

/* Small seeded generator (mulberry32), so the tiling is fixed per page and
   per section instead of changing on every render. */
function random(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Most tiles stay the plain surface, so the rails frame the text without
   competing with it; some step down the grey ramp. */
const TONES: [string, number][] = [
  ["", 0.5],
  ["mx-tone-1", 0.76],
  ["mx-tone-2", 0.92],
  ["mx-tone-3", 1],
];
const QUAD_TONES = ["", "mx-tone-1", "mx-tone-2", "mx-tone-3"];

function toneFor(roll: number): string {
  return TONES.find(([, upTo]) => roll < upTo)?.[0] ?? "";
}

function tile(cols: number, rows: number, seed: number): Piece[] {
  const next = random(seed);
  const taken = Array.from({ length: rows }, () => Array<boolean>(cols).fill(false));
  const pieces: Piece[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (taken[row][col]) continue;
      const right = col + 1 < cols && !taken[row][col + 1];
      const below = row + 1 < rows;
      const size = next();
      let w = 1;
      let h = 1;
      if (right && below && size < 0.07) [w, h] = [2, 2];
      else if (below && size < 0.2) h = 2;
      else if (right && size < 0.32) w = 2;
      for (let r = row; r < row + h; r++) for (let c = col; c < col + w; c++) taken[r][c] = true;

      const tone = toneFor(next());
      /* A single cell is sometimes cut into four. */
      const quad =
        w === 1 && h === 1 && next() < 0.09
          ? Array.from({ length: 4 }, () => QUAD_TONES[Math.floor(next() * QUAD_TONES.length)])
          : null;
      /* Four identical quarters would read as a mistake, not as a choice. */
      if (quad && quad.every((q) => q === quad[0])) quad[3] = quad[0] === "" ? "mx-tone-2" : "";
      pieces.push({ col, row, w, h, tone, quad });
    }
  }
  return pieces;
}

/* The tiles beside a reading tile: a strip of the mosaic, as many rows as the
   text takes. Plain and grey tiles in a few sizes, and now and then one cut
   into four. Decoration only, hidden from assistive technology. */
export default function Rail({ side, cols, rows, seed }: Props) {
  const pieces = useMemo(() => tile(cols, rows, seed), [cols, rows, seed]);
  if (cols < 1) return null;
  return (
    <div
      className="mx-rail"
      aria-hidden="true"
      style={{
        gridColumn: side === "left" ? `1 / span ${cols}` : `${-(cols + 1)} / -1`,
        gridRow: `span ${rows}`,
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      }}
    >
      {pieces.map((p) => {
        const style = { gridColumn: `${p.col + 1} / span ${p.w}`, gridRow: `${p.row + 1} / span ${p.h}` };
        const key = `${p.col}-${p.row}`;
        return p.quad ? (
          <div key={key} className="mx-quad" style={style}>
            {p.quad.map((tone, i) => (
              <div key={i} className={`mx-tile ${tone}`} />
            ))}
          </div>
        ) : (
          <div key={key} className={`mx-tile ${p.tone}`} style={style} />
        );
      })}
    </div>
  );
}

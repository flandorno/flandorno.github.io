/* The grid engine. It reads the viewport and decides how many columns the
   mosaic has and how tall a cell is. Scenes are authored for two layouts.

   "l8", eight columns, from 768px wide.
     · Stage-sized (at least 900 wide, clearly landscape, at least 600 tall):
       five rows fill the viewport — the fixed row plus four — and the column
       count follows from the cell height, so cells stay close to square. A
       14" MacBook Pro (1512×982) gives 8×5. Columns beyond eight are filled
       with empty tiles (see Scene).
     · Otherwise (a tablet held upright, a phone on its side): exactly eight
       columns of square cells, and the page scrolls. `compact` is set, and
       the few tiles that cannot shrink that far simplify themselves.

   "l4", four columns of square cells, below 768px: the phone. Each scene
   says which tiles it drops there. */
import { createContext, useContext, useSyncExternalStore } from "react";

export type Layout = "l8" | "l4";

export type Grid = {
  layout: Layout;
  cols: number;
  /** Cell height in px. */
  cell: number;
  /** Cell width in px. */
  cellW: number;
  /** The gap between cells in px. */
  gap: number;
  /** Five rows fit the viewport, so the home page can run as a stage. */
  fits: boolean;
  /** Eight columns squeezed into a narrow viewport. */
  compact: boolean;
};

/** Columns a wide scene is authored for. */
export const L8_COLS = 8;
const ROWS = 5;
const MIN_L8 = 768;
const MIN_STAGE_WIDTH = 900;
const MIN_STAGE_RATIO = 1.15;
const MIN_STAGE_HEIGHT = 600;
const MIN_CELL = 88;

function compute(): Grid {
  const root = document.documentElement;
  const gap = parseFloat(getComputedStyle(root).fontSize) * 0.25;
  const w = root.clientWidth;
  const h = window.innerHeight;
  const widthOf = (cols: number) => (w - gap * (cols + 1)) / cols;

  if (w >= MIN_STAGE_WIDTH && w / h >= MIN_STAGE_RATIO && h >= MIN_STAGE_HEIGHT) {
    const cell = (h - gap * (ROWS + 1)) / ROWS;
    const cols = Math.max(L8_COLS, Math.round((w - gap) / (cell + gap)));
    return { layout: "l8", cols, cell, cellW: widthOf(cols), gap, fits: true, compact: false };
  }
  const layout: Layout = w >= MIN_L8 ? "l8" : "l4";
  const cols = layout === "l8" ? L8_COLS : 4;
  const cellW = widthOf(cols);
  return { layout, cols, cell: Math.max(cellW, MIN_CELL), cellW, gap, fits: false, compact: layout === "l8" };
}

let state = compute();
const listeners = new Set<() => void>();

function update(): void {
  const next = compute();
  if (
    next.layout === state.layout &&
    next.cols === state.cols &&
    next.cell === state.cell &&
    next.cellW === state.cellW &&
    next.fits === state.fits &&
    next.compact === state.compact
  )
    return;
  state = next;
  listeners.forEach((l) => l());
}
window.addEventListener("resize", update);

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useGrid(): Grid {
  return useSyncExternalStore(subscribe, () => state);
}

/* ── Placement ───────────────────────────────────────────────────────────── */

/** [column, row, width = 1, height = 1], 1-based. */
export type At = [number, number, number?, number?];
/** Where an object sits in each layout. `null` hides it in that layout. */
export type Placement = { l8: At; l4: At | null };

export type Placer = (at: Placement) => { gridColumn: string; gridRow: string } | { display: "none" };

/** Extra columns on the left of an eight-column scene on a wider grid. */
export const leftPad = (grid: Grid) =>
  grid.layout === "l8" ? Math.floor((grid.cols - L8_COLS) / 2) : 0;

export function placer(grid: Grid): Placer {
  const pad = leftPad(grid);
  return (at) => {
    const p = at[grid.layout];
    if (!p) return { display: "none" };
    const [c, r, w = 1, h = 1] = p;
    return { gridColumn: `${c + pad} / span ${w}`, gridRow: `${r} / span ${h}` };
  };
}

export const GridContext = createContext<Grid | null>(null);

export function useGridContext(): Grid {
  const grid = useContext(GridContext);
  if (!grid) throw new Error("useGridContext outside GridContext");
  return grid;
}

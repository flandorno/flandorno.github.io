import { useMemo, type ReactNode } from "react";
import { L8_COLS, leftPad, placer, useGridContext, type Placer } from "./useGrid";

const TONES = ["", "", "mx-tone-1", "", "mx-tone-2", "", "mx-tone-3"];

type Props = {
  /** Rows the scene takes in each layout. */
  rows: { l8: number; l4: number };
  label: string;
  id?: string;
  /** On the stage: this scene is not the one showing. */
  off?: boolean;
  children: (place: Placer) => ReactNode;
};

/* One scene of the mosaic: a grid of tiles over screens. On a grid wider than
   the eight columns a scene is authored for, the columns left over on each
   side are filled with empty tiles, so the mosaic is always complete. */
export default function Scene({ rows, label, id, off, children }: Props) {
  const grid = useGridContext();
  const place = useMemo(() => placer(grid), [grid]);
  const n = rows[grid.layout];
  const pad = leftPad(grid);

  const fillers: ReactNode[] = [];
  if (grid.layout === "l8") {
    for (let c = 1; c <= grid.cols; c++) {
      if (c > pad && c <= pad + L8_COLS) continue;
      for (let r = 1; r <= n; r++) {
        fillers.push(
          <div
            key={`${c}-${r}`}
            className={`mx-tile ${TONES[(c * 5 + r * 3) % TONES.length]}`}
            style={{ gridColumn: c, gridRow: r }}
            aria-hidden="true"
          />,
        );
      }
    }
  }

  return (
    <section className="mx-scene mx-grid" aria-label={label} id={id} inert={off} tabIndex={-1}>
      {children(place)}
      {fillers}
    </section>
  );
}

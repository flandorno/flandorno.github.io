import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { useGridContext } from "./useGrid";
import Rail from "./Rail";

type Props = {
  tag?: "div" | "h1" | "p" | "section";
  className: string;
  /** grid-column for the tile, e.g. "3 / span 4". */
  column: string;
  /** Columns of decorative tiles to lay on each side, for every row the
   *  tile takes (see Rail). */
  rail?: number;
  /** Seed for those tiles. */
  seed?: number;
  children: ReactNode;
};

/* A tile as tall as its content needs, in whole rows. The grid's rows have a
   fixed height, so a tile holding running text measures that text and spans
   however many rows it takes; what is left over becomes room at the bottom.
   The rails of tiles that flank it are emitted here, as tall as the tile, so
   the mosaic stays complete whatever the text does. */
export default function Fit({ tag: Tag = "div", className, column, rail = 0, seed = 0, children }: Props) {
  const grid = useGridContext();
  const outer = useRef<HTMLElement>(null);
  const inner = useRef<HTMLElement>(null);
  /* A heading or a paragraph may only hold phrasing content. */
  const Inner = Tag === "h1" || Tag === "p" ? "span" : "div";
  const [span, setSpan] = useState(1);

  useLayoutEffect(() => {
    const box = outer.current;
    const content = inner.current;
    if (!box || !content) return;
    const measure = () => {
      const style = getComputedStyle(box);
      const height = content.offsetHeight + parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
      setSpan(Math.max(1, Math.ceil((height + grid.gap - 0.5) / (grid.cell + grid.gap))));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(content);
    return () => observer.disconnect();
  }, [grid]);

  return (
    <>
      {rail > 0 && <Rail side="left" cols={rail} rows={span} seed={seed * 2 + 1} />}
      <Tag
        ref={outer as never}
        className={className}
        style={{ gridColumn: column, gridRow: `span ${span}` }}
      >
        <Inner className="mx-fit" ref={inner as never}>
          {children}
        </Inner>
      </Tag>
      {rail > 0 && <Rail side="right" cols={rail} rows={span} seed={seed * 2 + 2} />}
    </>
  );
}

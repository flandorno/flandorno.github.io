import { Children, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import Fit from "../grid/Fit";
import Rail from "../grid/Rail";
import { useGridContext } from "../grid/useGrid";
import { ArrowIcon } from "../grid/icons";
import { useContentLang, useT } from "../i18n";
import { BASE_TITLE } from "../lib/title";
import { LINKEDIN } from "../lib/contact";

type Fact = { label: string; value: string };

type Props = {
  title: string;
  /** Client and discipline. Sits under the title — never as a label above it. */
  meta: string;
  docTitle: string;
  /** Role, team, period, outcome: what a recruiter looks for before reading.
   *  Short label, one plain sentence of value. */
  facts?: Fact[];
  children: ReactNode;
};

/* The case studies in reading order, so each one can point to the next. */
const ORDER = [
  { to: "/n4m", key: "n4m" },
  { to: "/d4next", key: "yoga" },
  { to: "/n4m-process", key: "process" },
  { to: "/electrolux", key: "elux" },
] as const;

/** Narrowest reading tile, in px: the measure plus the tile's padding. */
const MIN_READ = 672;
/** Narrowest fact tile, in px: under this its sentence runs to too many lines. */
const MIN_FACT = 240;

/* Role, team, period, outcome: one tile each, in a row across the whole grid
   under the title and the client line. The label is in Doto like every other
   label of the mosaic; the value is a sentence, so it is set in the reading
   face, larger than body text.

   The tiles share the page's columns, and the last one of a row takes the
   columns left over — that is the outcome, the longest and the one that
   matters most. Where four across would be too narrow they go two by two,
   and on the phone one under the other. The row is as tall as its tallest
   tile needs, in whole rows of the page grid, measured as Fit does. */
function Facts({ facts }: { facts: Fact[] }) {
  const grid = useGridContext();
  const root = useRef<HTMLDListElement>(null);
  const [span, setSpan] = useState(1);
  const n = facts.length;

  const widthOf = (perRow: number) => {
    const cols = Math.floor(grid.cols / perRow);
    return cols * grid.cellW + (cols - 1) * grid.gap;
  };
  const perRow = widthOf(n) >= MIN_FACT ? n : n > 2 && widthOf(2) >= MIN_FACT ? 2 : 1;
  const rows = Math.ceil(n / perRow);
  const columns = facts.map((_, i) => {
    const row = Math.floor(i / perRow);
    const inRow = Math.min(perRow, n - row * perRow);
    const base = Math.floor(grid.cols / inRow);
    const last = i === row * perRow + inRow - 1;
    return last ? grid.cols - base * (inRow - 1) : base;
  });

  useLayoutEffect(() => {
    const list = root.current;
    if (!list) return;
    const tiles = [...list.children] as HTMLElement[];
    const measure = () => {
      const needs = tiles.map((tile) => {
        const style = getComputedStyle(tile);
        const content = tile.firstElementChild as HTMLElement;
        return content.offsetHeight + parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
      });
      /* Side by side the rows are equal, so each is as tall as the tallest
         tile; stacked, each tile is as tall as its own text. */
      const height =
        perRow === 1
          ? needs.reduce((sum, h) => sum + h, 0) + (n - 1) * grid.gap
          : rows * Math.max(...needs) + (rows - 1) * grid.gap;
      setSpan(Math.max(1, Math.ceil((height + grid.gap - 0.5) / (grid.cell + grid.gap))));
    };
    measure();
    const observer = new ResizeObserver(measure);
    tiles.forEach((tile) => tile.firstElementChild && observer.observe(tile.firstElementChild));
    return () => observer.disconnect();
  }, [grid, perRow, rows, n]);

  return (
    <dl
      className="mx-grid mx-facts"
      ref={root}
      data-stack={perRow === 1 || undefined}
      style={{ gridColumn: "1 / -1", gridRow: `span ${span}` }}
    >
      {facts.map((f, i) => (
        <div key={f.label} className="mx-tile mx-fact" style={{ gridColumn: `span ${columns[i]}` }}>
          <div className="mx-fit">
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   The reading page: case studies and About.

   Under the fixed row: the title on one tile, the client line on the next,
   the facts on a row of tiles (see Facts), then the text down the middle of the grid, one tile per section, with a
   rail of tiles either side (see Rail). Every tile is as tall as its content
   needs, in whole rows (see Fit). The page ends on the way to the next case study and the
   LinkedIn tile.

   The reading tile is four columns wide where that holds the measure, and
   wider where the cells are too narrow for it. It is always centred exactly:
   on a grid with an odd number of columns it takes an odd number, so the two
   rails are the same width. On the phone it is the full width and there are
   no rails.
   ───────────────────────────────────────────────────────────────────────────── */
export default function CaseLayout({ title, meta, docTitle, facts, children }: Props) {
  const grid = useGridContext();
  const t = useT();
  const { pathname } = useLocation();
  /* Italian chosen but the Italian text not yet published: the page is in
     English, and says so to assistive technology. */
  const contentLang = useContentLang();

  useEffect(() => {
    document.title = docTitle;
    return () => {
      document.title = BASE_TITLE;
    };
  }, [docTitle]);

  let width = grid.cols;
  if (grid.layout === "l8") {
    /* Same parity as the grid, so what is left over splits evenly. */
    width = grid.cols % 2 ? 5 : 4;
    while (width < grid.cols && width * grid.cellW + (width - 1) * grid.gap < MIN_READ) width += 2;
    width = Math.min(width, grid.cols);
  }
  const rail = (grid.cols - width) / 2;
  const start = rail + 1;
  /* The rails are seeded from the page, so each case study has its own
     tiling and keeps it. */
  const seed = [...pathname].reduce((sum, ch) => sum * 31 + ch.charCodeAt(0), 7) % 100000;
  const centre = `${start} / span ${width}`;
  const full = "1 / -1";

  const at = ORDER.findIndex((c) => c.to === pathname);
  const next = at >= 0 ? ORDER[(at + 1) % ORDER.length] : null;
  const nextTitle = next ? t.home.cases[next.key].title : "";
  /* On the phone the longest title does not fit one row at title size. */
  const nextRows = grid.layout === "l4" ? 2 : 1;
  const nextRow = `span ${nextRows}`;

  return (
    <article className="mx-scene mx-grid mx-read" lang={contentLang}>
      <Fit tag="h1" className="mx-tile mx-tone-2 mx-display mx-read-title" column={full}>
        {title}
      </Fit>
      <Fit tag="p" className="mx-tile mx-tone-1 mx-label mx-read-meta" column={full}>
        {meta}
      </Fit>

      {facts?.length ? <Facts facts={facts} /> : null}

      {Children.toArray(children).map((child, i) => (
        <Fit key={i} className="mx-tile mx-reading" column={centre} rail={rail} seed={seed + i + 1}>
          {child}
        </Fit>
      ))}

      {next && (
        <>
          <Rail side="left" cols={rail} rows={nextRows} seed={seed + 101} />
          <Link
            to={next.to}
            className="mx-screen mx-title mx-read-next"
            style={{ gridColumn: `${start} / span ${width - 1}`, gridRow: nextRow }}
            tabIndex={-1}
            aria-hidden="true"
          >
            {nextTitle}
          </Link>
          <Link
            to={next.to}
            className="mx-tile mx-accent mx-go"
            style={{ gridColumn: `${start + width - 1}`, gridRow: nextRow }}
            tabIndex={0}
            aria-label={`${t.read.next}: ${nextTitle}`}
          >
            <ArrowIcon />
          </Link>
          <Rail side="right" cols={rail} rows={nextRows} seed={seed + 102} />
        </>
      )}

      <Rail side="left" cols={rail} rows={1} seed={seed + 103} />
      <a
        className="mx-tile mx-label mx-caps"
        style={{ gridColumn: centre }}
        href={LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={0}
        aria-label={`${t.read.contact} (${t.home.footer.newTab})`}
      >
        {t.home.footer.linkedin}
      </a>
      <Rail side="right" cols={rail} rows={1} seed={seed + 104} />
    </article>
  );
}

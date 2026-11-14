import { useCallback, useEffect, useRef, useState } from "react";
import "../styles/foundations.css";
import { getTheme, setTheme, resolvedTheme, type Theme } from "../lib/theme";

/* ═══════════════════════════════════════════════════════════════════════════
   Foundations specimen — /#/foundations, unlinked.
   The review surface for the v2 tokens (DESIGN.next.md): palette with live
   contrast, the contrast matrix, the type scale, the spacing scale, and a
   test mosaic. It is not the final layout. Every number on it is measured in
   the browser at render time, so it stays honest when a token moves.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Contrast ─────────────────────────────────────────────────────────────── */

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.trim().match(/^#([0-9a-f]{6})$/i);
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function luminance([r, g, b]: [number, number, number]) {
  const c = (v: number) => {
    const s = v / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * c(r) + 0.7152 * c(g) + 0.0722 * c(b);
}
function ratio(a: string, b: string) {
  const x = hexToRgb(a);
  const y = hexToRgb(b);
  if (!x || !y) return NaN;
  const [hi, lo] = [luminance(x), luminance(y)].sort((p, q) => q - p);
  return (hi + 0.05) / (lo + 0.05);
}
function grade(r: number) {
  if (r >= 7) return "AAA";
  if (r >= 4.5) return "AA";
  if (r >= 3) return "Large only";
  return "Fail";
}
const token = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim().toUpperCase();

/* Each ground and the ink it carries. The swatch shows the ratio of that pair. */
const SWATCHES = [
  { name: "--color-ground", fg: "--color-on-ground", cls: "fx-on-ground" },
  { name: "--color-surface", fg: "--color-ink", cls: "" },
  { name: "--color-tone-1", fg: "--color-ink", cls: "fx-tone-1" },
  { name: "--color-tone-2", fg: "--color-ink", cls: "fx-tone-2" },
  { name: "--color-tone-3", fg: "--color-ink", cls: "fx-tone-3" },
  { name: "--color-tone-4", fg: "--color-ink", cls: "fx-tone-4" },
  { name: "--color-accent", fg: "--color-on-accent", cls: "fx-accent" },
];

const MATRIX_BG = [
  { name: "--color-ground", label: "ground", cls: "fx-on-ground" },
  { name: "--color-surface", label: "surface", cls: "" },
  { name: "--color-tone-1", label: "tone-1", cls: "fx-tone-1" },
  { name: "--color-tone-2", label: "tone-2", cls: "fx-tone-2" },
  { name: "--color-tone-3", label: "tone-3", cls: "fx-tone-3" },
  { name: "--color-tone-4", label: "tone-4", cls: "fx-tone-4" },
  { name: "--color-accent", label: "accent", cls: "fx-accent" },
];
/* `on` lists the grounds a text colour is ALLOWED on (DESIGN.next.md › Usage
   rules). Every other cell is struck through even when its ratio would pass:
   the rule is about where a colour belongs, not only whether it clears AA. */
const MATRIX_FG = [
  { name: "--color-ink", label: "ink", on: ["surface", "tone-1", "tone-2", "tone-3", "tone-4"] },
  { name: "--color-ink-muted", label: "ink-muted", on: ["surface", "tone-1"] },
  { name: "--color-on-ground", label: "on-ground", on: ["ground"] },
  { name: "--color-on-ground-muted", label: "on-ground-muted", on: ["ground"] },
  { name: "--color-accent", label: "accent", on: ["ground"] },
  { name: "--color-accent-text", label: "accent-text", on: ["surface"] },
  { name: "--color-on-accent", label: "on-accent", on: ["accent"] },
];

/* ── Type ─────────────────────────────────────────────────────────────────── */

const TYPE_STEPS = [
  { token: "--type-display", cls: "fx-display", face: "Doto 800", sample: "Federico Landorno" },
  { token: "--type-title", cls: "fx-title", face: "Doto 700", sample: "From 45 to 3 min to issue a policy" },
  { token: "--type-label", cls: "fx-label fx-caps", face: "Doto 700, caps", sample: "Case studies · About · Resume" },
  { token: "--type-h2", cls: "fx-h2", face: "Atkinson 600", sample: "Finding the real problem" },
  { token: "--type-h3", cls: "fx-h3", face: "Atkinson 600", sample: "A table component that took a month to build" },
  { token: "--type-body", cls: "fx-body", face: "Atkinson 400", sample: "Developers received screens. They interpreted them as best they could, made their own calls on spacing, sizing, and behavior, and shipped." },
  { token: "--type-ui", cls: "fx-ui", face: "Atkinson 500", sample: "Read the case study" },
  { token: "--type-small", cls: "fx-small", face: "Atkinson 400", sample: "Net4Market · Design system for a B2B SaaS multi-app suite" },
];

const SPACES = ["1", "2", "3", "4", "6", "8", "10", "12", "16", "24"];

/* Characters per rendered line, read off the layout: one Range per character,
   grouped by the top of its box. Trailing spaces are not counted. */
function lineLengths(el: Element): number[] {
  const tops = new Map<number, number>();
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const text = node.textContent ?? "";
    for (let i = 0; i < text.length; i++) {
      if (/\s/.test(text[i])) continue;
      range.setStart(node, i);
      range.setEnd(node, i + 1);
      const rect = range.getBoundingClientRect();
      if (!rect.height) continue;
      const top = Math.round(rect.top);
      const key = [...tops.keys()].find((k) => Math.abs(k - top) < rect.height / 2) ?? top;
      tops.set(key, (tops.get(key) ?? 0) + 1);
    }
  }
  return [...tops.entries()].sort((a, b) => a[0] - b[0]).map(([, n]) => n);
}

function charsPerLine(p: HTMLElement): number[] {
  /* Glyph counts exclude spaces; the measure convention counts them. Recover
     them from the paragraph's own word/space ratio. */
  const text = p.textContent ?? "";
  const glyphs = text.replace(/\s/g, "").length || 1;
  const all = text.replace(/\s+/g, " ").trim().length;
  const k = all / glyphs;
  const lines = lineLengths(p);
  return lines.slice(0, -1).map((n) => Math.round(n * k)); // the last line is the rag
}

const px = (el: Element | null) => (el ? Math.round(parseFloat(getComputedStyle(el).fontSize) * 10) / 10 : 0);

/* ── Icons, drawn: currentColor, so the block decides the colour ─────────── */

const Arrow = ({ cls = "fx-icon" }: { cls?: string }) => (
  <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M3.5 12h17" />
    <path d="M14 5.5 20.5 12 14 18.5" />
  </svg>
);
const Home = () => (
  <svg className="fx-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M3.5 10.5 12 3l8.5 7.5V20a1 1 0 0 1-1 1H15v-6h-6v6H4.5a1 1 0 0 1-1-1z" />
  </svg>
);
const Sun = () => (
  <svg className="fx-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

/* ── Page ─────────────────────────────────────────────────────────────────── */

type Measures = {
  colors: Record<string, string>;
  sizes: Record<string, number>;
  nameFits: boolean;
  nameSize: number;
  nameRoom: number;
  cpl: number[];
  measurePx: number;
  measureToken: number;
  viewport: number;
};

export default function Foundations() {
  const [theme, setThemeState] = useState<Theme>(getTheme);
  const [radius, setRadius] = useState<"8" | "6">("8");
  const [animOn, setAnimOn] = useState(true);
  const [m, setM] = useState<Measures | null>(null);

  const sizeRefs = useRef<Record<string, HTMLElement | null>>({});
  const nameRef = useRef<HTMLHeadingElement>(null);
  const readRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    const colors: Record<string, string> = {};
    for (const s of [...SWATCHES.map((x) => x.name), ...SWATCHES.map((x) => x.fg), ...MATRIX_FG.map((x) => x.name)]) {
      colors[s] = token(s);
    }
    const sizes: Record<string, number> = {};
    for (const t of TYPE_STEPS) sizes[t.token] = px(sizeRefs.current[t.token]);

    /* "Federico Landorno" on one line in its half-width block? */
    let nameFits = false;
    let nameSize = 0;
    let nameRoom = 0;
    const name = nameRef.current;
    if (name) {
      nameFits = lineLengths(name).length === 1;
      nameSize = px(name);
      const block = name.parentElement!;
      const cs = getComputedStyle(block);
      const inner = block.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      nameRoom = Math.floor((inner / (0.6 * 17)) * 10) / 10;
    }

    const paras = readRef.current ? [...readRef.current.querySelectorAll<HTMLElement>(".fx-body")] : [];
    const cpl = paras.flatMap(charsPerLine);
    const measurePx = paras[0] ? Math.round(paras[0].getBoundingClientRect().width) : 0;

    const rootPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const measureToken = parseFloat(token("--measure")) * rootPx;

    setM({ colors, sizes, nameFits, nameSize, nameRoom, cpl, measurePx, measureToken, viewport: window.innerWidth });
  }, []);

  /* Re-measure whenever layout or theme can have changed: once fonts land,
     on resize, and when the system scheme flips under a "system" choice. */
  useEffect(() => {
    const raf = requestAnimationFrame(measure);
    document.fonts?.ready.then(() => requestAnimationFrame(measure));
    const ro = new ResizeObserver(() => requestAnimationFrame(measure));
    ro.observe(document.documentElement);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", measure);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mq.removeEventListener("change", measure);
    };
  }, [measure, theme, radius]);

  /* Restore the title on the way out: the home page does not set its own, so
     without this it would keep the specimen's after a client-side navigation. */
  useEffect(() => {
    const previous = document.title;
    document.title = "Foundations — v2 specimen";
    return () => {
      document.title = previous;
    };
  }, []);

  const choose = (t: Theme) => {
    setTheme(t);
    setThemeState(t);
  };

  const c = m?.colors ?? {};
  const cpl = m?.cpl ?? [];
  const cplMin = cpl.length ? Math.min(...cpl) : 0;
  const cplMax = cpl.length ? Math.max(...cpl) : 0;
  const cplAvg = cpl.length ? Math.round(cpl.reduce((a, b) => a + b, 0) / cpl.length) : 0;
  const cplOk = cpl.length > 0 && cplMin >= 60 && cplMax <= 80 && cplAvg >= 65 && cplAvg <= 75;
  /* The 65–75 band is judged only where the column actually reaches
     --measure; on a phone the block is narrower and fewer is expected. */
  const atMeasure = !!m && m.measurePx >= m.measureToken - 2;
  const cplLabel = !atMeasure ? "narrower than the measure (expected)" : cplOk ? "inside 65–75" : "outside 65–75";

  return (
    <div className="fx">
      {/* ── Header and controls ─────────────────────────────────────────── */}
      <div className="fx-grid" data-radius={radius}>
        <div className="fx-block fx-on-ground fx-s4 is-md is-start">
          <h1 className="fx-display">Foundations</h1>
        </div>
        <div className="fx-block fx-s2 is-col">
          <span className="fx-label fx-caps">Theme</span>
          <div className="fx-seg" role="group" aria-label="Theme">
            {(["light", "dark", "system"] as Theme[]).map((t) => (
              <button key={t} type="button" aria-pressed={theme === t} onClick={() => choose(t)}>
                {t[0].toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          <span className="fx-small fx-muted">On screen: {resolvedTheme(theme)}</span>
        </div>
        <div className="fx-block fx-s2 is-col">
          <span className="fx-label fx-caps">Radius</span>
          <div className="fx-seg" role="group" aria-label="Block radius">
            {(["8", "6"] as const).map((r) => (
              <button key={r} type="button" aria-pressed={radius === r} onClick={() => setRadius(r)}>
                {r}px
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Test mosaic ─────────────────────────────────────────────────── */}
      <section className="fx-grid" data-radius={radius} aria-labelledby="fx-mosaic">
        <h2 id="fx-mosaic" className="fx-block fx-tone-1 fx-s8 fx-label fx-caps is-start is-head">Mosaic</h2>

        <div className="fx-block fx-s1"><Home /><span className="sr-only">Home</span></div>
        <div className="fx-block fx-s2 fx-label fx-caps">Case studies</div>
        <div className="fx-block fx-s1 fx-label fx-caps">About</div>
        <div className="fx-block fx-s3" aria-hidden="true" />
        <div className="fx-block fx-s1"><Sun /><span className="sr-only">Theme</span></div>

        <div className="fx-block fx-tone-2 fx-s4 is-md is-tall">
          <h3 ref={nameRef} className="fx-display">Federico Landorno</h3>
        </div>
        <div className="fx-block fx-s1" aria-hidden="true" />
        <div className="fx-block fx-s2 is-tall">
          <label className="fx-label fx-caps" htmlFor="fx-anim">Animation</label>
          <button id="fx-anim" type="button" role="switch" aria-checked={animOn} className="fx-switch" onClick={() => setAnimOn((v) => !v)} />
        </div>
        <div className="fx-block fx-s1 is-tall">
          <input type="checkbox" className="fx-check" aria-label="Sample checkbox" defaultChecked />
        </div>

        <div className="fx-block fx-s1" aria-hidden="true" />
        <div className="fx-block fx-on-ground fx-s4 is-md is-tall fx-display fx-caps">Product designer</div>
        <div className="fx-block fx-s2 fx-label fx-caps is-tall">Language</div>
        <div className="fx-block fx-tone-3 fx-s1 is-tall" aria-hidden="true" />

        <div className="fx-block fx-tone-1 fx-s3 is-md is-start fx-label">600+ disconnected files to one source of truth</div>
        <div className="fx-block fx-tone-3 fx-s1" aria-hidden="true" />
        <div className="fx-block fx-tone-4 fx-s1" aria-hidden="true" />
        <a href="#/foundations" className="fx-block fx-on-ground fx-s2 fx-title" onClick={(e) => e.preventDefault()}>Read more</a>
        <a href="#/foundations" className="fx-block fx-accent fx-s1" aria-label="Read the Net4Market case study" onClick={(e) => e.preventDefault()}>
          <Arrow cls="fx-icon fx-icon-lg" />
        </a>

        <div className="fx-block fx-s8 is-col is-md">
          <span className="fx-label fx-caps">Buttons</span>
          <div className="fx-seg">
            <button type="button" className="fx-btn">Default</button>
            <button type="button" className="fx-btn is-hover" tabIndex={-1}>Hover</button>
            <button type="button" className="fx-btn is-active" tabIndex={-1}>Active</button>
            <button type="button" className="fx-btn" disabled>Disabled</button>
            <button type="button" className="fx-btn is-focus" tabIndex={-1}>Focus</button>
          </div>
          <span className="fx-small fx-muted">Black on orange in every state. The first button is live; the others are frozen states.</span>
        </div>

        <div className="fx-block fx-s1 fx-tone-1" aria-hidden="true" />
        <div ref={readRef} className="fx-block fx-s6 fx-read">
          <h3 className="fx-h2">Context &amp; Challenge</h3>
          <p className="fx-body">
            When I joined the company a year ago, the design team was three people: one junior, one
            senior, and me. On paper, the workflow existed. In practice, it was broken. Nobody had
            called it out yet.
          </p>
          <p className="fx-body">
            The process went like this: pick up a user story, create a file, design the screens, put
            together a presentation explaining the solution, leave it for the product owner and team
            lead to review without ever presenting it, incorporate feedback through written iteration,
            hand it off to developers. Then stop. No one checked whether what shipped matched what was
            designed.
          </p>
          <p className="fx-small fx-muted fx-meta fx-num">
            Measure {m?.measurePx ?? "–"}px · characters per line {cplMin}–{cplMax}, average {cplAvg} ·{" "}
            <span className={`fx-status ${cplOk || !atMeasure ? "" : "is-fail"}`}>{cplLabel}</span>
          </p>
        </div>
        <div className="fx-block fx-s1 fx-tone-1" aria-hidden="true" />

        <div className="fx-block fx-s8 is-start is-col fx-small fx-num">
          <span>
            Name fit at {m?.viewport ?? "–"}px: {m?.nameSize ?? "–"}px set, {m?.nameRoom ?? "–"}px is the one-line ceiling ·{" "}
            <span className={`fx-status ${m?.nameFits ? "" : "is-fail"}`}>{m?.nameFits ? "one line" : "wraps"}</span>
          </span>
        </div>
      </section>

      {/* ── Palette ─────────────────────────────────────────────────────── */}
      <section className="fx-grid" data-radius={radius} aria-labelledby="fx-palette">
        <h2 id="fx-palette" className="fx-block fx-tone-1 fx-s8 fx-label fx-caps is-start is-head">Palette</h2>
        {SWATCHES.map((s) => {
          const r = ratio(c[s.fg] ?? "", c[s.name] ?? "");
          return (
            <div key={s.name} className={`fx-block fx-swatch is-col is-tall ${s.cls} ${s.name === "--color-ground" ? "fx-s2" : "fx-s1"}`}>
              <code>{s.name.replace("--color-", "")}</code>
              <span className="fx-title fx-num">{Number.isFinite(r) ? r.toFixed(2) : "–"}</span>
              <span className="fx-small">
                <code>{c[s.name]}</code> · <span className="fx-grade">{Number.isFinite(r) ? grade(r) : "–"}</span>
              </span>
            </div>
          );
        })}
      </section>

      {/* ── Contrast matrix ─────────────────────────────────────────────── */}
      <section className="fx-grid" data-radius={radius} aria-labelledby="fx-matrix">
        <h2 id="fx-matrix" className="fx-block fx-tone-1 fx-s8 fx-label fx-caps is-start is-head">Contrast</h2>
        <div className="fx-block fx-s8 fx-matrix-wrap" tabIndex={0} role="region" aria-label="Contrast matrix, scrolls sideways">
          <table className="fx-matrix fx-num">
            <thead>
              <tr>
                <th scope="col">text ↓ / ground →</th>
                {MATRIX_BG.map((b) => <th key={b.name} scope="col">{b.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {MATRIX_FG.map((f) => (
                <tr key={f.name}>
                  <th scope="row">{f.label}</th>
                  {MATRIX_BG.map((b) => {
                    const r = ratio(c[f.name] ?? "", c[b.name] ?? "");
                    const allowed = f.on.includes(b.label);
                    return (
                      <td key={b.name} className={`fx-bg-${b.label} fx-fg-${f.label} ${allowed ? "" : "is-banned"}`}>
                        {!allowed && <span className="sr-only">not allowed: </span>}
                        <b>{Number.isFinite(r) ? r.toFixed(2) : "–"}</b>
                        {Number.isFinite(r) ? grade(r) : ""}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="fx-block fx-s8 is-start fx-small">
          Struck cells are pairs the usage rules forbid, whatever their ratio. Doto needs 7:1: ink on surface, tone-1 and tone-2; white on the ground; orange on the ground at display size only.
        </div>
      </section>

      {/* ── Type ────────────────────────────────────────────────────────── */}
      <section className="fx-grid" data-radius={radius} aria-labelledby="fx-type">
        <h2 id="fx-type" className="fx-block fx-tone-1 fx-s8 fx-label fx-caps is-start is-head">Type</h2>
        {TYPE_STEPS.map((t) => (
          <div key={t.token} className="fx-block fx-s8 fx-type-row is-md">
            <span className="fx-small fx-meta fx-num">
              <code className="fx-code">{t.token}</code> · {t.face} · {m?.sizes[t.token] ?? "–"}px
            </span>
            <span ref={(el) => { sizeRefs.current[t.token] = el; }} className={t.cls}>{t.sample}</span>
          </div>
        ))}
        <div className="fx-block fx-s8 fx-type-row is-md">
          <span className="fx-small fx-meta">Doto weights at the label size — the floor is 600 below 2rem</span>
          <span className="fx-label fx-caps fx-w400">400 · Responsiveness</span>
          <span className="fx-label fx-caps fx-w600">600 · Responsiveness</span>
          <span className="fx-label fx-caps fx-w700">700 · Responsiveness</span>
          <span className="fx-label fx-caps fx-w800">800 · Responsiveness</span>
        </div>
      </section>

      {/* ── Space ───────────────────────────────────────────────────────── */}
      <section className="fx-grid" data-radius={radius} aria-labelledby="fx-space">
        <h2 id="fx-space" className="fx-block fx-tone-1 fx-s8 fx-label fx-caps is-start is-head">Space</h2>
        <div className="fx-block fx-s4 is-md">
          <div className="fx-bars fx-small fx-num">
            {SPACES.map((s) => (
              <div key={s} className="fx-bar" data-s={s}>
                <span>--space-{s} · {Number(s) * 4}px</span>
                <span />
              </div>
            ))}
          </div>
        </div>
        <div className="fx-block fx-s4 is-start is-col fx-small">
          <span>The gap is the unit: <b>0.25rem</b>, fixed at every width, the only space between blocks.</span>
          <span>Padding inside a block is at least four gaps — compact outside, airy inside.</span>
        </div>
        <div className="fx-block fx-pad-demo is-sm fx-s2 is-tall"><span className="fx-small">pad-sm · 16</span></div>
        <div className="fx-block fx-pad-demo is-md fx-s3 is-tall"><span className="fx-small">pad-md · 24</span></div>
        <div className="fx-block fx-pad-demo is-lg fx-s3 is-tall"><span className="fx-small">pad-lg · 24 → 40</span></div>
      </section>
    </div>
  );
}

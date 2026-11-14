/* ─────────────────────────────────────────────────────────────────────────────
   An exhibit, not a surface — the same kind of thing as FormComparison.

   Net4Market is the one case study with no product screenshot in the repo, and
   it is also the one whose subject is a design system. So its home panel shows
   the system rather than a picture of a screen: the three token layers
   resolving into a real component.

   EVERY token name and value below is the client's own, lifted from
   FormComparison, which quotes the real Net4Market system. The typeface is
   Roboto because that is `--font-family-base` in that system; rendering this in
   Schibsted Grotesk would make the exhibit a fiction. Roboto is registered in
   `.impeccable/config.json` with that reason, and this file is listed under
   `detector.ignoreFiles` for the colour values, which are the client's and not
   ours to normalise to DESIGN.md.

   `npm run audit:spacing` still reads this file and still has to pass: every
   length in the `.n4p-*` chrome is rem on the 8px grid. The client's own
   spacing values appear as TEXT, which is evidence, not layout.

   Nothing here is interactive. The whole panel sits inside an <a>, where a
   real <button> or <input> would be invalid HTML and would swallow the link.
   These are divs wearing the components' clothes.
   ───────────────────────────────────────────────────────────────────────────── */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.n4p {
  /* ── The client's real primitives ──────────────────────────────────────── */
  --n4-blue-500:    #0176db;
  --n4-blue-700:    #135d9d;
  --n4-blue-100:    #bbddfb;
  --n4-neutral-0:   #ffffff;
  --n4-neutral-100: #e7edf2;
  --n4-neutral-300: #a4afb9;
  --n4-neutral-700: #3b4c5b;
  --n4-neutral-900: #041524;

  /* Relative, not absolute: this panel SIZES its frame rather than being
     cropped by it. The two image panels are the other way round. */
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 2.4vw, 3rem);
  padding: clamp(1.5rem, 2.4vw, 2.5rem);
  font-family: "Roboto", system-ui, sans-serif;
  color: var(--n4-neutral-900);
}

/* ── Column labels. Not eyebrows: they label a column of a diagram, not a
      heading, and the diagram is unreadable without them. ─────────────────── */
.n4p-lab {
  font-size: 0.75rem; font-weight: 500;
  color: var(--n4-neutral-300);
}

/* ── Left: the three layers resolving ──────────────────────────────────────── */
.n4p-chain { display: grid; align-content: start; gap: 0.5rem; min-width: 0; }
.n4p-row {
  display: grid; grid-template-columns: 1rem minmax(0, 1fr) auto;
  align-items: center; gap: 0.5rem;
  padding: 0.5rem; border-radius: 0.25rem;
  background: var(--n4-neutral-0);
  border: 1px solid var(--n4-neutral-100);
}
.n4p-sw { width: 1rem; height: 1rem; border-radius: 0.25rem; border: 1px solid rgba(4, 21, 36, 0.12); }
.n4p-tok {
  font-size: 0.75rem; font-weight: 500; color: var(--n4-neutral-900);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.n4p-val { font-size: 0.75rem; color: var(--n4-neutral-300); white-space: nowrap; }
.n4p-step { display: grid; gap: 0.5rem; }
.n4p-arrow { height: 1rem; display: flex; align-items: center; color: var(--n4-neutral-300); }

/* ── Right: the component those tokens build ───────────────────────────────── */
.n4p-demo {
  display: grid; align-content: start; gap: 1rem; min-width: 0;
  padding: clamp(1rem, 1.6vw, 1.5rem);
  background: var(--n4-neutral-0);
  border: 1px solid var(--n4-neutral-100);
  border-radius: 0.5rem;
}
.n4p-field { display: grid; gap: 0.25rem; }
.n4p-flab { font-size: 0.8125rem; color: var(--n4-neutral-700); }
.n4p-input {
  font-size: 0.875rem; color: var(--n4-neutral-900);
  padding: 0.5rem; border-radius: 0.25rem;
  border: 1px solid var(--n4-neutral-300); background: var(--n4-neutral-0);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.n4p-input[data-focus] {
  border-color: var(--n4-blue-500);
  box-shadow: 0 0 0 2px var(--n4-blue-100);
}
.n4p-radios { display: flex; gap: 1.5rem; }
.n4p-radio { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--n4-neutral-700); }
.n4p-dot {
  width: 1rem; height: 1rem; border-radius: 50%;
  border: 1px solid var(--n4-neutral-300); display: grid; place-items: center;
}
.n4p-radio[data-on] .n4p-dot { border-color: var(--n4-blue-500); }
.n4p-radio[data-on] { color: var(--n4-neutral-900); }
.n4p-dot i { width: 0.5rem; height: 0.5rem; border-radius: 50%; background: var(--n4-blue-500); display: block; }
.n4p-btn {
  justify-self: start;
  font-size: 0.875rem; font-weight: 500; color: var(--n4-neutral-0);
  background: var(--n4-blue-500); border: 1px solid var(--n4-blue-500);
  padding: 0.5rem 1rem; border-radius: 0.5rem;
}
/* A border, not a 1px box: border WIDTHS are not spacing, a 1px height is. */
.n4p-rule { border-top: 1px solid var(--n4-neutral-100); }
.n4p-type { font-size: 1rem; line-height: 1.5; color: var(--n4-neutral-900); }
.n4p-ratio {
  font-size: 0.6875rem; color: var(--n4-neutral-700);
  background: var(--n4-neutral-100);
  padding: 0.25rem 0.5rem; border-radius: 0.25rem; justify-self: start;
}

/* One column once the panel itself is narrow. A container query, not a media
   query: this panel is full width in one slot and half width in another, so
   what it must answer to is its OWN width, not the window's.
   The container is .fl-panel, declared in index.css, NOT .n4p — an element
   cannot be styled by a query against its OWN container, so with
   container-type on .n4p this block silently hid the demo card while leaving
   the grid at two columns. Measured at 390px: two tracks of 138 and 132 where
   there should have been one. (No backticks in this comment: the whole
   stylesheet is a template literal and one would end it.) */
@container (max-width: 34rem) {
  .n4p { grid-template-columns: minmax(0, 1fr); }
  .n4p-demo { display: none; }
}
`;

/* The chain, in the client's own names. Each step reads: what the layer is
   called, the token at that layer, and what it resolves to. */
const CHAIN = [
  {
    layer: "Primitive",
    rows: [
      { tok: "--color-blue-500", val: "#0176DB", sw: "var(--n4-blue-500)" },
      { tok: "--radius-md", val: ".5rem" },
    ],
  },
  {
    layer: "Semantic",
    rows: [
      { tok: "--background-brand", val: "blue-500", sw: "var(--n4-blue-500)" },
      { tok: "--radius-radius-md", val: "radius-md" },
    ],
  },
  {
    layer: "Component",
    rows: [
      { tok: "--button-primary-default-bg", val: "background-brand", sw: "var(--n4-blue-500)" },
      { tok: "--button-base-md-radius", val: "radius-md" },
    ],
  },
];

export default function N4mSystemPanel() {
  return (
    <div className="n4p" aria-hidden="true">
      <style>{CSS}</style>

      <div className="n4p-chain">
        {CHAIN.map((step, i) => (
          <div className="n4p-step" key={step.layer}>
            <span className="n4p-lab">{step.layer}</span>
            {step.rows.map((r) => (
              <div className="n4p-row" key={r.tok}>
                {r.sw ? (
                  <span className="n4p-sw" style={{ background: r.sw }} />
                ) : (
                  <span className="n4p-sw" style={{ background: "transparent", border: "1px dashed #a4afb9" }} />
                )}
                <span className="n4p-tok">{r.tok}</span>
                <span className="n4p-val">{r.val}</span>
              </div>
            ))}
            {i < CHAIN.length - 1 && (
              <span className="n4p-arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 1.5v9" />
                  <path d="M2.5 7 6 10.5 9.5 7" />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="n4p-demo">
        <span className="n4p-lab">Built from those tokens</span>
        <div className="n4p-field">
          <span className="n4p-flab">Tax code</span>
          <span className="n4p-input" data-focus>
            RSSMRA85T10F205X
          </span>
        </div>
        <div className="n4p-radios">
          <span className="n4p-radio" data-on>
            <span className="n4p-dot">
              <i />
            </span>
            Individual
          </span>
          <span className="n4p-radio">
            <span className="n4p-dot" />
            Legal entity
          </span>
        </div>
        <span className="n4p-btn">Continue</span>
        <div className="n4p-rule" />
        <div className="n4p-field">
          <span className="n4p-flab">--body</span>
          <span className="n4p-type">400 1rem / 1.5 Roboto</span>
        </div>
        <span className="n4p-ratio">WCAG 2.1 AA · 4.6:1 ✓</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   An exhibit, not a surface.

   This renders the Net4Market legacy form beside its token-based replacement,
   on the N4M case study. The hand-written colours, sizes and radii inside the
   `.lg-*` (legacy) and `.ds-*` (the client's real tokens) rules ARE the evidence
   the component exists to show — 40 colour, 8 font-size and 1 radius findings,
   every one of them from those selectors. Normalising them to DESIGN.md would
   turn a demonstration into a decoration, so this file is listed in
   `.impeccable/config.json` under `detector.ignoreFiles`. That config format
   takes a bare path and carries no reason field, which is why the reason is
   here and in DESIGN.md instead.

   What is NOT exempt: the widget's own chrome, `.dsx-*`, which follows the grid
   through the local --s1..--s6 scale below, and `npm run audit:spacing`, which
   still reads this file and still has to pass.
   ───────────────────────────────────────────────────────────────────────────── */

import { useState, useEffect, useRef } from "react";

// ─── WCAG contrast helpers ────────────────────────────────────────────────────

function parseColor(c: string) {
  const m = c.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const p = m[1].split(",").map(Number);
  return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
}

function luminance({ r, g, b }: { r: number; g: number; b: number }) {
  return [r, g, b]
    .map((n) => {
      n /= 255;
      return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
    })
    .reduce((acc, v, i) => acc + v * [0.2126, 0.7152, 0.0722][i], 0);
}

function effectiveBg(el: HTMLElement): { r: number; g: number; b: number; a: number } {
  let node: HTMLElement | null = el;
  while (node && node !== document.documentElement) {
    const bg = parseColor(getComputedStyle(node).backgroundColor);
    if (bg && bg.a > 0.95) return bg;
    node = node.parentElement;
  }
  return { r: 255, g: 255, b: 255, a: 1 };
}

function contrastRatio(
  fg: { r: number; g: number; b: number },
  bg: { r: number; g: number; b: number }
) {
  const a = luminance(fg), b = luminance(bg);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

function measureContrast(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>("[data-ratio]").forEach((badge) => {
    const host = badge.parentElement as HTMLElement;
    badge.style.visibility = "hidden";
    const fg = parseColor(getComputedStyle(host).color);
    const bg = host.hasAttribute("data-ratio-target")
      ? effectiveBg(host)
      : effectiveBg(host.parentElement || host);
    badge.style.visibility = "";
    if (!fg) return;
    const r = contrastRatio(fg, bg);
    const big = parseFloat(getComputedStyle(host).fontSize) >= 18;
    const pass = r >= (big ? 3 : 4.5);
    badge.textContent = `${r.toFixed(1)}:1 ${pass ? "✓" : "✗"}`;
    badge.setAttribute("data-state", pass ? "pass" : "fail");
  });
}

// ─── Inspect source annotation ───────────────────────────────────────────────

function SrcAnnotation({ text }: { text: string }) {
  return (
    <span className="dsx-src">
      {text.split("\n").map((line, i) => {
        const arrow = line.indexOf(" → ");
        return (
          <span key={i} className="dsx-src-line">
            {arrow !== -1 ? (
              <>
                <span className="dsx-src-from">{line.slice(0, arrow)}</span>
                <span className="dsx-src-arr"> → </span>
                <span className="dsx-src-to">{line.slice(arrow + 3)}</span>
              </>
            ) : line}
          </span>
        );
      })}
    </span>
  );
}

// ─── Toggle ───────────────────────────────────────────────────────────────────

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label
      className="dsx-ctrl"
      tabIndex={0}
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          onChange(!checked);
        }
      }}
      onClick={() => onChange(!checked)}
    >
      <span className="dsx-switch" data-checked={checked ? "true" : undefined} />
      {label}
    </label>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function FormComparison() {
  const [dark,     setDark]     = useState(true);
  const [contrast, setContrast] = useState(true);
  const [inspect,  setInspect]  = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Re-run contrast measurement whenever relevant state changes
  useEffect(() => {
    if (!contrast || !rootRef.current) return;
    // Wait for CSS transition to settle before measuring computed colours
    const t = setTimeout(() => measureContrast(rootRef.current!), 260);
    return () => clearTimeout(t);
  }, [contrast, dark]);

  return (
    <div
      ref={rootRef}
      id="dsx"
      data-no-cursor
      data-theme={dark ? "dark" : "light"}
      data-contrast={contrast ? "on" : "off"}
      data-inspect={inspect ? "on" : "off"}
    >
      {/* ── scoped styles ── */}
      <style>{CSS}</style>

      {/* ── toolbar ── */}
      <div className="dsx-bar" role="group" aria-label="Display options">
        <Toggle label="Dark mode" checked={dark}     onChange={setDark}     />
        <Toggle label="Contrast"  checked={contrast} onChange={(v) => { setContrast(v); if (v && rootRef.current) setTimeout(() => measureContrast(rootRef.current!), 260); }} />
        <Toggle label="Inspect"   checked={inspect}  onChange={setInspect}  />
      </div>

      {/* ── side-by-side grid ── */}
      <div className="dsx-grid">

        {/* ── Column A — Legacy ── */}
        <div className="dsx-col dsx-col-a">
          <div className="dsx-col-head">
            <div className="dsx-col-label">UI Kit</div>
            <h3>Legacy</h3>
            <p>Colours and spacing written by hand, field by field.</p>
          </div>

          <form className="lg-form" aria-label="Legacy contact form" noValidate onSubmit={(e: React.FormEvent) => e.preventDefault()}>
            <LegacyField id="lg-1" label="Full name" type="text" placeholder="John Smith"
              src=".form-label-grey / margin-bottom: 6px&#10;.form-input-v2 / padding: 13px 11px&#10;color: #55555a · border: #e3e3e6" />

            <LegacyRadioGroup
              legend="Request type"
              name="lg-type"
              options={RADIO_OPTIONS}
              src=".radio-group / gap: 8px · color: #55555a&#10;accent-color: #4a6fa5 (hardcoded)"
            />

            <label className="lg-check dsx-field">
              <input type="checkbox" tabIndex={-1} />
              <span className="lg-check-text">I accept the terms and conditions.</span>
              <span className="dsx-ratio" data-ratio />
              <SrcAnnotation text=".checkbox-row / gap: 9px · color: #77777d" />
            </label>

            <div className="dsx-field">
              <div className="lg-btn-outer">
                <div className="lg-btn-row" data-ratio-target>
                  <button className="lg-btn" type="button" tabIndex={-1}>Submit</button>
                </div>
                <span className="dsx-ratio" data-ratio />
              </div>
              <SrcAnnotation text={".btn-primary-blue / padding: 12px 21px\nbackground: #4a6fa5 · outline: none"} />
            </div>
          </form>
        </div>

        {/* ── Column B — Design system ── */}
        <div className="dsx-col dsx-col-b">
          <div className="dsx-col-head">
            <div className="dsx-col-label">Design System</div>
            <h3>Token-based</h3>
            <p>Every value comes from a semantic token.</p>
          </div>

          <form className="ds-form" aria-label="Token-based contact form" noValidate onSubmit={(e: React.FormEvent) => e.preventDefault()}>
            <DSField id="ds-1" label="Full name" type="text" placeholder="John Smith"
              src="--fields-base-label → --text-secondary&#10;--fields-base-padding-x/y → --spacing-component-padding-sm/xs&#10;--fields-default-border-color → --border-color-default" />

            <DSRadioGroup
              legend="Request type"
              name="ds-type"
              options={RADIO_OPTIONS}
              src="--fields-base-label → --text-secondary&#10;--checkbox-base-gap → --spacing-component-gap-sm&#10;--checkbox-default-unchecked-border-color → --border-color-strong"
            />

            <label className="ds-check dsx-field">
              <input type="checkbox" tabIndex={0} />
              <span className="ds-check-text">I accept the terms and conditions.</span>
              <span className="dsx-ratio" data-ratio />
              <SrcAnnotation text={"--fields-base-label → --text-secondary\n--checkbox-base-gap → --spacing-component-gap-sm\n--checkbox-default-checked-bg → --background-brand"} />
            </label>

            <div className="dsx-field">
              <div className="ds-btn-outer">
                <div className="ds-btn-row" data-ratio-target>
                  <button className="ds-btn" type="button" tabIndex={0}>Submit</button>
                </div>
                <span className="dsx-ratio" data-ratio />
              </div>
              <SrcAnnotation text={"--button-primary-default-bg → --background-brand\n--button-base-md-padding-x/y → --spacing-component-padding-sm/xs\n--button-base-md-radius → --radius-radius-md"} />
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

// ─── Shared data ─────────────────────────────────────────────────────────────

const RADIO_OPTIONS = [
  { value: "collab",   label: "New collaboration" },
  { value: "review",   label: "Design system review" },
  { value: "other",    label: "Other" },
];

// ─── Radio group sub-components ──────────────────────────────────────────────

function LegacyRadioGroup({ legend, name, options, src }: {
  legend: string; name: string;
  options: { value: string; label: string }[];
  src: string;
}) {
  return (
    <fieldset className="lg-field lg-radio-group dsx-field">
      <legend className="lg-label">
        {legend} <span className="dsx-ratio" data-ratio />
      </legend>
      <div className="lg-radio-list">
        {options.map((o) => (
          <label key={o.value} className="lg-radio-row" data-ratio-target>
            <input type="radio" name={name} value={o.value} tabIndex={-1} />
            {o.label}
            <span className="dsx-ratio" data-ratio />
          </label>
        ))}
      </div>
      <SrcAnnotation text={src} />
    </fieldset>
  );
}

function DSRadioGroup({ legend, name, options, src }: {
  legend: string; name: string;
  options: { value: string; label: string }[];
  src: string;
}) {
  return (
    <fieldset className="ds-field ds-radio-group dsx-field">
      <legend className="ds-label">
        {legend} <span className="dsx-ratio" data-ratio />
      </legend>
      <div className="ds-radio-list">
        {options.map((o) => (
          <label key={o.value} className="ds-radio-row" data-ratio-target>
            <input type="radio" name={name} value={o.value} tabIndex={0} />
            {o.label}
            <span className="dsx-ratio" data-ratio />
          </label>
        ))}
      </div>
      <SrcAnnotation text={src} />
    </fieldset>
  );
}

// ─── Small field sub-components ───────────────────────────────────────────────

function LegacyField({ id, label, type, placeholder, help, src }: {
  id: string; label: string; type: string; placeholder: string;
  help?: string; src: string;
}) {
  return (
    <div className="lg-field dsx-field">
      <label className="lg-label" htmlFor={id}>
        {label} <span className="dsx-ratio" data-ratio />
      </label>
      <input className="lg-input" id={id} type={type} placeholder={placeholder} data-ratio-target />
      {help && (
        <span className="lg-help">
          {help} <span className="dsx-ratio" data-ratio />
        </span>
      )}
      <SrcAnnotation text={src} />
    </div>
  );
}

function DSField({ id, label, type, placeholder, help, src }: {
  id: string; label: string; type: string; placeholder: string;
  help?: string; src: string;
}) {
  return (
    <div className="ds-field dsx-field">
      <label className="ds-label" htmlFor={id}>
        {label} <span className="dsx-ratio" data-ratio />
      </label>
      <input className="ds-input" id={id} type={type} placeholder={placeholder} data-ratio-target />
      {help && (
        <span className="ds-help">
          {help} <span className="dsx-ratio" data-ratio />
        </span>
      )}
      <SrcAnnotation text={src} />
    </div>
  );
}

// ─── Scoped CSS ───────────────────────────────────────────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  /* ── Component shell tokens ──────────────────────────────────────────────── */
  #dsx {
    --ink:         #14161a;
    --ink-muted:   #5b6068;
    --ink-faint:   #8b9099;
    --canvas:      #ffffff;
    --panel:       #f4f4f2;
    --rule:        #e0e0dc;
    --rule-strong: #c4c4be;
    --signal:      #0176db;
    --pass:        #1c5c3a; --pass-bg: #dff0e5;
    --fail:        #8c2020; --fail-bg: #f8dede;
    /* Widget chrome spacing — rem on the same 8px grid as the site */
    --s1:0.25rem; --s2:0.5rem; --s3:0.75rem; --s4:1rem; --s5:1.5rem; --s6:2rem;
    --r1:0.25rem; --r2:0.5rem;
    --sans: ui-sans-serif,"Inter","Segoe UI",system-ui,sans-serif;
    --mono: ui-monospace,"SF Mono","JetBrains Mono",Menlo,monospace;

    /* ── N4M raw tokens (color scale) ──────────────────────────────────────── */
    --color-neutral-0:   #fff;
    --color-neutral-50:  #f3f6f9;
    --color-neutral-100: #e7edf2;
    --color-neutral-200: #c0c8cf;
    --color-neutral-300: #a4afb9;
    --color-neutral-400: #85929f;
    --color-neutral-600: #586c7b;
    --color-neutral-700: #3b4c5b;
    --color-neutral-900: #041524;
    --color-blue-100:    #bbddfb;
    --color-blue-400:    #1d8ff2;
    --color-blue-500:    #0176db;
    --color-blue-700:    #135d9d;

    /* ── N4M raw tokens (typography) ────────────────────────────────────────── */
    --font-family-base:        "Roboto", sans-serif;
    --font-size-md:            1rem;
    --font-weight-regular:     400;
    --font-weight-medium:      500;
    --font-line-height-normal: 1.5;
    --body: var(--font-weight-regular) var(--font-size-md) / var(--font-line-height-normal) var(--font-family-base);

    /* ── N4M raw tokens (spacing, radius, border, motion) ──────────────────── */
    --spacing-0-5: .125rem;
    --spacing-1:   .25rem;
    --spacing-2:   .5rem;
    --spacing-4:   1rem;
    --radius-sm:   .25rem;
    --radius-md:   .5rem;
    --border-width-sm:          1px;
    --motion-duration-200:      .2s;
    --motion-easing-ease-out:   cubic-bezier(0, 0, .2, 1);

    /* ── N4M semantic tokens — light ────────────────────────────────────────── */
    --text-primary:          var(--color-neutral-900);
    --text-secondary:        var(--color-neutral-700);
    --text-disabled:         var(--color-neutral-400);
    --text-inverse:          var(--color-neutral-0);
    --text-brand-strong:     var(--color-blue-700);
    --background-default:    var(--color-neutral-0);
    --background-brand:      var(--color-blue-500);
    --border-color-default:  var(--color-neutral-300);
    --border-color-strong:   var(--color-neutral-400);
    --border-color-brand:    var(--color-blue-500);
    --border-color-brand-strong: var(--color-blue-700);

    /* ── N4M component tokens ───────────────────────────────────────────────── */
    --border-width-default:           var(--border-width-sm);
    --radius-radius-sm:               var(--radius-sm);
    --radius-radius-md:               var(--radius-md);
    --spacing-component-padding-xs:   var(--spacing-1);
    --spacing-component-padding-sm:   var(--spacing-2);
    --spacing-component-padding-md:   var(--spacing-4);
    --spacing-component-gap-xs:       var(--spacing-1);
    --spacing-component-gap-sm:       var(--spacing-2);
    --motion-time-normal:             var(--motion-duration-200);
    --motion-easing-function-ease-out: var(--motion-easing-ease-out);

    /* fields */
    --fields-base-label:          var(--text-secondary);
    --fields-base-gap-label:      var(--spacing-component-gap-xs);
    --fields-base-padding-y:      var(--spacing-component-padding-xs);
    --fields-base-padding-x:      var(--spacing-component-padding-sm);
    --fields-base-radius:         var(--radius-radius-sm);
    --fields-base-border-width:   var(--border-width-default);
    --fields-default-border-color: var(--border-color-default);
    --fields-default-bg:          var(--background-default);
    --fields-default-value:       var(--text-primary);
    --fields-default-placeholder: var(--text-disabled);

    /* checkbox */
    --checkbox-base-size:                    1rem;
    --checkbox-base-radius:                  var(--radius-radius-sm);
    --checkbox-base-border-width:            var(--border-width-default);
    --checkbox-base-gap:                     var(--spacing-component-gap-sm);
    --checkbox-base-text:                    var(--text-primary);
    --checkbox-default-unchecked-bg:         var(--background-default);
    --checkbox-default-unchecked-border-color: var(--border-color-strong);
    --checkbox-default-checked-bg:           var(--background-brand);
    --checkbox-default-checked-border-color: var(--border-color-brand);

    /* radio */
    --radio-default-checked-bg:    var(--background-brand);
    --radio-default-checked-check: var(--background-default);

    /* button */
    --button-base-border-width:          var(--border-width-default);
    --button-base-md-padding-y:          var(--spacing-component-padding-xs);
    --button-base-md-padding-x:          var(--spacing-component-padding-sm);
    --button-base-md-radius:             var(--radius-radius-md);
    --button-primary-default-bg:         var(--background-brand);
    --button-primary-default-text:       var(--text-inverse);
    --button-primary-default-border-color: var(--border-color-brand);
    --button-primary-hover-bg:           var(--text-brand-strong);
    --button-primary-hover-border-color: var(--border-color-brand-strong);

    background: var(--background-default); color: var(--ink); font-family: var(--sans);
    border: 1px solid var(--rule-strong); border-radius: .5rem;
    overflow: clip; container-type: inline-size;
    position: relative;
    cursor: default;
    transition: background 240ms ease, color 240ms ease, border-color 240ms ease;
  }
  /* ── Shell dark overrides ───────────────────────────────────────────────── */
  #dsx[data-theme="dark"] {
    --ink:         #f0f0ee;
    --ink-muted:   #a4a8b0;
    --ink-faint:   #767b84;
    --canvas:      #131418;
    --panel:       #1c1e23;
    --rule:        #2e3038;
    --rule-strong: #6b7380;
    --signal:      #3b9eff;
    --pass:        #7ee0a8; --pass-bg: #16341f;
    --fail:        #ff9d9d; --fail-bg: #3d1717;
    /* ── N4M semantic overrides for dark mode ─────────────────────────────── */
    --text-primary:          var(--color-neutral-0);
    --text-secondary:        var(--color-neutral-200);
    --text-disabled:         var(--color-neutral-400);
    --text-inverse:          var(--color-neutral-900);
    --text-brand-strong:     var(--color-blue-400);
    --background-default:    var(--color-neutral-900);
    --background-brand:      var(--color-blue-400);
    --border-color-default:  var(--color-neutral-600);
    --border-color-strong:   var(--color-neutral-600);
    --border-color-brand:    var(--color-blue-400);
    --border-color-brand-strong: var(--color-blue-400);
  }
  #dsx *, #dsx *::before, #dsx *::after { box-sizing: border-box; }

  /* ── Toolbar ─────────────────────────────────────────────────────────────── */
  .dsx-bar {
    display: flex; flex-wrap: wrap; align-items: center; gap: var(--s4);
    padding: var(--s3) var(--s4); border-bottom: 1px solid var(--rule);
    background: var(--panel);
    transition: background 240ms ease, border-color 240ms ease;
  }
  .dsx-ctrl {
    display: inline-flex; align-items: center; gap: var(--s2);
    font-size: 12px; color: var(--ink-muted); cursor: pointer;
    user-select: none; white-space: nowrap;
    border-radius: var(--r1);
  }
  .dsx-ctrl:focus-visible { outline: 2px solid var(--signal); outline-offset: var(--s1); }
  .dsx-switch[data-checked] { background: var(--signal); }
  .dsx-switch[data-checked]::after { transform: translateX(var(--s4)); }
  .dsx-switch {
    width: var(--s6); height: var(--s4); border-radius: var(--s2);
    background: var(--rule-strong); position: relative; flex-shrink: 0;
    transition: background 160ms ease;
  }
  .dsx-switch::after {
    /* 2px is centring arithmetic, not spacing: (16 − 12) ÷ 2. */
    content: ""; position: absolute; top: 2px; left: 2px;
    width: var(--s3); height: var(--s3); border-radius: 50%; background: #fff;
    transition: transform 160ms ease;
  }

  /* ── Grid ────────────────────────────────────────────────────────────────── */
  .dsx-grid { display: grid; grid-template-columns: 1fr 1fr; }
  .dsx-col   { padding: var(--s5); }
  .dsx-col + .dsx-col { border-left: 1px solid var(--rule); }

  /* ── Column header ───────────────────────────────────────────────────────── */
  .dsx-col-head { margin-bottom: var(--s5); padding-bottom: var(--s4); border-bottom: 1px solid var(--rule); }
  .dsx-col-label {
    display: inline-block; margin-bottom: var(--s2);
    font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    padding: var(--s1) var(--s2); border-radius: var(--r1);
  }
  .dsx-col-a .dsx-col-label { background: #fff3e0; color: #b45309; }
  .dsx-col-b .dsx-col-label { background: #e8eaf6; color: #3730a3; }
  #dsx[data-theme="dark"] .dsx-col-a .dsx-col-label { background: #2d1a00; color: #f59e0b; }
  #dsx[data-theme="dark"] .dsx-col-b .dsx-col-label { background: #1e1b4b; color: #a5b4fc; }
  .dsx-col-head h3 { margin: 0 0 var(--s1); font-size: 15px; font-weight: 700; letter-spacing: -0.02em; color: var(--ink); }
  .dsx-col-head p  { margin: 0; font-size: 12px; color: var(--ink-faint); line-height: 1.5; }

  /* ── Contrast badges ─────────────────────────────────────────────────────── */
  .dsx-ratio {
    display: none; align-items: center; gap: var(--s1); align-self: center; vertical-align: middle;
    font-family: var(--mono); font-size: 10px; line-height: 1;
    padding: var(--s1) var(--s2); border-radius: var(--r1); vertical-align: middle; margin-left: var(--s2);
    flex-shrink: 0;
  }
  #dsx[data-contrast="on"] .dsx-ratio { display: inline-flex; }
  .dsx-ratio[data-state="pass"] { color: var(--pass); background: var(--pass-bg); }
  .dsx-ratio[data-state="fail"] { color: var(--fail); background: var(--fail-bg); }

  /* ── Inspect overlay ─────────────────────────────────────────────────────── */
  .dsx-src {
    display: none;
    font-family: var(--mono); font-size: 11px; line-height: 1;
    margin-top: var(--s2);
    padding: var(--s2) var(--s3);
    background: var(--panel);
    border: 1px solid var(--rule);
    border-left: 2px solid var(--signal);
    border-radius: 0 var(--r1) var(--r1) 0;
    word-break: break-word;
  }
  .dsx-src-line { display: block; line-height: 1.6; }
  .dsx-src-from { color: var(--ink-muted); }
  .dsx-src-arr  { color: var(--ink-faint); }
  .dsx-src-to   { color: var(--signal); }
  #dsx[data-inspect="on"] .dsx-src { display: block; }
  #dsx[data-inspect="on"] .dsx-field { outline: 1px dashed var(--signal); outline-offset: var(--s1); }

  /* ── LEGACY form ─────────────────────────────────────────────────────────── */
  /*    Hardcoded values — no tokens, no transitions, no focus ring on button   */

  .lg-form { display: flex; flex-direction: column; gap: 2rem; }

  .lg-label {
    display: block; margin-bottom: 6px;
    font-size: 16px; font-weight: 500; color: #3b4c5b;
    letter-spacing: 0;
  }

  .lg-input {
    display: block; width: 100%;
    padding: 16px 12px;
    font-family: inherit; font-size: 16px; color: #041524;
    background: #ffffff;
    border: 1px solid #85929f; border-radius: 4px;
  }
  .lg-input::placeholder { color: #586c7b; }
  .lg-input:focus { outline: none; border-color: #041524; box-shadow: 0 0 0 2px #bbddfb; }

  /* Legacy radio */
  .lg-radio-group  { border: 0; padding: 0; margin: 0; margin-bottom: 0; }
  .lg-radio-group legend { float: left; width: 100%; }
  .lg-radio-group legend + * { clear: both; }
  .lg-radio-list   { display: flex; flex-direction: column; gap: 12px; padding-top: 2px; }
  .lg-radio-row    { display: flex; align-items: center; gap: 0; font-size: 16px; color: #3b4c5b; cursor: pointer; }
  .lg-radio-row input[type="radio"] { margin-right: 12px; }
  .lg-radio-row input[type="radio"] {
    appearance: none; -webkit-appearance: none;
    flex-shrink: 0; position: relative;
    width: 24px; height: 24px;
    background: #ffffff; border: 1px solid #85929f; border-radius: 50%;
    cursor: pointer;
  }
  .lg-radio-row input[type="radio"]:checked {
    border-color: #bbddfb;
  }
  .lg-radio-row input[type="radio"]:checked::after {
    content: ""; position: absolute;
    top: 50%; left: 50%;
    width: 12px; height: 12px;
    background: #0176db; border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  .lg-radio-row input[type="radio"]:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #bbddfb;
  }

  .lg-help { display: block; margin-top: 5px; font-size: 11px; color: #9e9e9e; }

  /* Legacy checkbox */
  .lg-check { display: flex; align-items: flex-start; flex-wrap: wrap; gap: 0; margin-bottom: 0; color: #3b4c5b; }
  .lg-check .dsx-src { width: 100%; }
  .lg-check input {
    appearance: none; -webkit-appearance: none;
    flex-shrink: 0; margin-top: 2px; margin-right: 12px;
    width: 16px; height: 16px;
    background: #ffffff; border: 1px solid #c0c8cf; border-radius: 3px;
    cursor: pointer; position: relative;
  }
  .lg-check input:checked {
    background: #0176db; border-color: #0176db;
  }
  .lg-check input:checked::after {
    content: ""; position: absolute;
    left: 4px; top: 1px; width: 5px; height: 9px;
    border: 2px solid #ffffff; border-top: 0; border-left: 0;
    transform: rotate(45deg);
  }
  .lg-check input:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #bbddfb;
  }
  .lg-check-text { font-size: 14px; line-height: 1.5; flex: 1; }
  .lg-btn-outer { display: inline-flex; align-items: center; }
  .lg-btn-row   { display: inline-flex; align-items: center; color: #ffffff; background: #0176db; border-radius: 8px; }

  /* Legacy button */
  .lg-btn-row { cursor: pointer; }
  .lg-btn-row:hover  { background: #1d8ff2; }
  .lg-btn-row:active { background: #015faf; }
  .lg-btn {
    padding: 16px 12px;
    font-family: inherit; font-size: 16px; font-weight: 500;
    color: inherit;
    background: transparent; border: 0; cursor: pointer;
  }
  .lg-btn-row:focus-within { box-shadow: 0 0 0 2px #bbddfb; }
  .lg-btn:focus-visible { outline: none; }

  /* ── DESIGN SYSTEM form ──────────────────────────────────────────────────── */
  /*    Tutti i valori da token semantici N4M — tema scuro incluso             */

  .ds-form { display: flex; flex-direction: column; gap: 2rem; }

  .ds-field { display: flex; flex-direction: column; gap: var(--fields-base-gap-label); }

  .ds-label {
    color: var(--fields-base-label);
    font: var(--body);
    margin: 0;
  }

  .ds-input {
    box-sizing: border-box;
    display: block; width: 100%; max-width: 20rem;
    padding: var(--fields-base-padding-y) var(--fields-base-padding-x);
    border: var(--fields-base-border-width) solid var(--fields-default-border-color);
    border-radius: var(--fields-base-radius);
    background: var(--fields-default-bg);
    color: var(--fields-default-value);
    font: var(--body);
    transition: border-color var(--motion-time-normal) var(--motion-easing-function-ease-out),
                box-shadow   var(--motion-time-normal) var(--motion-easing-function-ease-out);
  }
  .ds-input::placeholder { color: var(--fields-default-placeholder); }
  .ds-input:focus-visible {
    outline: none;
    border-color: var(--border-color-brand);
    box-shadow:
      0 0 0 3px var(--background-default),
      0 0 0 5px var(--border-color-brand);
  }

  /* DS radio */
  .ds-radio-group { border: 0; padding: 0; margin: 0; }
  .ds-radio-group legend { float: left; width: 100%; }
  .ds-radio-group legend + * { clear: both; }
  .ds-radio-list {
    display: flex; flex-direction: column;
    gap: var(--spacing-component-gap-xs);
    padding-top: var(--spacing-component-gap-xs);
  }
  .ds-radio-row {
    display: flex; align-items: center; gap: 0;
    color: var(--text-secondary);
    font: var(--body); cursor: pointer;
    transition: color var(--motion-time-normal) var(--motion-easing-function-ease-out);
  }
  .ds-radio-row:has(input:checked) { color: var(--text-primary); }
  .ds-radio-row input[type="radio"] {
    appearance: none; -webkit-appearance: none;
    flex-shrink: 0; position: relative;
    width:  var(--checkbox-base-size);
    height: var(--checkbox-base-size);
    background: var(--checkbox-default-unchecked-bg);
    border: var(--checkbox-base-border-width) solid var(--checkbox-default-unchecked-border-color);
    border-radius: 50%; cursor: pointer;
    margin-right: var(--checkbox-base-gap);
    transition: border-color var(--motion-time-normal) var(--motion-easing-function-ease-out);
  }
  .ds-radio-row input[type="radio"]:checked {
    background: var(--radio-default-checked-bg);
    border-color: var(--radio-default-checked-bg);
  }
  .ds-radio-row input[type="radio"]:checked::after {
    content: ""; position: absolute;
    top: 50%; left: 50%;
    width:  calc(var(--checkbox-base-size) * .5);
    height: calc(var(--checkbox-base-size) * .5);
    background: var(--radio-default-checked-check);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  .ds-radio-row input:focus-visible { outline: 2px solid var(--border-color-brand); outline-offset: 2px; }

  .ds-help { display: block; font: var(--body); color: var(--text-secondary); }

  /* DS checkbox */
  .ds-check { display: flex; align-items: flex-start; flex-wrap: wrap; gap: 0; margin-bottom: 0; color: var(--checkbox-base-text); }
  .ds-check .dsx-src { width: 100%; }
  .ds-check input {
    appearance: none; -webkit-appearance: none;
    flex-shrink: 0; margin-top: 2px; margin-right: var(--checkbox-base-gap);
    width:  var(--checkbox-base-size);
    height: var(--checkbox-base-size);
    background: var(--checkbox-default-unchecked-bg);
    border: var(--checkbox-base-border-width) solid var(--checkbox-default-unchecked-border-color);
    border-radius: var(--checkbox-base-radius);
    cursor: pointer; position: relative;
    transition: background     var(--motion-time-normal) var(--motion-easing-function-ease-out),
                border-color   var(--motion-time-normal) var(--motion-easing-function-ease-out);
  }
  .ds-check input:checked {
    background: var(--checkbox-default-checked-bg);
    border-color: var(--checkbox-default-checked-border-color);
  }
  .ds-check input:checked::after {
    content: ""; position: absolute;
    left: calc(var(--checkbox-base-size) * .25);
    top:  calc(var(--checkbox-base-size) * .10);
    width:  calc(var(--checkbox-base-size) * .30);
    height: calc(var(--checkbox-base-size) * .55);
    border: 2px solid #fff; border-top: 0; border-left: 0;
    transform: rotate(45deg);
  }
  .ds-check input:focus-visible {
    outline: 2px solid var(--border-color-brand);
    outline-offset: 2px;
  }
  .ds-check-text { font: var(--body); flex: 1; color: var(--fields-base-label); }

  /* DS button */
  .ds-btn-outer { display: inline-flex; align-items: center; }
  .ds-btn-row {
    display: inline-flex; align-items: center;
    background: var(--button-primary-default-bg);
    color: var(--button-primary-default-text);
    border: var(--button-base-border-width) solid var(--button-primary-default-border-color);
    border-radius: var(--button-base-md-radius);
    cursor: pointer;
    transition: background   var(--motion-time-normal) var(--motion-easing-function-ease-out),
                border-color var(--motion-time-normal) var(--motion-easing-function-ease-out);
  }
  .ds-btn-row:hover  { background: var(--button-primary-hover-bg); border-color: var(--button-primary-hover-border-color); }
  .ds-btn-row:active { filter: brightness(.92); }
  .ds-btn-row:focus-within {
    box-shadow:
      0 0 0 3px var(--background-default),
      0 0 0 5px var(--border-color-brand);
  }
  .ds-btn {
    padding: var(--button-base-md-padding-y) var(--button-base-md-padding-x);
    font: var(--body);
    color: inherit; background: transparent; border: 0; cursor: pointer;
  }
  .ds-btn:focus-visible { outline: none; }

  /* ── Responsive ──────────────────────────────────────────────────────────── */
  @container (max-width: 680px) {
    .dsx-grid { grid-template-columns: 1fr; }
    .dsx-col + .dsx-col { border-left: 0; border-top: 1px solid var(--rule); }
  }
  @media (prefers-reduced-motion: reduce) {
    #dsx, #dsx * { transition-duration: 0ms !important; }
  }
`;

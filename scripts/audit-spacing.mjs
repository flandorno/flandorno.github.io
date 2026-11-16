#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════════════
   The Spacing Grid Rule — enforcement.

   Every length in this project is rem on a 4px grid. See DESIGN.md › Space.
   This script reads:
     · src/styles/*.css     — the design system. On top of the grid, margin,
                              padding and gap may only use the scale — 0.25,
                              0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 6rem — or a
                              var() of it.
     · every .tsx in src/   — must carry no spacing of their own, apart from
                              FormComparison's embedded stylesheet, which is
                              scanned as CSS.
   Run: npm run audit:spacing      Exits non-zero when the grid is broken.
   ═══════════════════════════════════════════════════════════════════════════ */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const ROOT = process.cwd();
const SRC = join(ROOT, 'src');

/* ── What counts as spacing ──────────────────────────────────────────────── */

const SPACING_PROP = /^(margin|padding|gap|row-gap|column-gap|inset|top|right|bottom|left|scroll-margin|scroll-padding|min-height|min-width|max-width|width|height|border-radius|outline-offset|text-underline-offset)(-[a-z]+)*$/;

/* ── Exemptions. Each one is a decision, not an oversight. ───────────────── */

const EXEMPT_SELECTOR = [
  /* FormComparison is an exhibit: it shows the Net4Market legacy form beside
     the token-based one. The legacy half's hand-written 6px / 5px / 3px / 2px
     IS the evidence — normalising it would destroy the point of the component.
     `.ds-*` is driven by the client's real tokens, equally not ours to round. */
  { test: /^\.lg-/,  why: 'FormComparison: legacy form, off-grid values are the evidence' },
  { test: /^\.ds-/,  why: 'FormComparison: real Net4Market tokens, quoted verbatim' },
  /* A toggle knob centres by arithmetic: (16 − 12) ÷ 2 = 2. Not a spacing choice. */
  /* The visually-hidden helper is 1px by definition. It was Tailwind's until the
     mosaic rebuild dropped Tailwind; it is now written out in base.css. */
  { test: /^\.sr-only/, why: 'visually-hidden helper, 1px by definition' },
  { test: /^\.dsx-switch::after/, why: 'switch knob centring arithmetic' },
];

/* Tailwind's visually-hidden helper uses -1px insets by definition. */
const EXEMPT_CLASS = new Set(['sr-only']);

/* Zero is always on the grid. Border and outline WIDTHS are not spacing at all,
   and are filtered by property name and by the `solid|dashed|dotted` test below
   rather than by blanket-exempting 1px and 2px — which would hide a real
   `margin-top: 2px`. */
const isExemptValue = (n) => n === 0;

/* ── CSS scanning ────────────────────────────────────────────────────────── */

function scanCss(text, file, lineOffset = 0) {
  const out = [];
  let selector = '';
  const lines = text.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = i + 1 + lineOffset;
    const t = raw.trim();

    if (t.startsWith('/*') || t.startsWith('*') || t.startsWith('//')) continue;

    /* remember the selector this declaration belongs to */
    const sel = raw.match(/^\s*([.#&:][^{]*?)\s*\{/);
    if (sel) selector = sel[1].trim();

    /* a media query is a breakpoint, not a spacing */
    if (t.startsWith('@media')) continue;

    const exempt = EXEMPT_SELECTOR.find((e) => e.test.test(selector));

    for (const m of raw.matchAll(/([-a-z]+)\s*:\s*([^;{}]+)/g)) {
      const prop = m[1];
      const value = m[2].trim();
      if (prop.startsWith('--')) continue;
      if (!SPACING_PROP.test(prop)) continue;
      /* shorthand that is really a border/outline declaration */
      if (/\b(solid|dashed|dotted)\b/.test(value)) continue;

      for (const px of value.matchAll(/(-?\d*\.?\d+)px/g)) {
        const n = Math.abs(parseFloat(px[1]));
        if (isExemptValue(n)) continue;
        out.push({ file, line, prop, value, unit: 'px', n, exempt: exempt?.why, kind: 'unit' });
      }
      for (const em of value.matchAll(/(-?\d*\.?\d+)em(?![a-z])/g)) {
        out.push({ file, line, prop, value, unit: 'em', raw: em[0], exempt: exempt?.why, kind: 'unit' });
      }
      for (const r of value.matchAll(/(-?\d*\.?\d+)rem/g)) {
        const px = Math.abs(parseFloat(r[1])) * 16;
        if (px === 0) continue;
        if (px % 4 !== 0) {
          out.push({ file, line, prop, value, unit: 'rem', n: px, exempt: exempt?.why, kind: 'grid' });
        }
      }
    }
  }
  return out;
}

/* ── JSX scanning: the pages must carry no spacing of their own ──────────── */

const TW_SPACING = /\b(p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|gap-x|gap-y|space-x|space-y|inset|rounded)-[0-9[]/;

function scanTsx(text, file) {
  const out = [];

  /* An embedded stylesheet (FormComparison's `const CSS = \`…\``) is CSS, and is
     scanned as CSS. Blank it out of the JSX pass so its declarations are not
     counted twice — once as CSS and again as if they were inline styles. */
  const css = text.match(/const CSS = `([\s\S]*?)`;/);
  let jsx = text;
  if (css) {
    const offset = text.slice(0, css.index).split('\n').length;
    out.push(...scanCss(css[1], file, offset));
    jsx = text.slice(0, css.index) + css[0].replace(/[^\n]/g, ' ') + text.slice(css.index + css[0].length);
  }

  const lines = jsx.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = i + 1;

    /* Spacing in an inline style object — and only there. Prose that happens to
       quote a CSS declaration (the exhibit's annotation labels do exactly that)
       is content, not style, so the match is anchored to `style={{ … }}`. */
    for (const block of lines[i].matchAll(/style=\{\{([^}]*)\}\}/g)) {
      for (const m of block[1].matchAll(/([A-Za-z]+)\s*:\s*[`'"]?([^,`'"]*?\d+(?:px|rem|em))/g)) {
        const prop = m[1].replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());
        if (!SPACING_PROP.test(prop)) continue;
        out.push({ file, line, prop, value: m[2].trim(), kind: 'inline' });
      }
    }

    /* Tailwind spacing utilities */
    for (const m of lines[i].matchAll(/className="([^"]+)"/g)) {
      for (const cls of m[1].split(/\s+/)) {
        if (EXEMPT_CLASS.has(cls)) continue;
        if (TW_SPACING.test(cls)) out.push({ file, line, prop: 'class', value: cls, kind: 'tailwind' });
      }
    }
  }
  return out;
}

/* ── Walk src/ ───────────────────────────────────────────────────────────── */

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (/\.(css|tsx)$/.test(p)) acc.push(p);
  }
  return acc;
}

/* ── v2: margin / padding / gap on the v2 scale only ─────────────────────── */

const V2_DIR = join(SRC, 'styles');
const V2_SCALE = new Set([0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 6]);
const V2_PROP = /^(margin|padding|gap|row-gap|column-gap)(-[a-z]+)*$/;

function scanV2(text, file) {
  const out = [];
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t.startsWith('/*') || t.startsWith('*')) continue;
    for (const m of lines[i].matchAll(/([-a-z]+)\s*:\s*([^;{}]+)/g)) {
      if (!V2_PROP.test(m[1])) continue;
      for (const r of m[2].matchAll(/(-?\d*\.?\d+)rem/g)) {
        const n = Math.abs(parseFloat(r[1]));
        if (n !== 0 && !V2_SCALE.has(n)) out.push({ file, line: i + 1, prop: m[1], value: m[2].trim(), n: n * 16, kind: 'v2' });
      }
    }
  }
  return out;
}

const findings = [];
for (const path of walk(SRC)) {
  const file = relative(ROOT, path);
  const text = readFileSync(path, 'utf8');
  if (!text.trim()) continue;
  findings.push(...(path.endsWith('.css') ? scanCss(text, file) : scanTsx(text, file)));
  if (path.startsWith(V2_DIR) && path.endsWith('.css')) findings.push(...scanV2(text, file));
}

/* ── Report ──────────────────────────────────────────────────────────────── */

const exempt = findings.filter((f) => f.exempt);
const live = findings.filter((f) => !f.exempt);

const offGrid = live.filter((f) => f.kind === 'grid' || (f.kind === 'unit' && f.unit === 'px' && f.n % 4 !== 0));
const notRem = live.filter((f) => f.kind === 'unit' && (f.unit === 'px' || f.unit === 'em') && !offGrid.includes(f));
const inPages = live.filter((f) => f.kind === 'inline' || f.kind === 'tailwind');
const offV2 = live.filter((f) => f.kind === 'v2');

const group = (list) => {
  const by = new Map();
  for (const f of list) {
    if (!by.has(f.file)) by.set(f.file, []);
    by.get(f.file).push(f);
  }
  return by;
};

const show = (title, list) => {
  if (!list.length) return;
  console.log(`\n✗ ${title} — ${list.length}`);
  for (const [file, items] of group(list)) {
    console.log(`  ${file}`);
    for (const f of items) {
      const shown = f.raw ?? (f.n !== undefined ? `${f.n}px` : f.value);
      console.log(`    :${String(f.line).padEnd(4)} ${String(shown).padEnd(10)} ${f.prop}: ${f.value.slice(0, 54)}`);
    }
  }
};

console.log('The Spacing Grid Rule — rem on the 4px grid (DESIGN.md › Space)');
console.log(`scanned: ${walk(SRC).length} files under src/`);

show('off the 4px grid', offGrid);
show('not in rem', notRem);
show('spacing declared outside src/styles', inPages);
show('v2 margin/padding/gap off the v2 scale', offV2);

if (exempt.length) {
  console.log(`\n· ${exempt.length} documented exemption(s), not counted:`);
  for (const [why, items] of group(exempt.map((f) => ({ ...f, file: f.exempt })))) {
    console.log(`    ${items.length.toString().padStart(3)} × ${why}`);
  }
}

const failed = offGrid.length + notRem.length + inPages.length + offV2.length;
console.log(failed ? `\nFAIL — ${failed} violation(s)\n` : '\nPASS — every spacing is rem on the grid\n');
process.exit(failed ? 1 : 0);

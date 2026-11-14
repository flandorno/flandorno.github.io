#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════════════
   Contrast audit — v2 foundations.

   Reads src/styles/tokens.css, resolves every semantic colour token for the
   light and the dark theme, and checks a declared table of pairs against
   WCAG 2.x contrast. Exits non-zero on any failure.

   Two kinds of row:
     min  — the pair is used and must clear this ratio
              4.5 text · 3 non-text or ≥24px text · 7 anything set in Doto
     max  — the pair is FORBIDDEN and must stay under this ratio. These are
            negative assertions: they exist so nobody "fixes" a rule by
            nudging a value until a banned pair starts to look legal.

   It also fails if the two dark blocks in tokens.css (the media query and
   the explicit [data-theme="dark"]) ever drift apart.

   Run: npm run audit:contrast
   ═══════════════════════════════════════════════════════════════════════════ */

import { readFileSync } from 'fs';
import { join } from 'path';

const FILE = join(process.cwd(), 'src/styles/tokens.css');
const css = readFileSync(FILE, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');

/* ── Parse: every innermost { … } block with the selector chain above it ── */
function blocks(text) {
  const out = [];
  const stack = [];
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '{') {
      stack.push({ selector: text.slice(start, i).trim(), body: i + 1 });
      start = i + 1;
    } else if (text[i] === '}') {
      const open = stack.pop();
      const body = text.slice(open.body, i);
      if (!body.includes('{')) {
        out.push({ chain: [...stack.map((s) => s.selector), open.selector].join(' >> '), body });
      }
      start = i + 1;
    }
  }
  return out;
}
const decls = (body) => {
  const map = {};
  for (const m of body.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) map[m[1]] = m[2].trim();
  return map;
};

const all = blocks(css);
const find = (pred, label) => {
  const b = all.find((x) => pred(x.chain));
  if (!b) { console.error(`✗ could not find the ${label} block in tokens.css`); process.exit(1); }
  return decls(b.body);
};

const base = find((c) => c === ':root', ':root');
const darkMedia = find((c) => c.includes('prefers-color-scheme: dark') && c.includes(':root:not'), 'media-query dark');
const darkAttr = find((c) => c === ':root[data-theme="dark"]', '[data-theme="dark"]');

function resolve(map, name, seen = new Set()) {
  if (seen.has(name)) throw new Error(`cycle at ${name}`);
  seen.add(name);
  const v = map[name];
  if (v === undefined) throw new Error(`undefined token ${name}`);
  const ref = v.match(/^var\((--[\w-]+)\)$/);
  return ref ? resolve(map, ref[1], seen) : v.toUpperCase();
}

const THEMES = {
  light: { ...base },
  dark: { ...base, ...darkAttr },
};

/* ── WCAG ─────────────────────────────────────────────────────────────── */
const lum = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
    .map((v) => v / 255)
    .map((s) => (s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4))
    .reduce((acc, v, i) => acc + v * [0.2126, 0.7152, 0.0722][i], 0);
};
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

/* ── The pairs. `fg` on `bg`. Names drop the --color- prefix. ─────────── */
const DOTO = 7;
const TEXT = 4.5;
const GRAPHIC = 3;

const PAIRS = [
  // ground
  { fg: 'on-ground', bg: 'ground', min: DOTO, why: 'white on the ground; Doto statements' },
  { fg: 'on-ground-muted', bg: 'ground', min: TEXT, why: 'secondary text on the ground' },
  { fg: 'accent', bg: 'ground', min: TEXT, why: 'orange as text on the ground' },
  // surface and tones
  { fg: 'ink', bg: 'surface', min: DOTO, why: 'Doto labels on the surface' },
  { fg: 'ink', bg: 'tone-1', min: DOTO, why: 'Doto on tone-1' },
  { fg: 'ink', bg: 'tone-2', min: DOTO, why: 'Doto on tone-2' },
  { fg: 'ink', bg: 'tone-3', min: TEXT, why: 'Atkinson only on tone-3' },
  { fg: 'ink', bg: 'tone-4', min: TEXT, why: 'Atkinson only on tone-4' },
  { fg: 'ink-muted', bg: 'surface', min: TEXT, why: 'secondary text on the surface' },
  { fg: 'ink-muted', bg: 'tone-1', min: TEXT, why: 'secondary text on tone-1' },
  { fg: 'accent-text', bg: 'surface', min: TEXT, why: 'orange as text on the surface' },
  // accent
  { fg: 'on-accent', bg: 'accent', min: TEXT, why: 'black on orange' },
  { fg: 'on-accent', bg: 'accent-hover', min: TEXT, why: 'black on hover orange' },
  { fg: 'on-accent', bg: 'accent-active', min: TEXT, why: 'black on pressed orange' },
  { fg: 'on-disabled', bg: 'disabled', min: GRAPHIC, why: 'disabled label (exempt from 1.4.3, kept legible)' },
  // non-text
  { fg: 'accent', bg: 'surface', min: GRAPHIC, why: 'switch / checkbox on, against the surface' },
  { fg: 'control-off', bg: 'surface', min: GRAPHIC, why: 'switch track / checkbox edge, off' },
  { fg: 'surface', bg: 'accent', min: GRAPHIC, why: 'switch knob on the orange track' },
  { fg: 'surface', bg: 'control-off', min: GRAPHIC, why: 'switch knob on the off track' },
  { fg: 'focus', bg: 'surface', min: GRAPHIC, why: 'focus ring on the surface' },
  { fg: 'on-ground', bg: 'ground', min: GRAPHIC, why: 'focus ring on the ground' },

  // forbidden — must stay forbidden
  { fg: 'white', bg: 'accent', max: TEXT, raw: true, why: 'white on orange is banned (rule 1)' },
  { fg: 'accent', bg: 'tone-4', max: GRAPHIC, light: true, why: 'orange on tone-4 is banned (rule 3)' },
  { fg: 'accent', bg: 'tone-3', max: GRAPHIC, light: true, why: 'orange on tone-3 is banned (rule 3)' },
];

let failed = 0;
console.log('Contrast audit — v2 foundations (src/styles/tokens.css)');

for (const [theme, map] of Object.entries(THEMES)) {
  console.log(`\n${theme}`);
  for (const p of PAIRS) {
    if (p.light && theme !== 'light') continue;
    const name = (t) => (p.raw && t === p.fg ? `--${t}` : `--color-${t}`);
    let fg, bg;
    try {
      fg = resolve(map, name(p.fg));
      bg = resolve(map, `--color-${p.bg}`);
    } catch (e) {
      console.log(`  ✗ ${p.fg} on ${p.bg}: ${e.message}`);
      failed++;
      continue;
    }
    const r = ratio(fg, bg);
    const ok = p.min !== undefined ? r >= p.min : r < p.max;
    const rule = p.min !== undefined ? `≥ ${p.min}` : `< ${p.max} (banned)`;
    if (!ok) failed++;
    console.log(`  ${ok ? '✓' : '✗'} ${r.toFixed(2).padStart(5)}  ${`${p.fg} on ${p.bg}`.padEnd(30)} ${rule.padEnd(16)} ${p.why}`);
  }
}

/* The two dark blocks must say the same thing. */
const keys = new Set([...Object.keys(darkMedia), ...Object.keys(darkAttr)]);
const drift = [...keys].filter((k) => darkMedia[k] !== darkAttr[k]);
if (drift.length) {
  failed += drift.length;
  console.log(`\n✗ the two dark blocks disagree on: ${drift.join(', ')}`);
} else {
  console.log('\n✓ the media-query and [data-theme="dark"] blocks are identical');
}

console.log(failed ? `\nFAIL — ${failed} problem(s)\n` : '\nPASS — every pair holds in both themes\n');
process.exit(failed ? 1 : 0);

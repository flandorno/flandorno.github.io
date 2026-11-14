# Design System v2 — Foundations

Status: **foundations only.** Tokens, themes, type, space and contrast are in place and visible at `/#/foundations`, an unlinked review page. The pages still run on v1 (`DESIGN.md`, `src/index.css`); this file replaces `DESIGN.md` once they migrate.

Source of truth: `src/styles/tokens.css`. Checks: `npm run audit:contrast`, `npm run audit:spacing`.

## The idea

The site is a mosaic of blocks on a black ground. A `0.25rem` gap between blocks shows the ground through, and that gap is the grid's only line. There is one orange. **Doto**, a dot-matrix face, is the voice: names, claims, labels, numbers. **Atkinson Hyperlegible Next** is for anything read in sequence.

## Colour

Three layers: **primitives → semantic → component.** A component reads only semantic tokens. No hex value appears outside `tokens.css`.

### Primitives

| Token | Value | Origin |
|---|---|---|
| `--orange-500` | `#FF5F12` | owner's palette, the primary |
| `--orange-300` / `-600` / `-800` | `#FF864E` / `#E04E00` / `#AA3700` | derived: hover, pressed, orange-as-text |
| `--black` / `--white` | `#000000` / `#FFFFFF` | owner's palette |
| `--gray-100…400` | `#D8DBDF` `#C7CCD2` `#A9B2BD` `#8896A5` | owner's palette |
| `--gray-500…900` | `#6A727D` `#525A63` `#474E56` `#383E45` `#2A2E34` `#1E2226` | derived at the greys' hue, OKLCH h ≈ 255 |

### Semantic, per theme

In the dark theme the ground stays black and the blocks change colour, from white to graphite. Blocks that use the ground as their background, like the "PRODUCT DESIGNER" block, look the same in both themes.

| Token | Light | Dark |
|---|---|---|
| `ground` | `#000000` | `#000000` |
| `on-ground` · `on-ground-muted` | `#FFFFFF` · `#A9B2BD` | same |
| `surface` | `#FFFFFF` | `#1E2226` |
| `ink` · `ink-muted` | `#000000` · `#525A63` | `#FFFFFF` · `#A9B2BD` |
| `tone-1…4` | `#D8DBDF` `#C7CCD2` `#A9B2BD` `#8896A5` | `#2A2E34` `#383E45` `#474E56` `#6A727D` |
| `accent` · `on-accent` | `#FF5F12` · `#000000` | same |
| `accent-hover` · `accent-active` | `#FF864E` · `#E04E00` | same |
| `accent-text` | `#AA3700` | `#FF5F12` |
| `control-off` | `#8896A5` | `#6A727D` |
| `focus` | = `ink` (on the ground: `on-ground`) | same |

The theme follows the system by default. Choosing light or dark sets `data-theme` on `<html>` and saves the choice in `localStorage` under `fl-theme`. An inline script in `index.html` applies it before first paint, so there is no flash on reload (verified). The dark values are written twice, once inside the media query and once under `[data-theme="dark"]`, and the audit fails if the two copies drift apart.

### Measured contrast

| Pair | Light | Dark | Need |
|---|---|---|---|
| ink on surface | 21.00 | 16.01 | 7 (Doto) |
| ink on tone-1 / tone-2 | 15.12 / 13.00 | 13.65 / 10.81 | 7 (Doto) |
| ink on tone-3 / tone-4 | 9.79 / 6.95 | 8.43 / 4.87 | 4.5 (Atkinson only) |
| ink-muted on surface / tone-1 | 7.00 / 5.04 | 7.46 / 6.36 | 4.5 |
| on-ground on ground | 21.00 | 21.00 | 7 |
| accent on ground | 6.90 | 6.90 | 4.5 |
| accent-text on surface | 6.45 | 5.26 | 4.5 |
| black on accent / hover / active | 6.90 / 8.77 / 5.26 | same | 4.5 |
| accent, control-off on surface (graphics) | 3.04, 3.02 | 5.26, 3.29 | 3 |
| **white on accent** | **3.04** | **3.04** | **banned** |
| **accent on tone-4 / tone-3** | **1.01 / 1.42** | — | **banned** |

### Usage rules

1. **On orange, only black text.** Never white, at any size.
2. **Orange as text:** use `accent` only on the ground. On a surface, use `accent-text`. Never put orange text on tone-2, tone-3 or tone-4.
3. **No orange shapes on tone-3 or tone-4** (1.0–1.4:1). An orange block next to a grey block is fine, because the black gap separates them.
4. **Orange controls on white** (switch, checkbox) are 3.04:1. That is enough for a graphic but not enough to carry meaning alone, so state is also shown another way: the knob's position, the tick.
5. **Focus rings have no second colour.** A control on a surface gets an outer ring in `focus` with a `0.25rem` offset. A block that is itself a link gets an *inner* ring (`-0.5rem`) in `currentColor`. An outer ring would land on the black gap, where a black ring disappears. The block's own text colour always contrasts with its background, so `currentColor` is always visible.
6. **Doto needs 7:1.** Its dots cover only part of each stroke, so it reads with less contrast than its ratio suggests. That limits Doto to ink on surface, tone-1 and tone-2, white on the ground, and orange on the ground at display size.

## Type

| Token | Face | Value | 390 → 1504 |
|---|---|---|---|
| `--type-display` | Doto 800 | `clamp(2rem, 0.25rem + 3.9vw, 5rem)` | 32 → 62.7 |
| `--type-title` | Doto 700 | `clamp(1.5rem, 0.6rem + 2.55vw, 3.5rem)` | 24 → 48 |
| `--type-label` | Doto 700, caps | `clamp(1.125rem, 0.6rem + 1.5vw, 2.25rem)` | 18 → 32.2 |
| `--type-h2` | Atkinson 600 | `clamp(1.5rem, 1.35rem + 0.4vw, 1.75rem)` | 24 → 27.6 |
| `--type-h3` | Atkinson 600 | `1.375rem` | 22 |
| `--type-body` | Atkinson 400 | `clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)` | 17 → 19 |
| `--type-ui` | Atkinson 500 | `1rem` | 16 |
| `--type-small` | Atkinson 400 | `0.875rem` | 14 |

Sizes measured in the browser.

**Display is sized by a fit, not by taste.** Doto is monospace at 0.6em per character, so the largest size that fits in a block can be calculated: `(block − 2·pad) / (0.6 × chars)`. The binding case is "Federico Landorno" in a half-width block at 1024px. The limit there is 44.2px, because `vw` includes the 15px desktop scrollbar and the grid does not. `3.95vw` gave 44.4px and the name wrapped; `3.9vw` gives 43.9px. The specimen measured the name on one line at 390, 1024, 1280, 1440 and 1504.

**The reading column is `--measure: 37rem`** (592px). The specimen measured the real N4M prose at 60–74 characters a line, average 68. A first value of 44rem gave 83 characters. Atkinson averages 8.5px per character at 19px, while `1ch` (the width of the zero) is 12.3px, so a `ch`-based width would have been badly off. Use the length, not `ch`. On a phone the block is narrower than the measure, so about 43 characters is expected there.

**Rules**
- Doto is never smaller than 1.125rem. Below 2rem it is set at 600 or heavier; labels ship at 700. At 400 it breaks up at DPR 1 (checked in the specimen).
- Never set more than about 12 consecutive words in Doto.
- Doto has no letter-spacing, except `+0.02em` in caps.
- Every fluid step is `rem + vw`, never `vw` alone, so text zoom still scales it.
- Titles use `text-wrap: balance`; paragraphs use `pretty`.
- Atkinson numbers in tables use `tabular-nums`.

## Space

Base unit: **4px, the same as the gap.** Scale: `--space-1 2 3 4 6 8 10 12 16 24` = 4 8 12 16 24 32 40 48 64 96px.

| Token | Value | Use |
|---|---|---|
| `--grid-gap` | `0.25rem` | the only space between blocks, fixed at every width |
| `--block-pad-sm` | `1rem` | label and control blocks |
| `--block-pad-md` | `1.5rem` | blocks with a display title |
| `--block-pad-lg` | `clamp(1.5rem, 1rem + 1.5vw, 2.5rem)` | reading blocks |
| `--stack-xs / sm / md / lg` | 0.5 / 1 / 1.5 / 3rem | vertical rhythm inside a block |
| `--radius-block` | `0.5rem` | blocks (6px available in the specimen for comparison) |
| `--radius-control` · `--radius-pill` | `0.25rem` · `62.5rem` | controls · switch |
| `--target-min` | `2.75rem` | 44px pointer target |

**Rules**
- Blocks are separated only by the gap. A new case-study section starts a new block; it does not get a margin.
- Padding inside a block is at least four gaps. The mosaic is compact between blocks and roomy inside them, on purpose.
- Spacing is declared only in CSS: no Tailwind spacing utilities and no inline styles in pages. `audit:spacing` also limits margin, padding and gap in `src/styles/*.css` to the v2 scale.

## Open decisions for the owner

Each of these is easiest to judge in the specimen:
1. **Label weight:** 700 ships. Compare it with 600 and 800 in the Type section.
2. **Block radius:** 8px or 6px. The Radius control switches the whole page.
3. **Dark surface:** `#1E2226` is 1.31:1 against the ground. Going darker makes the grid lines disappear; going lighter flattens the tone ramp.

## Not yet

The real grid and its breakpoints, rows sliding out on scroll, the interactive panels (animation, sound, easter eggs), the persistent header, migrating Home, the case studies and About, removing v1 tokens and Schibsted Grotesk, and `theme-color`.

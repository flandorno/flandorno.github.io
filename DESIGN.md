---
name: Federico Landorno — Portfolio
description: A mosaic of tiles and dot-matrix screens on a black ground, one orange, Doto for the voice and Atkinson Hyperlegible Next for reading.
colors:
  ground: "#000000"
  surface: "#FFFFFF"          # dark theme: #1E2226
  ink: "#000000"              # dark theme: #FFFFFF
  ink-muted: "#525A63"        # dark theme: #A9B2BD
  tone-1: "#D8DBDF"           # dark theme: #2A2E34
  tone-2: "#C7CCD2"           # dark theme: #383E45
  tone-3: "#A9B2BD"           # dark theme: #474E56
  tone-4: "#8896A5"           # dark theme: #6A727D
  accent: "#FF5F12"
  accent-hover: "#E04E00"
  accent-active: "#D04900"
  accent-text: "#AA3700"      # dark theme: #FF5F12
  on-accent: "#000000"
  flag: "#651818"
  on-flag: "#FBD3CF"
typography:
  display:
    fontFamily: "Doto, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "clamp(2rem, 0.25rem + 3.9vw, 5rem)"
    fontWeight: 800
  label:
    fontFamily: "Doto, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "clamp(1.125rem, 0.6rem + 1.5vw, 2.25rem)"
    fontWeight: 700
  body:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
---

# Design System — the mosaic

This file describes the site as built. It replaced the v1 system (a dark graphite world, one violet, Schibsted Grotesk) on 2026-11-15; the v1 document and code are in git at `7137806`.

Source of truth for values: `src/styles/tokens.css`. Layout: `src/styles/mosaic.css`. Reading pages: `src/styles/reading.css`. Checks: `npm run audit:contrast`, `npm run audit:spacing`.

## The idea

The site is a mosaic of blocks on a black ground. A `0.25rem` gap between blocks shows the ground through, and that gap is the grid's only line. There is one orange. **Doto**, a dot-matrix face, is the voice: names, claims, labels, numbers. **Atkinson Hyperlegible Next** is for anything read in sequence.

## Colour

Three layers: **primitives → semantic → component.** A component reads only semantic tokens. No hex value appears outside `tokens.css`.

### Primitives

| Token | Value | Origin |
|---|---|---|
| `--orange-500` | `#FF5F12` | owner's palette, the primary |
| `--orange-600` / `-700` / `-800` | `#E04E00` / `#D04900` / `#AA3700` | derived: hover, pressed, orange-as-text. Hover goes darker, never lighter |
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
| `accent-hover` · `accent-active` | `#E04E00` · `#D04900` | same |
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
| black on accent / hover / active | 6.90 / 5.26 / 4.63 | same | 4.5 |
| accent, control-off on surface (graphics) | 3.04, 3.02 | 5.26, 3.29 | 3 |
| **white on accent** | **3.04** | **3.04** | **banned** |
| **accent on tone-4 / tone-3** | **1.01 / 1.42** | — | **banned** |

### Usage rules

1. **On orange, only black text.** Never white, at any size.
2. **Orange as text:** use `accent` only on the ground. On a surface, use `accent-text`. Never put orange text on tone-2, tone-3 or tone-4.
3. **No orange shapes on tone-3 or tone-4** (1.0–1.4:1). An orange block next to a grey block is fine, because the black gap separates them.
4. **Orange controls on white** (switch, checkbox) are 3.04:1. That is enough for a graphic but not enough to carry meaning alone, so state is also shown another way: the knob's position, the tick.
5. **Selected text** is `accent` with `on-accent` text; on an orange block it is `ground` with `on-ground` text (`::selection` in `base.css`).
6. **Focus rings have no second colour.** A control on a surface gets an outer ring in `focus` with a `0.25rem` offset. A block that is itself a link gets an *inner* ring (`-0.5rem`) in `currentColor`. An outer ring would land on the black gap, where a black ring disappears. The block's own text colour always contrasts with its background, so `currentColor` is always visible.
7. **Doto needs 7:1.** Its dots cover only part of each stroke, so it reads with less contrast than its ratio suggests. That limits Doto to ink on surface, tone-1 and tone-2, white on the ground, and orange on the ground at display size. Three pairs are under 7 as built, all at label size and weight 700: the black label on the orange LinkedIn tile (6.90), the counter's current number in `accent-text` (6.45 light, 5.26 dark) and its other numbers in `ink-muted` (7.00 light, 7.46 dark, at the limit). They pass WCAG AA; `audit:contrast` does not check them against this rule.

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

**In the mosaic, Doto follows the cell, not only the viewport.** The `vw` sizes above are right when a cell is about an eighth of the viewport. When the grid has more columns (1920×1080 has nine) or narrower ones, the type is capped by what fits: `--mx-display` keeps "Federico Landorno" on one line in four cells, and `--mx-label` keeps "RESPONSIVENESS" in two cells and "3-LAYER" in one. Both are `min(token, arithmetic on --mx-cw)` in `src/styles/mosaic.css`. The label also has a floor, `--mx-label-floor`, so the fit can never take it under 1.125rem: on the narrowest eight-column grids (cells under 113px) the tile's padding gives way instead, down to one gap (`--mx-pad`), and on the phone the fit is for ten characters in two cells, the longest word set there. Measured at 18px or more at 320, 360, 390, 768, 820 and 900 wide.

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
- Padding inside a block is at least four gaps. The mosaic is compact between blocks and roomy inside them, on purpose. The one exception is label tiles on eight columns under about 900px wide, where the padding shrinks so the label keeps its size (see Type).
- Spacing is declared only in CSS: no inline lengths in pages or components. `audit:spacing` limits margin, padding and gap in `src/styles/*.css` to this scale and every other length to the 4px grid. Grid placement (`grid-column`, `grid-row`) is inline, from each scene's data, and carries no length.

## The grid

`src/grid/useGrid.ts` reads the viewport and writes `--mx-cols`, `--mx-cell` (cell height) and `--mx-cw` (cell width) on `.mx`. Placement is CSS Grid; each object carries its own `[column, row, width, height]` per layout.

| Viewport | Layout | Columns | Cell | Page |
|---|---|---|---|---|
| ≥ 900 wide, width ÷ height ≥ 1.15, ≥ 600 tall | `l8` | from the cell height, at least 8 | five rows fill the viewport | home is a **stage**; other pages scroll |
| ≥ 768 wide, otherwise | `l8` compact | 8 | square, about 90–110px | scrolls |
| < 768 wide | `l4` | 4 | square, at least 88px | scrolls |

A 14" MacBook Pro (1512×982) gives 8×5 with cells of 184×192. Scenes are authored for eight columns and for four. On a grid wider than eight columns the scene stays centred and `Scene` fills the spare columns with empty tiles; the fixed row's empty tile simply stretches. In `l4` each scene says which tiles it drops (`l4: null`).

## Two objects

- **Tile** (`.mx-tile`): a surface — `surface`, `tone-1…4` or `accent`. It can be plain, a link, a button, or hold a control. A tile that is a control is one control filling the tile, so the whole tile is the target, and its focus ring is drawn inside it in its own text colour.
- **Screen** (`.mx-screen`): the ground itself, carrying Doto text or an image. Screens sit below tiles (`z-index` 0 and 1), so a tile can slide across a screen. Text on a screen is split per character (`ScreenText`) so it can be lit one character at a time; the readable text is supplied separately for assistive technology.

Empty tiles are part of the language. They are `aria-hidden`.

## The fixed row

`Header` is the first row of every page: home, case studies (the first case scene of the home page), about, an empty tile, and the theme switch. It is sticky. On the phone it uses four tracks in the proportion 2 : 4 : 3 : 2, so "CASE STUDIES" (on two lines) and "ABOUT" fit at the label's floor down to 320px. The link to the page on show carries `aria-current`.

## The home page

Six scenes: landing, four case studies, footer (`src/pages/Home.tsx`, `src/home/`).

**Stage** (animations on and the stage-sized grid). The page is one viewport tall and does not scroll. One gesture — a wheel notch, a swipe, an arrow key, Page Up/Down, Space, Home, End — moves one scene, and the move always plays whole, in about 1.5–1.8s:

1. the screens of the old scene switch off;
2. the new tiles come in from the right behind the old ones, which leave to the left; going back mirrors this;
3. the screens of the new scene switch on — not together and not alike. Each starts at its own moment with an effect dealt at random (`src/home/powerOn.ts`): typed out, lit character by character in no order, opened from the middle, or stepping up in brightness. Nothing flashes: a screen holding a picture fades in smoothly, and no screen goes down again once it has started. The same happens to the scene on show when the page opens.

How the tiles move, and why nothing overlaps:
- A **lane** is a row, or a run of rows tied together by a tile that spans them in either scene. Lanes start at different times, in an order picked from six patterns, never the same pattern twice running.
- Inside a lane, going along the direction of travel, each tile starts with or after the one ahead of it, by an uneven random amount (zero about a third of the time). Every tile follows the same path at the same speed, so a tile that never starts earlier than the one ahead can never catch it up.
- The spread inside one lane is capped by `WAVE_BUDGET` (0.45s).

The stage leaves the browser's zoom alone: a wheel event with Ctrl or Cmd (which is also how a trackpad pinch arrives) and a two-finger touch are ignored (`ignoreCheck` on the Observer in `Home.tsx`).

A long trackpad gesture moves one scene only: the next move is allowed once the input has been quiet for 150ms. Scenes that are not showing are `inert`. A "Next section" button, visible only on focus, does the same move for keyboard and screen-reader users.

**The counter.** Every case scene opens with a tile that says "CASE STUDY" over the numbers 1 2 3 4 (`Pager` in `src/home/cases.tsx`). It took the place of the client's name, which is still the scene's accessible name and on the case-study page. The tile is not a control; each number is a link to its case, with a target of at least 44px high and no surface of its own, so that the orange tile stays the one loud control of a scene. The number on show is `accent-text` with the orange bar under it, like the language on show; the others are `ink-muted`. On the stage a number plays the move and focus lands on the current number of the new scene; off the stage it scrolls. On the phone the counter is a band across the whole width, words on the left and numbers on the right, so it also marks where one case ends and the next begins; the tags are on the row under it.

**Stack** (animations off, or any grid that is not stage-sized). The same six scenes one under the other, native scrolling, no movement.

### The landing's controls

| Tile | Behaviour |
|---|---|
| Animation | Switch. Default on; off when the system asks for reduced motion. Off means: stack mode, no transitions, the sector screen stops on its first word. |
| Sound | Switch, default off. Off: an orange cross on the megaphone. On: the grill's dots stay still and turn orange from the centre outwards, again at each sound. Sounds are synthesised (`src/lib/sound.ts`), no audio files, and each kind of action has its own: a blip for a plain control, two notes up or down for a switch or checkbox going on or off, a low knock for a link, a soft thud for a control with nothing to do, a breath of noise for the scene push (rising forward, falling back), four rising notes for the battery. |
| Language | EN / ITA. Sets `lang` on `<html>`. |
| Sector screen | Cycles INSURTECH → IOT → E-PROCUREMENT, lit per character. The full list is always present as text. |
| Resume | Opens `public/federico-landorno-cv.pdf` in a new tab. It is a plain tile until that file exists. |
| Battery | Flat on load. A click sends four waves across the ground from the battery tile — red, orange, yellow, green — each an expanding circle seen in the gaps and through the screens. Every tile dips as the front reaches it, and the speaker grill takes the colour of each wave. Each wave adds a bar and, with sound on, plays the next note of a rising chord; after the green one the icon is full, the tile bounces once and the ground fades back to black. The colours (`--charge-*` in tokens.css) are stronger in the light theme than in the dark one. It goes flat again on reload and on reaching the last scene. With animations off only the icon changes. |

Theme, motion, sound and language are one store (`src/lib/prefs.ts`), saved in `localStorage` (`fl-theme`, `fl-motion`, `fl-sound`, `fl-lang`). An inline script in `index.html` applies theme, motion and language before first paint. The battery is not saved, on purpose.

## Reading pages

Case studies and About use `CaseLayout`: the title on a full-width `tone-2` tile, the client line on a `tone-1` tile, the facts on a row of tiles, then the text down the middle, one tile per section, with a rail of tiles either side.

- **Facts** (role, team, period, outcome) are one tile each, across the whole grid. The label is Doto 700 caps at the label size, capped at 1.5rem; the value is Atkinson 500 at `--type-h3`. The last tile of a row takes the columns left over, so the outcome is the widest. Four across where each tile is at least 240px wide, otherwise two by two, and one under the other on the phone. The row is as tall as its tallest tile needs, in whole grid rows (`Facts` in `CaseLayout.tsx`).

- Grid rows have a fixed height, so a reading tile measures its content and spans the whole rows it needs (`Fit`). The spare height is room at the bottom. Each reading tile emits a `Rail` on each side for its own rows.
- A rail is a strip of the same grid. Its tiles are decoration: about half plain surface, the rest `tone-1` to `tone-3`; mostly one cell, some 1×2, 2×1 or 2×2, and roughly one cell in ten cut into four. The tiling is seeded from the page path and the section index, so it is the same on every visit and different on every page.
- The two rails are always the same width: the reading tile takes an odd number of columns on an odd grid.
- The text column is always `--measure`. The reading tile is four columns wide (five on an odd grid) where that holds the measure plus padding (672px), and grows two columns at a time where cells are narrower. In `l4`, and at eight narrow columns, it is the full width and there are no rails.
- The page ends with a screen naming the next case study, the orange tile that opens it, and the LinkedIn tile. On the phone that screen is two rows tall: the longest title needs them.
- `Figure` draws nothing until it has an image. Five figures are placed in the text of the Net4Market design-system and Yoga case studies ahead of their images, which the owner supplies.
- On a change of page, focus moves to the new page's `<h1>` (`src/lib/focus.ts`); the skip link uses the same function. On the home stage the `<h1>` is inert unless the landing is showing, so there focus goes to the scene on show.
- The case-study files keep their `fl-*` class names from v1 (`fl-ul`, `fl-table-wrap`, `fl-figure`, `fl-flow-*`…); `reading.css` is what those names mean now.
- `FormComparison` is an exhibit of the real Net4Market system and keeps its own embedded stylesheet, typeface (Roboto) and values.

## Motion rules

- GSAP (`gsap`, `@gsap/react`) drives the stage, the sector screen, the speaker grill and the charge waves. Every animation is created inside `useGSAP` or a `contextSafe` callback. A hook that returns a cleanup and has dependencies needs `revertOnUpdate: true`, or the cleanup does not run when the dependency changes — this is how the wheel listener once outlived "animations off".
- GSAP animates only `transform` and `opacity`, with one exception: the charge waves open with `clip-path`. CSS transitions change `background-color`, `color` and `fill` on hover and on the switches, and nothing else.
- With `data-motion="off"` on `<html>` there is no GSAP animation and CSS transitions inside `.mx` are disabled.

## Language

Interface strings are in `src/i18n/en.ts` and `it.ts`. Each page that has running text exists once per language (`src/pages/*.tsx` and `src/pages/it/*.tsx`). The Italian of anything said in Federico's voice is a draft until he approves it: `ITALIAN_CONTENT_READY` in `src/i18n/index.ts` shows it on the dev server only, and a production build keeps those parts in English. The draft is also left out of the production bundle: the Italian pages and `src/i18n/it.content.ts` are used only behind that constant, so the bundler drops them (after a build, `grep -l polizza dist/assets/*.js` finds nothing). While the page is in Italian and the draft is unpublished, the English text carries `lang="en"` (`useContentLang`).

## Open decisions for the owner

1. **Label weight:** 700 ships; 600 and 800 were the alternatives.
2. **Block radius:** 8px ships; 6px was the alternative.
3. **Dark surface:** `#1E2226` is 1.31:1 against the ground. Darker and the grid lines disappear; lighter and the tone ramp flattens.
4. **Rails on reading pages** are decoration only. They could carry the facts or a section index on wide screens.
5. **The Yoga scene** shows the bare screenshot; the mockup had it in a laptop render that is not in the repo.

---
name: Federico Landorno — Portfolio
description: A single dark world — cool graphite ground, cool white ink, one electric violet, and a generative field.
colors:
  bg: "#16151B"
  bg-2: "#201F27"
  ink: "#F3F2F7"
  ink-2: "#A5A2AF"
  ink-3: "#8B8894"
  line: "rgba(243, 242, 247, 0.13)"
  line-2: "rgba(243, 242, 247, 0.26)"
  accent: "#9B7CFF"
  presence-product: "#5B9BFF"
  presence-engineering: "#49D6B8"
  presence-research: "#F5A524"
  presence-data: "#FF6FB5"
  on-accent: "#16151B"
typography:
  display:
    fontFamily: "Schibsted Grotesk, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.375rem, 5.4vw, 5rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.9vw, 2.375rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Schibsted Grotesk, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1.45vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  read:
    # reading surface only — case-study body text
    fontFamily: "Schibsted Grotesk, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 0.9rem + 0.55vw, 1.1875rem)"  # 17 → 19
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  body:
    fontFamily: "Schibsted Grotesk, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "Schibsted Grotesk, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0em"
  section:
    # reading surface only — case-study section headings
    fontFamily: "Schibsted Grotesk, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.1vw, 2.0625rem)"   # 24 → 33
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  sub:
    # reading surface only — case-study subsection headings
    fontFamily: "Schibsted Grotesk, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 1rem + 0.7vw, 1.5rem)"    # 19 → 24
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  metric:
    # the same face, tabular figures — there is no second family
    fontFamily: "Schibsted Grotesk, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    fontFeature: "tabular-nums"
rounded:
  frame: "0.25rem"   # --r,   4px
  panel: "0.5rem"    # --r-2,  8px
  icon: "0.75rem"    # app icons only, 12px
spacing:
  # rem on an 8px grid; 0.25rem is the only half-step. See "The Spacing Grid Rule".
  half-step: "0.25rem"                        # 4px, hairline offsets only
  stack: "0.5rem"                             # 8px, tight local stacks
  column: "52rem"                             # --col, the reading column
  gutter: "clamp(1.5rem, 4vw, 3.5rem)"        # 24 → 56
  masthead: "clamp(1rem, 2.4vw, 2rem)"        # 16 → 32
  hero-gap: "clamp(2rem, 4vw, 3.5rem)"        # 32 → 56
  row-gap: "clamp(2rem, 3.5vw, 3rem)"         # 32 → 48
  section-gap: "clamp(3rem, 6vw, 5.5rem)"     # 48 → 88
  end-gap: "clamp(3.5rem, 8vw, 7.5rem)"       # 56 → 120
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.body}"
    rounded: "{rounded.panel}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  link-underline:
    textColor: "{colors.ink-2}"
    typography: "{typography.body}"
    padding: "0 0 0.25rem"
  link-underline-hover:
    textColor: "{colors.ink}"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.body}"
    padding: "0"
  nav-link-hover:
    textColor: "{colors.ink}"
  callout:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.ink}"
    typography: "{typography.lead}"
    rounded: "{rounded.panel}"
    padding: "clamp(1.5rem, 2.4vw, 2rem)"
  art-frame:
    backgroundColor: "{colors.bg-2}"
    rounded: "{rounded.frame}"
    width: "100%"
  figure-frame:
    backgroundColor: "{colors.bg-2}"
    rounded: "{rounded.panel}"
    width: "100%"
  skip-link:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.body}"
    rounded: "{rounded.panel}"
    padding: "0.75rem 1.5rem"
  metric-figure:
    textColor: "{colors.accent}"
    typography: "{typography.metric}"
  app-icon:
    rounded: "{rounded.icon}"
    size: "3rem"
---

# Design System: Federico Landorno — Portfolio

## Overview

**Creative North Star: "The Measured Field"**

A sober personal portfolio built on a cool graphite ground, cool white ink, and exactly one electric violet — with a single field of generative line segments carrying all of the visual ambition. The field is the metaphor the whole system is named for: a field of scattered marks that a sweep crosses and settles into one direction, then lets drift back. Order emerging from a complex field is the claim the work itself makes, so the artwork makes it before any sentence does. Everything else in the system is engineered restraint: a five-token type scale, one typeface, a flat material with no shadow vocabulary at all, and radii small enough (4–8px) that no surface ever reads as a toy card.

The atmosphere is premium and cinematic meeting precise and engineered. The premium half comes from air and scale: a home page of 2.1 screens and 117 words, a hero where the artwork takes an equal half of the viewport and bleeds past the right gutter, and a display size that reaches 80px at 1440. The engineered half comes from how little is permitted: one accent, no second hue, no gradient, no blur, no lift. Components are tactile and responsive — a 1px button rise, a link underline that turns violet, a case row that dims its siblings to 0.4 on hover — but the tactility lives in colour and a single pixel of translation, never in a shadow.

This is a person seeking a role, not a studio selling services. The world was pinned from three references: kigo.studio for the headline-beside-dominant-artwork composition, roofstudio.tv for five-step type discipline and canvas craft, onlines.com.ar for radical restraint — their typographic confidence without their agency swagger. Confirmed rejections: two earlier discarded worlds (a cosmic violet/orange dark site; a drafting blueprint world in cyanotype and Overpass), and the generic AI-portfolio vocabulary of centred heroes, equal rounded cards, soft gradients and uppercase eyebrows.

**There is one theme, and it is dark.** An earlier build shipped a light default with a dark companion and an in-page toggle; the owner judged the light side unnecessary and it was removed. The ground is `#16151B` — a cool graphite, deliberately lifted off pure near-black — and never anything else: no `prefers-color-scheme` branch, no `data-theme` attribute, no toggle, no stored preference. `color-scheme: dark` on the root tells the browser to match its own form controls and scrollbars. The accent is `#9B7CFF`. **Near-black plus one electric violet is the most saturated pattern in generated portfolios**, and a move to a warm charcoal ground with a vermilion accent was built and then reverted by the owner — the violet stays. The ground carries the distance instead: `#16151B` is unmistakably a grey rather than a void, and every grey above it is neutral-to-cool, because a warm grey under a violet goes muddy. The accent measures 5.81:1 against this ground and 5.81:1 for the ground sitting on top of it, which is what an accent that is both a figure and a button has to do.

**Key Characteristics:**
- Cool graphite ground, cool white ink, one electric violet accent and no second hue
- One theme only: no light mode, no toggle, no theme state anywhere in the code
- Five type tokens per ramp, one typeface, tabular figures where numbers are the proof
- Flat by construction: zero `box-shadow` in the system, depth by tone step and hairline only
- One ambitious moment (the hero's live generative canvas); everything else is sequenced reveals
- Rows and bleeds instead of a grid of equal rounded cards
- Every colour is a semantic token; no component writes a literal hex

## Colors

A two-value ground (page and one tone step up), a three-step ink ramp, two hairline alphas, and one accent. There is no second palette: this set is the system, in the only theme it has.

### Primary
- **Electric Violet** (`#9B7CFF`): the only accent in the system. It carries the contact button, the skip link, the focus ring, text selection, the sparse accent segments in the generative field (roughly one segment in eleven), the metric figures in case rows, inline links in prose, and the hover border of every underlined link. Measured 5.81:1 against the page, and 5.81:1 again for the ground that sits on top of it.

### Neutral
- **Cool Graphite** (`#16151B`): the page ground. Nothing is layered on top of it except one tone step.
- **Quiet Step** (`#141418`): the single raised surface. It is the whole elevation vocabulary — callouts, art frames, figure frames, table body rows.
- **Cool White Ink** (`#F3F2F7`): headings, strong text, the wordmark, first table column, and the base stroke colour of the generative field.
- **Reading Grey** (`#A5A2AF`): body copy, leads, list items, navigation, and all secondary links. Most prose on the site is this value, not full ink. 7.25:1.
- **Quiet Grey** (`#8A8A95`): section labels, case metadata, figure captions, table headers, case-study subtitles. 5.79:1.
- **Hairline** (`rgba(244,244,245,0.13)`) and **Hairline Strong** (`rgba(244,244,245,0.26)`): dividers, scrollbar thumbs, and the resting underline on text links.

Every text pair above passes WCAG AA; the figures are measured, not estimated.

### Named Rules
**The One Voice Rule.** There is exactly one accent. Vermilion appears on roughly a tenth of any screen and never acquires a partner hue, a tint ramp, or a warm counterpart. If a new element needs emphasis, it gets ink weight or a tone step — not a second colour.

**The Presence-Colour Exception.** The hero's collaborator cursors are the single sanctioned break in that rule, and the only one. In a multiplayer cursor, colour *is* identity: four presence colours — Product `#5B9BFF`, Engineering `#49D6B8`, Research `#F5A524`, Data `#FF6FB5` — name four people who are not the author, and flattening them to violet would delete the idea rather than discipline it. They are confined to the cursor layer: a pointer glyph, its label pill, and a 7%-opacity halo. They never touch a surface, a control, a text colour, a border or a chart, and no fifth presence colour may be added. The labels are roles, never invented names.

**The Semantic-Only Rule.** No component ever writes a literal colour. Every surface, stroke and glyph reads `var(--bg)`, `var(--bg-2)`, `var(--ink)`, `var(--ink-2)`, `var(--ink-3)`, `var(--line)`, `var(--line-2)`, `var(--accent)` or `var(--on-accent)`. Even the Canvas2D artwork samples the tokens from the computed root style rather than hardcoding its strokes. The rule survives the removal of the second theme: it is what keeps the palette changeable from one block of CSS.

**The Two-Ground Rule.** The page has one ground and one step above it. There is no third surface level; anything that needs separation gets `bg-2`, a hairline, or whitespace.

## Typography

**Two ramps, one per mode.** The home is Experience: one title, one section, one lead — 78 / 38 / 21 / 16, ratios 2.05 / 1.82 / 1.31. A case study is Read, and it differs in two ways that both matter. It carries **four to seven** section headings against one title, so reusing the home's `--t-head` (38) put sections at 1.53x below a 58px title and they competed with it. And it is read top to bottom rather than scanned, so **16px is the wrong body size** — that is an interface size. The reading ramp is **58 / 33 / 24 / 19** at desktop and **32 / 24 / 19 / 18** at phone width: ratios 1.76 / 1.38 / 1.26, tightening downward like the home ramp. `--t-read`, `--t-sub` and `--t-section` belong to this surface and are never used on the home.

Raising the body forced the rest: at a 19px body the old 20px subsection heading would have sat 1.05x above the text and stopped reading as a heading at all. A ramp moves as one piece or not at all.

**One column, and it is `--col`, not `--measure`.** A `ch` measure resolves against each element's *own* font-size, so one token produced a different column for every size on the page: a 29px heading given `62ch` claimed ~1800px and ran to the container, 1008px of heading over a 658px column of prose — two page widths at once. Worse, that 658px was **61 characters a line inside a 1008px content band**, below the 65–75 a measure wants, with 350px — a third of the width — dead on the right.

Everything read in sequence now shares `--col` = `52rem` (832px): prose, lists, section and subsection headings, callouts, captions and the page subtitle. At the 19px desktop body that is **72** characters a line; at the 18px phone body, 74. (This document and the stylesheet both used to say 65ch. Nobody had measured it: `1ch` of Schibsted Grotesk at 19px is 11.6px, so 832px is 72ch. The number was wrong; the column is not — 72 is inside the range, and the figure has been corrected in both places rather than the column changed to match a claim.) Both inside the range, where a `ch` value drifts out of it as soon as the font size moves. Measured after: every one of them spans 216 → 1048, and the dead band fell from 350px to 176px. The page title is deliberately wider, at `22ch`; figures, tables and screen strips are still allowed past `--col` entirely — that is what the wider container is for.


**Display Font:** Schibsted Grotesk (variable, 400–900, with `system-ui`, `-apple-system`, `Helvetica Neue`, Arial)
**Body Font:** Schibsted Grotesk — the same family. **There is no second family.** 100% of the type on the site is this face.

**Character:** A single variable grotesque doing all the talking, tightened hard at display size (−0.04em) and relaxed to neutral at body size. The effect is engineered rather than expressive: the type never performs, so the generative field can.

### Hierarchy
- **Display** (600, `clamp(2.375rem, 1.375rem + 4.1vw, 5rem)`, 0.98 line-height, −0.04em): the home `h1` only, and the case-study `h1` at a deliberate step down (`clamp(2rem, 1.375rem + 2.5vw, 3.625rem)`, capped to a 22ch measure so sentence-length titles land on two lines). Measures 80px at 1440, 64px at 1024, 38px at 390.
- **Headline** (600, `clamp(1.5rem, 1.1875rem + 1.34vw, 2.375rem)`, 1.06, −0.025em): section `h2`s, the contact closing line (capped at 20ch), and case-row titles (1.08 line-height). 38 / 33 / 24.
- **Lead** (400, `clamp(1.125rem, 1.0625rem + 0.29vw, 1.3125rem)`, 1.25): the hero subparagraph (46ch max), case-study subtitles, `h3`s, and callout text. 21 / 20 / 18. The hero's is the owner's own second sentence, verbatim. It opens on the computer-science background because that is the evidence under *engineering* in the line above it — the heading makes a claim about bridging three concerns and the paragraph has to show why the engineering end of it is credible.
- **Body** (400, 16px, 1.6, colour Reading Grey): all prose, list items, buttons, links, table cells. Paragraph rhythm is 1.1em between siblings.
- **Label** (500, 13px, and **14px below 600px**): case metadata, figure captions, and table headers (+0.04em, Quiet Grey). The home work section carries no visible label — its heading was removed as an eyebrow and the section is named by `aria-label` alone.
- **Metric** (700, head size on the home rows, tabular figures, violet): numbers only.

### Named Rules
**The Anchored Clamp Rule.** Every fluid type step is `clamp(min, rem + vw, max)`. **A bare `vw` middle term is a defect, not a shorthand.** With nothing but `vw` between the ends, the page stops being a layout that adapts and becomes a linear photocopy of itself: measured across fifteen widths, `--t-lead` sat on its 17px floor from 320px *all the way to 1180px*, so every laptop in the world got the phone size, while `--t-display` held 38px flat to 700px and then stretched to 80px, so a 1024px window rendered a 69% reduction of the 1440px design. The `rem` term is the floor the text never drops below; the `vw` term is the growth above it. Each pair is solved through two real points — a 390px phone and a 1440px desktop — so the size is right at both ends *and* on the laptop between them, which is the width this portfolio is actually opened at.

Nothing in the repaired ramp came out smaller than it was. Floors are equal or one step up (`--t-lead` 17→18, `--t-read` 17→18, case `h1` 30→32); only the middle of the range moved. Verified by sweep: the home `h1` now climbs continuously 38 → 80 instead of standing still for the first 380px of the range, and the hero lead reaches 20px at 1024 where it used to reach 17px.

**The Five-Step Rule.** Five size tokens exist — display, head, lead, body, label — and nothing between them. A new surface picks a step; it does not interpolate one.

**The One Family Rule.** There is no monospace. Numbers that are the proof get `font-variant-numeric: tabular-nums` and the accent, in the same face as everything else. The system used to pair the sans with a mono for metrics; on a page that contains no code, a monospace is a costume for "technical" rather than a tool, and dropping it removed a family, a font request, and a tell.

**The No-Eyebrow Rule.** Nothing sits above a heading. Client and discipline go *under* the title as metadata in Quiet Grey — the case layout's prop comment states it explicitly. There is no uppercase kicker, eyebrow, or small-caps pretitle anywhere in the system, and none may be added.

## Layout

Two layout models, one per surface class.

**Home surface** (`.fl-*`): full-bleed, no max-width container. A fluid gutter of `clamp(1.5rem, 4vw, 3.5rem)` is the only horizontal constraint. The hero is a two-column grid at `1fr 1fr` with a `clamp(2rem,4vw,3.5rem)` gap and `min(78svh, 47.5rem)` minimum height. The tracks are `1fr`, never `minmax(0,50%)` twice: two 50% tracks plus a gap ask for 100% + gap, which engines resolve differently and can push the page into a horizontal scrollbar by exactly the gap width. The artwork **stays inside the page gutter** — it used to cancel the gutter with a negative margin and bleed to the viewport edge, which left no margin for error against a scrollbar and put a hard edge flush with the window. Work is a one-dimensional list of rows — `minmax(0,19rem) minmax(0,1fr)`, image left, copy right, `clamp(2rem,3.5vw,3rem)` between rows — not a card grid.

**Reading surface** (`.fl-read*`): centred, 70rem max container, same fluid gutter. Prose, headings, lists, callouts and captions all share the `--col` reading column (52rem); figures, tables, icon grids and screen strips are deliberately allowed to exceed it. Sections are separated by `clamp(3rem,6vw,5.5rem)`.

**Responsive: three ranges, and each one changes the composition rather than scaling it.** Size is the type ramp's job and it covers the whole span continuously (see The Anchored Clamp Rule); a breakpoint exists only for a decision that cannot be interpolated — how many columns a section has, which way a figure sits, what is allowed out into the gutter.

| Range | What changes |
|---|---|
| ≤ **1079px** | The hero collapses to one column, copy first, artwork second at `min(48svh, 25rem)`, and the hero's minimum height is released. |
| ≤ **900px** | Case rows stack, image above its own title, capped at 26rem. |
| ≤ **600px** | Phone. **The hero artwork is removed** — see the Segment Field. The case meta line steps up to 14px; the data tables are let out into the page gutter so the fact that they scroll sideways is visible at the edge. |

The hero breakpoint was at 900px and is now 1079px. Two columns want about 1080px before the copy track is wide enough to hold a display heading: measured at 1024px, a ~420px track, 64px type and an `h1` **four lines deep**, where the same heading stacked at 900px ran three.

**The breakpoint block lives at the end of `src/index.css` and must stay there.** These rules carry no extra specificity and win on source order alone. Written higher up, `.fl-table-wrap { margin-inline: … }` lost to the plain `.fl-table-wrap { margin: … 0 }` further down and the phone bleed silently did nothing — measured, the table still sat inside both gutters while the CSS looked correct.

Verified by measurement sweep at 320 / 360 / 390 / 414 / 480 / 600 / 700 / 768 / 834 / 900 / 1024 / 1180 / 1280 / 1440 / 1728: zero horizontal page overflow at every width, zero console errors.

**Rhythm:** every vertical measure is a clamp pair, not a fixed step — masthead `clamp(1rem,2.4vw,2rem)`, hero bottom `clamp(3rem,7vw,6.5rem)`, contact top `clamp(3.5rem,8vw,7.5rem)`. Tight local stacks use `0.5rem`.

**Spacing** is governed by The Spacing Grid Rule — see Named Rules below. It is the one rule in this document with an automated check behind it.

**Motion:** exactly one ambitious moment, the hero canvas. Everything else is a sequenced reveal — 1rem rise and fade over 0.7s on `cubic-bezier(0.16,1,0.3,1)`, triggered at 15% intersection with a −6% bottom margin, staggered by an explicit per-element delay (80–90ms steps). State transitions are 0.18–0.25s. The hidden start state is applied by script only when motion is welcome, so a reduced-motion visitor or a no-JS visitor gets the finished page; under `prefers-reduced-motion` all durations collapse to 0.001ms and the canvas draws one static frame and never starts its loop.

### Named Rules

**The Spacing Grid Rule.** Every length in this system is **rem on an 8px grid**, and `0.25rem` (4px) is the only half-step. This holds on every surface — the home, the three case studies, About — without exception and without a second scale for "content" pages.

*The scale.* 0.25 / 0.5 / 1 / 1.5 / 2 / 2.5 / 3 / 3.5 / 4 / 5.5 / 6 / 6.5 / 7.5rem. Two radii, `--r` (4px) and `--r-2` (8px); there is no third. The 4px half-step is reserved for hairline offsets — a focus ring's gap, the space under an underlined link — and is not a general spacing value.

*Why rem.* `html` carries no `font-size` override, so 1rem resolves to the browser's own default. A visitor who enlarges their text scales the entire layout with it. Written in px, the page would ignore that setting. Type steps are in rem for the same reason; `--t-body` is `1rem`, which is 16px by default but is not pinned to 16px.

*Where spacing may be declared.* In `src/index.css`, and nowhere else. **The case-study pages hold no spacing of their own** — `N4m`, `D4next`, `Electrolux` and `About` carry only `.fl-*` class names, no Tailwind spacing utilities and no inline style objects. This is the mechanism that makes the rule hold across surfaces: there is one stylesheet to audit, not five. A `pt-7` or a `style={{ marginTop }}` in a page is a violation even when its value lands on the grid, because it moves the decision out of the system.

*What the grid binds.* The **endpoints** of every `clamp()`, not the fluid value between them. The `vw` term is continuous by definition, so at intermediate widths the computed spacing lands off-grid — measured in-browser at 100% on-grid at 390px, 94% at 1440px, and 57% at 1280px, where most clamps sit mid-range. This is an accepted trade, not an oversight: spacing that flows without jumping is worth more here than grid adherence at every pixel. Converting the clamps to stepped breakpoint values was considered and **rejected**; do not "fix" it.

*Exempt, deliberately.* Border and outline **widths** are not spacing. The 1079 / 900 / 600px breakpoints are not spacing. `sr-only` uses −1px insets by definition. `.dsx-switch::after` offsets by 2px because that is centring arithmetic, (16 − 12) ÷ 2, not a chosen value. And the `FormComparison` exhibit keeps its off-grid values on purpose: `.lg-*` is the Net4Market legacy form and `.ds-*` quotes the client's real tokens, so the hand-written 6px / 5px / 3px / 2px **is the evidence** the component exists to show. Normalising it would turn a demonstration into a decoration. Only the widget's own chrome (`.dsx-*`) follows the grid, through its local `--s1`…`--s6` scale. The file is listed in `.impeccable/config.json` under `detector.ignoreFiles` for the same reason — that entry takes a bare path and has no field for a justification, so the justification lives in the component's own header and here. **`npm run audit:spacing` still reads the file and still has to pass**, so the exemption covers the colour and type rules a detector cannot reason about, not the spacing grid. Roboto is exempt for the same reason and is registered in `.impeccable/config.json` with its reason, not silently suppressed.

*Enforcement.* `npm run audit:spacing` reads every `.css` and `.tsx` file under `src/`, including stylesheets embedded in template literals, and exits non-zero on any violation. It catches off-grid px, off-grid rem, any `em`, Tailwind spacing utilities (including arbitrary values like `gap-[13px]`) and inline style objects. Every exemption above is encoded in the script with its reason attached, and the script reports the exemption count so a silently growing list is visible. It must print **PASS** before any commit that touches a stylesheet or a page.

**The 44px Target Rule.** Every pointer target is at least 44x44, and the way it gets there never moves the type. Four controls were under it at *every* width, not only on phones — the nav button at 39x25, and the underlined text links at about 30px tall. Growing the elements would have pushed each underline off its baseline, so the visual box is left exactly as drawn and `.fl-tap` adds an invisible `::after`, centred on the element, sized `100%` with a `2.75rem` floor. Verify it by hit-testing, not by reading a bounding box: `getBoundingClientRect` does not see the pseudo-element, so a measurement will say the control is still 39x25 while `elementFromPoint` 21px away correctly returns the link.

**The Link Names Its Destination Rule.** A link that wraps a block of content carries an `aria-label` naming where it goes. The three case rows had accessible names of 19 to 20 words, with the title, metric and meta concatenated without separators — `"shared language600+ disconnected files…"` — which is what a screen reader announces in a list of links. The visible content is unchanged; only the name is.

**The New Tab Is Announced Rule.** Every `target="_blank"` says so, through the `aria-label` where one exists and a `sr-only` span where the text stands alone. Opening a tab without warning takes the back button away from someone who cannot see that it happened.

**The Name Is In The Heading Rule.** The hero `h1` carries two sizes: `Ciao, I’m Federico Landorno!` at head size with the name in the accent, then `Product Designer bridging users, business and engineering.` at display size. It is one heading, not a line above one — a smaller line above a heading is a kicker, which the craft floor bans outright and which no brief earns back. Being inside the `h1` is what makes it copy rather than a label. The two parts are separated by an explicit space in the JSX: without it the heading's text content runs them together as `Landorno!Product`, which is what a screen reader announces.

`Ciao` is not a slip and is not to be anglicised. It is the one Italian word on an English site, it is the only thing in the hero that could not have been written by any other applicant, and it is the owner's own wording.

**Where it breaks, and why there.** The copy is the owner's own wording, supplied on 2026-11-05, including the size he marked for each line. Set whole at display size the two sentences ran to **16 lines at 1440** and could not stay in one piece, so the only decision left was where the break falls — and it falls where he put it: after the greeting, so the loud type opens on `Product Designer` rather than on `Ciao`.

An earlier version of this heading broke after the role instead, with `product designer` demoted to head size. That reading — that the role is the least distinctive half and should be the quiet one — was overruled by the owner, and the reasoning was wrong anyway once the role stopped standing alone: `Product Designer bridging users, business and engineering.` is not a job title, it is a claim, and claims go in the display line.

Measured across the ramp, with the heading block height and the first case row's position:

```
1440   display 80px   4 lines   block 493px   button y=727   first case y=918
1280   display 74px   5 lines   block 541px   button y=726
1024   display 64px   2 lines   block 290px   button y=448   (single column from 1079 down)
 768   display 53px   3 lines   block 310px   button y=441
 390   display 38px   4 lines   block 320px   button y=443   first case y=539
 320   display 38px   5 lines   block 412px   button y=535
```

Zero horizontal overflow at every width, and the hero clears the fold everywhere.

**`Product Designer` splits across two display lines between 1080 and 1365, and that is accepted.** The role needs 97% of the half-width copy column at 1440 and 108% of it at 320: the display clamp has a constant term (`1.375rem + 4.1vw`) so the type shrinks more slowly than the column does, and a 16-character phrase that just fits at the top of the ramp cannot fit further down. Three fixes were measured and all three cost more than the flaw:

- **Shrink the display ramp ~7%** so the role always fits. It buys two words and spends the page's only loud voice.
- **Widen the copy column to `1.12fr 0.88fr`.** The art column drops under `LABEL_MIN_W = 510`, so the canvas loses `Research / Product / Data / Engineering` from 1080 all the way to ~1315 — the labels that now illustrate the headline.
- **Stay single-column until 1365.** It takes the two-column hero away from every 1280 laptop.

Looked at rather than reasoned about, the 1280 setting reads as a stacked editorial headline, not as a broken word. It stays.

A separate, pre-existing consequence of the same arithmetic: between 1080 and ~1160 the two-column art track is narrower than 510px, so the field renders without labels. Narrow band, known, not introduced here.

**`text-wrap: balance` is overridden on the hero `h1` below 600px.** Balance is right for every heading on the site and right for this one down to 768, where it keeps `Product Designer` whole. At 390 it sets `Product Designer / bridging users, / business / and engineering.` — 585 / 465 / **300** / 565px. It is avoiding a short *last* line and paying with a short *middle* one, which is the worse trade: a short last line is the rag, a short middle line is a hole the eye falls into. `text-wrap: pretty` moves it back to the end, and in a browser without `pretty` the initial `wrap` produces the same break.

**No market segment in the positioning.** The owner's own bio says "B2B products" and the hero used to say "working in B2B product"; both are deliberately dropped, from the copy and from the `description`, `og:description` and `twitter:description`. The portfolio exists to get him hired and naming a focus area narrows where he can be considered. Case studies still name their clients' markets accurately — `B2B SaaS`, `B2B2C` — because that is evidence about the work, not a claim about him.

**The One Ambitious Moment Rule.** The hero's generative canvas is the only thing in the system allowed to animate continuously. Any other motion is a one-shot reveal or a state transition under 0.25s.

**The Rows-Not-Cards Rule.** Page structure is rows, lists and bleeds. A grid of equally sized rounded cards is not a layout available to this system.

## Elevation & Depth

This system has **no shadow vocabulary at all**. There is not one `box-shadow` declaration in the stylesheet, and none may be added. Depth is carried by three devices only: the single tone step (`bg-2`) for any surface that must separate from the page; hairline borders at 10%/22% alpha for dividers and resting link underlines; and whitespace, which does most of the work. The hero artwork gets its presence from scale and bleed, not from lift.

The only "raised" gesture in the system is a 1px `translateY(-1px)` with 0.92 opacity on the primary button hover — a press-back, not an elevation.

### Named Rules
**The Flat-Material Rule.** Surfaces never lift. No `box-shadow`, no `filter: drop-shadow`, no hard offset shadow, no glass, no `backdrop-filter`, no decorative gradient. If something needs to come forward, it changes tone or gains a hairline.

## Shapes

Radii are small and functional, chosen so that nothing reads as a rounded card: 2px on the focus ring, 4px on the home case-study art frame, 6px on controls and raised surfaces (primary button, skip link, callout, figure frame, table ends), 8px on prototype screen images, 12px on the 48px competitor app icons (the one place where a radius is imitating an external artifact rather than expressing the system).

Form language is rectilinear and panel-based. Image and art surfaces are fixed-ratio frames — 16:10 on home case rows, 16:9 on case-study figures — filled by `object-fit: cover` or by the generative field with `preserveAspectRatio="xMidYMid slice"`. Borders are hairlines or nothing; there are no coloured rules, no pills, no circles except the round line caps inside the generative field.

### Named Rules
**The Small-Radius Rule.** Nothing exceeds 8px except the 48px external app icons. A radius large enough to read as a bubble or a pill is out of the world.

## Components

Components are tactile and responsive — they answer the pointer in colour and at most one pixel of movement.

### Buttons
- **Shape:** softly squared (6px radius).
- **Primary:** violet ground, `on-violet` text, body size at weight 500, `0.75rem 1.5rem` padding. One per screen: the contact action. It is the only filled element in the system.
- **Hover / Focus:** rises 1px and drops to 0.92 opacity over 0.18s on `cubic-bezier(0.16,1,0.3,1)`. Focus is the global ring: 2px solid violet at `0.25rem` offset.
- **Ghost / Secondary:** there is no secondary button. The sibling action is an underlined text link (`.fl-link`): Reading Grey text on a `line-2` hairline underline, 2px below the baseline; on hover the text goes full ink and the hairline turns violet.

### Cards / Containers
- **Corner Style:** 4px on the home case art frame; 6px on the callout and the case-study figure frame.
- **Background:** `bg-2` always. Never the page ground, never a tint of the accent.
- **Shadow Strategy:** none. See Elevation & Depth.
- **Border:** none; the tone step is the boundary.
- **Internal Padding:** callouts use `clamp(20px, 2.4vw, 28px)`. Art and figure frames have no padding — the content fills the frame edge to edge.

### Navigation
**One navigation, on every surface, and it is the only masthead.** The site used to carry the wordmark at the top: plain text on the home page, a link back everywhere else. The same words meant two different things depending on where you stood. That is gone — the name now lives inside the hero heading, and `SiteNav` is the only chrome.

It is centred and sticky, and **it changes shape rather than appearing**: bare and spread at the top, drawing itself into a filled pill of `--bg-2` on a hairline once there is text underneath it. It is never glass. The craft floor refuses blur as decoration, and the glassmorphic floating pill is the single most borrowed navigation of 2026 — this one earns its shape from the `--bg-2` tone step the system already owns.

**It is always present, and nothing sits behind it.** An opaque pill over a centred reading column does cover words as they pass beneath it — swept across a case study it overlapped prose at 15 of 19 scroll positions at 1440 and 23 of 26 at 390. Two fixes were built and both were rejected by the owner: retracting the bar on the way down (it should stay visible) and laying a gradient scrim of the ground colour behind it (it read as a dark band fixed to the top, and it cost the reader the first 96px of every viewport). The bar floats over live text instead, and text runs to the top edge of the window. The occlusion is the accepted cost of the pattern: it is a 241–249px band, the pill is opaque so nothing shows through garbled, and a reader loses at most a word for the moment it passes. Do not reintroduce a scrim or a retraction without asking — both have been tried and turned down.

Because the pill floats on live text rather than on flat ground, its condensed border is `--line-2` rather than `--line`: 13% is not enough edge to hold the shape against whatever is moving behind it.

**The threshold is measured, not chosen.** It used to be a hard-coded `CONDENSE_AT = 180`, and 180 was correct for exactly one case — the home page at 1440 — because that is the one it was tuned against. Everywhere else the first heading reached the bar long before 180px of scroll and spent the difference sliding behind bare, unbacked links, which is the worst state the bar has: white text over white text with no fill to separate them.

| surface | width | text reaches the bar at | bare overlap at the old 180 |
|---|---|---|---|
| home | 390px | 44px | **136px** |
| home | 1024px | 68px | 112px |
| case study | 390px | 52px | 128px |
| case study | 1440px | 113px | 67px |

`SiteNav` now computes the distance from the bottom of the pill to the top of the page's own `h1`, less an 8px lead-in so the fill is already there when the text gets there, with a 16px floor, a 240px ceiling against a failed measurement, and 16px of hysteresis so the two states cannot strobe when a trackpad holds the boundary. It re-measures on route change and through a `ResizeObserver` on `document.body` — one observer rather than a `resize` listener, because the body also changes size when the web font swaps in, and that moves the heading too.

The heading's position is read by walking `offsetTop` up the `offsetParent` chain, **not** with `getBoundingClientRect`. The rect includes transforms, and on mount the heading is still held at `translateY(1rem)` by the reveal, so every rect-based threshold came out 16px too late — the exact failure the measured threshold exists to remove.

The morph is a **0.22s state transition, not continuous animation**, which is what keeps it inside The One Ambitious Moment Rule. Under `prefers-reduced-motion` it snaps.

Items are `My work · About · Contact`, and **the words never change between surfaces**. The first item briefly read `Work` on the home page and `All work` on a case study — one control wearing two names, which is exactly the ambiguity the wordmark had before it. It now carries one label with one meaning, *take me to the list of projects*: on the home page it scrolls to the list; anywhere else it navigates home and lands on it, carried by router state so `ScrollToTop` does not race it. `Contact` scrolls to the page's own `#contact` footer on every surface. No hamburger at any width: three items fit a 216px pill at 390px. `nav` sits outside `<main>`, which is where a banner belongs and which is also what makes the skip link skip something.

In-page jumps are buttons, not fragment links, and this is not negotiable: the app runs on `HashRouter`, so `location.hash` is the route. An `href="#work"` rewrites `#/` to `#work`, the router finds no matching route, and the page empties. The two "Work" triggers call `scrollToSection("work")`, which moves focus to the section (`tabIndex={-1}`) with `preventScroll`, then scrolls — smooth at ~465ms, instant under `prefers-reduced-motion`. Focus moves first so a keyboard visitor's next Tab lands on the first case rather than back at the top; because the target is non-interactive, `:focus-visible` shows the violet ring for keyboard activation and nothing for a mouse click. The ring is inset (`outline-offset: -0.25rem`) so a full-bleed section cannot clip it, and `scroll-margin-top` leaves air above the first row. The cost of this approach is that `#work` is not linkable or openable in a new tab — the price of hash routing, not a detail to fix by restoring an `href`.

### Case Row
The home work list's unit: a 16:10 art frame (max 19rem wide) beside a stacked title / metric / meta group. The metric line pairs a violet figure in tabular figures with a Reading Grey note; the meta line is 13px Quiet Grey carrying client and discipline. The title is at full `--ink` and is an `<h3>` — see below.

The frames hold seeded generative fields as placeholders. They were removed once, for reading as three near-identical textures rather than as three projects, and restored at the owner's request: real mockups are coming and the slot is being held.

### Figure
One figure treatment across the reading surface: a 16:9 `bg-2` frame holding either a real lazy-loaded image (`object-fit: cover`, or `contain` when the image must show whole) or the static generative field as a placeholder, plus an optional 13px Quiet Grey caption clamped to the reading measure. Swapping placeholder for real artwork is a one-line change.

### Signature Component: The Segment Field
The system's signature exists in two forms built from the same geometry, and it is the only imagery the project owns.

The field **has no edges of its own**, and **it is a circle at every width**. A radial mask on `.fl-canvas-wrap` dissolves it into the page: `radial-gradient(circle closest-side at 50% 50%, #000 82%, transparent 100%)`.

`circle`, not a percentage pair. A percentage-sized radial gradient takes the box's aspect ratio, so the field was an **ellipse** that squashed and stretched with the layout — a tall oval at 1440, a wide one stacked on a tablet. It now stays round and narrowing the window makes the circle smaller rather than oval. `closest-side` is the size that keeps the fade finishing inside the box: the radius is the distance to the nearest edge, so the gradient reaches zero exactly there and never leaves a cut rectangle — the failure that appeared when the earlier full-bleed mask (`115% 96% at 72% 50%`) was kept after the artwork was pulled inside the gutter. Stacked, `.fl-hero-art` is capped at **34rem and centred**, because a circle inscribed in a 749 × 464 band is only as wide as the band is tall and leaves 142px of dead page on each side. 34 and not 30: at a 30rem cap the canvas came out 509px, one pixel under the 510px label floor, and every tablet silently lost its four names. The cap and `LABEL_MIN_W` are one decision.

The 82% solid stop is the other half of the constraint: the roaming cursors carry role labels, and a fade starting nearer the centre dissolves them mid-word.

**Fitting the cast inside the circle.** The four anchors are fractions of a rectangle and the mask is a circle inscribed in it, which is smaller — so the composition no longer fitted its own frame. Two things follow, and both are arithmetic, not taste.

*The label flip is a radius test on both axes.* The old test compared `x` against 91% of the width. Measured at 1440, "Engineering" sat at 86% of the width — inside that limit — and at **97% of the radius**, and rendered as "Engineerin". Flipping left could not save it either, because the excursion that took it out there was vertical. `drawCursor` now measures the furthest **corner** of the pill against the centre and, when the default below-right placement breaches `SOLID × R`, picks whichever of four placements lands nearest the centre. `SOLID` must track the mask's solid stop; they are one decision.

*`CAST_FIT` (0.66) is derived.* Every settled station and every roaming offset is scaled toward the centre by it; the fly-in is deliberately not, so the four still enter from off the frame. Each cursor's radius has a supremum — its anchor's offset from the centre plus the **full** roaming amplitude, since the three sinusoids per axis are incommensurable and so do reach the sum of their amplitudes, and the centre visits only move inward. Worst case is Engineering at **1.055R**. Allowing ~0.09R for the arrow and the pill corner, a label clears the 82% stop only while `1.055 × CAST_FIT + 0.09 ≤ 0.82`, so CAST_FIT must not exceed 0.69.

**Sampling is not a check here, and this is worth remembering.** An earlier pass sampled eight moments at CAST_FIT 0.82, measured a worst pill corner of 83% and passed it. The true bound at that value is 96%. The four visit periods are mutually incommensurable by design, which is exactly what makes the worst case unreachable by sampling — the same property that makes the loop unfindable makes the bug unfindable. Redo the arithmetic when the anchors, the amplitudes or the mask stop change.

**FieldCanvas** (hero, live): a Canvas2D field of short line segments on a staggered grid — spacing `clamp`ed to `w/26` between 20 and 34px, segment length 0.52× spacing, 1.25px round-capped strokes. Orientation comes from a smooth three-term trigonometric field. Base segments are `ink` at 0.46 alpha; a deterministic hash makes roughly one segment in eleven `violet`. Any number of *influencers* bend the field: inside a `clamp(70, 0.24w, 230)` radius, segments rotate tangentially around each one and brighten.

The influencers are the piece's subject. A violet lead cursor enters from the lower left at **7× size**, its **"Join me!"** label legible from the first frame, and scales down along its travel on a power-1.5 curve so the shrink lags the movement and it is still enormous as it crosses the middle of the field. Its pull on the field scales with it, so the arrival bends a correspondingly wider patch and reads as presence rather than as a big drawing.

Reaching full size at 1.15s **is** the cue: there is no hold, and it detonates 60ms later. The burst is the loudest thing in the system and is meant to be — a 180ms white-hot core, three rings leaving at staggered speeds in violet and two presence colours, 64 colour-coded particles, and a shockwave that the field itself carries: for 820ms an expanding wavefront snaps every segment within 95px of it to point away from the blast and brightens it, so the explosion travels *through* the artwork instead of sitting on top of it. Four collaborator cursors then fly in from the edges in 420ms each, staggered 80ms, and are all in by ~1.7s.

**They never park.** Each then roams its own path around its anchor — three summed sinusoids per axis, amplitudes 8–11% of the box, their speeds in deliberately irrational-ish ratio (1 : 2.37 : 0.31) so the path never closes and the eye cannot find the loop. The background field's three phase speeds are detuned the same way, for the same reason. Each clicks on its own beat (2.3s to 3.7s apart), the ring expanding over 440ms. A click leaves a 620ms expanding ring in that cursor's colour at the point where it acted, and briefly deepens that cursor's pull on the field by 55%, so the field visibly answers the work. Each carries a 24% colour halo, bright enough to claim territory.

**And each one goes to the centre alone.** Every cursor has its own visit cycle — 19.3s, 26.9s, 23.3s and 31.7s, with staggered phases — so they take turns rather than performing a synchronised convergence, which would read as choreography instead of four people working. A visit is 1.3s in, 900ms of actual work at the centre (a burst of clicks, ~280ms apart, which is what separates a visit from a fly-past), then 1.5s back to its zone, halo lifting from 24% to 38% while it is there.

Measured over five minutes: **78% of the time nobody is at the centre, 20% exactly one, 1.7% two overlapping, and never three or four.** Because the four periods are mutually incommensurable, the combined pattern does not repeat for over 100,000 hours — the loop is unfindable by construction, not by being long. The field organises locally under all of them, so the longer they stay the more order appears — the page's claim, acted out rather than asserted. The visitor's own pointer joins as another influencer, and a click replays the sequence from the top.

#### On a small canvas

**Everything in this piece except the field grid is authored in absolute pixels, and the canvas is fluid.** That mismatch is the whole of what went wrong on a phone, and it is worth stating as a general hazard: a drawing whose furniture is written in literals does not scale, it just gets proportionally bigger as the frame shrinks.

| | phone (canvas 363px) | desktop (canvas 674px) |
|---|---|---|
| `"Engineering"` pill (84px on every device) | **23%** of the width | 12% |
| four pills end to end | **71%** | 38% |
| influence radius | **36%** | 24% |
| four cursors' nominal reach | **196%** of the box | 63% |

At 390px two of the four labels overlapped, and with the influence radius floored at 130px — which binds for any canvas under 542px — every segment was being pulled every frame, so there was no calm field left for order to emerge *against*. The piece's one claim was invisible on the device it was most often opened on. It was never a performance problem: measured at **60fps with the CPU throttled 6×**.

Two constants fix it. **`REF_W` (680) and `UI_MIN` (0.55)** give a `ui` multiplier, `clamp(w / REF_W, 0.55, 1)`, applied to the arrow, the pill, the label text, the click ring, the burst flare and the particle sizes — one multiplier inside the cursor's own transform, so the pill and its text follow the glyph without a second set of numbers. **`LABEL_MIN_W` (510)** takes the four names off below that canvas width, leaving the four their colours — in a multiplayer cursor, colour IS identity. It is derived, not picked: the label is 12px × `ui`, and `ui` at 510px is 510/680 = 0.75, so the text lands at exactly 9px. Below that it is not a label, it is a smudge, and scaling the pill only makes it smaller. The lead's **"Join me!"** stays at every size — it arrives oversized, it is legible the whole way, and it is the only copy in the piece. The influence floor dropped from 130 to 70, which stops binding above 292px and holds the reach at 24% of the width everywhere.

#### Not on a phone

**Below 600px there is no artwork.** `.fl-hero-art { display: none }`, and that is the end of it.

Three arrangements were built for this range and the owner rejected all three: a block under the copy, the same block with the cast scaled to fit it, and a ring behind the copy acting as a container for the words. Each was a worse answer to the same question, and the question turned out to be wrong. **The piece is a desktop piece.** It wants a pointer to be joined — measured, a finger drag yields one `pointermove` before the browser takes the gesture — and a frame wide enough for four people to work in without crowding each other. A phone gives it neither.

What the phone gains is the argument. Measured at 390 × 844, the first case row and its metric moved from below the fold to **y=502**, inside the first screen, and the page lost 288px — which is what Product Principle 1 asks for in the first place: *the work and its impact must register in the first viewport.*

`display: none` rather than an empty element, and `FieldCanvas` reads the consequence rather than the breakpoint: `resize()` sets `hidden` when the box measures under 2px on either axis, `start()` refuses while it is set, and the `ResizeObserver` stops the loop if the box ever goes away. Verified by counting `clearRect` calls — the first thing every frame does — over two seconds: **0 on a 390px phone and on a 320px one, 120 at every width above the breakpoint.** A phone pays nothing: no loop, no field, no canvas.

The flag is derived from layout, not from a media query repeated in script. The stylesheet decides; the component only notices.

**Do not reintroduce an artwork in this range without asking.** Three have been built and turned down.

#### Coming to rest

**It loops forever only where you can reach into it.** On a touch device the pointer layer is dead: measured, a finger drag across the canvas produces **one** `pointermove` before the browser takes the gesture for scrolling, where a mouse produces a continuous stream. What is left there is an animation playing at the reader, in the frame where it has the least room — which is what the owner named as the problem.

Where `(hover: none)` matches, the piece runs its sequence once and then decelerates: after `T_REST` (8s of real time) a `restK` ramps 1 → 0 over `REST_MS` (2.5s), multiplying the frame's `dt`. One multiplier slows the field, the roaming, the beats and the rings together, because all four are driven from it, and at zero the loop calls `stop()` and the canvas holds the resolved field — which is the truer picture anyway: the work got done.

`(hover: none)` is the test, not a width, because it is the same capability the interactive layer needs: the piece keeps looping exactly where looping still earns something.

Two details that are not optional. The ramp is read off a **separate real-time clock** (`wall`), never off `elapsed`: scaling the clock that measures the slowdown makes the slowdown slow its own approach, so it asymptotes and the loop never stops. And `rested` is checked **inside `start()`**, not only in the frame — the artwork sits at the top of the page and leaves and re-enters the viewport every time the reader scrolls back up, and replaying on each return is the opposite of coming to rest. Only a tap restarts it, and `replay()` therefore calls `start()` itself, because after a rest there is no loop left to pick the reset up.

Verified: on a touch viewport the canvas is still between 13s and 16s, stays still across a scroll away and back, and runs again after a tap; on a hover device it is still moving at 16s.

The entire arrival is settled by ~1.7s, inside the load-sequence budget, and nothing in the page waits on it: the headline and the action are plain HTML painted on the first frame. The layer is decorative (`aria-hidden`), and the collaboration it depicts is stated in the adjacent copy. Engineering is part of the component's definition: DPR capped at 2, loop paused by `IntersectionObserver` when off-screen and by `visibilitychange` when the tab is hidden, palette sampled once from the computed root style (there is no theme to watch for), and under `prefers-reduced-motion` a single static frame is drawn with no pointer listeners attached and no loop ever started.

Two things are non-negotiable for the field to hold 60fps, and both were learned by breaking them. **Segments batch into one `Path2D` per colour and opacity step** (10 steps): stroking each of the ~900 segments individually meant 54,000 draw calls a second and the field visibly stuttered. **Halo gradients are built once per colour and reused**, with the context translated and scaled to size them, rather than calling `createRadialGradient` four times a frame. Distance tests compare squared values and only take a square root inside the influence radius. Measured after these changes: a locked **16.66ms / 60fps**.

**SegmentField** (static sibling): the same field frozen into inline SVG on a 640×400 viewBox, seeded by `mulberry32` so each case study always shows the same composition — step 30, length 16, 1.2px round caps, 8.5% accent rate, per-segment opacity 0.30–0.55, strokes bound to `var(--accent)` / `var(--ink)` rather than literals, so a palette change reaches it for free. Each one is replaced one-for-one when a real mockup lands.

### Named Rules
**The One Imagery Family Rule.** All generated imagery in this system comes from the segment field — live in the hero, seeded and static everywhere else. No stock photography, no 3D render, no gradient mesh, no illustration in a second visual language.

**The Decorative-Is-Hidden Rule.** Every piece of generated or decorative imagery carries `aria-hidden="true"` and `role="presentation"`, and its meaning is stated in adjacent copy.

## Do's and Don'ts

### Do:
- **Do** write every length in rem on the 8px grid, with `0.25rem` as the only half-step, and run `npm run audit:spacing` before committing. See The Spacing Grid Rule.
- **Do** declare spacing in `src/index.css` and only there — the case-study pages and About carry `.fl-*` class names and nothing else.
- **Do** read colour from the semantic tokens (`var(--ink-2)`, `var(--accent)`, `var(--bg-2)`) rather than literals — including inside canvas and SVG — so the palette stays changeable from one block of CSS.
- **Do** pick a step from the ramp that belongs to the surface: display / head / lead / body / label on the home, and title / section / sub / body / label on a reading surface. Hold the home display to `clamp(2.375rem, 1.375rem + 4.1vw, 5rem)` and the case-study title to `clamp(2rem, 1.375rem + 2.5vw, 3.625rem)`.
- **Do** keep prose and everything read in sequence on the one reading column, `var(--col)` (52rem = 72ch at the 19px reading size), and let figures, tables and strips break it. `--measure` was a second, `ch`-based column token that nothing consumed; it has been deleted rather than left in the file looking authoritative.
- **Do** set numbers that are the proof in tabular figures and the accent — never in a second family.
- **Do** separate surfaces with the single tone step (`bg-2`) or a hairline, at `--r` (4px) or `--r-2` (8px) radius — there is no third radius.
- **Do** keep the accent to roughly a tenth of a screen, with exactly one filled violet action per view. *Per view means per viewport, not per page:* the home carries the filled button twice, in the hero and in `.fl-end`, 2.1 screens apart and never co-visible. The footer one is not optional — the hero offers the action before the visitor has seen any evidence, and the close is the moment after all of it, where it used to be a 58px text link.
- **Do** place client/discipline metadata *under* the title, in 13px Quiet Grey.
- **Do** build page structure as rows, lists and bleeds, and keep the hero artwork inside the page gutter — it is dissolved by its mask, not boxed by its edges.
- **Do** write every fluid step as `clamp(min, rem + vw, max)`. The `rem` term is the floor, the `vw` term is the growth, and the pair is solved through two real widths. See The Anchored Clamp Rule.
- **Do** keep the breakpoint block at the end of `src/index.css`. It wins on source order alone, and a rule moved above the component it overrides stops working without any visible error.
- **Do** give any region that scrolls sideways — the case-study impact tables — `role="region"`, `tabIndex={0}` and a name, so it can be scrolled from the keyboard (WCAG 2.1.1), and let it out into the gutter on a phone so the cut edge is visible.
- **Do** size side-by-side grid tracks in `fr`. Percentage tracks plus a `gap` over-constrain the row and are a horizontal-scrollbar bug waiting to happen.
- **Do** gate every hidden start state on `prefers-reduced-motion` and apply it by script, so a reduced-motion or no-JS visitor sees the finished page.
- **Do** pause any continuous animation off-screen and on tab hide, and cap DPR at 2.

### Don't:
- **Don't** write a spacing value in px or em, or a rem value off the 4px grid — including inside a `clamp()` endpoint.
- **Don't** put a Tailwind spacing utility (`pt-7`, `gap-[13px]`) or an inline `style={{ margin… }}` in a page or component. A value that lands on the grid but is declared outside `index.css` is still a violation: it moves the decision out of the system.
- **Don't** convert the fluid `clamp()` pairs into stepped breakpoint values to force the grid at every width. That was considered and rejected; fluid spacing that never jumps is the deliberate trade.
- **Don't** write a type step as `clamp(min, <bare>vw, max)`. Without a `rem` anchor the step stands still across the bottom of the range and then stretches, which is how `--t-lead` came to serve 17px to every window from 320px to 1180px.
- **Don't** answer a narrow viewport by making text smaller. Every floor in this system is equal to or larger than the size above it; a phone gets a different composition, never a reduced one.
- **Don't** normalise the off-grid values inside `FormComparison`'s `.lg-*` or `.ds-*` rules. They are the evidence the exhibit exists to show.
- **Don't** add a second accent colour, a tint ramp off the accent, or a warm counterpart. One voice.
- **Don't** use `box-shadow`, `drop-shadow`, or any offset shadow for lift — the system has no shadow vocabulary.
- **Don't** use glass, `backdrop-filter`, or blur of any kind.
- **Don't** use a gradient as decoration.
- **Don't** build a grid of equally sized rounded cards as page structure.
- **Don't** put an uppercase eyebrow, kicker, or pretitle above any heading.
- **Don't** write a literal colour value in a component, inline style, or canvas call.
- **Don't** interpolate a size between the steps of a ramp. Two ramps exist, one per mode, and neither is a licence to invent a third value inside the other.
- **Don't** exceed an 8px radius (the 48px external app icons at 12px are the single documented exception).
- **Don't** animate anything continuously except the hero canvas; everything else is a one-shot reveal or a sub-0.25s state transition — and even that one comes to rest where `(hover: none)` matches.
- **Don't** write canvas furniture in bare pixels. Anything drawn at a fixed size inside a fluid box grows as the box shrinks: that is how four name pills came to fill 71% of the width of a phone canvas. Multiply by `ui`.
- **Don't** introduce imagery from outside the segment-field family — no stock photos, no gradient meshes, no second illustration language.
- **Don't** reintroduce a light theme, a theme toggle, or a `prefers-color-scheme` branch: the single dark ground is a settled decision, not an omission.

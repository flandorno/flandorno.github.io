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

**Two ramps, one per mode.** The home is Experience: one title, one section, one lead — 78 / 38 / 21 / 16, ratios 2.05 / 1.82 / 1.31. A case study is Read, and it differs in two ways that both matter. It carries **four to seven** section headings against one title, so reusing the home's `--t-head` (38) put sections at 1.53x below a 58px title and they competed with it. And it is read top to bottom rather than scanned, so **16px is the wrong body size** — that is an interface size. The reading ramp is **58 / 33 / 24 / 19** at desktop and **30 / 24 / 19 / 17** at phone width: ratios 1.76 / 1.38 / 1.26, tightening downward like the home ramp. `--t-read`, `--t-sub` and `--t-section` belong to this surface and are never used on the home.

Raising the body forced the rest: at a 19px body the old 20px subsection heading would have sat 1.05x above the text and stopped reading as a heading at all. A ramp moves as one piece or not at all.

**One column, and it is `--col`, not `--measure`.** A `ch` measure resolves against each element's *own* font-size, so one token produced a different column for every size on the page: a 29px heading given `62ch` claimed ~1800px and ran to the container, 1008px of heading over a 658px column of prose — two page widths at once. Worse, that 658px was **61 characters a line inside a 1008px content band**, below the 65–75 a measure wants, with 350px — a third of the width — dead on the right.

Everything read in sequence now shares `--col` = `52rem` (832px): prose, lists, section and subsection headings, callouts, captions and the page subtitle. At the 19px desktop body that is 65 characters a line; at the 17px phone body, 73. Both inside the range, where a `ch` value drifts out of it as soon as the font size moves. Measured after: every one of them spans 216 → 1048, and the dead band fell from 350px to 176px. The page title is deliberately wider, at `22ch`; figures, tables and screen strips are still allowed past `--col` entirely — that is what the wider container is for.


**Display Font:** Schibsted Grotesk (variable, 400–900, with `system-ui`, `-apple-system`, `Helvetica Neue`, Arial)
**Body Font:** Schibsted Grotesk — the same family. **There is no second family.** 100% of the type on the site is this face.

**Character:** A single variable grotesque doing all the talking, tightened hard at display size (−0.04em) and relaxed to neutral at body size. The effect is engineered rather than expressive: the type never performs, so the generative field can.

### Hierarchy
- **Display** (600, `clamp(38px, 5.4vw, 80px)`, 0.98 line-height, −0.04em): the home `h1` only, and the case-study `h1` at a deliberate step down (`clamp(30px, 4.2vw, 58px)`, capped to a 22ch measure so sentence-length titles land on two lines). Measures 78px at 1440, 38px at 390.
- **Headline** (600, `clamp(24px, 2.9vw, 38px)`, 1.06, −0.025em): section `h2`s, the contact closing line (capped at 20ch), and case-row titles (1.08 line-height).
- **Lead** (400, `clamp(17px, 1.45vw, 21px)`, 1.25): the hero subparagraph (46ch max), case-study subtitles, `h3`s, and callout text.
- **Body** (400, 16px, 1.6, colour Reading Grey): all prose, list items, buttons, links, table cells. Paragraph rhythm is 1.1em between siblings.
- **Label** (500, 13px): case metadata, figure captions, and table headers (+0.04em, Quiet Grey). The home work section carries no visible label — its heading was removed as an eyebrow and the section is named by `aria-label` alone.
- **Metric** (700, head size on the home rows, tabular figures, violet): numbers only.

### Named Rules
**The Five-Step Rule.** Five size tokens exist — display, head, lead, body, label — and nothing between them. A new surface picks a step; it does not interpolate one.

**The One Family Rule.** There is no monospace. Numbers that are the proof get `font-variant-numeric: tabular-nums` and the accent, in the same face as everything else. The system used to pair the sans with a mono for metrics; on a page that contains no code, a monospace is a costume for "technical" rather than a tool, and dropping it removed a family, a font request, and a tell.

**The No-Eyebrow Rule.** Nothing sits above a heading. Client and discipline go *under* the title as metadata in Quiet Grey — the case layout's prop comment states it explicitly. There is no uppercase kicker, eyebrow, or small-caps pretitle anywhere in the system, and none may be added.

## Layout

Two layout models, one per surface class.

**Home surface** (`.fl-*`): full-bleed, no max-width container. A fluid gutter of `clamp(1.5rem, 4vw, 3.5rem)` is the only horizontal constraint. The hero is a two-column grid at `1fr 1fr` with a `clamp(2rem,4vw,3.5rem)` gap and `min(78svh, 47.5rem)` minimum height. The tracks are `1fr`, never `minmax(0,50%)` twice: two 50% tracks plus a gap ask for 100% + gap, which engines resolve differently and can push the page into a horizontal scrollbar by exactly the gap width. The artwork **stays inside the page gutter** — it used to cancel the gutter with a negative margin and bleed to the viewport edge, which left no margin for error against a scrollbar and put a hard edge flush with the window. Work is a one-dimensional list of rows — `minmax(0,19rem) minmax(0,1fr)`, image left, copy right, `clamp(2rem,3.5vw,3rem)` between rows — not a card grid.

**Reading surface** (`.fl-read*`): centred, 70rem max container, same fluid gutter. Prose, headings, lists, callouts and captions all share the `--col` reading column (52rem); figures, tables, icon grids and screen strips are deliberately allowed to exceed it. Sections are separated by `clamp(3rem,6vw,5.5rem)`.

**Responsive:** one breakpoint at 900px, where the hero collapses to a single column (copy first, artwork second at `min(48svh,25rem)`), case rows stack with the image capped at 26rem, and the hero's minimum height is released. Everything else is fluid by clamp from 360px up. Verified at 1440 / 1280 / 900 / 390.

**Rhythm:** every vertical measure is a clamp pair, not a fixed step — masthead `clamp(1rem,2.4vw,2rem)`, hero bottom `clamp(3rem,7vw,6.5rem)`, contact top `clamp(3.5rem,8vw,7.5rem)`. Tight local stacks use `0.5rem`.

**Spacing** is governed by The Spacing Grid Rule — see Named Rules below. It is the one rule in this document with an automated check behind it.

**Motion:** exactly one ambitious moment, the hero canvas. Everything else is a sequenced reveal — 1rem rise and fade over 0.7s on `cubic-bezier(0.16,1,0.3,1)`, triggered at 15% intersection with a −6% bottom margin, staggered by an explicit per-element delay (80–90ms steps). State transitions are 0.18–0.25s. The hidden start state is applied by script only when motion is welcome, so a reduced-motion visitor or a no-JS visitor gets the finished page; under `prefers-reduced-motion` all durations collapse to 0.001ms and the canvas draws one static frame and never starts its loop.

### Named Rules

**The Spacing Grid Rule.** Every length in this system is **rem on an 8px grid**, and `0.25rem` (4px) is the only half-step. This holds on every surface — the home, the three case studies, About — without exception and without a second scale for "content" pages.

*The scale.* 0.25 / 0.5 / 1 / 1.5 / 2 / 2.5 / 3 / 3.5 / 4 / 5.5 / 6 / 6.5 / 7.5rem. Two radii, `--r` (4px) and `--r-2` (8px); there is no third. The 4px half-step is reserved for hairline offsets — a focus ring's gap, the space under an underlined link — and is not a general spacing value.

*Why rem.* `html` carries no `font-size` override, so 1rem resolves to the browser's own default. A visitor who enlarges their text scales the entire layout with it. Written in px, the page would ignore that setting. Type steps are in rem for the same reason; `--t-body` is `1rem`, which is 16px by default but is not pinned to 16px.

*Where spacing may be declared.* In `src/index.css`, and nowhere else. **The case-study pages hold no spacing of their own** — `N4m`, `D4next`, `Electrolux` and `About` carry only `.fl-*` class names, no Tailwind spacing utilities and no inline style objects. This is the mechanism that makes the rule hold across surfaces: there is one stylesheet to audit, not five. A `pt-7` or a `style={{ marginTop }}` in a page is a violation even when its value lands on the grid, because it moves the decision out of the system.

*What the grid binds.* The **endpoints** of every `clamp()`, not the fluid value between them. The `vw` term is continuous by definition, so at intermediate widths the computed spacing lands off-grid — measured in-browser at 100% on-grid at 390px, 94% at 1440px, and 57% at 1280px, where most clamps sit mid-range. This is an accepted trade, not an oversight: spacing that flows without jumping is worth more here than grid adherence at every pixel. Converting the clamps to stepped breakpoint values was considered and **rejected**; do not "fix" it.

*Exempt, deliberately.* Border and outline **widths** are not spacing. The 900px breakpoint is not spacing. `sr-only` uses −1px insets by definition. `.dsx-switch::after` offsets by 2px because that is centring arithmetic, (16 − 12) ÷ 2, not a chosen value. And the `FormComparison` exhibit keeps its off-grid values on purpose: `.lg-*` is the Net4Market legacy form and `.ds-*` quotes the client's real tokens, so the hand-written 6px / 5px / 3px / 2px **is the evidence** the component exists to show. Normalising it would turn a demonstration into a decoration. Only the widget's own chrome (`.dsx-*`) follows the grid, through its local `--s1`…`--s6` scale. The file is listed in `.impeccable/config.json` under `detector.ignoreFiles` for the same reason — that entry takes a bare path and has no field for a justification, so the justification lives in the component's own header and here. **`npm run audit:spacing` still reads the file and still has to pass**, so the exemption covers the colour and type rules a detector cannot reason about, not the spacing grid. Roboto is exempt for the same reason and is registered in `.impeccable/config.json` with its reason, not silently suppressed.

*Enforcement.* `npm run audit:spacing` reads every `.css` and `.tsx` file under `src/`, including stylesheets embedded in template literals, and exits non-zero on any violation. It catches off-grid px, off-grid rem, any `em`, Tailwind spacing utilities (including arbitrary values like `gap-[13px]`) and inline style objects. Every exemption above is encoded in the script with its reason attached, and the script reports the exemption count so a silently growing list is visible. It must print **PASS** before any commit that touches a stylesheet or a page.

**The 44px Target Rule.** Every pointer target is at least 44x44, and the way it gets there never moves the type. Four controls were under it at *every* width, not only on phones — the nav button at 39x25, and the underlined text links at about 30px tall. Growing the elements would have pushed each underline off its baseline, so the visual box is left exactly as drawn and `.fl-tap` adds an invisible `::after`, centred on the element, sized `100%` with a `2.75rem` floor. Verify it by hit-testing, not by reading a bounding box: `getBoundingClientRect` does not see the pseudo-element, so a measurement will say the control is still 39x25 while `elementFromPoint` 21px away correctly returns the link.

**The Link Names Its Destination Rule.** A link that wraps a block of content carries an `aria-label` naming where it goes. The three case rows had accessible names of 19 to 20 words, with the title, metric and meta concatenated without separators — `"shared language600+ disconnected files…"` — which is what a screen reader announces in a list of links. The visible content is unchanged; only the name is.

**The New Tab Is Announced Rule.** Every `target="_blank"` says so, through the `aria-label` where one exists and a `sr-only` span where the text stands alone. Opening a tab without warning takes the back button away from someone who cannot see that it happened.

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
Text-only, no chrome. The masthead is the wordmark (weight 600, −0.02em) opposite one link at body size in Reading Grey, going to full ink on hover over 0.18s. There is no theme control: the single dark ground leaves nothing to switch. On reading surfaces the whole nav reduces to the wordmark as a back link, wrapped in its own `<nav>` landmark so it is read as site chrome rather than a label above the title, and it turns violet on hover. No mobile hamburger, no sticky bar, no active-state underline. The skip link is a violet pill fixed above the viewport that translates into view on focus, and it focuses the page's `<h1>`, not `<main>` — see The Skip Link Lands On Content Rule.

In-page jumps are buttons, not fragment links, and this is not negotiable: the app runs on `HashRouter`, so `location.hash` is the route. An `href="#work"` rewrites `#/` to `#work`, the router finds no matching route, and the page empties. The two "Work" triggers call `scrollToSection("work")`, which moves focus to the section (`tabIndex={-1}`) with `preventScroll`, then scrolls — smooth at ~465ms, instant under `prefers-reduced-motion`. Focus moves first so a keyboard visitor's next Tab lands on the first case rather than back at the top; because the target is non-interactive, `:focus-visible` shows the violet ring for keyboard activation and nothing for a mouse click. The ring is inset (`outline-offset: -0.25rem`) so a full-bleed section cannot clip it, and `scroll-margin-top` leaves air above the first row. The cost of this approach is that `#work` is not linkable or openable in a new tab — the price of hash routing, not a detail to fix by restoring an `href`.

### Case Row
The home work list's unit: a 16:10 art frame (max 19rem wide) beside a stacked title / metric / meta group. The metric line pairs a violet figure in tabular figures with a Reading Grey note; the meta line is 13px Quiet Grey carrying client and discipline. The title is at full `--ink` and is an `<h3>` — see below.

The frames hold seeded generative fields as placeholders. They were removed once, for reading as three near-identical textures rather than as three projects, and restored at the owner's request: real mockups are coming and the slot is being held.

### Figure
One figure treatment across the reading surface: a 16:9 `bg-2` frame holding either a real lazy-loaded image (`object-fit: cover`, or `contain` when the image must show whole) or the static generative field as a placeholder, plus an optional 13px Quiet Grey caption clamped to the reading measure. Swapping placeholder for real artwork is a one-line change.

### Signature Component: The Segment Field
The system's signature exists in two forms built from the same geometry, and it is the only imagery the project owns.

The field **has no edges of its own**. A radial mask on `.fl-canvas-wrap` dissolves it into the page: `radial-gradient(50% 50% at 50% 50%, #000 82%, transparent 100%)`. The 50% radius is a hard constraint — anything larger cannot reach zero before the box ends and leaves a visible rectangle, which is what happened when the earlier full-bleed mask (`115% 96% at 72% 50%`) was kept after the artwork was pulled inside the gutter. The 82% solid stop is the other half of the constraint: the roaming cursors carry role labels, and a fade starting nearer the centre dissolves them mid-word. **`SOLID_EDGE` in `FieldCanvas.tsx` is derived from this stop (0.5 + 0.82 × 0.5 = 0.91) and the two must change together** — it is where a label pill flips to the left of its arrow rather than drift into the fade. Flipping at the canvas edge is not sufficient: at mobile width a 70–84px pill reaches the fade long before the edge.

**FieldCanvas** (hero, live): a Canvas2D field of short line segments on a staggered grid — spacing `clamp`ed to `w/26` between 20 and 34px, segment length 0.52× spacing, 1.25px round-capped strokes. Orientation comes from a smooth three-term trigonometric field. Base segments are `ink` at 0.46 alpha; a deterministic hash makes roughly one segment in eleven `violet`. Any number of *influencers* bend the field: inside a `clamp(130, 0.24w, 230)` radius, segments rotate tangentially around each one and brighten.

The influencers are the piece's subject. A violet lead cursor enters from the lower left at **7× size**, its **"Join me!"** label legible from the first frame, and scales down along its travel on a power-1.5 curve so the shrink lags the movement and it is still enormous as it crosses the middle of the field. Its pull on the field scales with it, so the arrival bends a correspondingly wider patch and reads as presence rather than as a big drawing.

Reaching full size at 1.15s **is** the cue: there is no hold, and it detonates 60ms later. The burst is the loudest thing in the system and is meant to be — a 180ms white-hot core, three rings leaving at staggered speeds in violet and two presence colours, 64 colour-coded particles, and a shockwave that the field itself carries: for 820ms an expanding wavefront snaps every segment within 95px of it to point away from the blast and brightens it, so the explosion travels *through* the artwork instead of sitting on top of it. Four collaborator cursors then fly in from the edges in 420ms each, staggered 80ms, and are all in by ~1.7s.

**They never park.** Each then roams its own path around its anchor — three summed sinusoids per axis, amplitudes 8–11% of the box, their speeds in deliberately irrational-ish ratio (1 : 2.37 : 0.31) so the path never closes and the eye cannot find the loop. The background field's three phase speeds are detuned the same way, for the same reason. Each clicks on its own beat (2.3s to 3.7s apart), the ring expanding over 440ms. A click leaves a 620ms expanding ring in that cursor's colour at the point where it acted, and briefly deepens that cursor's pull on the field by 55%, so the field visibly answers the work. Each carries a 24% colour halo, bright enough to claim territory.

**And each one goes to the centre alone.** Every cursor has its own visit cycle — 19.3s, 26.9s, 23.3s and 31.7s, with staggered phases — so they take turns rather than performing a synchronised convergence, which would read as choreography instead of four people working. A visit is 1.3s in, 900ms of actual work at the centre (a burst of clicks, ~280ms apart, which is what separates a visit from a fly-past), then 1.5s back to its zone, halo lifting from 24% to 38% while it is there.

Measured over five minutes: **78% of the time nobody is at the centre, 20% exactly one, 1.7% two overlapping, and never three or four.** Because the four periods are mutually incommensurable, the combined pattern does not repeat for over 100,000 hours — the loop is unfindable by construction, not by being long. The field organises locally under all of them, so the longer they stay the more order appears — the page's claim, acted out rather than asserted. The visitor's own pointer joins as another influencer, and a click replays the sequence from the top.

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
- **Do** pick a step from the ramp that belongs to the surface: display / head / lead / body / label on the home, and title / section / sub / body / label on a reading surface. Hold the home display to `clamp(2.375rem, 5.4vw, 5rem)` and the case-study title to `clamp(1.875rem, 4.2vw, 3.625rem)`.
- **Do** keep prose on the 62ch measure (`var(--measure)`) and let figures, tables and strips break it.
- **Do** set numbers that are the proof in tabular figures and the accent — never in a second family.
- **Do** separate surfaces with the single tone step (`bg-2`) or a hairline, at `--r` (4px) or `--r-2` (8px) radius — there is no third radius.
- **Do** keep the accent to roughly a tenth of a screen, with exactly one filled violet action per view. *Per view means per viewport, not per page:* the home carries the filled button twice, in the hero and in `.fl-end`, 2.1 screens apart and never co-visible. The footer one is not optional — the hero offers the action before the visitor has seen any evidence, and the close is the moment after all of it, where it used to be a 58px text link.
- **Do** place client/discipline metadata *under* the title, in 13px Quiet Grey.
- **Do** build page structure as rows, lists and bleeds, and keep the hero artwork inside the page gutter — it is dissolved by its mask, not boxed by its edges.
- **Do** size side-by-side grid tracks in `fr`. Percentage tracks plus a `gap` over-constrain the row and are a horizontal-scrollbar bug waiting to happen.
- **Do** gate every hidden start state on `prefers-reduced-motion` and apply it by script, so a reduced-motion or no-JS visitor sees the finished page.
- **Do** pause any continuous animation off-screen and on tab hide, and cap DPR at 2.

### Don't:
- **Don't** write a spacing value in px or em, or a rem value off the 4px grid — including inside a `clamp()` endpoint.
- **Don't** put a Tailwind spacing utility (`pt-7`, `gap-[13px]`) or an inline `style={{ margin… }}` in a page or component. A value that lands on the grid but is declared outside `index.css` is still a violation: it moves the decision out of the system.
- **Don't** convert the fluid `clamp()` pairs into stepped breakpoint values to force the grid at every width. That was considered and rejected; fluid spacing that never jumps is the deliberate trade.
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
- **Don't** animate anything continuously except the hero canvas; everything else is a one-shot reveal or a sub-0.25s state transition.
- **Don't** introduce imagery from outside the segment-field family — no stock photos, no gradient meshes, no second illustration language.
- **Don't** reintroduce a light theme, a theme toggle, or a `prefers-color-scheme` branch: the single dark ground is a settled decision, not an omission.

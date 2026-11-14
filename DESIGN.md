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
  panel-n4m-hi: "#143A64"
  panel-n4m-lo: "#00224A"
  panel-yoga-hi: "#5A4D78"   # owner-set, 2026-11-08
  panel-yoga-lo: "#1A1723"   # owner-set, 2026-11-08
  panel-elux-hi: "#011E40"   # owner-set, 2026-11-08
  panel-elux-lo: "#030712"   # owner-set, 2026-11-08
  flag: "#651818"            # process-flow chip ground, owner-set 2026-11-08
  flag-ink: "#FBD3CF"        # 9.03:1 on it
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
  case: "1rem"       # --r-3, 16px — the three home case panels and the process flow
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
  case-panel:
    # one gradient per client, 155deg from -hi to -lo; see Case Panel
    backgroundImage: "linear-gradient(155deg, {colors.panel-n4m-hi}, {colors.panel-n4m-lo})"
    backgroundColor: "{colors.panel-n4m-lo}"
    rounded: "{rounded.case}"
    width: "100%"
    opacity: 0.72
  case-panel-hover:
    opacity: 1
  case-client:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
  case-claim:
    textColor: "{colors.ink-2}"
    typography: "{typography.lead}"
  case-keywords:
    textColor: "{colors.ink-3}"
    typography: "{typography.label}"
  app-icon:
    rounded: "{rounded.icon}"
    size: "3rem"
  flow-panel:
    # the page ground plus a hairline, not a third neutral
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.case}"
    padding: "1rem"
    maxWidth: "24rem"
  flow-step:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.ink}"
    typography: "{typography.read}"
    rounded: "{rounded.case}"
    padding: "0.75rem 1rem"
  flow-gap:
    backgroundColor: "{colors.flag}"
    textColor: "{colors.flag-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.frame}"
    padding: "0.25rem 0.5rem"
---

# Design System: Federico Landorno — Portfolio

## Overview

**Creative North Star: "The Measured Field"**

A sober personal portfolio built on a cool graphite ground, cool white ink, and exactly one electric violet — with a single field of generative line segments carrying all of the visual ambition. The field is the metaphor the whole system is named for: a field of scattered marks that a sweep crosses and settles into one direction, then lets drift back. Order emerging from a complex field is the claim the work itself makes, so the artwork makes it before any sentence does. Everything else in the system is engineered restraint: a five-token type scale, one typeface, a flat material with no shadow vocabulary at all, and radii small enough (4–8px) that no surface ever reads as a toy card.

The atmosphere is premium and cinematic meeting precise and engineered. The premium half comes from air and scale: a home page of 2.1 screens and 117 words, a hero where the artwork takes an equal half of the viewport and bleeds past the right gutter, and a display size that reaches 55px at 1440. The engineered half comes from how little is permitted: one accent, no second hue, no gradient, no blur, no lift. Components are tactile and responsive — a 1px button rise, a link underline that turns violet, a case row that dims its siblings to 0.4 on hover — but the tactility lives in colour and a single pixel of translation, never in a shadow.

This is a person seeking a role, not a studio selling services. The world was pinned from three references: kigo.studio for the headline-beside-dominant-artwork composition, roofstudio.tv for five-step type discipline and canvas craft, onlines.com.ar for radical restraint — their typographic confidence without their agency swagger. Confirmed rejections: two earlier discarded worlds (a cosmic violet/orange dark site; a drafting blueprint world in cyanotype and Overpass), and the generic AI-portfolio vocabulary of centred heroes, equal rounded cards, soft gradients and uppercase eyebrows.

**There is one theme, and it is dark.** An earlier build shipped a light default with a dark companion and an in-page toggle; the owner judged the light side unnecessary and it was removed. The ground is `#16151B` — a cool graphite, deliberately lifted off pure near-black — and never anything else: no `prefers-color-scheme` branch, no `data-theme` attribute, no toggle, no stored preference. `color-scheme: dark` on the root tells the browser to match its own form controls and scrollbars. The accent is `#9B7CFF`. **Near-black plus one electric violet is the most saturated pattern in generated portfolios**, and a move to a warm charcoal ground with a vermilion accent was built and then reverted by the owner — the violet stays. The ground carries the distance instead: `#16151B` is unmistakably a grey rather than a void, and every grey above it is neutral-to-cool, because a warm grey under a violet goes muddy. The accent measures 5.81:1 against this ground and 5.81:1 for the ground sitting on top of it, which is what an accent that is both a figure and a button has to do.

**Key Characteristics:**
- Cool graphite ground, cool white ink, one electric violet accent and no second hue
- One theme only: no light mode, no toggle, no theme state anywhere in the code
- Five type tokens per ramp, one typeface, tabular figures where numbers are the proof
- Flat by construction: zero `box-shadow` in the system, depth by tone step and hairline only
- One ambitious moment (the hero's live generative canvas); everything else is sequenced reveals
- Rows and bleeds instead of a grid of equal rounded cards — and three large panels, one per client in that client’s own colour, holding the work itself
- Every colour is a semantic token; no component writes a literal hex

## Colors

A two-value ground (page and one tone step up), a three-step ink ramp, two hairline alphas, and one accent. There is no second palette: this set is the system, in the only theme it has.

### Primary
- **Electric Violet** (`#9B7CFF`): the only accent in the system. It carries the contact button, the skip link, the focus ring, text selection, the sparse accent segments in the generative field (roughly one segment in eleven), the underline of a hovered case band’s way in, inline links in prose, and the hover border of every underlined link. Measured 5.81:1 against the page, and 5.81:1 again for the ground that sits on top of it.

### The Case Panels
- **Panel · Net4Market** (`#143A64` → `#00224A`), **Panel · Yoga** (`#1A1723` → `#5A4D78`, owner-set), **Panel · Electrolux** (`#030712` → `#011E40`, owner-set): one dark ground per client, in that client’s own colour, as a two-stop tonal gradient at `155deg`. This is the **second sanctioned break in The One Voice Rule**, after the hero’s presence cursors, and it is sanctioned for the same reason: the colour is not decoration, it is whose work this is. Cool white ink measures 12.3:1, 12.6:1 and 12.3:1 on them.

**Nothing here is invented.** Each brand colour was sampled from the pixels of that client’s own screenshots — Yoga `#7848A8` is the product’s sidebar purple, Electrolux `#081848` is the navy its app draws headers and buttons in, the dominant non-neutral colour across five device shots. Net4Market has no screenshot and uses `#0176DB`, the real `--color-blue-500` primitive from its token set.

**The derivation is one rule, and it is not a mix.** A fixed mix with the page ground was built first and it fails: a mix can never be lighter than both its ends, and Electrolux’s navy is already darker than `--bg`, so 28% of it came out `#121628` — a neutral, with the brand gone. Each ground instead **keeps its brand’s hue and is set to one shared lightness, OKLab L = 0.30**, with chroma held to a 0.085 ceiling so no ground shouts. L = 0.30 is not picked either — it is where the earlier light panel already sat.

Equal lightness is what makes the three read as one family rather than three accidents, and it is why Yoga’s plum and Electrolux’s navy — **the two that sit side by side** — separate on hue alone. Net4Market’s blue is close to Electrolux’s, and that is allowed: it is alone on the row above, 64px away, never beside it.

**Each ground is a gradient, and the rule it bends is narrow.** Added at the owner’s request on 2026-11-06. The two stops are the same OKLab construction at **L = 0.30 ± 0.045**, so the panel’s mean lightness is exactly the solid it replaced, and **one hue per panel** — no second colour enters, no mesh, no hue rotation along the ramp. All three run at `155deg`: one light direction across the list, which is what keeps them a family rather than three separately lit objects. A solid `background-color` at the dark stop sits underneath, so a browser without gradients gets a panel rather than a hole.

Both ends are bounded by measurement, not taste. The light stop keeps cool white ink at **10.4:1** or better. The dark stop stays at **1.12–1.15** against the page ground, so the panel’s darkest corner is still visibly above the page and the 16px edge holds all the way round — at ±0.06 it falls to 1.08 and the corner begins dissolving into the page, which is why ±0.045 and not more.

**Two of the three are the owner’s, not the construction’s.** On 2026-11-08 he set Electrolux (`#030712` → `#011E40`) and then Yoga (`#1A1723` → `#5A4D78`) by hand, both running **`to top right`**. Only Net4Market still carries the derived pair at `155deg`, so the list no longer shares one light direction and one of its three grounds is still built by a rule the other two have left.

**Both hand-set dark stops fall through the floor.** The derived construction holds its dark end at 1.12–1.15 against the page, so a panel’s darkest corner stays visible and the 16px edge reads all the way round. Measured against `--bg`: Net4Market **1.15**, Electrolux **1.11**, **Yoga 1.03**. At 1.03 the Yoga card’s bottom-left corner is indistinguishable from the page — the rounded corner simply is not there. Recorded rather than corrected, because the values are his; lifting the two dark stops, or giving the panels a hairline, are each a one-line change.

*Previously a single light `#EDECF2` for all three, then three dark solids. The owner judged the grounds better dark on 2026-11-06, asked for the clients’ own colours, then for gradients. The light value and the solids are gone, not deprecated.*

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

**The Flag Exception.** One dark red, `--flag` `#651818` with `--flag-ink` `#FBD3CF` on it at 9.03:1, and it lives in exactly one component: the process flow's chip on the Net4Market case study. The owner asked for it twice on 2026-11-08, from a reference of his own in which every broken step carries a red chip; the objection was raised and overruled, and this is the record, not a correction. It is derived, not sampled — hue 25, OKLab L = 0.32 for the ground and 0.90 for the ink, the same construction as the panel grounds one lightness step up. **It is not a status palette.** There is no green, no amber, no second red, and no variant of it may be added. It never touches a control, a link, a surface or body text.

**The Presence-Colour Exception.** The hero's collaborator cursors are the single sanctioned break in that rule, and the only one. In a multiplayer cursor, colour *is* identity: four presence colours — Product `#5B9BFF`, Engineering `#49D6B8`, Research `#F5A524`, Data `#FF6FB5` — name four people who are not the author, and flattening them to violet would delete the idea rather than discipline it. They are confined to the cursor layer: a pointer glyph, its label pill, and a 7%-opacity halo. They never touch a surface, a control, a text colour, a border or a chart, and no fifth presence colour may be added. The labels are roles, never invented names.

**The Semantic-Only Rule.** No component ever writes a literal colour. Every surface, stroke and glyph reads `var(--bg)`, `var(--bg-2)`, `var(--ink)`, `var(--ink-2)`, `var(--ink-3)`, `var(--line)`, `var(--line-2)`, `var(--accent)` or `var(--on-accent)`. Even the Canvas2D artwork samples the tokens from the computed root style rather than hardcoding its strokes. The rule survives the removal of the second theme: it is what keeps the palette changeable from one block of CSS.

**The Two-Ground Rule.** The page has one ground and one step above it. There is no third neutral surface level; anything that needs separation gets `bg-2`, a hairline, or whitespace. The three `--panel-*` grounds are not a third step — they are a per-client material, scoped to the case panels, and nothing else in the system may reach for them.

## Typography

**Two ramps, one per mode.** The home is Experience: one title, one section, one lead — 78 / 38 / 21 / 16, ratios 2.05 / 1.82 / 1.31. A case study is Read, and it differs in two ways that both matter. It carries **four to seven** section headings against one title, so reusing the home's `--t-head` (38) put sections at 1.53x below a 58px title and they competed with it. And it is read top to bottom rather than scanned, so **16px is the wrong body size** — that is an interface size. The reading ramp is **58 / 33 / 24 / 19** at desktop and **32 / 24 / 19 / 18** at phone width: ratios 1.76 / 1.38 / 1.26, tightening downward like the home ramp. `--t-read`, `--t-sub` and `--t-section` belong to this surface and are never used on the home.

Raising the body forced the rest: at a 19px body the old 20px subsection heading would have sat 1.05x above the text and stopped reading as a heading at all. A ramp moves as one piece or not at all.

**One column, and it is `--col`, not `--measure`.** A `ch` measure resolves against each element's *own* font-size, so one token produced a different column for every size on the page: a 29px heading given `62ch` claimed ~1800px and ran to the container, 1008px of heading over a 658px column of prose — two page widths at once. Worse, that 658px was **61 characters a line inside a 1008px content band**, below the 65–75 a measure wants, with 350px — a third of the width — dead on the right.

Everything read in sequence now shares `--col` = `52rem` (832px): prose, lists, section and subsection headings, callouts, captions and the page subtitle. At the 19px desktop body that is **72** characters a line; at the 18px phone body, 74. (This document and the stylesheet both used to say 65ch. Nobody had measured it: `1ch` of Schibsted Grotesk at 19px is 11.6px, so 832px is 72ch. The number was wrong; the column is not — 72 is inside the range, and the figure has been corrected in both places rather than the column changed to match a claim.) Both inside the range, where a `ch` value drifts out of it as soon as the font size moves. Measured after: every one of them spans 216 → 1048, and the dead band fell from 350px to 176px. The page title is deliberately wider, at `22ch`; figures, tables and screen strips are still allowed past `--col` entirely — that is what the wider container is for.


**Display Font:** Schibsted Grotesk (variable, 400–900, with `system-ui`, `-apple-system`, `Helvetica Neue`, Arial)
**Body Font:** Schibsted Grotesk — the same family. **There is no second family.** 100% of the type on the site is this face.

**Character:** A single variable grotesque doing all the talking, tightened hard at display size (−0.04em) and relaxed to neutral at body size. The effect is engineered rather than expressive: the type never performs, so the generative field can.

### Hierarchy
- **Display** (600, `clamp(2.125rem, 1.725rem + 1.9vw, 3.4375rem)`, 0.98 line-height, −0.04em): the home `h1` only. Measures **55px at 1440, 52px at 1280, 47px at 1024, 35px at 390**. It is the one step in the ramp solved against the heading's own line count rather than through a 390/1440 pair — see *The display size is set by the line count* below. The case-study `h1` is `calc(var(--t-display) * 0.86)` on a 22ch measure, so the step down from the home hero is fixed by construction: 47px against 55 at 1440, 30 against 35 at 390.
- **Headline** (600, `clamp(1.5rem, 1.1875rem + 1.34vw, 2.375rem)`, 1.06, −0.025em): section `h2`s, the contact closing line (capped at 20ch), and case-row titles (1.08 line-height). 38 / 33 / 24.
- **Lead** (400, `clamp(1.125rem, 1.0625rem + 0.29vw, 1.3125rem)`, 1.25): the hero subparagraph (46ch max), case-study subtitles, `h3`s, and callout text. 21 / 20 / 18. The hero's is the owner's own second sentence, verbatim. It opens on the computer-science background because that is the evidence under *engineering* in the line above it — the heading makes a claim about bridging three concerns and the paragraph has to show why the engineering end of it is credible.
- **Body** (400, 16px, 1.6, colour Reading Grey): all prose, list items, buttons, links, table cells. Paragraph rhythm is 1.1em between siblings.
- **Label** (500, 13px, and **14px below 600px**): case metadata, the home’s keyword tags, figure captions, and table headers (+0.04em, Quiet Grey). The home work section carries no visible label — its heading was removed as an eyebrow and the section is named by `aria-label` alone.
- **Metric** (700, tabular figures): numbers only. It lives on the case studies’ impact tables. It used to carry a violet before/after line on every home row; that line was removed on 2026-11-06 at the owner’s instruction — see *Case Row*.

### Named Rules
**The Anchored Clamp Rule.** Every fluid type step is `clamp(min, rem + vw, max)`. **A bare `vw` middle term is a defect, not a shorthand.** With nothing but `vw` between the ends, the page stops being a layout that adapts and becomes a linear photocopy of itself: measured across fifteen widths, `--t-lead` sat on its 17px floor from 320px *all the way to 1180px*, so every laptop in the world got the phone size, while `--t-display` held 38px flat to 700px and then stretched to 80px, so a 1024px window rendered a 69% reduction of the 1440px design. The `rem` term is the floor the text never drops below; the `vw` term is the growth above it. Each pair is solved through two real points — a 390px phone and a 1440px desktop — so the size is right at both ends *and* on the laptop between them, which is the width this portfolio is actually opened at.

Nothing in the repaired ramp came out smaller than it was. Floors are equal or one step up (`--t-lead` 17→18, `--t-read` 17→18, case `h1` 30→32); only the middle of the range moved. Verified by sweep: the home `h1` now climbs continuously 38 → 80 instead of standing still for the first 380px of the range, and the hero lead reaches 20px at 1024 where it used to reach 17px.

**The Five-Step Rule.** Five size tokens exist — display, head, lead, body, label — and nothing between them. A new surface picks a step; it does not interpolate one.

**The Quoted-Typeface Exception.** The site has one family and that has not changed. **Roboto** appears in exactly one place — `FormComparison` on the N4M case study — because it is `--font-family-base` in the real Net4Market design system and that component exists to show that system. An exhibit set in the portfolio’s own face is a fiction, not evidence. It is registered in `.impeccable/config.json` with that reason and loaded by the component’s own `@import`, so it costs the home page nothing. It briefly had a `<link>` in `index.html` as well, for a home-page exhibit that has since been cleared; that request is gone. It may not spread to a third surface.

**The One Family Rule.** There is no monospace. Numbers that are the proof get `font-variant-numeric: tabular-nums` and the accent, in the same face as everything else. The system used to pair the sans with a mono for metrics; on a page that contains no code, a monospace is a costume for "technical" rather than a tool, and dropping it removed a family, a font request, and a tell.

**The No-Eyebrow Rule.** Nothing sits above a heading. Client and discipline go *under* the title as metadata in Quiet Grey — the case layout's prop comment states it explicitly. There is no uppercase kicker, eyebrow, or small-caps pretitle anywhere in the system, and none may be added.

## Layout

Two layout models, one per surface class.

**Home surface** (`.fl-*`): full-bleed, no max-width container. A fluid gutter of `clamp(1.5rem, 4vw, 3.5rem)` is the only horizontal constraint. The hero is a two-column grid at `1fr 1fr` with a `clamp(2rem,4vw,3.5rem)` gap and `min(78svh, 47.5rem)` minimum height. The tracks are `1fr`, never `minmax(0,50%)` twice: two 50% tracks plus a gap ask for 100% + gap, which engines resolve differently and can push the page into a horizontal scrollbar by exactly the gap width. The artwork **stays inside the page gutter** — it used to cancel the gutter with a negative margin and bleed to the viewport edge, which left no margin for error against a scrollbar and put a hard edge flush with the window. Work is **two up with a lead**: `repeat(2, minmax(0,1fr))` at `clamp(2.5rem,4vw,4rem)`, with Net4Market spanning `1 / -1` above Yoga and Electrolux. Each entry is a large light panel with its caption beneath — client, claim, keywords. Three equal panels in one row would be the card grid this system refuses, and would also be a lie about the work: see *Case Panel*.

**Reading surface** (`.fl-read*`): centred, 70rem max container, same fluid gutter. Prose, headings, lists, callouts and captions all share the `--col` reading column (52rem); figures, tables, icon grids and screen strips are deliberately allowed to exceed it. Sections are separated by `clamp(3rem,6vw,5.5rem)`.

**Responsive: three ranges, and each one changes the composition rather than scaling it.** Size is the type ramp's job and it covers the whole span continuously (see The Anchored Clamp Rule); a breakpoint exists only for a decision that cannot be interpolated — how many columns a section has, which way a figure sits, what is allowed out into the gutter.

| Range | What changes |
|---|---|
| ≤ **1079px** | The hero collapses to one column, copy first, artwork second at `min(48svh, 25rem)`, and the hero's minimum height is released. |
| ≤ **900px** | One panel per row. Two tracks want about 900px before a panel is wide enough for its composition: at 768 a two-up panel is 336px, where a 27% phone screen is 91px. |
| ≤ **600px** | Phone. **The hero artwork is removed** — see the Segment Field. The keyword line steps up to 14px — 13px is a size that assumes a mouse and a desk — and the image panels become **1:1**, because a 4:3 panel at 342px wide is 257px tall and three phone screens have nowhere to go in it; the data tables are let out into the page gutter so the fact that they scroll sideways is visible at the edge. |

The hero breakpoint was at 900px and is now 1079px. Two columns want about 1080px before the copy track is wide enough to hold a display heading: measured at 1024px, a ~420px track, 64px type and an `h1` **four lines deep**, where the same heading stacked at 900px ran three.

**The breakpoint block lives at the end of `src/index.css` and must stay there.** These rules carry no extra specificity and win on source order alone. Written higher up, `.fl-table-wrap { margin-inline: … }` lost to the plain `.fl-table-wrap { margin: … 0 }` further down and the phone bleed silently did nothing — measured, the table still sat inside both gutters while the CSS looked correct.

Verified by measurement sweep at 320 / 360 / 390 / 414 / 480 / 600 / 700 / 768 / 834 / 900 / 1024 / 1180 / 1280 / 1440 / 1728: zero horizontal page overflow at every width, zero console errors.

**Rhythm:** every vertical measure is a clamp pair, not a fixed step — masthead `clamp(1rem,2.4vw,2rem)`, hero bottom `clamp(3rem,7vw,6.5rem)`, contact top `clamp(3.5rem,8vw,7.5rem)`. Tight local stacks use `0.5rem`.

**Spacing** is governed by The Spacing Grid Rule — see Named Rules below. It is the one rule in this document with an automated check behind it.

**Motion:** exactly one ambitious moment, the hero canvas. Everything else is a sequenced reveal — 1rem rise and fade over 0.7s on `cubic-bezier(0.16,1,0.3,1)`, triggered at 15% intersection with a −6% bottom margin, staggered by an explicit per-element delay (80–90ms steps). State transitions are 0.18–0.25s everywhere except the three case panels, which run at 0.55–0.6s — see The Soft-Panel Exception. The hidden start state is applied by script only when motion is welcome, so a reduced-motion visitor or a no-JS visitor gets the finished page; under `prefers-reduced-motion` all durations **and delays** collapse — delay too, or a visitor who asked for no motion would still wait 40ms for the case panels’ staggered state — and the canvas draws one static frame and never starts its loop. A static transform such as the Electrolux robot’s tilt is a resting state, not motion, and stays.

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

**The display size is set by the line count.** Two constraints govern this step, and the binding one changed between releases.

The first is that `Product Designer` must not break in half. It renders **7.71px of width per 1px of font-size** — 617px at 80, 293px at 38; the ratio holds because the tracking is in em. The hero copy column in the two-column layout is **0.44 × viewport**, since pad and gap are both 4vw below 1400: `(w − 0.08w − 0.04w) / 2`. So the role stays whole only while `F ≤ 0.44w / 7.71 = 0.0570w`. The original 80px ramp (`22px + 4.1vw`) crossed that at w ≈ 1370 and split the role from 1365 down to 1080; the 72px ramp fixed it; this one clears it with room everywhere.

The second constraint is the one that now binds: **how many lines the sentence occupies.** The owner's reading of the 72px version was that it was still enormous on desktop, and the thing making it enormous was a four-line heading, not the glyph size. Bisecting the largest size that still fits three display lines, at each width:

```
   w    copy col   3 lines up to
1080      475         44px   (4.07vw)
1180      519         48px   (4.07vw)
1280      563         52px   (4.06vw)
1366      601         56px   (4.10vw)
1440      634         59px   (4.10vw)
1600      704         67px   (4.19vw)
1920      845         82px   (4.27vw)
```

Like the first constraint, it is **a pure proportion with no constant term** — ~4.06vw at the narrow end. Holding three lines all the way down to 1080 therefore needs a near-bare-vw ramp, which is the photocopy scaling this ramp exists to prevent; and pinning the phone at 35px while obeying 4.06vw at 1080 forces about 48px at 1440, only 1.26× the head size, at which point the display stops being a display.

So the ramp is solved to hold three lines from **1280 up** — every common desktop — and to let it go to four below that: `clamp(2.125rem, 1.725rem + 1.9vw, 3.4375rem)`, 34 → 55, cap reached at 1442. At 1440 that is 1.45× the head size, a modest step but a real one, and the heading block drops from 462px to 341.

Swept at fifteen widths, the role is whole at every one and horizontal overflow is zero at every one:

```
        display   h1 lines   block   button y   first case y
1600      55px     1 + 3      341      654         925
1440      55px     1 + 3      341      651         918
1366      54px     1 + 3      336      598         814
1280      52px     1 + 3      329      602         828
1180      50px     1 + 4      369      621         829
1120      49px     1 + 4      361      604         805
1080      48px     1 + 4      356      598         799
1024      47px     1 + 2      257      415         935   ← single column from 1079 down
 900      45px     1 + 2      247      390         917
 768      42px     1 + 2      236      366         900
 600      39px     1 + 3      263      388         484
 414      35px     1 + 4      311      434         530
 390      35px     1 + 4      308      431         527
 360      34px     1 + 4      334      457         553
 320      34px     2 + 4      388      511         607
```

**The case title is derived from the display, not clamped on its own.** Two independent clamps drift. The case `h1` was `clamp(2rem, 1.375rem + 2.5vw, 3.625rem)` — 32 → 58 — set against a display of 38 → 80. When the display came down to 34 → 55 the case title ended up **larger than the home hero** at 1440, so a visitor going home → case study watched the type grow on the inner page. It is now `calc(var(--t-display) * 0.86)`, which cannot invert. The older warning still applies to any replacement: a bare 4.2vw held this at 30px from 320 to 714, so a 600px tablet got exactly the title a 320px phone got.

A pre-existing consequence of the column arithmetic, unaffected by type size: between 1080 and ~1160 the two-column art track is narrower than 510px, so the field renders without labels. Narrow band, known.

**The name does not break.** `.fl-greet b` carries `white-space: nowrap`. At 320 the greeting wraps to two lines and the break landed inside the name — `Ciao, I’m Federico / Landorno!` — which reads as a layout fault, not a line break, on the one proper noun the page is about. Held together it moves whole to the second line: 210px at 24px type in a 272px column.

**`text-wrap: balance` is overridden on the hero `h1` below 460px.** Balance is right for every heading on the site and right for this one down to 480. Below that it strands a word: at 440 and narrower it sets `Product Designer / bridging users, / business / and engineering.` — a short line **third of four**. It is avoiding a short *last* line and paying with a short *middle* one, which is the worse trade: a short last line is the rag, a short middle line is a hole the eye falls into. `text-wrap: pretty` puts it back at the end, and in a browser without `pretty` the initial `wrap` produces the same break.

The 460 threshold is measured rather than rounded to the nearest breakpoint: at 480 the two modes agree, at 440 they diverge, and above 500 balance has a second advantage — `pretty` pulls `bridging` up onto the role's line at 520–600 and balance does not. 460 sits in the gap and covers every phone up to 430.

**No market segment in the positioning.** The owner's own bio says "B2B products" and the hero used to say "working in B2B product"; both are deliberately dropped, from the copy and from the `description`, `og:description` and `twitter:description`. The portfolio exists to get him hired and naming a focus area narrows where he can be considered. Case studies still name their clients' markets accurately — `B2B SaaS`, `B2B2C` — because that is evidence about the work, not a claim about him.

**The One Ambitious Moment Rule.** The hero's generative canvas is the only thing in the system allowed to animate continuously. Any other motion is a one-shot reveal or a state transition under 0.25s.

**The Rows-Not-Cards Rule.** Page structure is rows, lists and bleeds. A grid of equally sized rounded cards is not a layout available to this system.

## Elevation & Depth

This system has **no shadow vocabulary at all**. There is not one `box-shadow` declaration in the stylesheet, and none may be added. Depth is carried by three devices only: the single tone step (`bg-2`) for any surface that must separate from the page; hairline borders at 10%/22% alpha for dividers and resting link underlines; and whitespace, which does most of the work. The hero artwork gets its presence from scale and bleed, not from lift.

The only "raised" gesture in the system is a 1px `translateY(-1px)` with 0.92 opacity on the primary button hover — a press-back, not an elevation.

### Named Rules
**The Flat-Material Rule.** Surfaces never lift. No `box-shadow`, no `filter: drop-shadow`, no hard offset shadow, no glass, no `backdrop-filter`. If something needs to come forward, it changes tone or gains a hairline.

**No decorative gradient — with exactly one exception, and it is scoped.** The three case panels carry a two-stop tonal gradient, authorised by the owner on 2026-11-06. It qualifies because it is not decoration: it is one hue lit from one side, which is what a 1328 × 462 flat field needs in order to read as a surface rather than as a swatch, and its mean lightness is identical to the solid it replaced. **A gradient that introduces a second hue, rotates hue along the ramp, reads as a mesh or a glow, or appears on any other surface is still banned**, and so is gradient text. The soft two-hue mesh is the most reliable tell of a generated page and no brief earns it back.

## Shapes

Radii are small and functional, chosen so that nothing reads as a rounded card — with one deliberate exception, the 16px case panel: 2px on the focus ring, 4px on small frames, 6px on controls and raised surfaces (primary button, skip link, callout, figure frame, table ends), 8px on prototype screen images, 12px on the 48px competitor app icons (the one place where a radius is imitating an external artifact rather than expressing the system).

Form language is rectilinear and panel-based. Image and art surfaces are fixed-ratio frames — 4:3 on the two-up home panels, 1:1 on a phone, 16:9 on case-study figures — filled by `object-fit: cover`. The home’s lead panel takes **no ratio at all**: it holds a composed artifact rather than a cropped photograph, so its content sizes it. Borders are hairlines or nothing; there are no coloured rules, **no pills**, no circles except the round line caps inside the generative field.

### Named Rules
**The Small-Radius Rule.** Nothing exceeds 8px except the 48px external app icons at 12px, and the three home case panels and the process flow at **16px**. The panel exception was taken on 2026-11-06 together with the light panels: 8px on a 1328×462 field reads as a square with a chipped corner, not as a radius. The process flow joined them on 2026-11-08, by the same argument and at the owner's instruction: its boxes are 574 × 75 and at 8px they read as chipped too, and his reference is rounder than anything else on the site. A radius large enough to read as a bubble or a pill is still out of the world, and no control, tag or small frame may use `--r-3`.

## Components

Components are tactile and responsive — they answer the pointer in colour and at most one pixel of movement.

### Buttons
- **Shape:** softly squared (6px radius).
- **Primary:** violet ground, `on-violet` text, body size at weight 500, `0.75rem 1.5rem` padding. One per screen: the contact action. It is the only filled element in the system.
- **Hover / Focus:** rises 1px and drops to 0.92 opacity over 0.18s on `cubic-bezier(0.16,1,0.3,1)`. Focus is the global ring: 2px solid violet at `0.25rem` offset.
- **Ghost / Secondary:** there is no secondary button. The sibling action is an underlined text link (`.fl-link`): Reading Grey text on a `line-2` hairline underline, 2px below the baseline; on hover the text goes full ink and the hairline turns violet.

### Cards / Containers
- **Corner Style:** 16px on the home case panels, 8px on the image crops inside them, 6px on the callout and the case-study figure frame.
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

### Case Panel
The home work list's unit, rebuilt on **2026-11-06** against a reference the owner pinned. A large panel in the client’s own dark colour carrying the actual work, with the caption beneath it: client at head size in full ink with the arrow, the claim at lead size under it, the keyword line at label size under that. Net4Market runs the full width above Yoga and Electrolux.

Each panel’s ground is a two-stop tonal gradient in that client’s hue — see *The Case Panels* for the construction and the two measured bounds that fix its range.

**The Net4Market panel is empty.** The owner cleared it on **2026-11-06** and is deciding what belongs in it. The slot keeps its 12:5 ratio (4:3 below 900px) so the space being designed for is the real one, and the caption underneath is unchanged. **The home page must not ship in this state.**

What stood there was a design-system exhibit composed in code from the client’s real three-layer token set — `--color-blue-500` → `--background-brand` → `--button-primary-default-bg`, resolving into a field group and a button, set in Roboto because that is the system’s own face. It is **parked, unreferenced, at `src/components/N4mSystemPanel.tsx`**, still registered in `.impeccable/config.json`. Delete it or bring it back; do not leave it in that state indefinitely. The reasoning that produced it still holds and is worth re-reading before the slot is filled: Net4Market has **no product screenshot in the repo** — `src/assets/n4m/` holds a logo and nothing else — and a design system is the one subject better shown as a system than as a screen.

**Two things died here, and both for the same reason.** The 16:10 art frame measured 304 × 190 at 1440 — 23% of the row, too small to hold a product screen anyone could read, and the same seeded texture three times over, so the slot read as one picture repeated rather than as three projects. Its replacement, a hairline band of title plus outlined keyword chips, the owner read as **corporate** — correctly: a grid of hairline rectangles is enterprise-dashboard furniture, and the page it produced was a changelog, not a portfolio. The panel answers both. The work is at a size worth looking at, and the keywords went back to being a quiet line of text.

**The client is the heading, not the claim.** `Electrolux` does work in a scan that no sentence can, and a recruiter is scanning. The claim sits directly under it at lead size and is the line that earns the click. Both are inside the band, so nothing sits above a heading.

**Why Net4Market leads.** It is the throughline case for the *systems thinker* half of the positioning, and it is the only case study with no product screenshot in the repo. Whatever fills its panel, it keeps the full width above the other two.

**A composed panel wants `aspect-ratio: auto`; an image panel wants a ratio.** While the exhibit stood there the slot let its content size it, because a fixed ratio either starved that content or left a hole — at 12:5 it came out 553px against 480px of content at 1440, and at 1024 the same ratio gave 343px for content needing 450. Empty, it carries 12:5 again to hold its shape. Set it back to `auto` if a composed panel returns.

**The caption takes the width of its panel.** `.fl-claim` carried `max-width: 34ch` and it was wrong: a `ch` measure belongs on prose read in sequence, and this is one line under a heading. At 34ch it broke `When surveys said “yes” but behavior said “no”` at 435px inside a 635px column and sent two words to a second line for nothing. There is no measure on the caption.

**Yoga is one screenshot, centred, with the Electrolux phone’s zoom — and nothing else on it.** The owner replaced a two-crop composition with `yoga-quotation-error.png` on 2026-11-08: the quote screen showing its validation errors, which is the frame the 45→3 minutes was won on. It needs no crop box, and that is the point — the two files it replaced were 896 × 320 presentation renders carrying their own dark navy backdrop, so each had to sit in a box whose aspect ratio *was* the crop, with `object-fit: cover` pinned to the edge worth keeping. This one is the interface edge to edge at 1512 × 982.

**No radius and no border on it either.** Both were carried over from those crops, where a hairline separated one light crop from the one behind it, and the owner cut them the same day: with a single image there is nothing to separate it from. The `--panel-line` token went with them — that border was its only consumer — as did the `.fl-art-yoga` class, which no longer had a rule behind it, and an inert `border-radius` on the Electrolux phone, whose PNG already carries its own transparent rounded corners.

It is sized by **`max-width` and `max-height` together**, both dimensions `auto`, where the phone is sized by a height. The reason is orientation: at 1.54 wide per unit tall this one is **landscape**, so on a 4:3 panel the WIDTH binds — measured at 628 × 471, the 4rem inset box is 500 × 343 and the image fits to 500 × 325. A height would have run it off the sides. Two maxes let the browser take whichever actually binds, and the rule then survives a panel of any proportion.

**On a phone that combination is unkind.** The image panels turn 1:1 below 600px — a decision taken when the Electrolux panel still held three portrait screens — and a landscape image in a square panel, minus a fixed 4rem inset, comes out **214 × 140 inside 342 × 342: about a quarter of the panel**, floating in gradient. It is the fixed-inset problem below, sharpened by the orientation. Giving Yoga a 4:3 panel on phones, or making the inset proportional, each fix it.

**Electrolux is the owner’s own composition**, supplied as a reference image on 2026-11-08 and built to its measurements: the phone upright and centred, the **gold** robot behind it at **315°**, the **blue** robot in front at **−15°**. Those angles are his second pass — 135° and 30° were built first and he read them as the mirror of his reference, so the gold went round another 180° and the blue 45° the other way. DOM order *is* the stacking order — gold, phone, blue — so no `z-index` is needed and none should be added. The phone is `device-widget.png`, and that choice is not arbitrary: it is the home-screen widget, the literal subject of this case study and the thing the research said not to ship. Both robots are transparent PNGs, so the panel’s gradient is their ground.

**One unit governs the whole scene: `--phone`**, the phone’s resting height, which is the panel inset by **4rem** on every side — his 2rem of container padding plus 2rem again. Every other size and travel distance is a multiple of it. That is what makes the scene scale as one object instead of three things that happen to share a stylesheet, and it is why the composition needs no breakpoint override at all, where the Yoga panel needs one.

Robot *positions* are offsets from the panel centre in `--phone` units, not percentages of the panel. Percentages were built first and they break it: the phone is sized by a fixed inset, so robots pinned to panel percentages drift off it as the panel shrinks — overlapping the phone in the reference, clear of it by 40px in ours. Measured off the reference, the offsets are −0.376 / +0.135 for the gold and +0.303 / −0.182 for the blue.

Robot *size* is **0.42 of the phone’s height, the same for both**, and it is a number the owner gave rather than one read off the image: 231.17px wide against a 551px phone. An earlier pass sized them off the reference by eye — 0.26 and 0.33 — and he was right that it came out tiny.

**The fixed inset does not scale, and that is a live trade.** At the reference’s 1632 × 1224 the 4rem inset is 4.5% per side and the phone fills **91%** of the card. On the real cards it is the same 64px against a much smaller box: **73%** at the 628 × 471 desktop card, **63%** at 342 × 342 on a phone, **56%** in the 387 × 290 card at 901px. The scene therefore reads smaller than the reference, and progressively smaller as the card shrinks. This is what he specified in rem, so it is built that way; a proportional inset is a one-line change if the reference proportions matter more than the literal numbers.

**Hover.** The phone grows into half its inset — 4rem of clearance at rest, 2rem hovered — centred, which is the zoom he asked for. It animates `height` and not `scale()`: the factor between the two states is (H−4rem)/(H−8rem), which varies with panel height (1.18 at 476px, 1.30 at 342, 1.38 at 296), and `calc()` cannot divide by a length, so one scale value would be wrong at every size but one. The cost is a layout pass per frame, scoped to this panel by its own size containment. **Each robot turns 15° clockwise and does nothing else** — gold 315° → 330°, blue −15° → 0°. Neither grows; the owner was explicit about the gold and asked on 2026-11-08 that the blue only turn.

**The blue robot used to leave along a curve, and that is gone.** It was built as two nested elements — a wrapper carrying the horizontal travel on a front-loaded ease, the image the vertical on a back-loaded one — because a single `transform` interpolates its translation in a straight line whatever easing it carries. Measured on the built page, that path departed from the straight line between the two states by **24px at 300ms, 32% of the line’s 73.9px**. The owner cut it: it read as the robot fleeing the card rather than answering the pointer. The wrapper went with it and the blue robot is a plain `<img>` again. **If a curved path is ever wanted here or anywhere else, that two-element split is how to get one** — the technique is sound, the application was not.

**`container-type: size` on `.fl-panel-elux` is load-bearing.** `cqh` exists only on a size container, and a size container is legal here only because the panel’s height is fully determined by `aspect-ratio`. Give that panel `aspect-ratio: auto` and size containment collapses it to nothing.

**The panel is the container, never the window.** A panel is full width in one slot and half width in another, so its composition answers to `@container`, not to a media query. The `container-type` lives on `.fl-panel` in `index.css` and **not** on `.n4p`: an element cannot be styled by a query against its own container, and with it on `.n4p` the block silently hid the demo card while leaving the grid at two columns — measured at 390px, two tracks of 138 and 132 where there should have been one.

**The way in is the arrow in the client name.** An earlier build left the row a link with nothing on it that said so — no arrow, no underline, no action — and the only affordance was the sibling dim, which nobody sees until they are already hovering the thing they were meant to discover. The owner named this directly.

**The panels answer the pointer with movement as well as light**, added at the owner’s request on 2026-11-06. On Electrolux the phone lifts `0.75rem` and the robot straightens from −9° to −5° and drifts up and left — it is a machine that moves, so it moves. On Yoga the two crops lift, the front one further than the one behind, which separates them in depth instead of sliding the pair as one sheet. Both are **transform-only**, so neither costs a layout pass.

The owner asked for this on Electrolux alone; Yoga was given the same answer because a list where one panel moves and the other sits still reads as a bug rather than as restraint.

**The Soft-Panel Exception.** The case panels run at **0.55–0.6s**, not the 0.18–0.25s every other state change in this system uses. The owner asked on 2026-11-08 that the card’s lighting and movement be soft rather than instant, and at 0.25s a panel this large snapped. The One Ambitious Moment Rule is untouched — these are still state transitions, not loops — but the cap no longer applies to them and does still apply everywhere else. Where two objects move together they also carry a small stagger, so they read as two things of different mass answering the same pointer rather than one rig moving in lockstep.

**The panels rest at 0.72, not at 1**, and that is the owner’s instruction of 2026-11-06: the three must not all sit lit when nothing is hovered. The list reads as one quiet field with a single bright thing in it rather than three equal claims on the eye. Hovering lifts that panel to **1** and drops the other two to **0.5**, so the lit one reads as *chosen* rather than merely brighter.

**Only the panel dims — never the caption.** The client, the claim and the keyword line are the three things on this page that have to be read, and resting them below full ink would trade a permanent contrast loss for a hover effect. The dim is on `.fl-panel` alone.

`:not(:hover)` in the sibling rule is not optional: `:has()` carries the specificity of its argument, so without it `.fl-list:has(.fl-case:hover) .fl-panel` outranks `.fl-case:hover .fl-panel` and even the hovered panel stays dim. And the selector hangs off `.fl-list:has(…)`, never `.fl-list:hover`, which also fires from the 64px gaps between entries — where nothing is hovered and all three would drop at once.

**The metric line is gone**, removed with the art frame at the owner's instruction, leaving the claim to carry the outcome. This is in tension with Product Principle 2 — *lead with outcomes* — and the tension is the owner's call, not an oversight: the Yoga claim states its own numbers, Net4Market's `600+` and Electrolux's `0` appear inside their case studies, and the impact tables carry all of it. **Do not restore it from a reading of Principle 2 alone.**

### Figure
One figure treatment across the reading surface: a 16:9 `bg-2` frame holding either a real lazy-loaded image (`object-fit: cover`, or `contain` when the image must show whole) or the static generative field as a placeholder, plus an optional 13px Quiet Grey caption clamped to the reading measure. Swapping placeholder for real artwork is a one-line change.

### Process Flow
A stack of steps, each one a box, with what that step was missing on a red chip riding its bottom edge. It exists for the Net4Market case study, where the opening paragraph describes a process whose **shape** is the argument — it runs one way and then it ends — and a shape is hard to hold in a sentence. `ProcessFlow` takes `steps`, an `end` and a `caption`; any case study can reuse it.

**This is the owner's composition, from a reference of his own, and the second attempt at it.** The first was a hairline rail with the gaps filed in a second column and no colour anywhere. It broke no rule in this document and he rejected it twice. Three things his version does that it did not, and all three are the point:

- **Each step is an object with visible edges** — a `bg-2` box at 16px, `0.75rem 1rem` of padding, 51px tall.
- **The text is centred** (`--t-read`), so the column reads as a stack rather than as a list. The labels are kept **short** for that reason: the longest is 27 characters, 253px of the 302px a box has inside its padding. Measured at 390 / 744 / 1440, none of the eight wraps. Lengthen one and re-check at 390, where the box is 308px.
- **The problem is pinned TO its step, not filed beside it.** The chip straddles the boundary — `translate(-50%, 50%)` off `bottom: 0`, so it stays centred and stays on the edge however many lines it runs to. That is the device: it belongs to the box it hangs off, and it is what the eye lands on first.

`width: max-content` on the chip is **not optional**. An absolutely positioned box with only `left` set shrinks to fit the space between that edge and its container's right edge, so at `left: 50%` every chip was silently capped at *half* the box: measured on a 390px phone, 146px of an available 260, with three of the four wrapping to two lines for no reason. `max-content` sizes the chip to its text; `max-width: calc(100% - 2rem)` puts the real cap back.

**Small on purpose, and small twice over: `max-width: 24rem`.** At the full content band the boxes are 944px wide with four centred words in them, which is a banner, not a step. The build that followed ran 640px wide with 24px labels and stood **900px tall** — taller than the section it illustrates. The owner called it enormous and it was: a diagram that outweighs its argument has stopped being a diagram. The figure is now **384 × 545** at desktop and **342 × 534** on a 390px phone, and it stays left-aligned with the prose above it rather than centred in a band the text does not use. The cap binds from about 450px up, so the composition is the same at every size and needs **no breakpoint of its own**; at ≤600px the 13px chip steps up to 14px with the rest of the label-size text.

**No caption.** There was one and the owner cut it. The paragraph directly above the figure tells the same process in full, so the caption was restating a restatement, and the list of steps reads on its own for anyone who cannot see the layout.

**The frame is the page ground plus a hairline, not a third neutral.** The boxes inside are the one tone step the system owns, so the container has to be `bg` itself — which is exactly the relationship in the reference, where the container is darker than the rows it holds.

**The closing box is dashed and empty: the step that never existed.** It is the only element that says something the prose does not, and it is a `<p>` outside the `<ol>` — it is not a step, it is the absence of the next one.

**Four of the eight boxes carry no chip, and they are not filler.** Without them the diagram is a list of complaints; with them it is a process that mostly worked, which is why nobody had called it out yet — the sentence the section opens on.

**It is not hidden from assistive technology.** This is a diagram, not decoration: it renders as an ordered list of real sentences, each gap read out immediately after the step it belongs to, which is the same information the boxes and chips give a sighted reader. The dashed closing box carries its own sentence rather than relying on the border to say it.

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

**SegmentField** (static sibling, used only by `Figure` on the reading surface — the home’s three instances went with the art frame on 2026-11-06): the same field frozen into inline SVG on a 640×400 viewBox, seeded by `mulberry32` so each case study always shows the same composition — step 30, length 16, 1.2px round caps, 8.5% accent rate, per-segment opacity 0.30–0.55, strokes bound to `var(--accent)` / `var(--ink)` rather than literals, so a palette change reaches it for free. Each one is replaced one-for-one when a real mockup lands.

### Named Rules
**The One Imagery Family Rule.** All *generated* imagery in this system comes from the segment field — live in the hero, seeded and static in `Figure`. No stock photography, no 3D render, no gradient mesh, no illustration in a second visual language. Real product screenshots are not generated imagery and are the point: since 2026-11-06 they are the home page’s main visual, and the generative field is confined to the hero and to figures still waiting for artwork.

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
- **Do** pin a problem to the thing it belongs to rather than filing it alongside: the process-flow chip straddles its step's bottom edge, and that overlap is what makes it read as *that step's* problem. Give it `width: max-content` or `left: 50%` will cap it at half the box.
- **Do** cap a diagram's width when its content is short. 40rem on the process flow; at the full band the same boxes are banners.
- **Do** lead a case entry with the client, then the claim, then the keyword line — in that order, all beneath the panel.
- **Do** give any block that is a link in its entirety a visible way in. A row that is clickable and says nothing about it is a row nobody clicks — see *Case Panel*.
- **Do** crop a source render with a crop box whose aspect ratio is the region worth showing, plus `object-fit: cover` and `object-position`. Never ship a presentation render with its own backdrop into a panel.
- **Do** prefer a transparent PNG for an object inside a panel: it takes the panel’s own gradient as its ground and needs no crop at all.
- **Do** keep a hover movement transform-only where you can, and stagger two objects rather than slowing both.
- **Do** split a curved path across two elements with two easings — one axis each. A single `transform` interpolates in a straight line whatever easing it carries.
- **Do** measure a scene in one unit tied to its main subject, so it scales as one object and needs no breakpoint override.
- **Do** carry the centring `translateX(-50%)` into every hover state of a centred object, or it jumps half its own width on the first hover.
- **Do** let a panel’s contents respond to `@container` on `.fl-panel`, not to the viewport — the same panel is full width in one slot and half width in another.
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
- **Don't** use a gradient anywhere but the three case panels, and only as a two-stop ramp within one hue at L = 0.30 ± 0.045. No second hue, no hue rotation, no mesh, no glow, no gradient text.
- **Don't** build a grid of equally sized rounded cards as page structure.
- **Don't** invent a brand colour. Sample it from the client's own screenshots, or use a value from their real token set, and derive the ground by the one rule: keep the hue, set OKLab L to 0.30, hold chroma at 0.085.
- **Don't** rest the panels at full opacity, and don't extend the dim to the caption text.
- **Don't** use `--r-3` anywhere but the three case panels, or a `--panel-*` ground anywhere but their surface.
- **Don't** put outlined chips back on the keyword line. That version was built, and the owner read the result as corporate.
- **Don't** put a Unicode arrow where an icon belongs. The `→` inside a sentence is text; the one in a case client name is `ArrowIcon`, drawn at a 16 viewBox with a 1.5px stroke.
- **Don't** write a backtick inside `N4mSystemPanel`'s stylesheet comments. The whole sheet is a template literal and one ends it.
- **Don't** put an uppercase eyebrow, kicker, or pretitle above any heading.
- **Don't** write a literal colour value in a component, inline style, or canvas call.
- **Don't** interpolate a size between the steps of a ramp. Two ramps exist, one per mode, and neither is a licence to invent a third value inside the other.
- **Don't** exceed an 8px radius (the 48px external app icons at 12px are the single documented exception).
- **Don't** animate anything continuously except the hero canvas; everything else is a one-shot reveal or a sub-0.25s state transition — and even that one comes to rest where `(hover: none)` matches.
- **Don't** write canvas furniture in bare pixels. Anything drawn at a fixed size inside a fluid box grows as the box shrinks: that is how four name pills came to fill 71% of the width of a phone canvas. Multiply by `ui`.
- **Don't** introduce imagery from outside the segment-field family — no stock photos, no gradient meshes, no second illustration language.
- **Don't** reintroduce a light theme, a theme toggle, or a `prefers-color-scheme` branch: the single dark ground is a settled decision, not an omission.

# flandorno.github.io

Federico Landorno's UX design portfolio. React 19 + TypeScript + Vite, deployed
to GitHub Pages.

**Live:** [flandorno.github.io](https://flandorno.github.io/)

---

## How this was built

This site was designed and built in collaboration with an AI pair, working from
a written brief rather than from prompts in a chat window. That choice is the
reason two files exist that a portfolio normally would not have:

- **[PRODUCT.md](PRODUCT.md)** — product truth. Who the site is for, what it has
  to earn, which metrics are cleared for public use, and an explicit list of
  things that must never be invented: no testimonials, no stated seniority, no
  employer claim, no fabricated bio. Every content decision is checked against it.
- **[DESIGN.md](DESIGN.md)** — the design system as built, not as intended. Tokens,
  the grid engine, the two kinds of object, the scene transition and the reading
  layout, with the reasoning behind each rule.

Both are written for the next person to open this repo, which is usually a
future version of me. They are the reason the system held together across a full
redesign instead of drifting.

## Rules this codebase holds itself to

| | |
|---|---|
| **Spacing** | Every length is `rem` on a 4px grid; margin, padding and gap use one ten-step scale. Enforced by `npm run audit:spacing`. |
| **Type** | Doto, a dot-matrix face, for names, claims and labels; Atkinson Hyperlegible Next for anything read in sequence. Doto is sized by what fits a tile, which is arithmetic because it is monospace. |
| **Colour** | Three token layers, one orange, a black ground in both themes. Every text and control pairing is checked by `npm run audit:contrast`. |
| **Motion** | The home page moves one scene per gesture, with tiles that can never overlap by construction. One switch, and the system setting, turn all of it off. |
| **Accessibility** | Keyboard-operable, visible focus, real heading outline, scenes that are not showing are inert, and the page works as a plain scroll with animations off. |

## Running it

```bash
npm install
npm run dev              # http://localhost:5173
npm run build            # tsc -b && vite build
npm run lint
npm run audit:spacing    # the spacing grid, checked across every .css and .tsx
npm run audit:contrast   # every colour pairing, in both themes
npm run deploy           # build + publish dist/ to gh-pages
```

## Structure

```
src/
  grid/         the grid engine (useGrid), Scene, the row-fitting tile (Fit),
                screen text and the icons
  home/         the six scenes of the home page and the landing's controls
  pages/        Home, About and the four case studies; pages/it/ holds the
                Italian drafts
  components/   the fixed row (Header), CaseLayout, GroundFx, Figure, Callout,
                ProcessFlow, FormComparison
  i18n/         interface strings, English and Italian
  lib/          preferences, battery, sound, theme, contact, document title
  styles/       tokens.css, base.css, mosaic.css, reading.css
scripts/
  audit-spacing.mjs    the spacing grid's enforcement, with its exemptions and
                       the reason for each one written into the file
  audit-contrast.mjs   every colour pairing, in both themes
```

## Case studies

- **Net4Market, design system** — from a UI kit to a shared language
- **Net4Market, design process** — 600+ disconnected files consolidated into one source of truth
- **Yoga** — issuing an insurance policy, from 45 minutes to 3
- **Electrolux** — research that argued against shipping the feature everyone wanted

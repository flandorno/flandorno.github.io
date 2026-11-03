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
  the two type ramps, the spacing grid, the motion budget, and a set of named
  rules with the reasoning behind each one, including the ones that were learned
  by getting them wrong first.

Both are written for the next person to open this repo, which is usually a
future version of me. They are the reason the system held together across a full
redesign instead of drifting.

## Rules this codebase holds itself to

| | |
|---|---|
| **Spacing** | Every length is `rem` on an 8px grid, `0.25rem` the only half-step. Enforced by `npm run audit:spacing`, which fails the build on a violation. |
| **Type** | Two ramps, one per surface mode — the home is scanned, a case study is read — and nothing between their steps. |
| **Colour** | One accent. One tone step for surfaces. No shadow vocabulary anywhere. |
| **Motion** | Exactly one continuously animating element, the hero canvas, measured at a locked 60fps. Everything else is a one-shot reveal under 0.25s. |
| **Accessibility** | Keyboard-operable, visible focus, real heading outline, `prefers-reduced-motion` honoured by drawing one static frame rather than by stopping mid-animation. |

## Running it

```bash
npm install
npm run dev              # http://localhost:5173
npm run build            # tsc -b && vite build
npm run lint
npm run audit:spacing    # the spacing grid, checked across every .css and .tsx
npm run deploy           # build + publish dist/ to gh-pages
```

## Structure

```
src/
  pages/        one file per surface — home and three case studies
  components/   FieldCanvas (the hero's generative field), CaseLayout, Figure,
                Callout, SegmentField (its static sibling), FormComparison
  lib/          reveals, in-page scrolling, the document title
scripts/
  audit-spacing.mjs   the spacing grid's enforcement, with its exemptions and
                      the reason for each one written into the file
```

## Case studies

- **Net4Market** — 600+ disconnected files consolidated into one source of truth
- **Yoga** — issuing an insurance policy, from 45 minutes to 3
- **Electrolux** — research that argued against shipping the feature everyone wanted

/* ─────────────────────────────────────────────────────────────────────────────
   A process, drawn the way the owner drew it: a stack of steps, each one a
   box, with a red chip riding the bottom edge of the ones that were broken.

   The composition is his, from a reference image, and this is the second
   attempt at it. The first used a hairline rail with the gaps filed in a
   second column and no colour at all — it broke no rule in DESIGN.md and he
   rejected it twice. Three things his version does that mine did not: each
   step is an object with visible edges, the text is centred so the column
   reads as a stack rather than as a list, and the problem is pinned TO its
   step instead of placed beside it. The chip straddling the boundary is the
   device: it belongs to the box it hangs off, and it is what the eye lands
   on first.

   The red is `--flag`, the third sanctioned break in The One Voice Rule, and
   the token comment in `src/index.css` records whose call it was.

   This is a diagram, not a decoration, so it is NOT hidden from assistive
   technology. It renders as an ordered list of real sentences, each gap read
   out immediately after the step it belongs to, which is the same information
   the boxes and chips give a sighted reader. The dashed closing box carries
   its own sentence rather than relying on the border to say it.

   It carries no caption. There was one; the owner cut it on 2026-11-08. The
   paragraph directly above the figure tells the same process in full, so the
   caption was restating a restatement — and the list of steps is readable on
   its own, so nothing is lost for anyone who cannot see the layout.

   All spacing lives in `src/index.css` under `.fl-flow-*`, per The Spacing
   Grid Rule — there is not a length in this file.
   ───────────────────────────────────────────────────────────────────────────── */

export type FlowStep = {
  /** The action, in the order the team performed it. */
  step: string;
  /** What was missing at this step. Omitted where nothing was. Keep it to a
   *  few words: the chip is as wide as its text and sits on a 576px box. */
  gap?: string;
};

type Props = {
  steps: FlowStep[];
  /** Where the chain ran out. Drawn as an empty box, not as a step. Omitted
   *  for a process that finishes on its last step. */
  end?: { step: string; gap?: string };
};

export default function ProcessFlow({ steps, end }: Props) {
  return (
    <figure className="fl-flow" data-reveal>
      <div className="fl-flow-panel">
        <ol className="fl-flow-steps">
          {steps.map((s) => (
            <li className="fl-flow-step" key={s.step}>
              <span className="fl-flow-label">{s.step}</span>
              {s.gap ? <span className="fl-flow-gap">{s.gap}</span> : null}
            </li>
          ))}
        </ol>
        {/* Outside the list on purpose: it is not a step, it is the absence of
            the next one. The markup says so and so does the dashed border. */}
        {end ? (
          <p className="fl-flow-end">
            <span className="fl-flow-label">{end.step}</span>
            {end.gap ? <span className="fl-flow-gap">{end.gap}</span> : null}
          </p>
        ) : null}
      </div>
    </figure>
  );
}

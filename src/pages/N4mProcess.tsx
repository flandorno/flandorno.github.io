import { Link } from "react-router-dom";
import CaseLayout from "../components/CaseLayout";

/* The process half of the Net4Market work, split from /n4m on 2026-11-14.
   Every claim here was confirmed by the owner that day: he raised the problem
   and led the change, the presentation is a fixed step attended by the whole
   team on the task, the designer reviews the build before release, and the
   three effects in the last section are ones he observed (not measured, so
   the page gives no numbers for them).

   The files, as he corrected them: there is NOT one single file. Each app has
   a folder with one file per feature area holding the current version of its
   screens, and the per-task files are still created and kept beside them as
   history. Work always starts from the current version.

   "Task", not "user story": his call, so a reader who has never worked in
   agile is not stopped by the word. */
export default function N4mProcess() {
  return (
    <CaseLayout
      title="600+ files, one source of truth"
      meta="Net4Market · How a three-person design team works"
      docTitle="Net4Market Design Process Case Study | Federico Landorno"
      facts={[
        { label: "Role", value: "Product designer. I raised the problem and led the change." },
        { label: "Team", value: "Three designers" },
        { label: "Period", value: "June 2025 to present" },
        { label: "Outcome", value: "One current version of every screen, solutions presented in person, every build reviewed before release" },
      ]}
    >
      <section data-reveal>
        <h2>How the team worked</h2>
        <p>
          When I joined Net4Market in June 2025 the design team was three people: a junior, a
          senior and me. The process I found was already in place, and on paper it was complete.
        </p>
        <p>
          A designer picked up a task, created a new file, designed the screens and put
          together a presentation explaining the solution. The presentation was left for the
          product owner and the team lead to read on their own. Feedback came back in writing, the
          designer iterated, and the screens went to the developers. After that, nobody compared
          what was released with what had been designed.
        </p>

        <p>
          Every task had its own file, and there were more than 600 of them. Starting a new one
          meant remembering which earlier tasks had touched the same part of the interface, then
          finding those files. New people were expected to figure it out. The only map was in the
          heads of whoever had been there longest.
        </p>
        <p>
          No single step looked broken, which is probably why nobody had raised it. I was the first
          to say that the way we worked was the problem, and I proposed how to change it.
        </p>
      </section>

      <section data-reveal>
        <h2>What I changed</h2>
        <p>I led three changes, one for each place where the old process lost information.</p>

        <h3>A current version of every screen</h3>
        <p>
          Each app now has a folder with one file per feature area, and that file holds the current
          version of its screens. Every task starts from there. We still create a separate file for
          each task and keep it next to the others, so when several tasks run at the same time
          there is a record of what each one changed.
        </p>

        <h3>Presenting the solution</h3>
        <p>
          The presentation stayed, but now the designer presents it to the whole team involved in
          the task. People ask their questions on the spot and hear the reasoning behind each
          choice. Before, they had to reconstruct it from the slides. Doubts come out in that
          meeting, before development starts. It is a fixed step for every task.
        </p>

        <h3>Reviewing the build before release</h3>
        <p>
          The designer who worked on a task looks at the build before it goes out and flags what
          differs from the design. In the old process those differences went unnoticed and piled up
          from one task to the next.
        </p>
        <p>The review covers three things:</p>
        <ul className="fl-ul">
          <li>
            <strong>The feature.</strong> Together with QA, we check that it is implemented the way
            it was designed.
          </li>
          <li>
            <strong>The tokens.</strong> We check whether the build actually uses the new tokens.
          </li>
          <li>
            <strong>Accessibility.</strong> We check it on the build, not only on the design.
          </li>
        </ul>
      </section>

      <section data-reveal>
        <h2>What changed for the team</h2>

        {/* Same treatment as the tables on the other case studies: a focus
            stop so a sideways scroll is reachable from the keyboard. */}
        <div className="fl-table-wrap" role="region" tabIndex={0} aria-label="The design process before and after">
          <table>
            <caption className="sr-only">The design process before and after</caption>
            <thead>
              <tr>
                <th scope="col" aria-label="Step"></th>
                <th scope="col">Before</th>
                <th scope="col">After</th>
              </tr>
            </thead>
            <tbody>
              <tr><th scope="row">Design files</th><td>600+, one per task, no map</td><td>A current file per feature area, task files kept as history</td></tr>
              <tr><th scope="row">Solution review</th><td>Read alone, feedback in writing</td><td>Presented to the whole team</td></tr>
              <tr><th scope="row">Released interface</th><td>Never checked</td><td>Reviewed by the designer</td></tr>
            </tbody>
          </table>
        </div>

        <p>Three things are different in the day-to-day work.</p>
        <ul className="fl-ul">
          <li>
            <b>Less rework.</b> Questions that used to surface after development, or over rounds of
            written comments, now come up during the presentation.
          </li>
          <li>
            <b>Faster starts.</b> Nobody searches old files to find out what a screen currently
            looks like. The current version is where the work begins.
          </li>
          <li>
            <b>Easier onboarding.</b> A colleague who joined after the change found their way
            around without depending on someone else&rsquo;s memory.
          </li>
        </ul>
        <p>
          This ran alongside the rebuild of our UI kit into a design system, which is a separate
          case study:{" "}
          <Link to="/n4m" className="fl-inline">From UI kit to shared language</Link>.
        </p>
      </section>
    </CaseLayout>
  );
}

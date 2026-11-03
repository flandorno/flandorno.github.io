import CaseLayout from "../components/CaseLayout";
import Callout from "../components/Callout";
import Figure from "../components/Figure";
import yoga1 from "../assets/yoga/yoga-1.png";
import yoga2 from "../assets/yoga/yoga-2.png";

export default function D4Next() {
  return (
    <CaseLayout
      title="From 45 to 3 minutes to issue a policy"
      meta="Yoga · B2B2C SaaS insurance platform"
      docTitle="Yoga Case Study | Federico Landorno"
    >
      <Figure seed={29} />

      <section data-reveal>
        <h2>Context &amp; Challenge</h2>
        <p>
          When I joined D4NEXT in 2020, we were an 8-person startup trying to break into the Italian
          insurance software market, a space dominated by legacy systems from the &rsquo;90s that
          insurance companies were reluctant to replace.
        </p>
        <Callout>
          <strong>My challenge:</strong> Design a modern interface layer that would sit on top of
          these existing systems, making them accessible without requiring companies to rip out their
          infrastructure.
        </Callout>
      </section>

      <section data-reveal>
        <h2>Finding the real problem</h2>
        <p>
          I spent two weeks shadowing insurance agents at two agencies, watching how they actually
          worked. I expected to find complaints about confusing interfaces or missing features.
          Instead, I found two fundamental problems working together to kill productivity:
        </p>
        <ol className="fl-ol">
          <li>
            <strong>Task repetition</strong>, an agent helping a family insure 3 cars and a house
            would repeat the same flow 4 times, each time manually typing (or copy-pasting) the same
            customer and assets data into disconnected screens. Every. Single. Time.
          </li>
          <li>
            <strong>Non-linear navigation</strong>, the old system used a &ldquo;customizable
            card&rdquo; interface where agents could jump between sections freely. Sounds flexible,
            but in practice it meant constantly hunting for the right card, losing context, and
            forgetting which data was already entered.
          </li>
        </ol>
        <p>
          Agents took around <strong>45 minutes</strong> (avg) of navigation and copy-paste to get to
          the goal.
        </p>
        <Figure seed={31} />
        <p>
          After mapping the workflow across multiple sessions, the pattern was clear: agents spent
          70% of their time navigating a non-linear flow and re-entering data, 30% on engaging with
          their clients.
        </p>
      </section>

      <section data-reveal>
        <h2>Designing the solution</h2>

        <h3>Making the system remember</h3>
        <p>
          I redesigned the quote flow around a simple principle: the system does the remembering,
          agents take care of their customers.
        </p>
        <p>
          When an agent creates a new quote in Yoga, they search for the customer by name or add them
          if they&rsquo;re new. For existing customers, the system displays all known data for a
          quick review&mdash;addresses change, family situations evolve, so this checkpoint prevents
          outdated information from slipping into policies.
        </p>
        <p>
          After selecting an insurance product, it might require 5-100+ additional data configured by
          the insurance company to fill in. Yoga pulls this data from wherever it lives (i.e. legacy
          CRMs, previous policy databases, the company&rsquo;s existing systems) and pre-fills
          automatically.
        </p>
        <p>
          The system goes further with asset insurance. An agent enters a license plate and Yoga
          fetches all vehicle details from external databases. An address pulls cadastral data and
          risk analysis. The agent validates instead of typing, and Yoga syncs everything back to the
          legacy systems in real-time.
        </p>
        <Figure src={yoga1} alt="The Yoga quote flow pre-filling customer and asset data" />
        <p>The result: From 11-111 fields of manual entry → Just one.</p>

        <h3>Preventing frustration before it happens</h3>
        <p>
          Through shadowing, I&rsquo;d also seen how errors broke flow. An agent would spend 20
          minutes carefully building a quote, hit &ldquo;Submit,&rdquo; and discover 5 validation
          errors scattered across the page. The time wasted wasn&rsquo;t just in fixing the errors,
          it was in the cognitive load of finding them and the frustration of &ldquo;why didn&rsquo;t
          you tell me sooner?&rdquo; I designed progressive validation: errors caught in real-time,
          auto-scroll to the problem, and messages that explain how to fix it, not just what&rsquo;s
          wrong.
        </p>
        <Figure src={yoga2} alt="Progressive validation surfacing errors as the agent works" />
        <p>
          The result: In 4 years of production, not a single policy was issued with errors. Almost
          zero rework requests from insurance companies.
        </p>

        <h3>Guided, but not rigid</h3>
        <p>
          Insurance products vary wildly between companies (auto, home, business, standard/custom
          coverage). I couldn&rsquo;t design one rigid flow for everyone.
        </p>
        <p>
          The old card-based system gave agents full freedom to jump anywhere, which created
          confusion. I replaced it with a linear wizard that adapts to each product. The core steps
          remain consistent, but product-specific requirements (like investment details for life
          insurance) appear only when relevant. Agents always know where they are, what&rsquo;s next,
          and can jump back to revise without losing work.
        </p>
        <Figure seed={37} />
        <p>
          The result: New agents became productive in a few hours instead of days, because of the
          self-explanatory flow.
        </p>
      </section>

      <section data-reveal>
        <h2>The impact</h2>
        <div className="fl-table-wrap">
          <table>
            <caption className="sr-only">Impact metrics before and after redesign</caption>
            <thead>
              <tr>
                <th scope="col" aria-label="Metric"></th>
                <th scope="col">Before</th>
                <th scope="col">After</th>
              </tr>
            </thead>
            <tbody>
              <tr><th scope="row">Time per policy</th><td>15-45 minutes</td><td>1-10 minutes (avg 3)</td></tr>
              <tr><th scope="row">Manual data entry</th><td>11-111 fields</td><td>1 field (existing customers)</td></tr>
              <tr><th scope="row">Onboarding</th><td>Days of training</td><td>A few hours</td></tr>
              <tr><th scope="row">Errors</th><td>Frequent</td><td>0 in 4 years</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          The solution didn&rsquo;t just win us DAS, it validated our approach and opened doors to
          Unipol, Generali, and Zurich. By 2024, 8+ insurance companies were using Yoga to process
          thousands of policies.
        </p>
        <p>
          More importantly, agents told us <b>they finally felt productive again.</b>
        </p>
      </section>
    </CaseLayout>
  );
}

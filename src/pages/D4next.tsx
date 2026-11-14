import CaseLayout from "../components/CaseLayout";
import Figure from "../components/Figure";
import yoga1 from "../assets/yoga/yoga-1.png";
import yoga2 from "../assets/yoga/yoga-2.png";

/* Sources for the numbers, confirmed by the owner on 2026-11-14: the times per
   policy were reported by agents and insurers, not timed; "no corrections"
   means no insurer sent a policy back in four years; DAS was the first client.
   The page attributes each figure accordingly. Keep it that way. */
export default function D4Next() {
  return (
    <CaseLayout
      title="From 45 to 3 minutes to issue a policy"
      meta="Yoga · B2B2C SaaS insurance platform"
      docTitle="Yoga Case Study | Federico Landorno"
      facts={[
        { label: "Role", value: "First designer at D4NEXT. I later led the designers who joined." },
        { label: "Period", value: "2020 to 2024" },
        { label: "Outcome", value: "Issuing a policy went from up to 45 minutes to about 3" },
      ]}
    >
      <Figure seed={29} />

      <section data-reveal>
        <h2>Context</h2>
        <p>
          I joined D4NEXT in 2020 as its first designer, and later led the designers who joined
          after me. At the start we were eight people trying to enter the
          Italian insurance software market, where most companies still ran on systems from the
          &rsquo;90s and were reluctant to replace them.
        </p>
        <p>
          Our product, Yoga, is a modern interface that sits on top of those systems, so an insurer
          can adopt it without replacing its infrastructure. The first company we set out to win
          was DAS. My job was to design that interface, and this case study covers the flow agents
          use to quote and issue a policy.
        </p>
      </section>

      <section data-reveal>
        <h2>What I saw in the agencies</h2>
        <p>
          I spent two weeks in two agencies, sitting next to agents while they worked. I expected
          complaints about confusing screens or missing features. What slowed them down was more
          basic, and it came from two things.
        </p>
        <ol className="fl-ol">
          <li>
            <strong>Repetition.</strong> An agent insuring a family&rsquo;s three cars and a house
            went through the same flow four times, typing or pasting the same customer and asset
            data into screens that didn&rsquo;t talk to each other.
          </li>
          <li>
            <strong>Navigation with no order.</strong> The old system was built from customisable
            cards, and agents could jump between sections freely. In practice they kept hunting for
            the right card, lost their place and forgot what they had already entered.
          </li>
        </ol>
        <p>
          Agents told me a policy took them between 15 and 45 minutes. By my notes across the
          sessions, roughly 70% of that time went on navigating and re-entering data, and 30% on
          the customer in front of them.
        </p>
        <Figure seed={31} />
      </section>

      <section data-reveal>
        <h2>What I designed</h2>

        <h3>The system remembers, the agent checks</h3>
        <p>
          I rebuilt the quote flow so that the system holds the data and the agent only has to
          confirm it.
        </p>
        <p>
          To start a quote, the agent searches for the customer by name, or adds them if
          they&rsquo;re new. For an existing customer Yoga shows everything it knows for a quick
          review, because addresses change and so do families, and outdated data shouldn&rsquo;t
          end up in a policy.
        </p>
        <p>
          Each insurance product then asks for its own data, anywhere from 5 to more than 100
          fields defined by the insurer. Yoga pulls them from wherever they already live (the
          legacy CRM, earlier policies, the company&rsquo;s other systems) and fills them in.
        </p>
        <p>
          The same goes for the things being insured. A licence plate is enough for Yoga to fetch
          the vehicle&rsquo;s details from external databases, and an address brings in cadastral
          data and a risk analysis. The agent validates what they see, and Yoga writes everything
          back to the legacy systems in real time.
        </p>
        <Figure src={yoga1} alt="The Yoga quote flow pre-filling customer and asset data" />
        <p>
          For an existing customer, manual entry went from somewhere between 11 and 111 fields to
          one.
        </p>

        <h3>Errors shown while there is still time to fix them</h3>
        <p>
          During the shadowing I watched an agent spend 20 minutes on a quote, press Submit and get
          five validation errors scattered across the page. Fixing them was the small part. Finding
          them took longer, and the agent&rsquo;s complaint was a fair one: why didn&rsquo;t it
          tell me sooner?
        </p>
        <p>
          I designed validation that runs while the agent works. An error appears as soon as it is
          made, the page scrolls to it, and the message says how to fix it.
        </p>
        <Figure src={yoga2} alt="Progressive validation surfacing errors as the agent works" />
        <p>In four years of production, no insurer sent a policy back for correction.</p>

        <h3>A wizard that adapts to the product</h3>
        <p>
          Insurance products differ a lot from one company to the next: motor, home, business,
          standard or custom cover. One fixed flow couldn&rsquo;t serve all of them, and the old
          cards had shown what full freedom costs.
        </p>
        <p>
          I replaced the cards with a linear wizard that adapts to each product. The core steps
          stay the same, and product-specific ones, like investment details for life insurance,
          appear only when they apply. Agents can see where they are and what comes next, and they
          can go back to change something without losing their work.
        </p>
        <Figure seed={37} />
        <p>
          New agents were productive within a few hours. On the old system it took days of
          training.
        </p>
      </section>

      <section data-reveal>
        <h2>The impact</h2>
        <p>The times below are the ones agents and insurers reported to us.</p>
        {/* A table that scrolls sideways has to be reachable without a mouse:
            role="region" + tabindex makes it a focus stop so the keyboard can
            scroll it (WCAG 2.1.1), and the name tells a screen reader what the
            stop is. On a phone the stylesheet lets it out into the page gutter
            so the cut edge is visible rather than inferred. */}
        <div className="fl-table-wrap" role="region" tabIndex={0} aria-label="Impact metrics before and after redesign">
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
              <tr><th scope="row">Policies sent back for correction</th><td>Frequent</td><td>None in 4 years</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Yoga won us DAS as our first client, and that opened the door to Unipol, Generali and
          Zurich. By 2024, 8+ insurance companies were using Yoga to process thousands of policies.
        </p>
        <p>
          Agents told us <b>they finally felt productive again.</b>
        </p>
      </section>
    </CaseLayout>
  );
}

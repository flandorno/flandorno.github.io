import Header from "../components/Header";
import yoga1 from "../assets/yoga/yoga-1.png";
import yoga2 from "../assets/yoga/yoga-2.png";
import Banner from "../components/Banner";

const D4Next = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto">
        <section className="mt-32">
          <h2 className="text-gray-300 mb-1">
            Yoga - B2B2C SaaS Insurance Platform
          </h2>
          <h1>From 45 to 3 minutes to issue a policy</h1>
          <div className="w-full h-80 bg-gray-800 rounded-2xl my-4"></div>
        </section>

        <section>
          <h3>Context & Challenge</h3>
          <p>
            When I joined D4NEXT in 2020, we were an 8-person startup trying to
            break into the Italian insurance software market, a space dominated
            by legacy systems from the '90s that insurance companies were
            reluctant to replace.
          </p>
          <Banner>
            <strong>My challenge:</strong> Design a modern interface layer that
            would sit on top of these existing systems, making them accessible
            without requiring companies to rip out their infrastructure.
          </Banner>
        </section>

        <section>
          <h3>Finding the real problem</h3>
          <p>
            I spent two weeks shadowing insurance agents at two agencies,
            watching how they actually worked.
            <br />I expected to find complaints about confusing interfaces or
            missing features. Instead, I found two fundamental problems working
            together to kill productivity:
          </p>
          <ol className="list-decimal list-inside ml-4">
            <li>
              <strong>Task repetition</strong>, an agent helping a family insure
              3 cars and a house would repeat the same flow 4 times, each time
              manually typing (or copy-pasting) the same customer and assets
              data into disconnected screens. Every. Single. Time.
            </li>
            <li>
              <strong>Non-linear navigation</strong>, the old system used a
              "customizable card" interface where agents could jump between
              sections freely. Sounds flexible, but in practice it meant
              constantly hunting for the right card, losing context, and
              forgetting which data was already entered.
            </li>
          </ol>
          <p>
            Agents took around <strong>45 minutes</strong> (avg) of navigation
            and copy-paste to get to the goal.
          </p>
          <div className="w-full h-80 bg-gray-800 my-4 rounded-2xl">
            screen PASS
          </div>
          <p>
            After mapping the workflow across multiple sessions, the pattern was
            clear: agents spent 70% of their time navigating a non-linear flow
            and re-entering data, 30% on engaing with their clients.
          </p>
        </section>

        <section>
          <h3>Designing the solution</h3>
          <h4>Making the system remember</h4>
          <p>
            I redesigned the quote flow around a simple principle: the system
            does the remembering, agents take care of their customers.
            <br />
            When an agent creates a new quote in Yoga, they search for the
            customer by name or add them if they're new. For existing customers,
            the system displays all known data for a quick review—addresses
            change, family situations evolve, so this checkpoint prevents
            outdated information from slipping into policies.
            <br />
            After selecting an insurance product, it might require 5-100+
            additional data configured by the insurance company to fill in. Yoga
            pulls this data from wherever it lives (i.e. legacy CRMs, previous
            policy databases, the company's existing systems) and pre-fills
            automatically.
            <br />
            The system goes further with asset insurance. An agent enters a
            license plate and Yoga fetches all vehicle details from external
            databases. An address pulls cadastral data and risk analysis. The
            agent validates instead of typing, and Yoga syncs everything back to
            the legacy systems in real-time.
            <br />
          </p>
          <div
            className="w-full h-80 my-4 rounded-2xl bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${yoga1})` }}
          ></div>
          <p>The result: From 11-111 fields of manual entry → Just one.</p>

          <h4 className="mt-8">Preventing frustration before it happens</h4>
          <p>
            Through shadowing, I'd also seen how errors broke flow. An agent
            would spend 20 minutes carefully building a quote, hit "Submit," and
            discover 5 validation errors scattered across the page. The time
            wasted wasn't just in fixing the errors, it was in the cognitive
            load of finding them and the frustration of "why didn't you tell me
            sooner?" I designed progressive validation: errors caught in
            real-time, auto-scroll to the problem, and messages that explain how
            to fix it, not just what's wrong.
          </p>
          <div
            className="w-full h-80 bg-gray-800 my-4 rounded-2xl"
            style={{ backgroundImage: `url(${yoga2})` }}
          ></div>
          <p>
            The result: In 4 years of production, not a single policy was issued
            with errors. Almost zero rework requests from insurance companies.
          </p>

          <h4 className="mt-8">Guided, but not rigid</h4>
          <p>
            Insurance products vary wildly between companies (auto, home,
            business, standard/custom coverage). I couldn't design one rigid
            flow for everyone.
            <br />
            The old card-based system gave agents full freedom to jump anywhere,
            which created confusion. I replaced it with a linear wizard that
            adapts to each product. The core steps remain consistent, but
            product-specific requirements (like investment details for life
            insurance) appear only when relevant. Agents always know where they
            are, what's next, and can jump back to revise without losing work.
          </p>
          <div className="w-full h-80 bg-gray-800 my-4 rounded-2xl">Studio</div>
          <p>
            The result: New agents became productive in a few hours instead of
            days, because of the self-explanatory flow.
          </p>
        </section>

        <section>
          <h3>The impact</h3>
          <table className="mt-8" data-aos="zoom-out">
            <thead>
              <tr>
                <th></th>
                <th>Before</th>
                <th>After</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Time per policy</td>
                <td>15-45 minutes</td>
                <td>1-10 minutes (avg 3)</td>
              </tr>
              <tr>
                <td>Manual data entry</td>
                <td>11-111 fields</td>
                <td>1 field (existing customers)</td>
              </tr>
              <tr>
                <td>Onboarding</td>
                <td>Days of training</td>
                <td>A few hours</td>
              </tr>
              <tr>
                <td>Errors</td>
                <td>Frequent</td>
                <td>0 in 4 years</td>
              </tr>
            </tbody>
          </table>

          <p className="mt-4">
            The solution didn't just win us DAS, it validated our approach and
            opened doors to Unipol, Generali, and Zurich. By 2024, 8+ insurance
            companies were using Yoga to process thousands of policies.
            <br />
            <br />
            More importantly, agents told us{" "}
            <b>they finally felt productive again.</b>
          </p>
        </section>
      </div>
    </>
  );
};

export default D4Next;

import CaseLayout from "../components/CaseLayout";
import Figure from "../components/Figure";
import AppIcon from "../components/AppIcon";
import { COMPETITORS, SCREENS, Wellbeing } from "./eluxAssets";

/* Rewritten on 2026-11-14. Two facts from the owner shape the wording: there
   was never a survey (the "yes" was said out loud, in interviews and by test
   participants), and the field-test usage figures are his: of the 20
   participants, 3 to 5 used a widget once or twice a week at most, and the
   others once at most or never. Do not round them into anything stronger. */
export default function Electrolux() {
  return (
    <CaseLayout
      title="They said yes to widgets, then didn’t use them"
      meta="Electrolux · Research on smart home widgets"
      docTitle="Electrolux Case Study | Federico Landorno"
      facts={[
        { label: "Role", value: "Junior designer. I ran the research and built the prototypes, mentored by a senior UX researcher." },
        { label: "Period", value: "2019" },
        { label: "Outcome", value: "Widgets moved down the roadmap and voice control became the priority" },
      ]}
    >
      <Figure src={Wellbeing} alt="An Electrolux connected appliance in a home setting" />

      <section data-reveal>
        <h2>The hypothesis</h2>
        <p>
          In 2019 I joined Electrolux as a junior designer on the app for its connected appliances.
          The product team believed that home screen widgets would raise engagement by giving
          people quicker access to their robot vacuums and air purifiers, and widgets were a high
          priority on a six-month roadmap.
        </p>
        <p>
          My job was to test that belief before the company invested heavily in development. I was
          the first designer to work on the question, with a senior UX researcher helping me
          structure the study, and the project became my master&rsquo;s thesis.
        </p>
      </section>

      <section data-reveal>
        <h2>The research</h2>
        <p>I planned three phases, each looking at the hypothesis from a different side.</p>

        <h3>Phase 1: 12 competitor apps</h3>
        <p>
          I looked at how 12 other smart home apps let people control their devices, and at how
          widgets had been adopted across categories.
        </p>
        <ul className="fl-icon-grid" aria-label="The twelve competitor apps analysed">
          {COMPETITORS.map((src, i) => (
            <li key={i}><AppIcon imgUrl={src} /></li>
          ))}
        </ul>
        <p>
          Most of them offered widgets. Public reviews almost never mentioned them, in praise or in
          complaint.
        </p>

        <h3>Phase 2: 15 interviews</h3>
        <p>
          I interviewed 15 people who already used the Electrolux app about their routines: how
          often they opened it and what made them do so. They fell into two groups.
        </p>
        <ul className="fl-ul">
          <li><b>Set-and-forget:</b> they programmed automatic schedules and rarely touched the app.</li>
          <li><b>Occasional adjusters:</b> they opened the app about once a week to start a cleaning cycle or check air quality.</li>
        </ul>
        <p>
          People liked the idea of widgets when we talked about it. But neither group described
          getting to the controls as a problem. What they struggled with was remembering to use
          them at all.
        </p>

        <h3>Phase 3: working widgets, 20 people, two weeks</h3>
        <p>
          Opinions about a feature nobody had tried were not enough, so I designed and coded
          working widgets. Twenty participants installed them on their own phones and lived with
          them for two weeks, while I tracked usage and ran follow-up interviews.
        </p>
        <ul className="fl-screens" aria-label="The widget prototypes tested in the field">
          {SCREENS.map((src, i) => (
            <li key={i}>
              <img src={src} alt={`Widget prototype ${i + 1}`} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
        <p>
          I expected usage to go up. Of the 20 participants, between three and five used a widget
          once or twice a week at most. The others used one once at most, or never. Some had tried
          the widgets and then forgot they were there. Those who kept using them found them no
          better than opening the app.
        </p>
        <p>
          In the follow-up interviews the answers were polite and flat: &ldquo;It&rsquo;s nice to
          have, I guess.&rdquo; &ldquo;I used it a couple times.&rdquo; &ldquo;I don&rsquo;t really
          think about it.&rdquo;
        </p>
      </section>

      <section data-reveal>
        <h2>What the evidence supported</h2>
        <p>
          Nothing in the results said widgets were a mistake. People who had welcomed the idea
          barely used the real thing, and the increase in device interaction the team was counting
          on never appeared. I couldn&rsquo;t call that a failure, and I couldn&rsquo;t call it a
          case for months of development either.
        </p>
        <p>
          The same data did show how the people who got the most out of their appliances used them:
        </p>
        <ul className="fl-ul">
          <li><strong>Automated routines</strong> (vacuum every Tuesday at 10am)</li>
          <li><strong>Voice commands</strong> (hands-free while cooking or cleaning)</li>
          <li><strong>Ambient triggers</strong> (the air purifier adjusts to the air quality)</li>
        </ul>
        <p>
          For them, any manual step was friction, whether it went through a widget or the full app.
          A widget makes that step shorter, and these users were getting rid of it.
        </p>
      </section>

      <section data-reveal>
        <h2>The recommendation</h2>
        <p>
          I presented this to the product managers and stakeholders, who had been hoping for a
          green light. My recommendation was to keep widgets as a low-effort addition and put the
          strategic investment into voice assistant integration (Google Home, Alexa, Apple
          HomeKit), where the behaviour already existed.
        </p>
        <p>
          The product team listened. Widgets stayed in the backlog as a minor feature, and voice
          control became a priority initiative.
        </p>
        {/* A table that scrolls sideways has to be reachable without a mouse:
            role="region" + tabindex makes it a focus stop so the keyboard can
            scroll it (WCAG 2.1.1), and the name tells a screen reader what the
            stop is. On a phone the stylesheet lets it out into the page gutter
            so the cut edge is visible rather than inferred. */}
        <div className="fl-table-wrap" role="region" tabIndex={0} aria-label="Comparison of investment plan before and after research">
          <table>
            <caption className="sr-only">Comparison of investment plan before and after research</caption>
            <thead>
              <tr>
                <th scope="col" aria-label="Category"></th>
                <th scope="col">Initial Plan</th>
                <th scope="col">After Research</th>
              </tr>
            </thead>
            <tbody>
              <tr><th scope="row">Primary investment</th><td>Home screen widgets</td><td>Voice assistant integration</td></tr>
              <tr><th scope="row">Widget priority</th><td>High (6-month roadmap)</td><td>Low (nice-to-have)</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          The study kept the team from spending months of development on a feature with uncertain
          adoption.
        </p>
      </section>

      <section data-reveal>
        <h2>What I took from it</h2>
        <p>
          Two things have stayed with me. People told me they wanted quicker access and then
          behaved as if they wanted to stop thinking about the appliance altogether, so I now trust
          what people do over what they say they will do.
        </p>
        <p>
          The other is presenting a result that disappoints the room. I had spent months hoping the
          widgets would work, and it would have been easy to tell the story that way.
        </p>
      </section>
    </CaseLayout>
  );
}

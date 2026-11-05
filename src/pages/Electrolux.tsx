import CaseLayout from "../components/CaseLayout";
import Callout from "../components/Callout";
import Figure from "../components/Figure";
import AppIcon from "../components/AppIcon";
import AppAura from "../assets/elux/competitors/aura-air.jpg";
import AppBlue from "../assets/elux/competitors/blue-air.jpg";
import AppCleanHome from "../assets/elux/competitors/clean-home.jpg";
import AppDyson from "../assets/elux/competitors/dyson.jpg";
import AppEcovasc from "../assets/elux/competitors/ecovasc-home.jpg";
import AppHon from "../assets/elux/competitors/hon.jpg";
import AppIoCare from "../assets/elux/competitors/iocare.jpg";
import AppIRobot from "../assets/elux/competitors/irobot-home.jpg";
import AppLgThinq from "../assets/elux/competitors/lg-thinq.jpg";
import AppMiHome from "../assets/elux/competitors/mi-home.jpg";
import AppRoborock from "../assets/elux/competitors/roborock.jpg";
import AppSmartThings from "../assets/elux/competitors/smart-things.jpg";
import Wellbeing from "../assets/elux/wellbeing.webp";
import Screen1 from "../assets/elux/screens/screen1.webp";
import Screen2 from "../assets/elux/screens/screen2.webp";
import Screen3 from "../assets/elux/screens/screen3.webp";
import Screen4 from "../assets/elux/screens/screen4.webp";
import Screen5 from "../assets/elux/screens/screen5.webp";

const COMPETITORS = [
  AppIRobot, AppMiHome, AppSmartThings, AppIoCare, AppAura, AppBlue,
  AppEcovasc, AppCleanHome, AppHon, AppDyson, AppRoborock, AppLgThinq,
];

const SCREENS = [Screen1, Screen2, Screen3, Screen4, Screen5];

export default function Electrolux() {
  return (
    <CaseLayout
      title="When surveys said “yes” but behavior said “no”"
      meta="Electrolux · Research on smart home widgets"
      docTitle="Electrolux Case Study | Federico Landorno"
    >
      <Figure src={Wellbeing} alt="An Electrolux connected appliance in a home setting" />

      <section data-reveal>
        <h2>Setting the Stage</h2>
        <p>
          In 2019, I joined Electrolux as a junior designer working on their connected appliances
          app. Smart home adoption was growing, and the product team had a hypothesis: home screen
          widgets would increase engagement by giving users quick access to their robot vacuums and
          air purifiers.
        </p>
        <p>It made intuitive sense. Faster access should mean more usage, right?</p>
        <Callout>
          <strong>My job:</strong> Validate this assumption before the company invested heavily in
          development. I was the first designer to tackle this problem, supported by a senior UX
          researcher who helped me structure the approach. This became my master&rsquo;s thesis
          project.
        </Callout>
      </section>

      <section data-reveal>
        <h2>Designing the Research</h2>
        <p>
          I structured the research in three phases to test the hypothesis from different angles. My
          senior mentor helped me refine the approach, ensuring each phase would give us actionable
          insights.
        </p>

        <h3>Phase 1: Market research &amp; competitive analysis</h3>
        <p>
          I started by understanding the landscape. What were other smart home apps doing? How were
          users actually controlling their devices? I analyzed 12 competitor apps and looked at
          adoption patterns for home screen widgets across categories.
        </p>
        <ul className="fl-icon-grid" aria-label="The twelve competitor apps analysed">
          {COMPETITORS.map((src, i) => (
            <li key={i}><AppIcon imgUrl={src} /></li>
          ))}
        </ul>
        <p>
          <strong>Early signal:</strong> Most smart home apps offered widgets, but public reviews
          rarely mentioned them, positive or negative. They existed, but weren&rsquo;t a
          talked-about feature.
        </p>

        <h3>Phase 2: User interviews (15 participants)</h3>
        <p>
          I interviewed current Electrolux app users to understand their daily routines with
          connected appliances. How often did they open the app? What triggered them to interact with
          their devices?
        </p>
        <p><strong>Key finding:</strong> Most users fell into two camps:</p>
        <ul className="fl-ul">
          <li><b>Set-and-forget:</b> Programmed automatic schedules, rarely touched the app.</li>
          <li><b>Occasional adjusters:</b> Opened the app maybe once a week to start a cleaning cycle or check air quality.</li>
        </ul>
        <p>
          Neither group expressed frustration with app access speed. The friction wasn&rsquo;t in{" "}
          <em>getting</em> to controls. It was in <em>remembering</em> to use them at all.
        </p>

        <h3>Phase 3: Prototype &amp; field testing (20 participants, 2 weeks)</h3>
        <p>
          This is where it got real. I designed and developed functional widgets that participants
          installed on their smartphones. For two weeks, they used them in their daily lives while I
          tracked usage and conducted follow-up interviews.
        </p>
        <ul className="fl-screens" aria-label="The widget prototypes tested in the field">
          {SCREENS.map((src, i) => (
            <li key={i}>
              <img src={src} alt={`Widget prototype ${i + 1}`} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
        <p>
          <strong>What I expected:</strong> Increased engagement, positive feedback about
          convenience.
        </p>
        <p>
          <strong>What actually happened:</strong> Usage was sporadic and inconsistent. Some users
          tried them a few times, then forgot they existed. Others used them occasionally but
          didn&rsquo;t find them significantly better than opening the app.
        </p>
        <p>
          When I asked directly, responses were lukewarm: &ldquo;It&rsquo;s nice to have, I
          guess.&rdquo; &ldquo;I used it a couple times.&rdquo; &ldquo;I don&rsquo;t really think
          about it.&rdquo;
        </p>
        <p>Not hate. Not love. Just indifference.</p>
      </section>

      <section data-reveal>
        <h2>The Uncomfortable Truth</h2>
        <p>
          After months of work, I had to present findings that weren&rsquo;t what anyone wanted to
          hear: <strong>the data was inconclusive</strong>.
        </p>
        <p>
          Widgets didn&rsquo;t fail catastrophically, but they didn&rsquo;t succeed either. Users
          weren&rsquo;t adopting them enthusiastically, and the behavior change we hoped for (more
          frequent device interaction) wasn&rsquo;t materializing.
        </p>
        <p>
          Sitting in the presentation room with product managers and stakeholders, I could feel the
          tension. They wanted validation to move forward. I had spent months on this. Everyone
          wanted it to work.
        </p>
        <p>But the data said &ldquo;maybe,&rdquo; and I had to say it out loud.</p>
      </section>

      <section data-reveal>
        <h2>The Real Insight</h2>
        <p>
          As I walked through the findings, a pattern emerged that was more valuable than widget
          validation:{" "}
          <strong>the problem wasn&rsquo;t access to controls, it was the mental model of control itself</strong>.
        </p>
        <p>Users who successfully integrated smart appliances into their lives did so through:</p>
        <ul className="fl-ul">
          <li><strong>Automated routines</strong> (vacuum every Tuesday at 10am)</li>
          <li><strong>Voice commands</strong> (hands-free while cooking or cleaning)</li>
          <li><strong>Ambient triggers</strong> (air purifier adjusts based on air quality)</li>
        </ul>
        <p>
          Manual app interaction, whether through a widget or the full app, was friction. The best
          experience was <em>no interaction at all</em>.
        </p>
        <Callout>
          <strong>The opportunity wasn&rsquo;t widgets. It was voice control and automation.</strong>
        </Callout>
      </section>

      <section data-reveal>
        <h2>The Recommendation</h2>
        <p>
          I presented Electrolux with a recommendation: don&rsquo;t invest heavily in widget
          development. The feature could exist as a low-effort addition, but strategic investment
          should go toward voice assistant integration (Google Home, Alexa, Apple HomeKit) where user
          behavior was already established.
        </p>
        <p>
          The product team listened. Widgets remained in the backlog as a minor feature, while voice
          control became a priority initiative.
        </p>
      </section>

      <section data-reveal>
        <h2>The Impact</h2>
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
              <tr><th scope="row">Development priority</th><td>High (6-month roadmap)</td><td>Low (nice-to-have)</td></tr>
              <tr><th scope="row">Expected ROI</th><td>Increased daily engagement</td><td>Better strategic positioning</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Electrolux shifted resources to voice control development, aligning with where users were
          already comfortable controlling smart home devices. The research prevented months of
          development on a feature with uncertain adoption.
        </p>
        <p>
          More importantly, I learned that saying &ldquo;the data doesn&rsquo;t support this&rdquo;
          takes more courage than presenting a success story, but it&rsquo;s often more valuable.
        </p>
      </section>

      <section data-reveal>
        <h2>What I learned</h2>
        <p>
          <strong>Research isn&rsquo;t about proving hypotheses right, it&rsquo;s about finding truth.</strong>{" "}
          I spent months hoping widgets would work because everyone expected them to. Learning to
          present inconclusive results honestly, rather than forcing a narrative, was the most
          important skill I gained.
        </p>
        <p>
          <strong>User behavior beats user intentions.</strong> People said they wanted quick access,
          but their actual behavior showed they valued automation over control. Watching what people
          do matters more than listening to what they say they&rsquo;ll do.
        </p>
        <p>
          <strong>&ldquo;Maybe&rdquo; is a valid answer.</strong> Not every research project ends with
          clear direction. Sometimes the most valuable outcome is preventing investment in the wrong
          solution.
        </p>
      </section>
    </CaseLayout>
  );
}

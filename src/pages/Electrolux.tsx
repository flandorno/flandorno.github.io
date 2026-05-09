import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import Wellbeing from "../assets/elux/wellbeing.jpg";
import DeviceWidget from "../assets/elux/device-widget.png";
import Screen1 from "../assets/elux/screens/screen1.png";
import Screen2 from "../assets/elux/screens/screen2.png";
import Screen3 from "../assets/elux/screens/screen3.png";
import Screen4 from "../assets/elux/screens/screen4.png";
import Screen5 from "../assets/elux/screens/screen5.png";
import Banner from "../components/Banner";

gsap.registerPlugin(ScrollTrigger);

const Electrolux = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils
        .toArray<HTMLElement>("section", containerRef.current)
        .forEach((section) => {
          gsap.from(section, {
            opacity: 0,
            y: 20,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
            },
          });
        });

      gsap.from(".elux-screen", {
        opacity: 0,
        scale: 0.4,
        duration: 0.45,
        stagger: { amount: 0.7, from: "start" },
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: ".elux-screens-grid", start: "top 88%" },
      });

      gsap.from(".elux-app-icon", {
        opacity: 0,
        scale: 0.4,
        duration: 0.45,
        stagger: { amount: 0.7, from: "center" },
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: ".elux-icons-grid", start: "top 88%" },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-0">
      <section className="mt-32 mb-16">
        <p className="text-gray-400 mb-3 tracking-wide uppercase text-sm font-medium">
          Electrolux Smart Home Widgets
        </p>
        <h1>When surveys said "yes" but behavior said "no"</h1>
        <div
          className="w-full h-96 bg-gray-800 rounded-2xl mt-6 bg-cover bg-top bg-no-repeat overflow-clip"
          style={{ backgroundImage: `url(${Wellbeing})` }}
        >
          <img className="w-1/5 h-auto ml-10 pt-10" src={DeviceWidget} />
        </div>
      </section>

      <section className="mb-16">
        <h3 className="mb-4">Setting the Stage</h3>
        <p>
          In 2019, I joined Electrolux as a junior designer working on their
          connected appliances app. Smart home adoption was growing, and the
          product team had a hypothesis: home screen widgets would increase
          engagement by giving users quick access to their robot vacuums and air
          purifiers.
        </p>
        <p className="mt-5">
          It made intuitive sense. Faster access should mean more usage, right?
        </p>
        <div className="mt-6">
          <Banner>
            <strong>My job:</strong> Validate this assumption before the company
            invested heavily in development. I was the first designer to tackle
            this problem, supported by a senior UX researcher who helped me
            structure the approach. This became my master's thesis project.
          </Banner>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="mb-4">Designing the Research</h3>
        <p>
          I structured the research in three phases to test the hypothesis from
          different angles. My senior mentor helped me refine the approach,
          ensuring each phase would give us actionable insights.
        </p>

        <h4 className="mt-10 mb-2">
          Phase 1: Market research & competitive analysis
        </h4>
        <p>
          I started by understanding the landscape. What were other smart home
          apps doing? How were users actually controlling their devices? I
          analyzed 12 competitor apps and looked at adoption patterns for home
          screen widgets across categories.
        </p>
        <div className="elux-icons-grid flex flex-wrap gap-4 my-6 justify-center">
          {[
            AppIRobot,
            AppMiHome,
            AppSmartThings,
            AppIoCare,
            AppAura,
            AppBlue,
            AppEcovasc,
            AppCleanHome,
            AppHon,
            AppDyson,
            AppRoborock,
            AppLgThinq,
          ].map((src, i) => (
            <div key={i} className="elux-app-icon">
              <AppIcon imgUrl={src} />
            </div>
          ))}
        </div>
        <p>
          <strong>Early signal:</strong> Most smart home apps offered widgets,
          but public reviews rarely mentioned them, positive or negative. They
          existed, but weren't a talked-about feature.
        </p>

        <h4 className="mt-10 mb-2">
          Phase 2: User interviews (15 participants)
        </h4>
        <p>
          I interviewed current Electrolux app users to understand their daily
          routines with connected appliances. How often did they open the app?
          What triggered them to interact with their devices?
        </p>
        <p className="mt-5">
          <strong>Key finding:</strong> Most users fell into two camps:
        </p>
        <ul className="mt-3 ml-6 list-disc space-y-2">
          <li>
            <b>Set-and-forget:</b> Programmed automatic schedules, rarely
            touched the app.
          </li>
          <li>
            <b>Occasional adjusters:</b> Opened the app maybe once a week to
            start a cleaning cycle or check air quality.
          </li>
        </ul>
        <p className="mt-5">
          Neither group expressed frustration with app access speed. The
          friction wasn't in <em>getting</em> to controls. It was in{" "}
          <em>remembering</em> to use them at all.
        </p>

        <h4 className="mt-10 mb-2">
          Phase 3: Prototype & field testing (20 participants, 2 weeks)
        </h4>
        <p>
          This is where it got real. I designed and developed functional widgets
          that participants installed on their smartphones. For two weeks, they
          used them in their daily lives while I tracked usage and conducted
          follow-up interviews.
        </p>
        <div className="flex gap-3 my-8 items-end">
          {[Screen1, Screen2, Screen3, Screen4, Screen5].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Screen ${i + 1}`}
              className="flex-1 min-w-0 rounded-xl object-contain"
            />
          ))}
        </div>
        <p>
          <strong>What I expected:</strong> Increased engagement, positive
          feedback about convenience.
        </p>
        <p className="mt-5">
          <strong>What actually happened:</strong> Usage was sporadic and
          inconsistent. Some users tried them a few times, then forgot they
          existed. Others used them occasionally but didn't find them
          significantly better than opening the app.
        </p>
        <p className="mt-5">
          When I asked directly, responses were lukewarm: "It's nice to have, I
          guess." "I used it a couple times." "I don't really think about it."
        </p>
        <p className="mt-5">Not hate. Not love. Just indifference.</p>
      </section>

      <section className="mb-16">
        <h3 className="mb-4">The Uncomfortable Truth</h3>
        <p>
          After months of work, I had to present findings that weren't what
          anyone wanted to hear: <strong>the data was inconclusive</strong>.
        </p>
        <p className="mt-5">
          Widgets didn't fail catastrophically, but they didn't succeed either.
          Users weren't adopting them enthusiastically, and the behavior change
          we hoped for (more frequent device interaction) wasn't materializing.
        </p>
        <p className="mt-5">
          Sitting in the presentation room with product managers and
          stakeholders, I could feel the tension. They wanted validation to move
          forward. I had spent months on this. Everyone wanted it to work.
        </p>
        <p className="mt-5">
          But the data said "maybe," and I had to say it out loud.
        </p>
      </section>

      <section className="mb-16">
        <h3 className="mb-4">The Real Insight</h3>
        <p>
          As I walked through the findings, a pattern emerged that was more
          valuable than widget validation:{" "}
          <strong>
            the problem wasn't access to controls, it was the mental model of
            control itself
          </strong>
          .
        </p>
        <p className="mt-5">
          Users who successfully integrated smart appliances into their lives
          did so through:
        </p>
        <ul className="mt-3 ml-6 list-disc space-y-2">
          <li>
            <strong>Automated routines</strong> (vacuum every Tuesday at 10am)
          </li>
          <li>
            <strong>Voice commands</strong> (hands-free while cooking or
            cleaning)
          </li>
          <li>
            <strong>Ambient triggers</strong> (air purifier adjusts based on air
            quality)
          </li>
        </ul>
        <p className="mt-5">
          Manual app interaction, whether through a widget or the full app, was
          friction. The best experience was <em>no interaction at all</em>.
        </p>
        <div className="mt-6">
          <Banner>
            <strong>
              The opportunity wasn't widgets. It was voice control and
              automation.
            </strong>
          </Banner>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="mb-4">The Recommendation</h3>
        <p>
          I presented Electrolux with a recommendation: don't invest heavily in
          widget development. The feature could exist as a low-effort addition,
          but strategic investment should go toward voice assistant integration
          (Google Home, Alexa, Apple HomeKit) where user behavior was already
          established.
        </p>
        <p className="mt-5">
          The product team listened. Widgets remained in the backlog as a minor
          feature, while voice control became a priority initiative.
        </p>
      </section>

      <section className="mb-16">
        <h3 className="mb-4">The Impact</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Initial Plan</th>
              <th>After Research</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primary investment</td>
              <td>Home screen widgets</td>
              <td>Voice assistant integration</td>
            </tr>
            <tr>
              <td>Development priority</td>
              <td>High (6-month roadmap)</td>
              <td>Low (nice-to-have)</td>
            </tr>
            <tr>
              <td>Expected ROI</td>
              <td>Increased daily engagement</td>
              <td>Better strategic positioning</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-6">
          Electrolux shifted resources to voice control development, aligning
          with where users were already comfortable controlling smart home
          devices. The research prevented months of development on a feature
          with uncertain adoption.
        </p>
        <p className="mt-5">
          More importantly, I learned that saying "the data doesn't support
          this" takes more courage than presenting a success story, but it's
          often more valuable.
        </p>
      </section>

      <section className="mb-32">
        <h3 className="mb-4">What I learned</h3>
        <p>
          <strong>
            Research isn't about proving hypotheses right, it's about finding
            truth.
          </strong>{" "}
          I spent months hoping widgets would work because everyone expected
          them to. Learning to present inconclusive results honestly, rather
          than forcing a narrative, was the most important skill I gained.
        </p>
        <p className="mt-5">
          <strong>User behavior beats user intentions.</strong> People said they
          wanted quick access, but their actual behavior showed they valued
          automation over control. Watching what people do matters more than
          listening to what they say they'll do.
        </p>
        <p className="mt-5">
          <strong>"Maybe" is a valid answer.</strong> Not every research project
          ends with clear direction. Sometimes the most valuable outcome is
          preventing investment in the wrong solution.
        </p>
      </section>
    </div>
  );
};

export default Electrolux;

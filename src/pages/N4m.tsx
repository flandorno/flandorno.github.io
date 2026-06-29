import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "../components/Banner";

gsap.registerPlugin(ScrollTrigger);

const N4m = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Net4Market Case Study | Federico Landorno";
    return () => {
      document.title = "Portfolio | Federico Landorno";
    };
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils
          .toArray<HTMLElement>("section", containerRef.current)
          .forEach((section) => {
            gsap.from(section, {
              opacity: 0,
              y: 20,
              duration: 0.65,
              ease: "power3.out",
              scrollTrigger: { trigger: section, start: "top 88%" },
            });
          });
      });
      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-0">
      <section className="mt-24 sm:mt-32 mb-16">
        <p className="text-gray-400 mb-3 tracking-wide uppercase text-sm font-medium">
          Net4Market — Design system for a B2B SaaS multi-app suite
        </p>
        <h1>From UI kit to shared language</h1>
        <div className="w-full h-96 bg-gray-800 rounded-2xl mt-6"></div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Context & Challenge</h2>
        <p>
          When I joined the company a year ago, the design team was three
          people: one junior, one senior, and me. On paper, the workflow
          existed. In practice, it was broken. Nobody had called it out yet.
        </p>
        <p className="mt-5">
          The process went like this: pick up a user story, create a file,
          design the screens, put together a presentation explaining the
          solution, leave it for the product owner and team lead to review
          without ever presenting it, incorporate feedback through written
          iteration, hand it off to developers. Then stop. No one checked
          whether what shipped matched what was designed.
        </p>
        <p className="mt-5">
          600+ user stories lived across disconnected files. When starting work
          on a new feature, the first task was remembering which previous
          stories had touched the same interface area. If you were new, you were
          simply expected to figure it out. No map. No single source of truth.
          Just institutional memory distributed across people who hoped they
          were remembering correctly.
        </p>
        <p className="mt-5">
          The existing UI kit reflected this fragmentation. Inspired by Material
          Design, which prioritizes consumer mobile experiences, it had been
          adapted for a B2B CRUD-heavy desktop suite without ever questioning
          the fit. No tokens. No accessibility consideration. No responsiveness.
          Not a system, a collection of screens that looked similar enough to
          feel consistent.
        </p>
        <div className="mt-6">
          <Banner>
            I was the first to say out loud that something was structurally
            wrong. Not just with the files, but with how the team operated.
          </Banner>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Finding the real problem
        </h2>
        <p>
          The surface problems were visible immediately. A table component that
          took a month to build. No responsive behavior. No WCAG 2.1 compliance.
          Screens that worked on the designer's monitor and nowhere else.
        </p>
        <p className="mt-5">
          But spending time inside the workflow made the deeper issue clear:
          design and development weren't slow because people were slow. They
          were slow because every decision was being made from scratch, in
          isolation, with no shared foundation underneath.
        </p>
        <p className="mt-5">
          Developers received screens. They interpreted them as best they could,
          made their own calls on spacing, sizing, and behavior, and shipped.
          Designers moved to the next story. The gap between intended and built
          accumulated silently, file by file, story by story.
        </p>
        <p className="mt-5">
          The UI kit wasn't helping because it was never designed to. It was a
          collection of static assets, not a system. No tokens meant no shared
          language for color, spacing, or typography. No accessibility standards
          meant every component carried technical debt from the moment it was
          built. No responsiveness meant every new surface was a negotiation.
        </p>
        <div className="mt-6">
          <Banner>
            The real problem wasn't the UI kit. Design and development lacked
            the shared foundation that makes real communication and
            collaboration possible. What the team needed wasn't better screens.
            It needed a shared language.
          </Banner>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Building a real system, not a kit
        </h2>
        <p>
          The decision was clear early on: patching the existing UI kit wasn't
          an option. The problems were structural. The solution had to be too.
        </p>

        <h3 className="text-xl font-semibold mt-10 mb-2">
          A three-layer token architecture
        </h3>
        <p>
          The foundation was a three-layer token architecture. Primitive tokens
          defined raw values: every color, spacing unit, and typographic scale
          the system would ever use. Semantic tokens gave those values meaning,
          translating "blue-500" into "color-action-primary". Component tokens
          consumed semantic tokens to drive individual component behavior. Three
          layers, one direction. No shortcuts between them.
        </p>
        <p className="mt-5">
          This structure wasn't designed in isolation. Every component rebuilt
          under the new system was a conversation first. What did developers
          actually need from each piece? What was slowing them down? My computer
          science background helped bridge the gap, but the point wasn't to have
          answers. It was to ask the right questions and build something that
          worked for everyone, not just for Figma.
        </p>

        <h3 className="text-xl font-semibold mt-10 mb-2">
          Design-to-code pipeline
        </h3>
        <p>
          The translation pipeline made this concrete. I designed the token
          structure across three layers in Figma using Tokens Studio. Riccardo,
          the frontend developer, handled the Style Dictionary implementation,
          testing each case, surfacing what didn't translate cleanly. We
          iterated together until the output was right. For the first time, a
          design decision in Figma had a direct, automatic path to a CSS custom
          property in production.
        </p>

        <h3 className="text-xl font-semibold mt-10 mb-2">
          Configuration-driven organisms
        </h3>
        <p>
          The token system solved the language problem between design and
          development. But the suite we were building had another challenge: the
          same component needed to behave differently depending on context,
          customer configuration, and business rules.
        </p>
        <p className="mt-5">
          The answer was configuration-driven organisms. Rather than building
          rigid, one-size-fits-all screens, components were designed to compose
          themselves based on backend configuration. The table component makes
          this concrete. A single table implementation can be paginated or not,
          expose specific columns, allow sorting on some and not others, hide or
          show columns based on permissions, support row selection for bulk
          actions, and surface quick filters or a full advanced query builder.
          None of these are hardcoded. The backend configuration determines what
          the user sees and what they can do.
        </p>
        <div className="w-full h-80 bg-gray-800 my-8 rounded-2xl"></div>
        <p>
          The same pattern applied across the suite: page layouts, forms, and
          detail pages all follow the same principle. One component, configured
          to fit the context. For developers, this meant building a surface once
          and adapting it through configuration. For designers, it meant
          specifying behavior systematically rather than designing every
          permutation manually.
        </p>
        <p className="mt-5">
          Accessibility was non-negotiable from day one. WCAG 2.1 compliance was
          built into component specifications, not added later. Responsiveness
          was designed in, not retrofitted. These weren't enhancements. They
          were the baseline.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Key decisions</h2>
        <p>
          Some choices defined the system more than others. Not because they
          were the most technically complex, but because they solved the right
          problems.
        </p>

        <h3 className="text-xl font-semibold mt-10 mb-2">
          Configuration-driven organisms
        </h3>
        <p>
          The table component taking a month to build wasn't just a speed
          problem. It was a symptom of designing and developing every
          permutation by hand. Configuration-driven organisms flipped the model:
          once a component was built, its behavior was determined by backend
          configuration, not by separate implementations. A table that needed
          pagination, column visibility, bulk actions, and advanced filtering
          wasn't four problems. It was one component with four configuration
          options. This shifted the conversation between design and development
          from "how do we build this?" to "what should this be capable of?"
          That's a different, better conversation.
        </p>

        <h3 className="text-xl font-semibold mt-10 mb-2">
          Responsiveness built-in
        </h3>
        <p>
          The existing suite was desktop-only. Not by design choice, by default.
          Retrofitting responsiveness onto two years of accumulated work was
          never going to happen, and everyone knew it. The new system made
          responsiveness a requirement from the first component, not a feature
          to add later. This wasn't just technical hygiene. Field workers
          accessing the suite on tablets and smartphones in construction sites
          made it a real user need, not a nice-to-have.
        </p>

        <h3 className="text-xl font-semibold mt-10 mb-2">
          Presenting solutions instead of leaving files silently
        </h3>
        <p>
          The old process left design decisions to be interpreted from static
          files. Misunderstandings accumulated undetected until something
          shipped wrong. Making solution presentations a standard step changed
          the dynamic. PO and team lead could ask questions in real time,
          surface doubts before they became rework, and understand the reasoning
          behind choices rather than just the output. Less guessing. Less
          backtracking.
        </p>

        <h3 className="text-xl font-semibold mt-10 mb-2">
          Single source of truth
        </h3>
        <p>
          600+ user stories, spread across disconnected files, with no clear
          record of which stories had touched which interface areas. Starting
          work on a new feature meant archaeological research before actual
          design. Centralizing all screen versions into a single, always-updated
          file eliminated that overhead. Deliverables became reliable. New team
          members could orient themselves without relying on someone else's
          memory.
        </p>
      </section>

      <section className="mb-32">
        <h2 className="text-2xl font-semibold mb-4">The impact</h2>
        <p>
          The most honest measure of a design system isn't how it looks. It's
          whether the people who build with it work differently than they did
          before.
        </p>
        <p className="mt-5">
          The numbers tell part of the story. A table component that previously
          took a month to build, without responsive behavior or accessibility
          compliance, now takes a day to configure and deploy. The component
          exists once. The backend configuration does the rest.
        </p>
        <div className="overflow-x-auto mt-6">
          <table>
            <caption className="sr-only">
              Impact metrics before and after the design system
            </caption>
            <thead>
              <tr>
                <th scope="col" aria-label="Metric"></th>
                <th scope="col">Before</th>
                <th scope="col">After</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Table component</th>
                <td>1 month</td>
                <td>1 day</td>
              </tr>
              <tr>
                <th scope="row">Responsive behavior</th>
                <td>Absent</td>
                <td>Built-in</td>
              </tr>
              <tr>
                <th scope="row">Accessibility</th>
                <td>Not considered</td>
                <td>WCAG 2.1 baseline</td>
              </tr>
              <tr>
                <th scope="row">Token system</th>
                <td>None</td>
                <td>Three-layer architecture</td>
              </tr>
              <tr>
                <th scope="row">Design source of truth</th>
                <td>600+ disconnected files</td>
                <td>Single updated file</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6">
          But the more significant change was cultural. Frontend developers
          described the shift as breathing fresh air. Not because the work
          became easier, but because for the first time they were part of the
          decisions, not just recipients of them. Developers who had never
          worked with a methodically constructed token system learned to use
          one. Spacing, sizing, and typographic values stopped being something
          to figure out. They were already there, in the tokens, consistent and
          automatic.
        </p>
        <p className="mt-5">
          The nature of the work changed too. Before, developers spent weeks
          building variations of similar pages from scratch. After, assembling a
          new page meant adding routing, dropping in components, and wiring the
          API call that returned the configuration driving the layout. The time
          saved didn't disappear: it moved. Into refining components based on
          real user feedback. Into improving the system itself. Into work that
          compounds rather than repeats.
        </p>
        <p className="mt-5">
          On the backend, centralizing configuration logic reduced duplication
          of business rules across the stack. A validation defined once applied
          everywhere. A layout change happened in one place, not two.
        </p>
        <p className="mt-5">
          The team that had been operating in isolation, design handing off to
          development, development shipping without feedback,{" "}
          <b>started operating as a unit.</b>
        </p>
      </section>
    </div>
  );
};

export default N4m;

import { Link } from "react-router-dom";
import CaseLayout from "../components/CaseLayout";
import Figure from "../components/Figure";
import FormComparison from "../components/FormComparison";

/* The design system half of the Net4Market work. How the design team itself
   worked (600+ files, silent reviews, no check on the release) is its own
   case study at /n4m-process, split out on 2026-11-14 at the owner's request:
   the two stories were sharing one page and each was being told twice. */
export default function N4m() {
  return (
    <CaseLayout
      title="From UI kit to shared language"
      meta="Net4Market · Design system for a B2B SaaS multi-app suite"
      docTitle="Net4Market Design System Case Study | Federico Landorno"
      facts={[
        { label: "Role", value: "Product designer. I proposed the rebuild and led it." },
        { label: "Team", value: "Three designers, working with the frontend developers" },
        { label: "Period", value: "June 2025 to present" },
        { label: "Outcome", value: "A page with a table took a month to build. It now takes a day to configure." },
      ]}
    >
      <Figure seed={11} />

      <section data-reveal>
        <h2>The kit I found</h2>
        <p>
          When I joined Net4Market in June 2025 the suite was already there: a set of B2B apps,
          mostly desktop screens full of tables, forms and detail pages, built over the previous
          two years on a UI kit modelled on Material Design. The design team was three people: a
          junior, a senior and me.
        </p>
        <p>
          Material is built for consumer mobile apps, and nobody had asked whether it suited a
          data-heavy desktop product. The kit had no tokens, no accessibility requirements and no
          responsive behaviour. It was a set of screens that looked alike, and that was as far as
          its consistency went.
        </p>
        <p>
          The cost showed up in development. Developers received static screens and had to decide
          spacing, sizes and behaviour on their own, so what shipped drifted a little further from
          the design with every task. A new page with a table, built to match the ones already
          developed, took a month, and it still came out with no responsive behaviour and no
          accessibility support.
        </p>
      </section>

      <section data-reveal>
        <h2>Why I pushed for a rebuild</h2>
        <p>
          After some time inside that process, what I saw was a team making every decision from
          scratch. Designers and developers had no common vocabulary for colour, spacing or type,
          so each handoff was an interpretation. Fixing components one at a time would have left
          that untouched.
        </p>
        <p>
          I proposed replacing the kit with a design system and led the work. The other two
          designers contributed to it, and on the engineering side I worked most closely with
          Riccardo, a frontend developer.
        </p>
        <p>
          Each component started as a conversation with the developers about what they needed from
          it and what was slowing them down. My computer science background made those
          conversations easier.
        </p>
      </section>

      <section data-reveal>
        <h2>What we built</h2>

        <h3>Three layers of tokens</h3>
        <p>
          The foundation is a token architecture in three layers. Primitive tokens hold the raw
          values: every colour, spacing step and type size the system uses. Semantic tokens give
          those values a purpose, so &ldquo;blue-500&rdquo; becomes
          &ldquo;color-action-primary&rdquo;. Component tokens take semantic tokens and apply them
          to a specific component. References only run in that direction, and a component never
          points at a raw value.
        </p>

        <h3>From Figma to CSS</h3>
        <p>
          I built the three layers in Figma with Tokens Studio. Riccardo wrote the Style Dictionary
          setup that turns them into CSS custom properties, tested each case and told me where my
          structure didn&rsquo;t translate cleanly. We went back and forth until the output
          matched. Since then, a value changed in Figma arrives in our test environment as the same
          CSS custom property, and nobody retypes it along the way. Nothing goes straight to
          production.
        </p>

        <h3>Components configured by the backend</h3>
        <p>
          Tokens gave us a common vocabulary. The suite had a second problem: the same component
          has to behave differently depending on the context, the customer&rsquo;s configuration
          and the business rules.
        </p>
        <p>
          We designed the larger components so that backend configuration decides how they behave.
          The table is the clearest example. One implementation can be paginated or not, show
          different columns, allow sorting on some of them, hide columns by permission, support row
          selection for bulk actions, and offer quick filters or a full query builder. None of that
          is hardcoded.
        </p>
        <Figure seed={23} />
        <p>
          Page layouts, forms and detail pages work the same way. Developers build a surface once
          and adapt it through configuration. Designers specify what a component can do and no
          longer draw every permutation by hand.
        </p>

        <h3>Responsive and accessible from the first component</h3>
        <p>
          The old suite was desktop-only because nobody had ever decided otherwise, and two years
          of screens were never going to be retrofitted. Some of our users are field workers who
          open the suite on tablets and phones on construction sites, so every new component had to
          work at those sizes from the start. WCAG 2.1 requirements are written into each
          component&rsquo;s specification, so a component is accessible by the time it is built.
        </p>
      </section>

      <section data-reveal>
        <h2>The same form, before and after</h2>
        <p>
          Here is one form built both ways. On the left is the legacy version, where every field
          carries its own hardcoded values. On the right is the design system version, where every
          value comes from a semantic token. Dark mode works on the right without touching the
          component.
        </p>
        <div className="fl-bleed">
          <FormComparison />
        </div>
      </section>

      <section data-reveal>
        <h2>Results</h2>
        <p>
          The design system is in production. The easiest result to measure is a page with a table.
          Building one to match the existing pages used to take a month. Today it takes about a
          day, because the table component already exists and the backend configuration does the
          rest.
        </p>

        {/* A table that scrolls sideways has to be reachable without a mouse:
            role="region" + tabindex makes it a focus stop so the keyboard can
            scroll it (WCAG 2.1.1), and the name tells a screen reader what the
            stop is. On a phone the stylesheet lets it out into the page gutter
            so the cut edge is visible rather than inferred. */}
        <div className="fl-table-wrap" role="region" tabIndex={0} aria-label="Before and after the design system">
          <table>
            <caption className="sr-only">Before and after the design system</caption>
            <thead>
              <tr>
                <th scope="col" aria-label="Metric"></th>
                <th scope="col">Before</th>
                <th scope="col">After</th>
              </tr>
            </thead>
            <tbody>
              <tr><th scope="row">Page with a table</th><td>1 month to build</td><td>1 day to configure</td></tr>
              <tr><th scope="row">Responsive behavior</th><td>Absent</td><td>Built in</td></tr>
              <tr><th scope="row">Accessibility</th><td>Not considered</td><td>WCAG 2.1 baseline</td></tr>
              <tr><th scope="row">Tokens</th><td>None</td><td>Three layers, from Figma to CSS</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          The developers&rsquo; work changed as well. They used to spend weeks building variations
          of similar pages. A new page now means adding the route, placing the components and
          wiring the API call that returns the configuration. Spacing, sizes and type values come
          from the tokens, so nobody has to work them out from a screenshot. The time saved goes
          into improving components based on user feedback.
        </p>
        <p>
          The frontend developers described the change as a breath of fresh air, mostly because
          they now take part in the decisions and no longer just receive them.
        </p>
        <p>
          On the backend, keeping the configuration in one place cut the duplication of business
          rules. A validation is defined once and applies everywhere.
        </p>
        <p>
          Rebuilding the kit was half of the work at Net4Market. The other half was the way the
          design team itself worked, which I cover in{" "}
          <Link to="/n4m-process" className="fl-inline">600+ files, one source of truth</Link>.
        </p>
      </section>
    </CaseLayout>
  );
}

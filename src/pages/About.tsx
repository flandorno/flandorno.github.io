import { Link } from "react-router-dom";
import CaseLayout from "../components/CaseLayout";
import { pageTitle } from "../lib/title";

/* No email on the page — see PRODUCT.md. The contact links are the reading
   layout's own last row. */
export default function About() {
  return (
    <CaseLayout title="About" meta="Product Designer" docTitle={pageTitle("About")}>
      <section>
        {/* No characterisation of how Federico works beyond what PRODUCT.md clears.
            A claim about his practice that he did not write is not his to publish. */}
        <p>
          I design systems you can measure. My work sits across product strategy, design systems
          and research.
        </p>
        <p>
          Four case studies cover most of what I do: a{" "}
          <Link to="/n4m" className="fl-inline">design system</Link> built on a three-layer token
          architecture, a{" "}
          <Link to="/n4m-process" className="fl-inline">design process</Link> that gave 600+
          disconnected files one source of truth, an{" "}
          <Link to="/d4next" className="fl-inline">insurance platform</Link> where issuing a policy
          went from 45 minutes to 3, and{" "}
          <Link to="/electrolux" className="fl-inline">research</Link> that argued against building
          the feature everyone wanted.
        </p>
      </section>
    </CaseLayout>
  );
}

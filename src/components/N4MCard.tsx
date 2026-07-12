import { Fragment } from "react";
import { Link } from "react-router-dom";
import n4mLogo from "../assets/n4m/n4m-logo.png";

const nodes = [
  {
    label: "primitive",
    entries: [
      { color: "#36D6AE", name: "teal-400" },
      { name: "transparent", border: true },
    ],
  },
  {
    label: "semantic",
    entries: [
      { color: "#36D6AE", name: "action.primary" },
      { name: "action.secondary", border: true },
    ],
  },
  {
    label: "component",
    entries: [
      { color: "#36D6AE", name: "button.primary.bg.default" },
      { name: "button.secondary.bg.default", border: true },
    ],
  },
];

const pills = [
  { text: "configuration-driven", highlight: false },
  { text: "responsive · built-in", highlight: false },
  { text: "WCAG 2.1", highlight: false },
  { text: "1 month → 1 day", highlight: true },
];

export default function N4MCard() {
  return (
    <section className="h-[75svh] md:h-screen w-full flex p-6 md:p-12 lg:p-16">
      <Link
        to="/n4m"
        aria-label="N4M case study: From UI kit to shared language"
        className="relative flex-1 overflow-hidden rounded-[30px] bg-[#0E4C49] @container
                   transition-shadow duration-700
                   hover:shadow-[0_0_0_1px_rgba(54,214,174,0.5),0_0_60px_20px_rgba(54,214,174,0.2),0_0_140px_50px_rgba(54,214,174,0.1)]"
      >
        {/* Grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-1 pointer-events-none bg-size-[32px_32px] lg:bg-size-[3.6cqw_3.6cqw]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
            maskImage: "linear-gradient(to bottom,#000 0%,#000 58%,transparent 84%)",
            WebkitMaskImage: "linear-gradient(to bottom,#000 0%,#000 58%,transparent 84%)",
          }}
        />

        {/* ── DESKTOP (lg+) ──────────────────────────────────── */}

        {/* Logo */}
        <img
          src={n4mLogo}
          alt="Net4Market"
          className="hidden lg:block absolute z-5 w-auto"
          style={{ top: "3.6cqw", left: "5.4cqw", height: "2.2cqw", filter: "brightness(0) invert(1)", opacity: 0.9 }}
        />

        {/* Fill: pipeline + pills */}
        <div
          aria-hidden="true"
          className="hidden lg:flex absolute inset-x-0 top-0 z-2 flex-col items-center justify-center box-border"
          style={{ height: "74%", gap: "2.7cqw", paddingTop: "6cqw", paddingLeft: "4.4cqw", paddingRight: "4.4cqw" }}
        >
          {/* Pipeline */}
          <div className="flex items-stretch justify-center" style={{ gap: "0.7cqw" }}>
            {nodes.map((node, i) => {
              const isLast = i === nodes.length - 1;
              return (
                <Fragment key={node.label}>
                  <div
                    className="relative flex flex-col"
                    style={{ border: "1.5px solid rgba(255,255,255,.26)", borderRadius: "1cqw", padding: "1.5cqw 1.2cqw 1.2cqw", gap: "0.95cqw" }}
                  >
                    <span
                      className="absolute font-mono"
                      style={{ top: "-0.78cqw", left: "1.1cqw", background: "#0E4C49", padding: "0 0.5cqw", fontSize: "0.85cqw", color: "rgba(255,255,255,.55)", letterSpacing: ".05em" }}
                    >
                      {node.label}
                    </span>
                    {node.entries.map((entry) => (
                      <div key={entry.name} className="flex items-center" style={{ gap: "0.78cqw" }}>
                        <div
                          style={{
                            width: "1.5cqw", height: "1.5cqw", borderRadius: "0.4cqw", flexShrink: 0,
                            background: entry.border ? "transparent" : (entry as { color: string }).color,
                            border: entry.border ? "1.5px solid rgba(255,255,255,.4)" : "none",
                            boxSizing: "border-box",
                          }}
                        />
                        <span className="font-mono whitespace-nowrap" style={{ fontSize: entry.name.length > 16 ? "0.85cqw" : "0.9cqw", color: "rgba(255,255,255,.85)" }}>
                          {entry.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Connector */}
                  <div
                    className="flex items-center flex-none"
                    style={{ width: isLast ? "4.2cqw" : "3.5cqw", color: "#36D6AE" }}
                  >
                    <div style={{ flex: 1, borderTop: `1.5px dashed rgba(54,214,174,${isLast ? ".8" : ".55"})` }} />
                    <span style={{ marginLeft: "-0.25cqw", fontSize: isLast ? "1.3cqw" : "1.1cqw", lineHeight: 0 }}>▶</span>
                  </div>
                </Fragment>
              );
            })}

            {/* Output node */}
            <div
              className="relative flex flex-col"
              style={{
                border: "1.5px solid rgba(54,214,174,.6)", borderRadius: "1.2cqw",
                padding: "1.7cqw 1.9cqw", background: "rgba(54,214,174,.07)",
                boxShadow: "0 0 0 0.4cqw rgba(54,214,174,.05),0 1.5cqw 3.5cqw rgba(0,0,0,.32)",
                gap: "0.9cqw",
              }}
            >
              <span
                className="absolute font-mono"
                style={{ top: "-0.78cqw", left: "1.2cqw", background: "#0E4C49", padding: "0 0.5cqw", fontSize: "0.85cqw", color: "#7EE9CC", letterSpacing: ".05em" }}
              >
                Button · output
              </span>
              <div style={{ padding: "0.95cqw 2.4cqw", background: "#36D6AE", borderRadius: "8px", color: "#073C36", fontWeight: 700, fontSize: "1.2cqw", textAlign: "center" }}>
                Primary
              </div>
              <div style={{ padding: "0.85cqw 2.4cqw", border: "1px solid rgba(255,255,255,.28)", borderRadius: "8px", color: "rgba(255,255,255,.82)", fontWeight: 600, fontSize: "1.2cqw", textAlign: "center" }}>
                Secondary
              </div>
            </div>
          </div>

          {/* Pills */}
          <div className="flex flex-wrap justify-center" style={{ gap: "0.9cqw" }}>
            {pills.map(({ text, highlight }) => (
              <div
                key={text}
                className="flex items-center"
                style={{ gap: "0.7cqw", border: `1px solid ${highlight ? "rgba(54,214,174,.5)" : "rgba(255,255,255,.18)"}`, borderRadius: "0.7cqw", padding: "0.6cqw 1.1cqw" }}
              >
                <span style={{ width: "0.5cqw", height: "0.5cqw", borderRadius: "50%", background: "#36D6AE", flexShrink: 0 }} />
                <span className="font-mono" style={{ fontSize: "0.9cqw", color: highlight ? "#7EE9CC" : "rgba(255,255,255,.7)" }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Text — desktop */}
        <div className="hidden lg:block absolute z-4" style={{ left: "5.4cqw", right: "5.4cqw", bottom: "6.5cqw" }}>
          <p className="font-mono font-bold text-[#36D6AE] tracking-[.05em]" style={{ fontSize: "1.35cqw", marginBottom: "1.5cqw" }}>01</p>
          <h2 className="text-white font-extrabold leading-[0.95] tracking-[-0.03em]" style={{ fontSize: "4.7cqw" }}>
            From UI kit to shared language
          </h2>
          <p className="text-[#8AA6A2] font-medium" style={{ fontSize: "1.7cqw", marginTop: "1.5cqw" }}>
            Net4Market — Design system for a B2B SaaS multi-app suite
          </p>
        </div>

        {/* ── MOBILE / TABLET (< lg) ─────────────────────────── */}
        <div className="lg:hidden flex flex-col h-full p-6 sm:p-8">

          {/* Logo */}
          <img
            src={n4mLogo}
            alt="Net4Market"
            className="relative z-10 h-8 sm:h-12 w-auto self-start"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
          />

          {/* Pipeline — vertical */}
          <div className="flex-1 flex items-center justify-center relative z-2">
            <div className="flex flex-col items-stretch w-full max-w-80">
              {nodes.map((node) => (
                <Fragment key={node.label}>
                  <div
                    className="relative w-full flex flex-col"
                    style={{ border: "1.5px solid rgba(255,255,255,.26)", borderRadius: "8px", padding: "8px 10px", gap: "6px" }}
                  >
                    <span
                      className="absolute font-mono"
                      style={{ top: "-6px", left: "10px", background: "#0E4C49", padding: "0 5px", fontSize: "8.5px", color: "rgba(255,255,255,.55)", letterSpacing: ".05em" }}
                    >
                      {node.label}
                    </span>
                    {node.entries.map((entry) => (
                      <div key={entry.name} className="flex items-center" style={{ gap: "7px" }}>
                        <div
                          style={{
                            width: "12px", height: "12px", borderRadius: "3px", flexShrink: 0,
                            background: entry.border ? "transparent" : (entry as { color: string }).color,
                            border: entry.border ? "1.5px solid rgba(255,255,255,.4)" : "none",
                            boxSizing: "border-box",
                          }}
                        />
                        <span className="font-mono" style={{ fontSize: "10px", color: "rgba(255,255,255,.85)", whiteSpace: "nowrap" }}>
                          {entry.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Vertical connector */}
                  <div className="flex flex-col items-center self-center text-[#36D6AE]" style={{ height: "12px", justifyContent: "center" }}>
                    <div style={{ width: 0, height: "6px", borderLeft: "1.5px dashed rgba(54,214,174,.6)", flexShrink: 0 }} />
                    <span style={{ transform: "rotate(90deg)", fontSize: "10px", lineHeight: 0 }}>▶</span>
                  </div>
                </Fragment>
              ))}

              {/* Output node */}
              <div
                className="relative w-full flex flex-col"
                style={{
                  border: "1.5px solid rgba(54,214,174,.6)", borderRadius: "8px",
                  padding: "10px", background: "rgba(54,214,174,.07)",
                  boxShadow: "0 0 10px rgba(54,214,174,.05),0 8px 24px rgba(0,0,0,.32)",
                  gap: "6px",
                }}
              >
                <span
                  className="absolute font-mono"
                  style={{ top: "-6px", left: "10px", background: "#0E4C49", padding: "0 5px", fontSize: "8.5px", color: "#7EE9CC", letterSpacing: ".05em" }}
                >
                  Button · output
                </span>
                <div style={{ padding: "7px 20px", background: "#36D6AE", borderRadius: "6px", color: "#073C36", fontWeight: 700, fontSize: "12px", textAlign: "center" }}>
                  Primary
                </div>
                <div style={{ padding: "7px 20px", border: "1px solid rgba(255,255,255,.28)", borderRadius: "6px", color: "rgba(255,255,255,.82)", fontWeight: 600, fontSize: "12px", textAlign: "center" }}>
                  Secondary
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="relative z-10">
            <p className="font-mono font-bold text-[#36D6AE] tracking-[.05em] text-sm mb-2">01</p>
            <h2 className="text-white font-extrabold leading-none tracking-tight text-3xl sm:text-4xl md:text-5xl">
              From UI kit to shared language
            </h2>
            <p className="text-[#8AA6A2] font-medium mt-3 text-base sm:text-lg">
              Net4Market — Design system for a B2B SaaS multi-app suite
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}

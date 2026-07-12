import { Link } from "react-router-dom";
import d4Logo from "../assets/yoga/d4x-logo.svg";

const steps = [
  { label: "Customer", done: true,  current: false },
  { label: "Product",  done: true,  current: false },
  { label: "Assets",   done: false, current: true  },
  { label: "Validate", done: false, current: false },
  { label: "Issue",    done: false, current: false },
];

export default function D4Card() {
  return (
    <section className="h-[75svh] md:h-screen w-full flex p-6 md:p-12 lg:p-16">
      <Link
        to="/d4next"
        aria-label="D4next case study: From 45 to 3 minutes to issue a policy"
        className="relative flex-1 flex flex-col justify-between
                   p-6 sm:p-8 lg:px-[5.4cqw] lg:pt-[5.2cqw] lg:pb-[5.6cqw]
                   overflow-hidden rounded-[34px] bg-[#0B0E13] border border-white/7 @container
                   transition-shadow duration-700
                   hover:shadow-[0_0_0_1px_rgba(255,41,168,0.55),0_0_60px_20px_rgba(255,41,168,0.28),0_0_140px_50px_rgba(255,41,168,0.1)]"
      >
        {/* Logo */}
        <img src={d4Logo} alt="D4X logo" className="relative z-10 h-8 sm:h-12 w-auto self-start" />

        {/* Mobile: vertical stepper — absolutely centered in the full card */}
        <div className="md:hidden absolute inset-0 flex items-center justify-center pb-[25%] z-2">
          <div>
            <div className="relative">
              <div
                className="absolute left-2.5 top-5.25 bottom-5.25 w-px"
                style={{ background: "linear-gradient(180deg,#FF29A8,rgba(255,255,255,.13))" }}
              />
              {steps.map(({ label, done, current }) => (
                <div key={label} className="flex items-center gap-3 py-2.5">
                  <div className="w-5.5 h-5.5 flex items-center justify-center flex-none relative z-1">
                    {done && (
                      <div className="w-5.5 h-5.5 rounded-full bg-d4-purple text-[#1a0411] font-extrabold flex items-center justify-center text-[10px]">✓</div>
                    )}
                    {current && (
                      <div
                        className="w-5.5 h-5.5 rounded-full bg-[#0B0E13] border-2 border-d4-purple"
                        style={{ boxShadow: "0 0 0 4px rgba(255,41,168,.18)" }}
                      />
                    )}
                    {!done && !current && (
                      <div className="w-4 h-4 rounded-full bg-[#0B0E13] border border-white/22" />
                    )}
                  </div>
                  <span
                    className="font-mono text-sm"
                    style={{ color: done ? "rgba(255,255,255,.55)" : current ? "#fff" : "rgba(255,255,255,.4)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* md+: horizontal stepper — flex child, absolute on lg+ */}
        <div className="hidden md:flex flex-1 flex-col items-center justify-center
                        lg:flex-none lg:absolute lg:left-[5.4cqw] lg:right-[5.4cqw] lg:top-[12cqw] lg:z-3">
          <div className="w-full">
            <p className="text-center font-mono tracking-[.16em] mb-[2.4cqw] text-[#FF7AC8] text-xs">
              ONE GUIDED FLOW
            </p>
            <div className="relative flex items-start">
              <div
                className="absolute left-[1cqw] right-[1cqw] top-[1cqw] h-0.5"
                style={{ background: "linear-gradient(90deg,#FF29A8,rgba(255,255,255,.13))" }}
              />
              {steps.map(({ label, done, current }) => (
                <div key={label} className="flex-1 flex flex-col items-center gap-[1cqw]">
                  {done && (
                    <div className="w-[2cqw] h-[2cqw] rounded-full bg-d4-purple text-[#1a0411] font-extrabold
                                    flex items-center justify-center text-[1cqw] z-1">
                      ✓
                    </div>
                  )}
                  {current && (
                    <div
                      className="w-[2.3cqw] h-[2.3cqw] rounded-full bg-[#0B0E13] border-2 border-d4-purple z-1 -mt-[.15cqw]"
                      style={{ boxShadow: "0 0 0 .45cqw rgba(255,41,168,.18)" }}
                    />
                  )}
                  {!done && !current && (
                    <div className="w-[1.7cqw] h-[1.7cqw] rounded-full bg-[#0B0E13] border border-white/22 mt-[.15cqw] z-1" />
                  )}
                  <span
                    className="font-mono text-sm"
                    style={{ color: done ? "rgba(255,255,255,.55)" : current ? "#fff" : "rgba(255,255,255,.4)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-[.9cqw] mt-[3.2cqw]">
              {["The system remembers", "Errors caught in real time"].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-[.6cqw] border border-white/12 rounded-[.7cqw] px-[.9cqw] py-[.6cqw]"
                >
                  <span className="w-[.5cqw] h-[.5cqw] rounded-full bg-d4-purple flex-none" />
                  <span className="text-white/72 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="relative z-10">
          <p className="text-d4-purple font-bold tracking-widest mb-2 lg:mb-[1.5cqw]
                        text-sm lg:text-[1.35cqw]">
            02
          </p>
          <h2 className="text-white font-extrabold leading-none tracking-tight
                         text-3xl sm:text-4xl md:text-5xl lg:text-[4.7cqw] lg:tracking-[-0.03em]">
            From 45 to 3 minutes
            <br />
            to issue a policy
          </h2>
          <p className="text-[#7C8694] font-medium mt-3 lg:mt-[1.5cqw]
                        text-base sm:text-lg lg:text-[1.7cqw]">
            Yoga — B2B2C SaaS Insurance Platform
          </p>
        </div>
      </Link>
    </section>
  );
}

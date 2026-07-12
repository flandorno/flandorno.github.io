import { Link } from "react-router-dom";
import eluxLogo from "../assets/elux/elux-logo.svg";
import vacuumNavy from "../assets/elux/robot-vacuum-cleaner.png";
import vacuumGold from "../assets/elux/robot-vacuum-cleaner2.png";

export default function EluxCard2() {
  return (
    <section className="relative h-[75svh] md:h-screen w-full flex p-6 md:p-12 lg:p-16 z-10">
      <Link
        to="/electrolux"
        aria-label="Electrolux case study: Smart Home Widgets research"
        className="relative flex-1 flex flex-col justify-between
                   p-6 sm:p-8 lg:px-[5.4cqw] lg:pt-[5cqw] lg:pb-[6cqw]
                   overflow-hidden rounded-[30px] @container
                   [background:radial-gradient(120%_95%_at_72%_6%,#1A3F77_0%,#102E5C_42%,#0A2348_100%)]
                   transition-shadow duration-700
                   hover:shadow-[0_0_0_1px_rgba(30,120,255,0.5),0_0_60px_20px_rgba(0,90,220,0.28),0_0_140px_50px_rgba(0,70,190,0.1)]"
      >
        {/* Logo */}
        <img
          src={eluxLogo}
          alt="Electrolux logo"
          className="relative z-10 h-8 sm:h-12 w-auto self-start"
        />

        {/* Robots mobile — centered flex child, hidden on lg */}
        <div aria-hidden="true" className="flex-1 flex items-center justify-center overflow-hidden lg:hidden">
          <div className="relative flex items-end">
            <img
              src={vacuumNavy}
              alt=""
              className="relative z-1 w-[52cqw] md:w-[30cqw] rotate-[9deg] -mr-[14cqw] md:-mr-[8cqw]"
              style={{ filter: "drop-shadow(0 1.5cqw 2cqw rgba(0,0,0,.5))" }}
            />
            <img
              src={vacuumGold}
              alt=""
              className="relative z-2 w-[62cqw] md:w-[38cqw] -rotate-6"
              style={{ filter: "drop-shadow(0 2cqw 3cqw rgba(0,0,0,.55))" }}
            />
          </div>
        </div>

        {/* Robots desktop — absolute stage, hidden below lg */}
        <div aria-hidden="true" className="hidden lg:block absolute inset-x-0 top-0 h-[62%] z-2 pointer-events-none">
          {/* Glow */}
          <div className="absolute rounded-full blur-[6px] z-1
                          w-[46cqw] h-[46cqw] -top-[3cqw] right-[3cqw]
                          [background:radial-gradient(circle,rgba(120,170,235,.32)_0%,rgba(120,170,235,0)_68%)]" />
          {/* Navy shadow */}
          <div className="absolute rounded-full blur-[3px] z-2
                          w-[26cqw] h-[6cqw] top-[29cqw] right-[31cqw]
                          [background:radial-gradient(ellipse,rgba(0,0,0,.45)_0%,rgba(0,0,0,0)_70%)]" />
          {/* Gold shadow */}
          <div className="absolute rounded-full blur-[3px] z-2
                          w-[30cqw] h-[7cqw] top-[39cqw] right-[7cqw]
                          [background:radial-gradient(ellipse,rgba(0,0,0,.45)_0%,rgba(0,0,0,0)_70%)]" />
          {/* Navy robot */}
          <img
            src={vacuumNavy}
            alt=""
            className="absolute z-3 w-[25cqw] top-[5cqw] right-[30cqw] rotate-[9deg]"
            style={{ filter: "drop-shadow(0 2cqw 3cqw rgba(0,0,0,.5))" }}
          />
          {/* Gold robot */}
          <img
            src={vacuumGold}
            alt=""
            className="absolute z-3 w-[33cqw] top-[11cqw] right-[5cqw] -rotate-6"
            style={{ filter: "drop-shadow(0 3cqw 4cqw rgba(0,0,0,.55))" }}
          />
        </div>

        {/* Text */}
        <div className="relative z-10">
          <p className="text-[#5B9BE0] font-bold tracking-widest mb-2 lg:mb-[1.5cqw]
                        text-sm lg:text-[1.35cqw]">
            03
          </p>
          <h2 className="text-white font-extrabold leading-none tracking-tight
                         text-3xl sm:text-4xl md:text-5xl lg:text-[4.7cqw] lg:tracking-[-0.03em] lg:max-w-[62%]">
            When surveys said &ldquo;yes&rdquo; but behavior said &ldquo;no&rdquo;
          </h2>
          <p className="text-[#8AA0C2] font-medium mt-3 lg:mt-[1.5cqw]
                        text-base sm:text-lg lg:text-[1.7cqw]">
            Electrolux &mdash; Smart Home Widgets
          </p>
        </div>
      </Link>
    </section>
  );
}

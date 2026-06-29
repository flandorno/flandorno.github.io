import { Link } from "react-router-dom";

export default function N4MCard() {
  return (
    <section className="h-screen w-full flex p-6 md:p-12 lg:p-16">
      <Link
        to="/n4m"
        aria-label="N4M case study"
        className="relative flex-1 flex flex-col justify-end p-6 sm:p-8 lg:p-16 overflow-hidden rounded-4xl
                   transition-shadow duration-700
                   hover:shadow-[0_0_0_1px_rgba(45,212,191,0.4),0_0_60px_20px_rgba(20,184,166,0.2),0_0_140px_50px_rgba(15,118,110,0.1)]"
        style={{ backgroundColor: "#004449" }}
      >
        <div className="relative z-10">
          <p className="text-teal-300 font-semibold text-lg mb-2">03</p>
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-semibold tracking-tight">
            From UI kit to shared language
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl text-gray-400 mt-3">
            Net4Market — Design system for a B2B SaaS multi-app suite{" "}
          </p>
        </div>
      </Link>
    </section>
  );
}

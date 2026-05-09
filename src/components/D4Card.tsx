import { Link } from "react-router-dom";
import d4Logo from "../assets/yoga/d4x-logo.svg";

export default function D4Card() {
  return (
    <section className="h-screen w-full flex p-6 md:p-12 lg:p-16">
      <Link
        to="/d4next"
        aria-label="D4next case study: From 45 to 3 minutes to issue a policy"
        className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 lg:p-16 overflow-hidden rounded-4xl bg-black
                   transition-shadow duration-700
                   hover:shadow-[0_0_0_1px_rgba(255,41,168,0.55),0_0_60px_20px_rgba(255,41,168,0.28),0_0_140px_50px_rgba(255,41,168,0.1)]
                   focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 focus-visible:outline-none"
      >
        <img src={d4Logo} alt="D4 logo" className="h-8 sm:h-12 w-auto self-start" />
        <div className="relative z-10">
          <p className="text-d4-purple font-semibold text-lg mb-2">01</p>
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-semibold tracking-tight">
            From 45 to 3 minutes
            <br />
            to issue a policy
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl text-gray-400 mt-3">
            Yoga — B2B2C SaaS Insurance Platform
          </p>
        </div>
      </Link>
    </section>
  );
}

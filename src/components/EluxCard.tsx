import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import robotVacuumCleaner from "../assets/elux/robot-vacuum-cleaner.png";
import eluxLogo from "../assets/elux/elux-logo.svg";

gsap.registerPlugin(ScrollTrigger);

const robots = [
  { left: "10%", top: "20%", speed: 0.3, size: "w-16", opacity: 0.3, rotation: 45 },
  { left: "25%", top: "60%", speed: 0.6, size: "w-24", opacity: 0.5, rotation: 120 },
  { left: "40%", top: "10%", speed: 1.2, size: "w-20", opacity: 0.7, rotation: 200 },
  { left: "55%", top: "75%", speed: 0.8, size: "w-32", opacity: 0.4, rotation: 90 },
  { left: "70%", top: "30%", speed: 1.5, size: "w-12", opacity: 0.6, rotation: 270 },
  { left: "80%", top: "50%", speed: 0.4, size: "w-28", opacity: 0.3, rotation: 15 },
  { left: "15%", top: "85%", speed: 1.8, size: "w-16", opacity: 0.8, rotation: 180 },
  { left: "90%", top: "15%", speed: 0.9, size: "w-20", opacity: 0.5, rotation: 330 },
  { left: "60%", top: "5%",  speed: 1.3, size: "w-14", opacity: 0.4, rotation: 60 },
  { left: "35%", top: "90%", speed: 0.7, size: "w-24", opacity: 0.6, rotation: 150 },
];

export default function EluxSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();

  useGSAP(() => {
    const robotEls = gsap.utils.toArray<HTMLElement>(".elux-robot", sectionRef.current);

    robotEls.forEach((el, i) => {
      gsap.set(el, { rotation: robots[i].rotation });
    });
    gsap.set(imgRef.current, { xPercent: -50, rotation: 180 });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1400",
          pin: true,
          scrub: 1.5,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      robotEls.forEach((el, i) => {
        const { speed } = robots[i];
        tl.to(el, {
          y: -(speed * 320),
          rotation: `+=${speed * 150}`,
          opacity: 0,
          duration: 0.5,
          ease: "none",
        }, 0);
      });

      tl.to(imgRef.current, { y: "90vh", ease: "none" }, 0);
    });

    return () => mm.revert();
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex p-6 md:p-12 lg:p-16 z-10"
    >
      <div
        onClick={() => navigate("/electrolux")}
        className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 lg:p-16 bg-elux-blue overflow-hidden rounded-4xl cursor-pointer
                   transition-shadow duration-700
                   hover:shadow-[0_0_0_1px_rgba(30,120,255,0.5),0_0_60px_20px_rgba(0,90,220,0.28),0_0_140px_50px_rgba(0,70,190,0.1)]"
      >
        {robots.map((robot, i) => (
          <img
            key={i}
            src={robotVacuumCleaner}
            alt=""
            className={`elux-robot absolute ${robot.size} pointer-events-none`}
            style={{
              left: robot.left,
              top: robot.top,
              opacity: robot.opacity,
              zIndex: 0,
            }}
          />
        ))}

        <img src={eluxLogo} alt="Electrolux logo" className="h-6 sm:h-8 w-auto self-start relative z-10" />

        <div className="relative z-10">
          <p className="text-blue-400 font-semibold text-lg mb-2">02</p>
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-semibold tracking-tight">
            When surveys said "yes"
            <br />
            but behavior said "no"
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl text-gray-400 mt-3">
            Electrolux — Smart Home Widgets
          </p>
        </div>

        <img
          ref={imgRef}
          src={robotVacuumCleaner}
          alt="robot vacuum"
          className="absolute left-2/3 w-[25vw] pointer-events-none hidden lg:block"
          style={{ top: "-50%", zIndex: 20 }}
        />
      </div>
    </section>
  );
}

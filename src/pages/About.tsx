import Hero from "../components/Hero";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import robotVacuumCleaner from "../assets/elux/robot-vacuum-cleaner.png";

gsap.registerPlugin(ScrollTrigger);

const robots = [
  {
    left: "10%",
    top: "20%",
    speed: "0.3",
    size: "w-16",
    opacity: 0.3,
    rotation: 45,
  },
  {
    left: "25%",
    top: "60%",
    speed: "0.6",
    size: "w-24",
    opacity: 0.5,
    rotation: 120,
  },
  {
    left: "40%",
    top: "10%",
    speed: "1.2",
    size: "w-20",
    opacity: 0.7,
    rotation: 200,
  },
  {
    left: "55%",
    top: "75%",
    speed: "0.8",
    size: "w-32",
    opacity: 0.4,
    rotation: 90,
  },
  {
    left: "70%",
    top: "30%",
    speed: "1.5",
    size: "w-12",
    opacity: 0.6,
    rotation: 270,
  },
  {
    left: "80%",
    top: "50%",
    speed: "0.4",
    size: "w-28",
    opacity: 0.3,
    rotation: 15,
  },
  {
    left: "15%",
    top: "85%",
    speed: "1.8",
    size: "w-16",
    opacity: 0.8,
    rotation: 180,
  },
  {
    left: "90%",
    top: "15%",
    speed: "0.9",
    size: "w-20",
    opacity: 0.5,
    rotation: 330,
  },
  {
    left: "60%",
    top: "5%",
    speed: "1.3",
    size: "w-14",
    opacity: 0.4,
    rotation: 60,
  },
  {
    left: "35%",
    top: "90%",
    speed: "0.7",
    size: "w-24",
    opacity: 0.6,
    rotation: 150,
  },
];

const About = () => {
  const boxRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: boxRef.current,
      start: "center center",
      end: "+=300",
      pin: true,
      pinSpacing: true,
    });

    gsap.to(imgRef.current, {
      y: "130vh",
      ease: "none",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "center center",
        end: "+=500",
        scrub: true,
      },
    });
  });

  return (
    <>
      <Hero />

      {/* Sezione pinnata */}
      <div className="relative w-full h-screen">
        <section
          ref={boxRef}
          className="absolute h-screen w-full flex flex-col justify-end p-16 bg-blue-950 overflow-hidden"
        >
          {/* Robot parallax — sotto al testo */}
          {robots.map((robot, i) => (
            <img
              key={i}
              src={robotVacuumCleaner}
              alt=""
              data-speed={robot.speed}
              className={`absolute ${robot.size} pointer-events-none`}
              style={{
                left: robot.left,
                top: robot.top,
                opacity: robot.opacity,
                transform: `rotate(${robot.rotation}deg)`,
                zIndex: 0,
              }}
            />
          ))}

          {/* Testo — sopra i robot */}
          <div className="relative z-10">
            <p className="text-blue-400 font-semibold text-lg mb-2">02</p>
            <h2 className="text-7xl font-semibold tracking-tight">
              When surveys said "yes"
              <br />
              but behavior said "no"
            </h2>
            <p className="text-2xl text-gray-400 mt-3">
              Electrolux — Smart Home Widgets
            </p>
          </div>

          {/* Robot animato — sopra tutto */}
          <img
            ref={imgRef}
            src={robotVacuumCleaner}
            alt="robot vacuum"
            className="absolute left-2/3 w-[25vw] pointer-events-none"
            style={{
              top: "-30%",
              transform: "translateX(-50%) rotate(180deg)",
              zIndex: 20,
            }}
          />
        </section>
      </div>

      {/* Sezione finale */}
      <section
        className="h-screen flex flex-col justify-end p-16"
        style={{ marginTop: 0 }}
      >
        <p className="text-emerald-400 font-semibold text-lg mb-2">03</p>
        <h2 className="text-7xl font-semibold tracking-tight">
          Work in progress
        </h2>
        <p className="text-2xl text-gray-400 mt-3">Something is cooking</p>
      </section>
    </>
  );
};

export default About;

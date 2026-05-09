import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Chip from "./Chip";

gsap.registerPlugin(SplitText);

type ShapeType = "ring" | "plus" | "dot" | "diamond";

interface Shape {
  type: ShapeType;
  left: string;
  top: string;
  size: number;
  color: string;
  strokeW?: number;
  rotation?: number;
  floatY: number;
  floatDur: number;
}

const shapes: Shape[] = [
  { type: "ring",    left: "5%",  top: "10%", size: 90,  color: "rgba(139,92,246,0.22)",  strokeW: 1,   floatY: 22,  floatDur: 6.5 },
  { type: "ring",    left: "87%", top: "16%", size: 130, color: "rgba(99,102,241,0.16)",  strokeW: 1,   floatY: -28, floatDur: 8   },
  { type: "ring",    left: "3%",  top: "68%", size: 70,  color: "rgba(168,85,247,0.22)",  strokeW: 1.5, floatY: 18,  floatDur: 7   },
  { type: "ring",    left: "89%", top: "62%", size: 100, color: "rgba(139,92,246,0.16)",  strokeW: 1,   floatY: -22, floatDur: 9   },
  { type: "plus",    left: "15%", top: "27%", size: 22,  color: "rgba(167,139,250,0.5)",  strokeW: 1.5, rotation: 0,   floatY: 14,  floatDur: 5.5 },
  { type: "plus",    left: "79%", top: "38%", size: 18,  color: "rgba(129,140,248,0.45)", strokeW: 1.5, rotation: 45,  floatY: -18, floatDur: 6.5 },
  { type: "plus",    left: "21%", top: "76%", size: 26,  color: "rgba(192,132,252,0.4)",  strokeW: 1.5, rotation: 15,  floatY: 16,  floatDur: 7   },
  { type: "plus",    left: "73%", top: "75%", size: 20,  color: "rgba(139,92,246,0.45)",  strokeW: 1.5, rotation: -20, floatY: -14, floatDur: 8   },
  { type: "dot",     left: "31%", top: "10%", size: 7,   color: "rgba(167,139,250,0.6)",  floatY: 12,  floatDur: 4   },
  { type: "dot",     left: "67%", top: "7%",  size: 5,   color: "rgba(129,140,248,0.55)", floatY: -10, floatDur: 5   },
  { type: "dot",     left: "11%", top: "50%", size: 9,   color: "rgba(192,132,252,0.5)",  floatY: 15,  floatDur: 6   },
  { type: "dot",     left: "87%", top: "48%", size: 6,   color: "rgba(139,92,246,0.6)",   floatY: -12, floatDur: 7   },
  { type: "dot",     left: "48%", top: "89%", size: 7,   color: "rgba(167,139,250,0.4)",  floatY: 10,  floatDur: 5.5 },
  { type: "diamond", left: "50%", top: "5%",  size: 16,  color: "rgba(167,139,250,0.32)", strokeW: 1.5, floatY: 18,  floatDur: 6   },
  { type: "diamond", left: "7%",  top: "46%", size: 22,  color: "rgba(129,140,248,0.24)", strokeW: 1.5, floatY: -16, floatDur: 7.5 },
  { type: "diamond", left: "90%", top: "40%", size: 14,  color: "rgba(192,132,252,0.32)", strokeW: 1.5, floatY: 14,  floatDur: 5.5 },
];

function ShapeSVG({ shape }: { shape: Shape }) {
  const { type, size, color } = shape;
  const half = size / 2;
  const strokeW = shape.strokeW ?? 1;

  const svgProps = {
    className: "hero-shape absolute pointer-events-none",
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: { left: shape.left, top: shape.top },
  };

  if (type === "ring") {
    return (
      <svg {...svgProps}>
        <circle cx={half} cy={half} r={half - 1} fill="none" stroke={color} strokeWidth={strokeW} />
        {size > 70 && (
          <circle cx={half} cy={half} r={half * 0.48} fill="none" stroke={color} strokeWidth={strokeW * 0.6} opacity={0.5} />
        )}
      </svg>
    );
  }

  if (type === "plus") {
    return (
      <svg {...svgProps}>
        <line x1={half} y1={0} x2={half} y2={size} stroke={color} strokeWidth={strokeW} />
        <line x1={0} y1={half} x2={size} y2={half} stroke={color} strokeWidth={strokeW} />
      </svg>
    );
  }

  if (type === "dot") {
    return (
      <svg {...svgProps}>
        <circle cx={half} cy={half} r={half} fill={color} />
      </svg>
    );
  }

  if (type === "diamond") {
    return (
      <svg {...svgProps}>
        <polygon
          points={`${half},2 ${size - 2},${half} ${half},${size - 2} 2,${half}`}
          fill="none"
          stroke={color}
          strokeWidth={strokeW}
        />
      </svg>
    );
  }

  return null;
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      SplitText.create(titleRef.current, {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            y: "110%",
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.12,
          });
        },
      });

      gsap.from(".hero-chip", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.55,
      });

      const shapeEls = gsap.utils.toArray<HTMLElement>(".hero-shape", container.current);

      shapeEls.forEach((el, i) => {
        if (shapes[i]?.rotation) {
          gsap.set(el, { rotation: shapes[i].rotation });
        }
      });

      gsap.from(shapeEls, {
        opacity: 0,
        scale: 0.3,
        duration: 0.9,
        stagger: { amount: 1.2, from: "random" },
        ease: "back.out(1.7)",
        delay: 0.15,
      });

      shapeEls.forEach((el, i) => {
        const { floatY, floatDur, type } = shapes[i];
        const phase = (i * 0.7) % floatDur;

        // Vertical float — more pronounced
        gsap.to(el, {
          y: floatY * 1.8,
          duration: floatDur,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: phase,
        });

        // Horizontal drift for organic feel
        gsap.to(el, {
          x: floatY * 0.55,
          duration: floatDur * 1.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: phase * 0.6,
        });

        // Rings: slow continuous rotation
        if (type === "ring") {
          gsap.to(el, {
            rotation: "+=360",
            duration: floatDur * 10,
            repeat: -1,
            ease: "none",
          });
        }

        // Plus: wobble rotation around initial angle
        if (type === "plus") {
          gsap.to(el, {
            rotation: `+=${18}`,
            duration: floatDur * 1.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: phase,
          });
        }

        // Diamond: gentle tilt
        if (type === "diamond") {
          gsap.fromTo(
            el,
            { rotation: -10 },
            {
              rotation: 10,
              duration: floatDur * 1.5,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: phase,
            },
          );
        }
      });

      gsap.set(".hero-glow", { opacity: 0.5 });
      gsap.to(".hero-glow", {
        opacity: 1,
        scale: 1.3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative overflow-hidden h-screen justify-center content-center text-center p-6 sm:p-8 lg:p-16"
    >
      <div
        className="hero-glow absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 70%)",
        }}
      />

      {shapes.map((shape, i) => (
        <ShapeSVG key={i} shape={shape} />
      ))}

      <h1
        ref={titleRef}
        className="relative z-10 px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-7xl xl:text-10xl"
      >
        Hi, I'm Federico Landorno
        <br />A UX Designer with experience in
      </h1>
      <div className="relative z-10 flex flex-col sm:flex-row w-full justify-center items-center text-base sm:text-xl font-semibold pt-4 gap-3 sm:gap-4">
        <Chip
          className="hero-chip"
          gradient="from-blue-500 to-violet-500"
          text={"Insurtech"}
        />
        <Chip
          className="hero-chip"
          gradient="from-violet-500 to-purple-500"
          text={"E-procurement"}
        />
        <Chip
          className="hero-chip"
          gradient="from-purple-500 to-fuchsia-500"
          text={"Smart Appliances"}
        />
      </div>
    </section>
  );
}

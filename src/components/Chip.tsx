import gsap from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

type ChipProps = {
  text: string;
  className?: string;
  gradient: string;
};

function Chip({ text, className, gradient }: ChipProps) {
  return (
    <div className={`px-4 py-2 rounded-full text-white bg-linear-to-r ${gradient} ${className ?? ""}`}>
      {text}
    </div>
  );
}

export default Chip;
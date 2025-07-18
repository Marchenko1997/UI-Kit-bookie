// ArrowPrev.tsx
import { ArrowBtn } from "../../../../public/assets/svg/Icons";

interface ArrowPrevProps {
  onClick?: () => void;
  color?: "white" | "black";
}

export const ArrowPrev: React.FC<ArrowPrevProps> = ({ onClick, color = "white" }) => (
  <button
    onClick={onClick}
    className={`
      absolute left-[242px] top-[250px] z-10 -translate-y-1/2 
      w-[22px] h-[22px] 
      rounded-full border 
      opacity-50 !bg-transparent 
      flex items-center justify-center
      ${color === "black" ? "border-black/90" : "border-white/90"}
    `}
    style={{ borderRadius: "50%" }}
  >
    <ArrowBtn className={color === "black" ? "text-black" : "text-white"} />
  </button>
);

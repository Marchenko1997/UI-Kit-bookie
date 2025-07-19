// ArrowNext.tsx
import { ArrowBtn } from "../../../../public/assets/svg/Icons";

interface ArrowNextProps {
  onClick?: () => void;
  color?: "white" | "black";
}

export const ArrowNext: React.FC<ArrowNextProps> = ({ onClick, color = "white" }) => (
  <button
    onClick={onClick}
    className={`
      absolute right-[1140px] top-[310px] z-10 -translate-y-1/2 
      w-[22px] h-[22px] 
      rounded-full border 
      opacity-50 !bg-transparent 
      flex items-center justify-center
      ${color === "black" ? "border-black/90" : "border-white/90"}
    `}
    style={{ borderRadius: "50%" }}
  >
    <ArrowBtn
      className={`rotate-180 ${
        color === "black" ? "text-black" : "text-white"
      }`}
    />
  </button>
);

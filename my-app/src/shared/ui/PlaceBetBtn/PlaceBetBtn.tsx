import React from "react";

interface PlaceBetBtnProps {
  label: string;
}

export const PlaceBetBtn: React.FC<PlaceBetBtnProps> = ({ label }) => {
  return (
    <button
      className="
   
    w-[338px]
    h-[44px]
    rounded-[6px]
    p-[14px]
flex
items-center
justify-center
text-neutral-900
text-center
leading-4
"
    >
      {label}
    </button>
  );
};

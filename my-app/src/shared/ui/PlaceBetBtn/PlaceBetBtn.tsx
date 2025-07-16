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
    p-[14px]
    rounded-[6px]
    bg-[#01C6B2]
    hover:bg-[#00A99C]
    flex
    items-center
    justify-center
    text-[#0F1112]
    text-[14px]
    font-bold
    leading-[17px]
    text-center
    font-['Proxima_Nova',sans-serif]
    transition
    duration-300
    ease-in-out
    cursor-pointer
  "
    >
      {label}
    </button>
  );
};

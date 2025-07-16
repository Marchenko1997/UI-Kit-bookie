import React from "react";

interface PrimaryButtonProps {
  label: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label }) => {
  return (
    <button
      className="
    w-[322px]
    h-[44px]
    md:w-[384px]
    p-[15px]
    flex
    items-center
    justify-center
    rounded-[6px]
    bg-[#01C6B2]
    hover:bg-[#00A99C]
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

export default PrimaryButton;

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
    md:top-[95px]
    md:w-[384px]
    p-[15px]
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

export default PrimaryButton;

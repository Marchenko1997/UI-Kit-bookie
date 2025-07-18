import React from 'react';

interface VerificationStatusProps {
  className?: string;
}

export const VerificationStatus: React.FC<VerificationStatusProps> = ({
  className,
}) => {
    return (
      <div className="flex flex-col bg-[#1C1F22] p-[18px] gap-[18px] rounded-[8px] w-[420px]">
        <p
          className="text-white font-inter text-[18px] font-semibold leading-[22px] tracking-[0%] text-left "
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Verification Status
        </p>
        <span
          className="text-[#29A319] font-proxima text-[16px] font-bold leading-[19px] tracking-[0%] text-left"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Verified
        </span>
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
          Verification center
        </button>
      </div>
    );
};
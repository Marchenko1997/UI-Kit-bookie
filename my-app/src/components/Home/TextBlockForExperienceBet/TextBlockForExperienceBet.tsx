import React from 'react';

interface TextBlockForExperienceBetProps {
  className?: string;
}

export const TextBlockForExperienceBet: React.FC<TextBlockForExperienceBetProps> = ({
  className,
}) => {
    return (
      <div className=" absolute w-[415px] h-[131px] bottom-[-140px] left-[162px] flex flex-col gap-[18px]">
        <h2 className="text-[#0F1112] font-proxima font-extrabold text-[32px] leading-[32px] tracking-[0%] uppercase text-left">
          Experience Betting <br /> Without Limits
        </h2>
        <p className="text-black/80 font-inter text-[16px] font-medium leading-[23px] tracking-[0] text-left">
          Join the VIP Club for bigger bonuses and higher limits
        </p>
      </div>
    );
};
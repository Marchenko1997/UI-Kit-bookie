import React from "react";

interface BtnOnMainImgProps {
  className?: string;
  bgColor: string;
  textColor: string;
  label: string;
}

export const BtnOnMainImg: React.FC<BtnOnMainImgProps> = ({
  className,
  bgColor,
  textColor,
  label,
}) => {
  return (
    <button
      className={`
    absolute
    left-[180px] top-[-100px]                 
    sm:left-[97px] sm:top-[-60px] sm:px-[12px] sm:py-[10px]     
    lg:left-[180px] lg:top-[-100px] lg:px-[24px] lg:py-[14px]    
    px-[24px] py-[14px]                        
    rounded-full font-medium text-[14px]
    whitespace-nowrap text-center
    ${className || ""}
  `}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {label}
    </button>
  );
};

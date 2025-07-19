import React from 'react';

interface MobileBtnImgProps {
  className?: string;
  bgColor: string;
  textColor: string;
  label: string;
  name: string;
}

export const MobileBtnImg: React.FC<MobileBtnImgProps> = ({
  className,
  bgColor,
  textColor,
  label,
  name,
}) => {
 const topClass =
   name === "bettingWithoutLimits"
     ? "top-[70px]"
     : name === "latestPromotions"
     ? "top-[75px]"
     : name === "betAnytime"
     ? "top-[70px]"
     : "";


  return (
    <div
      className={`absolute left-[32px] px-[8px] py-[4px] font-medium text-[10px] whitespace-nowrap text-center rounded-[2px] ${topClass} ${className || ""}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {label}
    </div>
  );
};
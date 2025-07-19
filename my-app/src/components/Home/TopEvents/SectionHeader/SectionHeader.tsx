import React from "react";
import { ShowAll } from "../../../../../public/assets/svg/Icons"; 

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-between px-[18px] py-[15px] lg:px-[28px] lg:py-[18px] ${
        className || ""
      }`}
    >
      <h2
        className="
          text-white font-bold
          text-[18px] leading-[24px] text-left
          md:text-[24px] md:leading-[29px]
        "
        style={{
          fontFamily: "Proxima Nova, sans-serif",
        }}
      >
        {title}
      </h2>
      <ShowAll />
    </div>
  );
};

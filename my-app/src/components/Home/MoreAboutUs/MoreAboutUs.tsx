import React, { useState } from "react";
import { aboutBrandSections } from "../../../constants/aboutBrandSections";

export const MoreAboutUs: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative flex flex-col lg:flex-row gap-[25px] lg:gap-[48px] w-[358px] lg:w-[1280px] bg-[#1C1F22] rounded-[14px] p-[14px] lg:p-[24px] transition-all duration-500 ${
        expanded
          ? "max-h-full"
          : "max-h-[360px] lg:max-h-[250px] overflow-hidden"
      }`}
    >
      {aboutBrandSections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col gap-[20px] lg:gap-[25px] lg:w-1/2"
        >
          <h2 className="text-white font-[Proxima Nova] text-[24px] font-bold leading-[29px] text-left">
            {section.title}
          </h2>
          {section.content.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-[#A3A3A3] font-[Proxima Nova] text-[18px] font-normal leading-[27px] text-left"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ))}

      {!expanded && (
        <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-[#1C1F22FF] to-[#1C1F2200] flex items-end justify-center rounded-b-[14px]">
          <button
            onClick={() => setExpanded(true)}
            className=" mb-[28px] lg:mb-[24px] w-[111px] h-[44px] bg-[#01C6B2] text-[#0F1112] p-[14px] text-[14px] font-[700] leading-[17px] text-left flex items-center justify-center gap-[8px] rounded"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

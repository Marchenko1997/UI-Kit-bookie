import { useState } from "react";
import { sportsList, sportsAmounts } from "../../../../constants/sportsList";


export const AllSports: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full flex flex-col items-left ">
      {/* верхняя линия */}
      <div className="w-full border-t border-[#3A3B3C] rounded-b-[14px] bg-[#1C1F22] h-[1px]" />

      {/* индикатор */}
      <div
        className="absolute top-0 h-[4px] w-[21px] rounded-b-[9px] bg-[#01C6B2] transition-all duration-300"
        style={{
          left: `${18 + activeIndex * 70 + 24.5}px`,
        }}
      />

      {/* иконки */}
      <div className="flex overflow-x-auto whitespace-nowrap hide-scrollbar gap-[0px] lg:gap-[4px] py-[15px]  lg:py-[25px] px-[18px]">
        {sportsList.map(({ icon: Icon }, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className="flex  items-left cursor-pointer  relative"
              onClick={() => setActiveIndex(index)}
            >
              <Icon
                className={`transition-colors duration-200 ${
                  isActive ? "text-white" : "text-[#A3A3A3]"
                }`}
              />
              <span
                className={` absolute left-[45px]
          mt-1 w-[22px] h-[18px] rounded-[24px]
          text-[12px] font-bold leading-[18px] text-center
          inline-flex items-center justify-center
          transition-all duration-200
          ${
            isActive ? "bg-[#01C6B2] text-white" : "bg-[#2F3132] text-[#A3A3A3]"
          }
        `}
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                {sportsAmounts[index]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
import React from 'react';
import topSportDesc from "../../../../../public/assets/homePage/topSports/topSportDesc.png"
import topSportMod from "../../../../../public/assets/homePage/topSports/topSportsMobile.png";


interface TopSportsCardsProps {
  className?: string;
}

export const TopSportsCards: React.FC<TopSportsCardsProps> = ({ className }) => {
    return (
      <div className="w-full flex flex-col ">
        <div className="w-full border-t border-[#3A3B3C] rounded-b-[14px] bg-[#1C1F22] h-[1px]" />
        <div className=" px-[18px] py-[15px] lg:px-[28px] lg:py-[18px]">
          <img
            src={topSportMod}
            alt="Top sports mobile"
            className="block lg:hidden h-auto w-full"
          />
          <img
            src={topSportDesc}
            alt="Top sports desktop"
            className="hidden lg:block w-full h-auto"
          />
        </div>
      </div>
    );
};
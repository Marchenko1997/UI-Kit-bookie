import React from "react";
import { promotionsHome } from "../../../../constants/promotionsHome";

interface PromotionCardsProps {
  className?: string;
}

export const PromotionCards: React.FC<PromotionCardsProps> = ({
  className,
}) => {
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full border-t border-[#3A3B3C] rounded-b-[14px] bg-[#1C1F22] h-[1px]" />
      <div className="px-[18px] py-[15px] lg:px-[28px] lg:py-[18px]">
        {/* Mobile slider */}
        <div className="block lg:hidden overflow-x-auto flex gap-[6px] flex-nowrap scroll-smooth snap-x snap-mandatory no-scrollbar">
          {promotionsHome.map((promo, index) => (
            <img
              key={index}
              src={promo.mobile}
              srcSet={`${promo.mobile} 1x, ${promo.mobile2x} 2x`}
              alt={promo.alt}
              className="w-full flex-shrink-0 snap-center h-auto"
            />
          ))}
        </div>

        {/* Desktop static view */}
        <div className="hidden lg:flex gap-[6px]">
          {promotionsHome.map((promo, index) => (
            <img
              key={index}
              src={promo.desktop}
              srcSet={`${promo.desktop} 1x, ${promo.desktop2x} 2x`}
              alt={promo.alt}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

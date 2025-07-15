import React from "react";
import { Images } from "../../../assets/latesPromotionsImg/index";
interface LatesPromotionCardProps {
  endsIn: string;
  betType: string;
}

export const LatesPromotionCard: React.FC<LatesPromotionCardProps> = ({
  endsIn,
  betType,
}) => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row gap-[8px] md:gap-0 p-[16px] md:pb-0
 md:pt-[30px] md:px-[40px] w-[174px] h-[272px] md:w-[625px] md:h-[200px] rounded-[10px] bg-[#1C1F22] md:justify-between"
    >
      <div className="flex flex-col gap-[8px] md:gap-[10px] pt-0 md:pt-[33px] pl-[4px] md:pl-0 w-[148px] md:w-auto">
        <p
          className="text-[#B3B3B3] font-medium text-[14px] leading-[17px] text-left"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {endsIn}
        </p>
        <p
          className="text-white text-[14px] md:text-[20px] font-bold leading-[19px] md:leading-[24px] text-left"
          style={{ fontFamily: "Proxima Nova, sans-serif" }}
        >
          {betType}
        </p>
      </div>
      <img
        src={Images.Car1x}
        srcSet={`${Images.Car2x} 2x`}
        alt="Car"
        className="w-[141.18px] h-[132.53px] md:w-auto md:h-auto rounded-[12.97px] mx-auto object-cover object-[80%]"
      />
    </div>
  );
};

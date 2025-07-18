import React from 'react';
import { UserIconGreen, StarIcon } from "../../../assets/svg/Icons";

interface FeedbackCardProps {
  userName: string;
    text: string;
    activeStars: number;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  userName,
  text,
  activeStars,
}) => {
  return (
    <div className="flex  p-[18px]  rounded-[8px] bg-[#1C1F22] md:p-[28px] w-[358px] h-[207px] md:w-[633px] md:h-[170px] ">
      <div className="flex flex-col gap-[18px]">
        <div className="flex justify-between">
          <div className="flex gap-[4px]">
            <UserIconGreen  />
            <p
              className="text-[14px] md:text-[20px] font-bold md:leading-[24px] text-left md:text-center text-white"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              {userName}
            </p>
          </div>
          <div className="flex gap-[12.72px]">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                fill={i < activeStars ? "#00E0FF" : "#3A3B3C"}
                stroke={i < activeStars ? "#00E0FF" : "#3A3B3C"}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
        <p
          className="text-[14px] font-medium leading-[19px] text-left 
             w-[322px] h-[133px] 
             md:w-[579px] md:h-[76px] text-white"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
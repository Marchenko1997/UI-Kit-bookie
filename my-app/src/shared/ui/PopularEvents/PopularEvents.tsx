import React from "react";
import {
  ListIcon,
  FootBallIcon,
  GameIcon,
  HockeyIcon,
  TennisIcon,
  BasketIcon,
  FootbalWhite,
  ArrowLeft,
    ArrowRight,
  RateIcon
} from "../../../../public/assets/svg/Icons.tsx";
import { Images } from "../../../../public/assets/popularEvents/index.ts";
import { matchOdds } from "../../../constants/odds.ts";

interface PopularEventsProps {
    className?: string
}

export const PopularEvents: React.FC<PopularEventsProps> = ({ className=""}) => {
    return (
      <div className="flex flex-col w-[370px]  p-[16px] pb-[10px] " >
        <div className="flex gap-[12px] h-[44px]  p-[16px] border-b border-[#25282C] rounded-t-[5px] bg-[#202327] items-center">
          <ListIcon />
          <p className="text-white font-bold text-[14px] leading-[14px] tracking-normal text-left font-['Proxima_Nova' sans-serif]">
            Popular events
          </p>
        </div>
        <div className="flex gap-[25px] bg-[#1C1F22] h-[34px] items-center py-[16px] px-[30px]  ">
          <FootBallIcon />
          <GameIcon />
          <HockeyIcon />
          <TennisIcon />
          <BasketIcon />
        </div>
        <div className="flex px-[16px] py-[7px] bg-[#455D37] justify-between">
          <div className="flex gap-[10px] items-center ">
            <FootbalWhite />
            <p
              className="text-[#F0F0F0] font-medium text-[10px] leading-[12px] tracking-normal text-left "
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Russia. Transition matches. First matches
            </p>
          </div>
          <div className="flex gap-[6px]">
            <button className="w-[18px] h-[18px] rounded-[3px] !bg-[rgba(217,217,217,0.1)] !hover:bg-[rgba(217,217,217,0.15)] flex items-center justify-center">
              <ArrowLeft />
            </button>
            <button className="w-[18px] h-[18px] rounded-[3px] !bg-[rgba(217,217,217,0.1)] !hover:bg-[rgba(217,217,217,0.15)] flex items-center justify-center">
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col p-[16px] h-[165px] bg-[#1C1F22]">
          <div className="flex justify-between items-baseline">
            <div className="flex gap-[6px] items-baseline">
              <span className="w-[72px] h-[19px] px-[8px] py-[3px] rounded-[4px] bg-[#255FDD] text-white items-center justify-center">
                <p
                  className="text-white font-medium text-[11px] leading-[13px] tracking-normal text-left "
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Match day
                </p>
              </span>
              <p
                className="text-[#A3A3A3] font-medium text-[11px] leading-[13px] tracking-normal text-left "
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Tomorrow в 00:00
              </p>
            </div>
            <RateIcon />
          </div>
          <div className="fex flex-col gap-[10px] mt-[14px] ">
            <div className="flex gap-[10px] items-center">
              <img
                src={Images.RealBetis}
                alt="Real Betis"
                className="w-[18px] h-[18px] object-contain"
              />
              <p className="text-white font-bold text-[14px] leading-[14px] tracking-normal text-left font-['Proxima_Nova',sans-serif]">
                Real Betis
              </p>
            </div>

            <div className="flex gap-[10px] items-center text-center mt-[10px]">
              <img
                src={Images.Chelsea}
                alt="Chelsea"
                className="w-[18px] h-[18px] object-contain"
              />
              <p className="text-white font-bold text-[14px] leading-[14px] tracking-normal text-left font-['Proxima_Nova',sans-serif]">
                Chelsea
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] items-center mt-[16px]">
            {matchOdds.map(({ label, value }) => (
              <div
                key={label}
                className="p-[16px] w-[106px] h-[36px] rounded-[5px] bg-[#292D32] flex items-center justify-between "
              >
                <p className="text-[#B3B3B3] font-medium text-[12px] leading-[15px] tracking-normal text-left font-['Inter' ,sans-serif]">
                  {label}
                </p>
                <p className="text-[#E6E6E6] font-bold text-[14px] leading-[14px] tracking-normal text-right font-['Proxima_Nova' ,sans-serif]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex bg-[#202327] h-[31px] w-[338px] gap-[8px] items-center p-[16px] ">
          <p className="text-[#A3A3A3] font-medium text-[12px] leading-[15px] tracking-normal text-right font-['Inter' ,sans-serif] ml-auto">
            +35 more quotes
          </p>
          <ArrowRight />
        </div>
      </div>
    );
};

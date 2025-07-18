
import { useState } from "react";
import { ListIcon, ArrowRight } from "../../../assets/svg/Icons";
import { betSlip } from "../../../constants/betSlip";
import PatchImg from "../../../assets/betSlips/patch.png";

interface BetSlipProps {
  className?: string;
}

export const BetSlip: React.FC<BetSlipProps> = ({ className }) => {
     const [selectedId, setSelectedId] = useState("single");
    return (
      <div className="flex flex-col px-[16px] w-[370px] py-[23px]  bg-[#202327]">
        <div className="flex gap-[8px] items-center">
          <ListIcon />
          <p className="text-white font-['Proxima_Nova' sans-serif] text-[14px] font-bold leading-[14px] text-left">
            Bet slip
          </p>
          <ArrowRight className="rotate-90" />
        </div>
        <div className="flex gap-[3px] px-[0px] py-[23px]">
          {betSlip.map(({ id, label, icon: Icon }) => (
            <div
              key={id}
              onClick={() => setSelectedId(id)}
              className={`w-[93px] h-[40px] flex items-center gap-[6px] px-[10px] cursor-pointer transition-colors duration-200`}
              style={{
                borderRadius: "33554400px",
                backgroundColor: selectedId === id ? "#2A2D30" : "#202327",
              }}
            >
              <Icon />
              <p className="text-white font-['Proxima_Nova' sans-serif] text-[14px] font-bold leading-[14px] text-left">
                {label}
              </p>
            </div>
          ))}
        </div>
        <div className="flex pt-[20px] justify-between">
          <div className="flex gap-[12px] items-center">
            <p className="text-[#A3A3A3] font-['Proxima_Nova' sans-serif] text-[14px] font-bold leading-[14px] text-center">
              No Odds Changes Accepted
            </p>
            <ArrowRight className="rotate-90" />
          </div>
          <p className="text-white font-['Proxima_Nova' sans-serif] text-[14px] font-bold leading-[14px] text-center">
            Clear All
          </p>
        </div>
        <div className="flex justify-center pt-[80px] w-full">
          <img
            src={PatchImg}
            alt="Patch"
            className="w-[139px] h-[99px] object-contain"
          />
        </div>
        <div className="flex flex-col items-center mt-[14px] gap-[4px] pb-[68px]">
          <p className="text-[#A3A3A3] font-['Proxima_Nova' sans-serif] text-[14px] font-normal leading-[21px] ">
            Bet Slip is Empty
          </p>
          <p className="text-white font-['Proxima_Nova' sans-serif] text-[14px] font-bold leading-[14px] text-center">
            Start betting now!
          </p>
        </div>
        <div className="p-[16px] flex justify-center">
          <button className="w-[338px] h-[44px] bg-[#01C6B2]  rounded-[6px] p-[14px] text-[14px] leading-[17px] font-bold text-center text-[#0F1112] font-['Proxima_Nova']">
            Place a bet
          </button>
        </div>
      </div>
    );
};
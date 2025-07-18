import React from "react";

interface WinnerCardProps {
    label: string;
    amount: number
    players: string
}

export const WinnerCard: React.FC<WinnerCardProps> = ({ label, amount, players }) => {
    return (
      <div className="flex flex-col md:flex-row justify-between w-full p-[18px] bg-[#1C1F22]">
        <div className="flex-1 flex flex-col ">
          <span className="text-[#A3A3A3]  font-['Proxima_Nova',sans-serif] text-[12px] font-normal leading-[15px] capitalize text-left">
            Starts in 4 minutes
          </span>
          <div className="flex flex-col gap-[6px] mt-[17px]">
            <p className="text-white  font-['Proxima_Nova',sans-serif] text-[14px] font-bold leading-[17px] text-left">
              {players}
            </p>
            <p className="text-white  font-['Proxima_Nova',sans-serif] text-[14px] font-bold leading-[17px] text-left">
              {players}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[9px]">
          <h3
            className="
    text-[#A3A3A3]
    font-['Inter',sans-serif]
    text-[12px]
    font-medium
    leading-[15px]
    tracking-[0%]
    text-center
  "
          >
            Winner
          </h3>
          <div className="flex gap-[8px]">
            <div
              className="
  w-[282px]
  h-[56px]
  rounded-[4px]
  bg-[#292D32]
  px-[10px]
  py-[9px]
  flex
  flex-col
  gap-[4px]
"
            >
              <p
                className="
  text-white
  font-['Proxima_Nova',sans-serif]
  text-[14px]
  font-bold
  leading-[17px]
  tracking-[0%]
  text-left
"
              >
                {" "}
                {label}
              </p>
              <span
                className="
  text-[#01C6B2]
  font-['Proxima_Nova',sans-serif]
  text-[14px]
  font-bold
  leading-[17px]
  tracking-[0%]
  text-left
"
              >
                {amount}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

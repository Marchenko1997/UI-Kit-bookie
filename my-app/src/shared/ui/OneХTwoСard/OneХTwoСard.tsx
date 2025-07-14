import React from 'react';
import {oneXTwoOptions} from '../../../constants/oneXTwoCard'

interface OneХTwoСardProps {
  label: string;
  amount: number;
}

export const OneХTwoСard: React.FC<OneХTwoСardProps> = ({ label, amount }) => {
  return (
    <div className="flex justify-between w-full p-[18px]">
      <div className="flex-1 flex flex-col gap-[6px]">
        <div className="flex gap-[6px] mb-[16px] items-baseline">
          <span className="w-[35px] h-[18px] rounded-[3px] bg-[#E91127]  font-['Proxima_Nova',sans-serif] text-[12px] font-bold leading-[18px] text-white text-center flex items-center justify-center">
            Live
          </span>
          <span className="text-[#A3A3A3]  font-['Proxima_Nova',sans-serif] text-[12px] font-normal leading-[15px] capitalize text-left">
            2nd Half
          </span>
        </div>
        <p className="text-white  font-['Proxima_Nova',sans-serif] text-[14px] font-bold leading-[17px] text-left">
          Excursionistas
        </p>
        <p className="text-white  font-['Proxima_Nova',sans-serif] text-[14px] font-bold leading-[17px] text-left">
          Argentinos Juniors
        </p>
      </div>
      <div className="flex flex-col gap-[9px] ">
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
          1x2
        </h3>
        <div className="flex gap-[8px]">
          {oneXTwoOptions.map(({ label, amount }) => (
            <div
              key={label}
              className="w-[103px] md:w-[185px] h-[56px] bg-[#292D32] rounded-[4px] flex flex-col gap-[4px] px-[10px] py-[9px]"
            >
              <p className="text-white font-['Proxima_Nova',sans-serif] text-[14px] font-bold leading-[17px] text-left">
                {label}
              </p>
              <span className="text-[#01C6B2] font-['Proxima_Nova',sans-serif] text-[14px] font-bold leading-[17px] text-left">
                {amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
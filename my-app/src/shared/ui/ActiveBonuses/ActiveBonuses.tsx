import React from 'react';

interface ActiveBonusesProps {
  amount: number;
}

export const ActiveBonuses: React.FC<ActiveBonusesProps> = ({ amount }) => {
  return (
    <div className=" flex flex-col gap-[24px] w-[370px] p-[16px] bg-[#1C1F22]">
      <div className="flex flex-col gap-[14px]">
        <h3 className="text-white font-['Proxima_Nova',sans-serif] text-[14px] font-bold leading-[14px] text-left">
          Active Bonuses
        </h3>
        <div className="w-[338px] h-[115px] rounded-[8px] bg-[#292D32]"></div>
      </div>
      <div className="flex flex-col gap-[14px]">
        <div className="flex  justify-between">
          <p className="text-white text-[14px] font-bold leading-[14px] text-left font-['Proxima_Nova',sans-serif]">
            Weekly free bets
          </p>
          <p className="text-white text-[14px] font-bold leading-[14px] text-left font-['Proxima_Nova',sans-serif]">
            ${amount}
          </p>
        </div>
        <button
          className="
  
    h-[44px] 
    bg-[#01C6B2] 
    rounded-[6px] 
    p-[14px] 
    text-[#0F1112]
    font-['Proxima_Nova'] 
    text-[14px] 
    font-bold 
    leading-[17px] 
    text-center
  "
        >
          Place a bet
        </button>
      </div>
    </div>
  );
};
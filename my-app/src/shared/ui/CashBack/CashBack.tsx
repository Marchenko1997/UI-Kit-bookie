import React from 'react';

interface CashBackProps {
    amount: number;
    percent: number;
}

export const CashBack: React.FC<CashBackProps> = ({ amount, percent }) => {
  return (
    <div className="flex flex-col w-[338px] gap-[14px] bg-[#1C1F22] px-[16px] py-[24px]">
      <h3
        className="text-white font-bold text-[14px] leading-[14px] text-left"
        style={{ fontFamily: "Proxima Nova , sans-serif" }}
      >
        Cashback
      </h3>
      <div className="flex justify-between">
        <div className="flex flex-col gap-[7px] pl-[2px]">
          <p
            className="text-[#A3A3A3] font-medium text-[12px] leading-[12px] text-left "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Bets placed in 24 hours
          </p>
          <p
            className="text-white text-[14px] font-bold leading-[14px] text-left"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            ${amount}
          </p>
        </div>
        <div className="flex flex-col gap-[7px]">
          <p
            className="text-[#A3A3A3] font-medium text-[12px] leading-[12px] text-left"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Your cashback percent
          </p>
          <p
            className="text-white text-[14px] font-bold leading-[14px] text-right"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            %{percent}
          </p>
        </div>
      </div>
      <div className="flex gap-[10px]">
        <div className=" flex flex-col gap-[4px] w-[154px] h-[49px] rounded-[4px] bg-[#0F1112] px-[15px] py-[8px]">
          <p
            className="text-[13px] leading-[16px] font-medium text-left truncate"
            style={{
              color: "rgba(163, 163, 163, 0.3)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Available to receive
          </p>
          <p
            className="text-white text-[13px] leading-[16px] font-bold text-left"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            ${amount}
          </p>
        </div>
        <button
          className="w-[174px] h-[49px] rounded-[6px] bg-[#01C6B2] text-[#0F1112] text-[14px] font-bold leading-[17px] text-center"
          style={{ fontFamily: "Proxima Nova, sans-serif" }}
        >
          Available throught
        </button>
      </div>
    </div>
  );
};
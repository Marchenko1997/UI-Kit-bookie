import React from "react";
import {
  PersonHeaderIcon,
  ZeroDollar,
  AddRingIcon,
  BellHeaderIcon,
} from "../../../assets/svg/Icons";

export const DepositHeader: React.FC = () => {
  return (
    <div className="flex gap-[14px] items-center">
      <div className="flex items-center gap-[8px]">
        <PersonHeaderIcon />
        <ZeroDollar />
      </div>
      <button
        className="w-[111px] h-[44px] bg-[#01C6B2] text-[#0F1112] p-[14px] text-[14px] font-[700] leading-[17px] text-left flex items-center justify-center gap-[8px] rounded"
        style={{ fontFamily: "Proxima Nova, sans-serif" }}
      >
        <AddRingIcon />
        Deposit
      </button>
      <BellHeaderIcon />
    </div>
  );
};

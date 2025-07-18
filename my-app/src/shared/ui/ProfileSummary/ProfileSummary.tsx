import React from "react";
import { UserIcon, LogoutIcon } from "../../../../public/assets/svg/Icons";
interface ProfileSummaryProps {
    email: string;
    amount: number;
}

export const ProfileSummary: React.FC<ProfileSummaryProps> = ({ email, amount }) => {
  return (
    <div className="flex flex-col p-[18px] w-[358px] gap-[28px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <span
            className="w-[40px] h-[40px] bg-[#01C6B2] text-[#0F1112] text-[18px] font-[700] leading-[22px] text-center rounded-full flex items-center justify-center"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <UserIcon />
          </span>
          <p
            className="text-white font-semibold text-[18px] leading-[22px] text-left"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {email}
          </p>
        </div>
        <LogoutIcon />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[7px]">
          <p
            className="text-[#A3A3A3] font-medium text-[12px] leading-[12px] text-left"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Your Balance
          </p>
          <p
            className="text-white text-[14px] font-bold leading-[14px] text-left"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            ${amount}
          </p>
        </div>
        <div className="flex flex-col gap-[3px]">
          <p className="text-white font-inter text-[16px] font-semibold leading-[19px] text-center">
            KYC verification
          </p>
          <p className="text-[#29A319] font-inter text-[14px] font-medium leading-[17px] text-right">
            Verified
          </p>
        </div>
      </div>
    </div>
  );
};

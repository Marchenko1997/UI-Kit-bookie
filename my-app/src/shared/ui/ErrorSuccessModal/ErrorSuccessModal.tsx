import React from "react";
import ErrorImg from "../../../assets/ErrorSuccessModal/withdrawError.png";
import SuccessImg from "../../../assets/ErrorSuccessModal/withdrawSucces.png";
import { CrossIcon, DepositIcon, ChatIcon } from "../../../assets/svg/Icons";

interface ErrorSuccessModalProps {
  className?: string;
}

export const ErrorSuccessModal: React.FC<ErrorSuccessModalProps> = ({
  className,
}) => {
  return (
    <div className="relative flex flex-col w-[435px] h-[401px] p-[18px]  bg-[#1C1F22] rounded-[15px]">
      <div className="relative w-full h-[203px]">
        <img
          src={ErrorImg}
          alt="Error image"
          className="w-full h-full object-contain"
        />
        <div className="absolute top-[12px] right-[10px] cursor-pointer ">
          <CrossIcon />
        </div>
      </div>
      <div className="flex flex-col gap-[20px] mt-[20px] ">
        <p className="text-center font-['Proxima_Nova' sans-serif] text-[16px] font-bold leading-[19px] ">
          Your withdrawal of <span className="text-[#29A319]">$3000.00</span> is
          pending.
        </p>
        <p className="text-center font-['Proxima_Nova' sans-serif] text-[14px] font-bold leading-[17px] text-[#A3A3A3]">
          To withdraw funds to your wallet you need to make a{" "}
          <span className="text-white">$300.00</span>
          deposit from it to confirm ownership.
        </p>
      </div>
      <div className="flex justify-center gap-[15px] mt-[30px]">
        <button className="w-[185px] h-[49px] rounded-[6px] bg-[#01C6B2] text-[#0F1112] text-[14px] font-bold leading-[14px] font-['Proxima_Nova',sans-serif] flex items-center justify-center gap-[8px]">
          <DepositIcon />
          Deposit
        </button>
        <button className="w-[185px] h-[49px] rounded-[6px] !bg-[#0F1112] !text-[#FFFFFF] text-[14px] font-bold leading-[14px] font-['Proxima_Nova',sans-serif] flex items-center justify-center gap-[8px]">
          <ChatIcon />
          Chat with us
        </button>
      </div>
    </div>
  );
};

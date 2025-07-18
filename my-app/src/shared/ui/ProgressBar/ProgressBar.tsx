import React from "react";
import { verificationSteps } from "../../../constants/verificationSteps";

interface ProgressBarProps {
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ className  }) => {
  return (
    <div
      className={`flex flex-col p-[18px] w-[358px] h-[271px] rounded-[8px] bg-[#1C1F22] md:w-[393px] ${className}`}
    >
      {verificationSteps.map((step, index) => (
        <div key={step.id} className="flex flex-col items-start">
          <div
            className={`flex flex-col items-start ${
              step.active ? "" : "opacity-50"
            }`}
          >
            <div className="flex gap-[10px] items-center mb-0">
              <span
                className="w-[40px] h-[40px] bg-[#01C6B2] text-[#0F1112] text-[18px] font-[700] leading-[22px] text-center rounded-full flex items-center justify-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {step.icon ? step.icon() : step.id}
              </span>
              <p
                className={`text-[18px] font-semibold leading-[22px] text-left ${
                  step.active ? "text-white" : "text-[#A3A3A3]"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {step.label}
              </p>
            </div>

      
            {index < verificationSteps.length - 1 && (
              <div
                className={`ml-[20px] w-[2px] h-[20px] ${
                  index === 1 ? "bg-dashed-line" : "bg-[#01C6B2]"
                }`}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

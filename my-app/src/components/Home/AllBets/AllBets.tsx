import React, { useState } from "react";
import { PeopleGroup, ArrowRight } from "../../../../public/assets/svg/Icons";
import { BetsTable } from "./BetsTable/BetsTable";

interface AllBetsProps {
  amount: number;
}

const tabs = [
  { key: "all", label: "All Bets" },
  { key: "high", label: "High Rollers" },
] as const;

export const AllBets: React.FC<AllBetsProps> = ({ amount }) => {
  const [activeTab, setActiveTab] = useState<"all" | "high">("all");

    return (
      <>
        <div className="flex  w-[358px] lg:w-[1280px] justify-between">
          <div className="flex w-full max-w-[203px] h-[54px] px-[6px] rounded-[48px] bg-[#1C1F22] items-center justify-center">
            {tabs.map(({ key, label }) => (
              <div
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 h-[44px] flex items-center justify-center rounded-[48px] cursor-pointer ${
                  activeTab === key ? "bg-[#0F1112]" : ""
                }`}
              >
                <p
                  className={`whitespace-nowrap font-proxima font-bold text-[14px] leading-[14px] ${
                    activeTab === key ? "text-white" : "text-[#A3A3A3]"
                  }`}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex gap-[15px]">
            <div className="flex w-[189px] h-[39px] items-center gap-[6px] p-[15px] bg-[#1C1F22] rounded-[4px]">
              <PeopleGroup />
              <p className="text-white font-proxima font-bold text-[14px] leading-[17px] text-left">
                {amount}
              </p>

              <p className="text-white font-proxima font-bold text-[14px] leading-[17px] text-left">
                Bettors Online
              </p>
            </div>
            <div className="flex gap-[9px] w-[56px] h-[39px] justify-center items-center rounded-[4px] bg-[#1C1F22]">
              <p className="text-white font-proxima font-bold text-[14px] leading-[17px] ">
                10
              </p>
              <ArrowRight className="rotate-90" />
            </div>
          </div>
        </div>
        <BetsTable className="mt-[14px]" />
      </>
    );
};

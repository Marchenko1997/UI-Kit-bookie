import React, { useState } from "react";
import { profileTabs } from "../../../constants/profileTabs";

interface UserDashboardTabsProps {
  className?: string;
}

export const UserDashboardTabs: React.FC<UserDashboardTabsProps> = ({
  className,
}) => {
  const [activeTab, setActiveTab] = useState(profileTabs[0].label); 

  return (
    <div className="flex w-[841px] bg-[#202327] rounded-full p-[4px]">
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {profileTabs.map((tab) => {
          const isActive = activeTab === tab.label;

          return (
            <div
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`w-fit h-[44px] px-[15px] rounded-full flex items-center gap-[7px] cursor-pointer transition
                ${
                  isActive
                    ? "bg-[#2A2D33] opacity-100"
                    : "bg-[#202327] opacity-50"
                }`}
            >
              {tab.icon}
              <p className="text-white font-proxima text-[12px] font-bold leading-[14px] text-left">
                {tab.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

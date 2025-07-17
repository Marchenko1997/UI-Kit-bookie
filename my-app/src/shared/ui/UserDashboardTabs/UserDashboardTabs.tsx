import React from 'react';

interface UserDashboardTabsProps {
  className?: string;
}

export const UserDashboardTabs: React.FC<UserDashboardTabsProps> = ({ className }) => {
  return (
      <div className="w-[95px] h-[44px] px-[15px] bg-[#202327] opacity-50 rounded-full flex items-center gap-[7px]">
          <svg/>
      <p className="text-white font-proxima text-[14px] font-bold leading-[14px] text-left">
      {text}
      </p>
    </div>
  );
};
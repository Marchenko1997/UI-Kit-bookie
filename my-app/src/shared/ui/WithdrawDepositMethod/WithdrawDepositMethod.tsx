import React, { useState } from "react";
import { withdrawGroups } from "../../../constants/withdrawGroups";

interface WithdrawDepositMethodProps {
  className?: string;
}

export const WithdrawDepositMethod: React.FC<WithdrawDepositMethodProps> = ({
  className,
}) => {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  return (
    <div className={`flex gap-4 flex-wrap ${className}`}>
      {withdrawGroups.map((group) => (
        <div
          key={group.title}
          onClick={() => setSelectedTitle(group.title)}
          className={`w-[151px] h-[95px] rounded-[10px] px-[18px] py-[22px] cursor-pointer flex flex-col items-center gap-[8px]
            ${
              selectedTitle === group.title
                ? "bg-[#1A2222] border border-[rgb(1,198,178)]"
                : "bg-[#202327] border border-transparent"
            }
          `}
        >
          <p className="text-white font-proxima text-[20px] font-bold leading-6 text-center">
            {group.title}
          </p>

          <div
            className={
              group.items.length > 1
                ? "flex gap-[6px] justify-center"
                : "flex justify-center"
            }
          >
            {group.items.map((item, index) => (
              <div key={index}>{item.image}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

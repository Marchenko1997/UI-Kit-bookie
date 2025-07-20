import React from 'react';

interface SportsBroadcastsProps {
  className?: string;
}

export const SportsBroadcasts: React.FC<SportsBroadcastsProps> = ({ className }) => {
    return (
      <div className="w-full flex flex-col">
        <div className="w-full border-t border-[#3A3B3C] rounded-b-[14px] bg-[#1C1F22] h-[1px]" />
        <div className=" flex gap-[8px] lg:flex-row lg:gap-[54px] px-[18px] py-[18px] lg:pl-[38px] lg:pr-[0px] lg:py-[38px]">
          <div className="flex flex-col gap-[12px]">
            <div className="w-[322px] h-[152px] lg:w-[735px] lg:h-[348px] rounded-[8px] bg-[#202327]"></div>
            <div className="flex gap-[12px]">
              <span className=" px-[6px] py-[2px] rounded-[4px] bg-[#01C6B2] text-black font-inter text-[12px] font-medium leading-[16px] text-center flex items-center justify-center">
                Теннис
              </span>

              <p className="text-[#B3B3B3] font-proxima text-[12px] font-normal leading-[16px] text-left">
                29.05.2025
              </p>
            </div>
            <p className="text-white font-proxima font-bold text-[14px] leading-[17px] text-left lg:text-[18px] lg:leading-[22px]">
              Рыбакина на старте «РГ»-2025: сопротивление, стиль и настрой на
              победу
            </p>
          </div>
          <div className="flex flex-col gap-[18px] lg:gap-[25px]">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex gap-[18px] lg:gap-[10px]">
                <div className="w-[165px] h-[120px] bg-[#202327]" />
                <div className="flex flex-col gap-[10px] w-[225px]">
                  <div className="flex gap-[10px]">
                    <span className="px-[6px] py-[2px] rounded-[4px] bg-[#01C6B2] text-black font-inter text-[12px] font-medium leading-[16px] text-center flex items-center justify-center">
                      Теннис
                    </span>
                    <p className="text-[#B3B3B3] font-proxima text-[12px] font-normal leading-[16px] text-left">
                      29.05.2025
                    </p>
                  </div>
                  <p className="text-white font-proxima font-bold text-[14px] leading-[17px] text-left">
                    Рыбакина на старте «РГ»-2025: сопротивление, стиль и настрой{" "}
                    <br />
                    на победу
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};
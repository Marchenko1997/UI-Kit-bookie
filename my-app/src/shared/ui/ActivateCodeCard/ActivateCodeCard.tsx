import React from 'react';

interface ActivateCodeCardProps {
  className?: string;
}

export const ActivateCodeCard: React.FC<ActivateCodeCardProps> = ({ className }) => {
    return (
      <div className="flex flex-col px-[16px] py-[20px] gap-[14px]  w-[338px] bg-[#1C1F22]">
        <h3 className="text-white font-['Proxima_Nova' sans-serif] text-[14px] font-bold leading-[14px] tracking-[0%] text-left">
          Activate code for bonus
        </h3>
        <input
          type="text"
          placeholder="Enter bonus code"
          className="
   
    h-[44px] 
    p-[15px] 
    bg-[#0F1112] 
    rounded-[6px]
    placeholder:text-[rgba(163,163,163,0.3)]
    placeholder:font-['Proxima_Nova' ]
    placeholder:text-[14px]
    placeholder:font-bold
    placeholder:leading-[14px]
    placeholder:text-left
  "
        />
        <button
          className="
  
    h-[44px] 
    bg-[#01C6B2] 
    rounded-[6px] 
    p-[14px] 
    text-[#0F1112]
    font-['Proxima_Nova'] 
    text-[14px] 
    font-bold 
    leading-[17px] 
    text-center
  "
        >
          Activate code
        </button>
      </div>
    );
};
import React from 'react';

interface InputProps {
  title: string;
  placeholder: string
}

export const Input: React.FC<InputProps> = ({  title, placeholder }) => {
  return (
    <div className="flex flex-col gap-[14px]">
      <h3 className="text-[#FFFFFFCC]/80 font-inter text-sm font-bold leading-[17px] text-left">
        {title}
      </h3>
      <input
        type="text"
        placeholder={placeholder}
        className="
    w-[322px]        
    md:w-[419px]
    h-[44px]
    rounded-[6px]
    bg-[#0F1112]
    p-[15px]
    border
    border-transparent
    focus:border-[#01C6B2]
    outline-none
    placeholder:text-[#A3A3A34D]
    placeholder:font-bold
    placeholder:text-[14px]
    placeholder:leading-[14px]
    font-['Proxima_Nova',sans-serif]
  "
      />
    </div>
  );
};
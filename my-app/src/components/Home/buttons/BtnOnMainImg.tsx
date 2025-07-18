import React from "react";

interface BtnOnMainImgProps {
  className?: string;
  bgColor: string;
  textColor: string;
  label: string;
}

export const BtnOnMainImg: React.FC<BtnOnMainImgProps> = ({
  className,
  bgColor,
  textColor,
  label,
}) => {
  return (
    <button
      className={` absolute px-[24px] py-[14px] left-[180px] top-[-100px] rounded-full font-medium text-[14px] whitespace-nowrap text-center`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {label}
    </button>
  );
};

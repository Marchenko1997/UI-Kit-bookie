import React from "react";

export const SliderCounter: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={` absolute flex items-end gap-[0.5px] top-[300px] left-[253px] ${className}`}
    >
      <span className="text-[14px] leading-[14px] font-medium text-black/90 font-montserrat">
        02
      </span>
      <span className="text-[13px] leading-[12px] font-medium text-black/50 font-montserrat">
        /
      </span>
      <span className="text-[9px] leading-[16px] font-medium text-black/50 font-montserrat relative top-[4px]">
        7
      </span>
    </div>
  );
};

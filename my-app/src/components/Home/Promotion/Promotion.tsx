import React from 'react';
import { SectionHeader } from '../TopEvents/SectionHeader/SectionHeader';
import { PromotionCards } from './PromotionCards/PromotionCards';

interface PromotionProps {
  className?: string;
}

export const Promotion: React.FC<PromotionProps> = ({ className }) => {
  return (
      <div className="flex flex-col w-[358px] lg:w-[1280px]  bg-[#1C1F22] rounded-[14px] ">
          <SectionHeader title="Promotion" />
          <PromotionCards />
    </div>
  );
};
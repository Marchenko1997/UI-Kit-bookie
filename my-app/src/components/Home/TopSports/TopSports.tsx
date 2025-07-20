import React from 'react';
import { SectionHeader } from '../TopEvents/SectionHeader/SectionHeader';
import { TopSportsCards } from './TopSportsCards/TopSportsCards';

interface TopSportsProps {
  className?: string;
}

export const TopSports: React.FC<TopSportsProps> = ({ className }) => {
  return (
      <div className="flex flex-col w-[358px] lg:w-[1280px]  bg-[#1C1F22] rounded-[14px] ">
          <SectionHeader title="Top Sports" />
          <TopSportsCards />
    </div>
  );
};
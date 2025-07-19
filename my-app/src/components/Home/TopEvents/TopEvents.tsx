import React from 'react';
import { SectionHeader } from './SectionHeader/SectionHeader';
import { AllSports } from './AllSports/AllSports';
import { CyberSport } from './CyberSport/CyberSport';

interface TopEventsProps {
  className?: string;
}

export const TopEvents: React.FC<TopEventsProps> = ({ className }) => {
    return (
      <div className="flex flex-col w-[358px] lg:w-[1280px]  bg-[#1C1F22] rounded-[14px] ">
        <SectionHeader title="Top events" />
        <div className="pt-[18px] px-[0px] ">
          <AllSports />
        </div>
        <CyberSport />
      </div>
    );
};
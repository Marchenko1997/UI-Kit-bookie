import React from 'react';
import { SectionHeader } from '../TopEvents/SectionHeader/SectionHeader';
import { SportsBroadcasts } from './SportsBroadcasts/SportsBroadcasts';

interface MediaProps {
  className?: string;
}

export const Media: React.FC<MediaProps> = ({ className }) => {
  return (
      <div className="flex flex-col w-[358px] lg:w-[1280px]  bg-[#1C1F22] rounded-[14px] ">
          <SectionHeader title="Media" />
          <SportsBroadcasts />
    </div>
  );
};
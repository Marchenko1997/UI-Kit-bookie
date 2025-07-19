import { GreenClock, BBTeamIcon, TalonEsport } from "../../../../../public/assets/svg/Icons";

interface CyberSportProps {
  className?: string;
}

const options = [
  { label: "1", value: "1.75" },
  { label: "2", value: "1.80" },
  { label: "3", value: "1.95" },
];

export const CyberSport: React.FC<CyberSportProps> = ({ className }) => {
  return (
    <div className="px-[18px] lg:px-[28px] flex lg:flex-wrap gap-[10px] lg:gap-[35px]  ">
      <div className="w-[280px] px-[16px] py-[13px] bg-[#202327] rounded-[8px] flex flex-col gap-[18px] ">
        <div className="flex gap-[8px] items-baseline">
          <div className="w-[78.66px] h-[18px] bg-[#755076] opacity-70 flex items-center px-2">
            <p className="text-white font-montserrat text-[11px] font-medium leading-[14px] text-left">
              Киберспорт
            </p>
          </div>
          <p className="text-[#5E6A78] font-montserrat text-[11px] font-normal leading-[14px] text-left">
            Dota 2. DreamLeague. Тай-…
          </p>
        </div>
        <div className="flex gap-[176px]">
          <div className="flex gap-[4px]  items-center">
            <GreenClock />
            <p className="text-[#5E6A78] font-montserrat text-[12px] font-normal leading-[16px] text-left">
              Live
            </p>
          </div>
          <p className="text-[#5E6A78] font-montserrat text-[12px] font-normal leading-[16px] text-left">
            3
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-[4px]  items-center">
            <BBTeamIcon />
            <p className="text-white font-proxima font-bold text-[14px] leading-[18px] text-left">
              BB Team
            </p>
          </div>
          <div className="flex gap-[18px] items-center">
            <p className="text-[#5E6A78] font-montserrat text-[12px] font-normal leading-[16px] text-left">
              0
            </p>
            <p className="text-[#753BBD] font-proxima font-bold text-[14px] leading-[18px] text-center">
              1
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-[4px]  items-center">
            <TalonEsport />
            <p className="text-white font-proxima font-bold text-[14px] leading-[18px] text-left">
              Talon Esports
            </p>
          </div>
          <div className="flex gap-[18px] items-center">
            <p className="text-[#5E6A78] font-montserrat text-[12px] font-normal leading-[16px] text-left">
              0
            </p>
            <p className="text-[#753BBD] font-proxima font-bold text-[14px] leading-[18px] text-center">
              1
            </p>
          </div>
        </div>
        <div className="flex gap-[5px]">
          {options.map((option, index) => (
            <div
              key={index}
              className="w-[82px] px-[12px] py-[14px] rounded-[4px] bg-[#292D32] flex items-center justify-between"
            >
              <p className="text-[#5E6A78] font-montserrat text-[13px] font-normal leading-[16px] text-left">
                {option.label}
              </p>
              <p className="text-white font-proxima font-bold text-[14px] leading-[18px] text-left">
                {option.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

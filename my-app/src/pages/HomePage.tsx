import { AllBets } from "../components/Home/AllBets/AllBets";
import { ImageSlider } from "../components/Home/ImageSlider/ImageSlider";
import { Media } from "../components/Home/Media/Media";
import { MobileSlider } from "../components/Home/MobileSlider/MobileSlider";
import { Promotion } from "../components/Home/Promotion/Promotion";
import { TopEvents } from "../components/Home/TopEvents/TopEvents";
import { TopSports } from "../components/Home/TopSports/TopSports";

interface HomePageProps {
  className?: string;
}

export const HomePage: React.FC<HomePageProps> = ({ className }) => {
  return (
    <div className="flex flex-col gap-[28px] ">
      <div className="block sm:hidden">
        <MobileSlider />
      </div>
      <div className="hidden sm:block">
        <ImageSlider />
      </div>
      <div className="flex flex-col items-center">
        <TopEvents />
      </div>
      <div className="flex flex-col items-center">
        <TopSports />
      </div>
      <div className="flex flex-col items-center">
        <Promotion />
      </div>
      <div className="flex flex-col items-center">
        <Media />
      </div>
      <div className="flex flex-col items-center">
        <AllBets />
      </div>
    </div>
  );
};

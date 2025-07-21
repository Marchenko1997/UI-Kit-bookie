import { AllBets } from "../components/Home/AllBets/AllBets";
import { ImageSlider } from "../components/Home/ImageSlider/ImageSlider";
import { Media } from "../components/Home/Media/Media";
import { MoreAboutUs } from "../components/Home/MoreAboutUs/MoreAboutUs";
import { Promotion } from "../components/Home/Promotion/Promotion";
import { TopEvents } from "../components/Home/TopEvents/TopEvents";
import { TopSports } from "../components/Home/TopSports/TopSports";

interface HomePageProps {
  className?: string;
}

export const HomePage: React.FC<HomePageProps> = ({ className }) => {
  return (
    <div className="flex flex-col gap-[28px] ">
    

        <ImageSlider />
   
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
        <AllBets amount={0} />
      </div>
      <div className="flex flex-col items-center">
        <MoreAboutUs  />
      </div>
    </div>
  );
};

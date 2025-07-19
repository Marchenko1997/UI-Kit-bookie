import { ImageSlider } from "../components/Home/ImageSlider/ImageSlider";
import { MobileSlider } from "../components/Home/MobileSlider/MobileSlider";
import { TopEvents } from "../components/Home/TopEvents/TopEvents";

interface HomePageProps {
  className?: string;
}

export const HomePage: React.FC<HomePageProps> = ({ className }) => {
  return (
    <div className="flex flex-col gap-[28px] ">
      {/* <div className="block sm:hidden">
        <MobileSlider />
      </div>
      <div className="hidden sm:block">
        <ImageSlider />
      </div> */}
      <div className="flex flex-col items-center">
        <TopEvents />
      </div>
    </div>
  );
};

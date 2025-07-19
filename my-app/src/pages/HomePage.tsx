import { ImageSlider } from "../components/Home/ImageSlider/ImageSlider";
import { MobileSlider } from "../components/Home/MobileSlider/MobileSlider";

interface HomePageProps {
  className?: string;
}

export const HomePage: React.FC<HomePageProps> = ({ className }) => {
  return (
    <div className={className}>
      {/* Мобильная версия */}
      <div className="block sm:hidden">
        <MobileSlider />
      </div>

      {/* Десктопная версия */}
      <div className="hidden sm:block">
        <ImageSlider />
      </div>
    </div>
  );
};

import { buttonMobConfig } from "../../../constants/buttonMobConfig";
import { MobileBtnImg } from "../buttons/MobileBtnImg";
import bettingWithoutLimits from "../../../../public/assets/homePage/mobileSliderImg/bettingWithoutLimits.png";
import latestPromotions from "../../../../public/assets/homePage/mobileSliderImg/latestPromotions.png";
import betAnytime from "../../../../public/assets/homePage/mobileSliderImg/betAnytime.png";
import Slider from "react-slick";

interface MobileSliderProps {
  className?: string;
}

const imagesMap: Record<string, string> = {
  bettingWithoutLimits,
  latestPromotions,
  betAnytime,
};

export const MobileSlider: React.FC<MobileSliderProps> = ({ className }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className={`w-full relative ${className}`}>
      <Slider {...settings}>
        {buttonMobConfig.map(({ name, bgColor, textColor, label }) => (
          <div key={name} className="relative px-4">
            <img
              src={imagesMap[name]}
              alt={name}
              className="w-full h-auto object-cover rounded-xl"
            />
            <MobileBtnImg
              bgColor={bgColor}
              textColor={textColor}
              label={label}
              className="absolute "
              name={name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

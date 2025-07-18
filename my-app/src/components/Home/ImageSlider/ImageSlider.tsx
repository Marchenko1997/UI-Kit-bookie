import React, { useState } from "react";
import Slider from "react-slick";
import { ArrowPrev } from "../buttons/ArrowPrev";
import { ArrowNext } from "../buttons/ArrowNext";
import {buttonConfigs} from "../../../constants/buttonConfigs"
import { BtnOnMainImg } from "../buttons/BtnOnMainImg";
import { TextBlockForExperienceBet } from "../TextBlockForExperienceBet/TextBlockForExperienceBet";
import { SliderCounter } from "../TextBlockForExperienceBet/SliderCounter";

interface ImageSliderProps {
  className?: string;
}

const slides = [
  "betanytime",
  "football",
  "latesPromotions",
  "playsmart",
  "rolsroyscar",
  "sportcar",
  "tennis",
];

export const ImageSlider: React.FC<ImageSliderProps> = ({ className }) => {
  const isMobile = window.innerWidth <= 768;
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = slides.map((name) =>
    isMobile
      ? `/assets/homePage/${name}1x.png`
      : `/assets/homePage/${name}2x.png`
  );

  const currentSlideName = slides[currentSlide];
  const blackSlides = ["betanytime", "rolsroyscar"];
  const arrowColor = blackSlides.includes(currentSlideName) ? "black" : "white";

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    prevArrow: <ArrowPrev color={arrowColor} />,
    nextArrow: <ArrowNext color={arrowColor} />,
  };

  return (
    <div className={`w-full relative ${className}`}>
      <Slider {...settings}>
        {images.map((src, index) => {
          const slideName = slides[index];
          const config = buttonConfigs.find((b) => b.name === slideName);

          return (
            <div key={index} className="relative">
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-auto object-cover rounded-[5px]"
              />

              {/* Кнопка */}
              {config && (
                <div className="absolute bottom-4 left-4">
                  <BtnOnMainImg
                    bgColor={config.bgColor}
                    textColor={config.textColor}
                    label={config.label}
                  />
                </div>
              )}

              {slideName === "rolsroyscar" && (
                <>
                  <div className="absolute top-[60px] left-[80px]">
                    <TextBlockForExperienceBet />
                  </div>
                  <SliderCounter />
                </>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import Slider from "react-slick";


interface ImageSliderProps {
  className?: string;
}

const slides = [
  "betAnyTime",
  "bettingWithoutLimits",
  "footballFever",
  "latesPromotion",
  "liveBetting",
  "playSmart",
  "tennisBetting",
];

export const ImageSlider: React.FC<ImageSliderProps> = ({ className }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 const images = slides
   .filter((name) => {
     const has2x = [
       "betAnyTime",
       "bettingWithoutLimits",
       "latesPromotion",
     ].includes(name);
     return isMobile ? has2x : true;
   })
   .map((name) => {
     return isMobile
       ? `/assets/homePage/mainSliderpictures/${name}2x.png`
       : `/assets/homePage/mainSliderpictures/${name}1x.png`;
   });



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    arrows: false,
  };

  return (
    <div className={`w-full relative ${className}`}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative">
            <img
              src={src}
              alt={`slide-${index}`}
              tabIndex={-1}
              className="w-full h-auto object-cover outline-none rounded-[5px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

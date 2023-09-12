import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper";
import CameraImg from "../img/camera.png";

import "../slider.css";

const sliderData = [
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
];

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mainSlider h-full bg-primary x1: xl:bg-no-repeat
      max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2x1"
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col lg:flex-row h-full p-[20px] md:p
                [60px] bg-bright"
              >
                {/* text */}
                <div className="w-full lg: flex-1">
                  <div className="uppercase mb-1 text-center 1g:text-left">
                    {slide.pretitle}
                  </div>
                  <div
                    className="text-3x1 md: text-[46px] font-semibold
                    uppercase leading-none text-center 1g:text-left mb-8 xl:mb-20"
                  >
                    {slide.titlePart1} <br />
                    {slide.titlePart2} <br />
                    {slide.titlePart3}
                  </div>
                  <button className="btn btn-accent mx-auto">Shop now</button>
                </div>
                {/* tmg */}
                <div className="flex-1">
                  <img
                    className=" xl:-right-16 md:right-20 md:xl:-bottom-16 xl:-bottom-12 w-[500px]"
                    src={slide.img}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;

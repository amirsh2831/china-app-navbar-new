import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./SecondSlider.scss";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
const SecondSlider = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={isTabletOrMobile ? 1 : 2}
        loop
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          stopOnLastSlide: false,
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
        id="footprints-SecondSwiper"
      >
        <SwiperSlide>
          <div className="slide-content">
            <a>
              Join Us At VieetnamPrintPack 2024: The Largest Packaging
              Excebition In the World
            </a>
            <img
              src="/assets/Image/SecondSlider1.jpg"
              alt="Second Slider Image 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a>
              Join Us with the Complete Supply Chain of the Textile Industry in
              Vietnam
            </a>
            <img
              src="/assets/Image/SecondSlider2.jpg"
              alt="Second Slider Image 2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a>
              Discovering the Beauty of LED & OLED Innovation in South Korea
            </a>
            <img
              src="/assets/Image/SecondSlider3.jpg"
              alt="Second Slider Image 3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a>
              South Korean LED Industry Buyers Exclaim: MADE IN CHINA, LOVE BY
              ALL!
            </a>
            <img
              src="/assets/Image/SecondSlider4.jpg"
              alt="Second Slider Image 4"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a>Selected Sourcing Connect in Malaysia</a>

            <img
              src="/assets/Image/SecondSlider5.jpg"
              alt="Second Slider Image 5"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SecondSlider;

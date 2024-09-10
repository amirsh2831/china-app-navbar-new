import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TrendingPageMainSlider.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TrendingPageMainSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        id="main-swiper-slider"
      >
        <SwiperSlide>
          <img src="/assets/Image/slider1.jpg" alt="Main Slider Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Image/slider2.jpg" alt="Main Slider Image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Image/slider3.jpg" alt="Main Slider Image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Image/slider4.jpg" alt="Main Slider Image 4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TrendingPageMainSlider;

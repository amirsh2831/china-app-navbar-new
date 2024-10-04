import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./PhotoSlider.scss";

// import required modules
import { Navigation } from "swiper/modules";
import { MainBannerPhotoSlider } from "../../data";
import { useState } from "react";
const PhotoSlider = ({ setSliderIndex, index, setTotalSlides }) => {
  // const [sliderIndex, setSliderIndex] = useState(1);
  const handleSetIndex = (indexNumber) => {
    setSliderIndex(indexNumber);
  };
  return (
    <>
      <div className="suppliers-page-main-banner-photo-slider-container">
        <Swiper
          onSwiper={(swiper) => setTotalSlides(swiper.slides.length)}
          onActiveIndexChange={(siwperCore) => {
            handleSetIndex(siwperCore.activeIndex + 1);
          }}
          navigation={true}
          modules={[Navigation]}
          id="suppliers-page-main-banner-photo-slider"
        >
          {MainBannerPhotoSlider.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={item} alt="Top Manufacturer Images " />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default PhotoSlider;

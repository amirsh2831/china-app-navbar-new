import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./PhotoSlider.scss";

// import required modules
import { Navigation } from "swiper/modules";
import { MainBannerPhotoSlider } from "../../../../constants";

const PhotoSlider = () => {
  return (
    <>
      <div className="suppliers-page-main-banner-photo-slider-container">
        <Swiper
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

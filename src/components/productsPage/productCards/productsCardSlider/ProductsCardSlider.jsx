import React from "react";
import "./ProductsCardSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

// import required modules
import { Navigation } from "swiper/modules";
import { useState } from "react";
const ProductsCardSlider = ({ images }) => {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [totalslides, setTotalSlides] = useState(0);
  const handleSetIndex = (indexNumber) => {
    setSliderIndex(indexNumber);
  };
  return (
    <>
      <div className="products-page-card-photo-slider-container">
        <Swiper
          onSwiper={(swiper) => setTotalSlides(swiper.slides.length)}
          onActiveIndexChange={(siwperCore) => {
            handleSetIndex(siwperCore.activeIndex + 1);
          }}
          navigation={true}
          modules={[Navigation]}
          id="products-page-main-cards-photo-slider"
        >
          {images.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={item} alt="Top Manufacturer Images " />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="products-page-card-photo-slider-index">
          <div className="products-page-card-photo-sldier-play-button">
            <a href="#">
              <PlayArrowRoundedIcon />
            </a>
          </div>
          <div className="products-page-card-photo-slider-index-item">
            {sliderIndex}/{totalslides}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCardSlider;

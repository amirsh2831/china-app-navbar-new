import React from "react";
import "./MainProductContainer.scss";
import MainProductSlider from "./slider/MainProductSlider";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
const MainProductContainer = ({ products, cat }) => {
  return (
    <>
      <div className="products-main-slider products-trad">
        <div className="products-cat">
          <Swiper
            id="cat-slider"
            slidesPerView={"auto"}
            // slidesPerGroup={"auto"}
            spaceBetween={10}
            watchSlidesProgress={true}
          >
            {cat.map((item, i) => (
              <SwiperSlide key={i} className="cat-item">
                {item}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="products-sldier">
          <MainProductSlider product={products} />
        </div>
      </div>
    </>
  );
};

export default MainProductContainer;

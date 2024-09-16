import React from "react";
import "./Contentslider.scss";
import ProductSlider from "./productSlider/ProductSlider";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
const Contentslider = ({ cat, products }) => {
  // Import Swiper React components

  return (
    <>
      <div className="products">
        <div className="products-cat">
          <Swiper
            id="cat-slider"
            slidesPerView={"auto"}
            navigation={true}
            modules={[Navigation]}
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
          <ProductSlider product={products} />
        </div>
      </div>
    </>
  );
};

export default Contentslider;

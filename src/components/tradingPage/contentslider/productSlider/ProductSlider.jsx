import React from "react";
import "./ProductSlider.scss";
import ProductCard from "../productCard/ProductCard";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";

export const ProductSlider = ({ product }) => {
  return (
    <>
      <Swiper
        id="productSlider"
        slidesPerView={5}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        // className="mySwiper"
      >
        {product.map((item, i) => (
          <SwiperSlide key={i}>
            <ProductCard
              // key={i}
              image={item.image}
              title={item.title}
              type={item.type}
              orders={item.order}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default ProductSlider;

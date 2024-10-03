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
import { useMediaQuery } from "react-responsive";
// import required modules
import { Grid, Pagination } from "swiper/modules";

export const ProductSlider = ({ product, initial }) => {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 425 });

  return (
    <>
      <Swiper
        id="productSlider"
        slidesPerView={
          isMobile ? 1 : isMobileOrTablet ? 2 : isTablet ? 3 : initial
        }
        slidesPerGroup={
          isMobile ? 1 : isMobileOrTablet ? 2 : isTablet ? 3 : initial
        }
        grid={
          isMobile
            ? {
                rows: 1,
                fill: "row",
              }
            : {
                rows: 2,
                fill: "row",
              }
        }
        spaceBetween={isMobileOrTablet ? 45 : 30}
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

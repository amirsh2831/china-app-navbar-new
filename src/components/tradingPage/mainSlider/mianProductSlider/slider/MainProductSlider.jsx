import React from "react";
import "./MainProductSlider.scss";
import ProductCard from "../../../contentslider/productCard/ProductCard";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
// import required modules
import { Grid, Pagination } from "swiper/modules";
const MainProductSlider = ({ product }) => {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 425 });
  return (
    <>
      <Swiper
        id="mainProductSlider"
        slidesPerView={isMobile ? 1 : isMobileOrTablet ? 2 : isTablet ? 3 : 4}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={isMobileOrTablet ? 20 : 10}
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

export default MainProductSlider;

import React from "react";
import "./MainProductContainer.scss";
import MainProductSlider from "./slider/MainProductSlider";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Contentslider from "../../contentslider/Contentslider";
const MainProductContainer = ({ products, cat }) => {
  return (
    <>
      <Contentslider products={products} cat={cat} initial={3} />
    </>
  );
};

export default MainProductContainer;

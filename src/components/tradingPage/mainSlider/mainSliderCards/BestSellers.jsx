import React from "react";
import "./BestSellers.scss";
import { BestSelleritems } from "../../../../constants";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
const BestSellers = () => {
  const isminiLaptop = useMediaQuery({ maxWidth: 1275 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  return (
    <>
      <div className="bestseller-main-container">
        <h4>Best Sellers</h4>
        <Swiper
          navigation={true}
          className="mySwiper"
          id="trading-page-main-bestseller"
          slidesPerView={isTablet ? 1 : isminiLaptop ? 2 : 1}
          slidesPerGroup={isTablet ? 1 : isminiLaptop ? 2 : 1}
          spaceBetween={isminiLaptop ? 60 : 0}
          grid={
            isminiLaptop
              ? {
                  rows: 1,
                }
              : {
                  rows: 4,
                }
          }
          modules={[Grid, Navigation]}
        >
          {BestSelleritems.map((item, i) => (
            <SwiperSlide key={i} className="bestseller-item">
              <div className="bestseller-item-image">
                <img alt="Best seller Image" src={item.image} />
              </div>
              <div className="bestseller-item-info">
                <span>
                  {item.title} <span className="type">{item.type}</span>
                </span>
                <p>
                  Min Order: <span>{item.order}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BestSellers;

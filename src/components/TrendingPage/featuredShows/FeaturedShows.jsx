import React from "react";
import FeaturedShowsCard from "./card/FeaturedShowsCard";
import { FeaturedShowsCardsData } from "../../../constants";
import "./FeaturedShows.scss";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const FeaturedShows = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 425 });
  return (
    <>
      <h1 className="featured-shows-title">Featured Shows</h1>
      <div className="featured-cards-container">
        <Swiper
          slidesPerView={isMobile ? 1 : isTabletOrMobile ? 3 : 4}
          spaceBetween={15}
          slidesPerGroup={isMobile ? 1 : isTabletOrMobile ? 3 : 4}
          pagination={{
            // el: ".swiper-pagination",
            clickable: true,
          }}
          loop={false}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            loopFillGroupWithBlank: false,
          }}
          // loopFillGroupWithBlank={true}
          modules={[Pagination]}
          className="mySwiper"
          id="featured-swiper"
        >
          {FeaturedShowsCardsData.map((item, i) => (
            <SwiperSlide>
              <FeaturedShowsCard
                key={i}
                title={item.title}
                duration={item.duration}
                location={item.location}
                imgUrl={item.imgUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="ad-banner">
        <img src="assets/Image/MELTALESX.jpg" alt="Maltex Banner" />
      </div>
    </>
  );
};

export default FeaturedShows;

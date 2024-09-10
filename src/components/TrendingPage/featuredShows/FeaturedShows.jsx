import React from "react";
import FeaturedShowsCard from "./card/FeaturedShowsCard";
import { FeaturedShowsCardsData } from "../../../constants";
import "./FeaturedShows.scss";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const FeaturedShows = () => {
  return (
    <>
      <h1 className="featured-shows-title">Featured Shows</h1>
      <div className="featured-cards-container">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          slidesPerGroup={4}
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
    </>
  );
};

export default FeaturedShows;

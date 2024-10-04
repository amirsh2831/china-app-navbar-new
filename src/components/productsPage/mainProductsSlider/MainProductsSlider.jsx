import React from "react";
import "./MainProductsSlider.scss";
import { useMediaQuery } from "react-responsive";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import { TradingCat } from "../data";
// import { useMediaQuery } from "react-responsive";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const MainPRoductsSlider = () => {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 548 });
  return (
    <>
      <div className="products-main-slider">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          id="products-cat-main-slider"
          slidesPerView={isMobile ? 3 : isMobileOrTablet ? 4 : isTablet ? 6 : 8}
          slidesPerGroup={
            isMobile ? 3 : isMobileOrTablet ? 4 : isTablet ? 6 : 8
          }
          spaceBetween={30}
        >
          {TradingCat.map((item, i) => (
            <SwiperSlide
              key={i}
              onClick={() => {
                const element = document.getElementById(
                  "prod-" + (i + 1).toString()
                );
                element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="products-cat-container">
                <div className="products-cat-image">
                  <img src={item.img} alt="Categories Image" />
                </div>
                <div className="products-cat-title">{item.text}</div>
              </div>
            </SwiperSlide>
          ))}
          {TradingCat.map((item, i) => (
            <SwiperSlide
              key={i}
              onClick={() => {
                const element = document.getElementById(
                  "prod-" + (i + 1).toString()
                );
                element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="products-cat-container">
                <div className="products-cat-image">
                  <img src={item.img} alt="Categories Image" />
                </div>
                <div className="products-cat-title">{item.text}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MainPRoductsSlider;

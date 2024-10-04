import React from "react";
import "./HeroSection.scss";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import { TradingCat } from "../data";
import { useMediaQuery } from "react-responsive";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const HeroSection = () => {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 548 });
  return (
    <>
      <div className="main-hero">
        <div className="hero-background">
          <div className="hero-animated-icons">
            <div className="bg-icon car"></div>
            <div className="bg-icon case"></div>
            <div className="bg-icon makeup"></div>
            <div className="bg-icon shoe"></div>
            <div className="bg-icon watch"></div>
            <div className="bg-icon headphone"></div>
            <div className="bg-icon gift"></div>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-content-title">Start Your Order Now</h1>
          <div className="hero-content-items-container">
            <div className="hero-content-item">
              <VerifiedUserOutlinedIcon />
              <p>Funds Security</p>
            </div>
            <div className="hero-content-item">
              <VerifiedOutlinedIcon />
              <p>Audited Suppliers</p>
            </div>
            <div className="hero-content-item">
              <CurrencyExchangeOutlinedIcon />
              <p>Refund Policy</p>
            </div>
            <div className="hero-content-item">
              <VolunteerActivismOutlinedIcon />
              <p>Service Guarantee</p>
            </div>
          </div>
          <div className="hero-searchbar-container">
            <div className="hero-searchbar">
              <input placeholder="I'm shopping for" />
            </div>
            <button className="hero-searchbar-button">Search</button>
          </div>
        </div>
        <div className="hero-main-slider">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            id="cat-main-slider"
            slidesPerView={
              isMobile ? 3 : isMobileOrTablet ? 4 : isTablet ? 6 : 8
            }
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
                <div className="cat-container">
                  <div className="cat-image">
                    <img src={item.img} alt="Categories Image" />
                  </div>
                  <div className="cat-title">{item.text}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="guide-items"></div>
      </div>
    </>
  );
};

export default HeroSection;

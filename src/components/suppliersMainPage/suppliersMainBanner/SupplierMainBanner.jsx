import React from "react";
import "./SupplierMainBanner.scss";
import ReactPlayer from "react-player";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
// Import Swiper React components
import SuppliersMainBannerSliderCards from "./suppliersMainBannerSliderCards/suppliersMainBannerSliderCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { SuppliersSlider } from "../../../constants";
const SupplierMainBanner = () => {
  return (
    <>
      <div className="suppliers-main-banner">
        <div className="suppliers-main-banner-video">
          <ReactPlayer
            url="src/assets/video.mp4"
            playing={true}
            width="100%"
            height="100%"
            className="supplier-main-banner-video-player"
          />
        </div>
        <div className="suppliers-main-banner-right-side">
          <div className="suppliers-main-banner-header">
            <div className="suppliers-main-banner-title">
              <img
                className="suppliers-main-banner-manufacturer-logo"
                src="assets/Image/Suppliers/banner-supplier.png"
                alt="Top Manufacturer"
              />
              <div className="suppliers-main-banner-top-supplier-info">
                <div className="suppliers-main-banner-top-supplier-title">
                  <a href="#">Ningbo Hanyee Metal Product Co., Ltd.</a>
                </div>
                <div className="suppliers-main-banner-top-supplier-more-information">
                  <a href="#">
                    <img
                      src="assets/Image/Suppliers/diamond.png"
                      alt="diamond icon"
                    />
                    Diamond Member Since 2017
                  </a>
                  <a href="#">
                    <img
                      src="assets/Image/Suppliers/ico-as.png"
                      alt="audited icon"
                    />
                    Audited Supplier
                  </a>
                </div>
              </div>
            </div>
            <div className="suppliers-main-banner-call-to-action">
              <button className="suppliers-main-banner-contact-now">
                <span>
                  <LocalPostOfficeOutlinedIcon fontSize="inherit" />
                </span>
                <p>Contact Now</p>
              </button>
              <button className="suppliers-main-banner-chat ">
                <img
                  src="assets/Image/Suppliers/massege.png"
                  alt="Massenger icon"
                />
                <p>chat</p>
              </button>
            </div>
          </div>
          <div className="suppliers-main-banner-slider-container">
            <Swiper
              navigation={true}
              spaceBetween={10}
              slidesPerView={6}
              slidesPerGroup={6}
              scrollbar={{
                dragSize: 30,
              }}
              modules={[Scrollbar, Navigation]}
              id="supplier-main-banner-slider"
            >
              {SuppliersSlider.map((item, i) => (
                <SwiperSlide key={i}>
                  <SuppliersMainBannerSliderCards
                    title={item.title}
                    image={item.img}
                    price={item.price}
                    type={item.type}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupplierMainBanner;

import React from "react";
import "./SupplierMainBanner.scss";
import ReactPlayer from "react-player";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
// Import Swiper React components
import SuppliersMainBannerSliderCards from "./suppliersMainBannerSliderCards/suppliersMainBannerSliderCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { SuppliersSlider } from "../../../constants";
import { useInViewContext } from "../../../Context/ContextProvider";
import VideoPlayerModal from "./videoPlayerModal/VideoPlayerModal";
import { useState } from "react";
import PhotoSlider from "./photoSlider/PhotoSlider";

const SupplierMainBanner = () => {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const resize1 = useMediaQuery({ maxWidth: 1366 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isSmallTablet = useMediaQuery({ maxWidth: 570 });

  const [open, setOpen] = useState();
  const [video, setVideo] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleVideo = () => {
    setVideo(true);
  };
  const handlePhoto = () => {
    setVideo(false);
  };

  return (
    <>
      <div className="suppliers-main-banner">
        <div className="suppliers-main-banner-video">
          {video ? (
            <>
              <video
                onClick={handleOpen}
                id="main-banner-video"
                autoPlay
                muted
                loop
                controls
                className="supplier-main-banner-video-player"
              >
                <source src="src/assets/video.mp4" type="video/mp4" />
              </video>
              <VideoPlayerModal open={open} setOpen={setOpen} />
            </>
          ) : (
            <PhotoSlider
              setTotalSlides={setTotalSlides}
              index={sliderIndex}
              setSliderIndex={setSliderIndex}
            />
          )}
          <div className="suppliers-main-banner-view-section-controller">
            <div
              className="suppliers-main-banner-view-video-controller"
              style={video ? { backgroundColor: "#fff", color: "#000" } : {}}
              onClick={handleVideo}
            >
              <VideocamOutlinedIcon fontSize="medium" />
            </div>
            <div
              className="supplier-page-main-banner-view-photo-controller"
              style={video ? {} : { backgroundColor: "#fff", color: "#000" }}
              onClick={handlePhoto}
            >
              <InsertPhotoOutlinedIcon fontSize="medium" />
              {video ? (
                "photos"
              ) : (
                <span>
                  {sliderIndex} / {totalSlides}
                </span>
              )}
            </div>
          </div>
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
              slidesPerView={isSmallTablet ? 3 : isTablet ? 4 : resize1 ? 5 : 6}
              slidesPerGroup={
                isSmallTablet ? 3 : isTablet ? 4 : resize1 ? 5 : 6
              }
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              scrollbar={{
                dragSize: 20,
              }}
              modules={[Scrollbar, Navigation, Autoplay]}
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

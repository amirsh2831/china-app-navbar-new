import React from "react";
import "./SuppliersMainSecondBanner.scss";
import SuppliersMainBannerSliderCards from "../suppliersMainBanner/suppliersMainBannerSliderCards/suppliersMainBannerSliderCards";
import ReactPlayer from "react-player";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { SuppliersSlider } from "../../../constants";
import VideoPlayerModal from "../suppliersMainBanner/videoPlayerModal/VideoPlayerModal";
import { useState } from "react";
import PhotoSlider from "../suppliersMainBanner/photoSlider/PhotoSlider";
import { useMediaQuery } from "react-responsive";
const SuppliersMainSecondBanner = () => {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState(true);
  const resize1 = useMediaQuery({ maxWidth: 1366 });
  const isTablet = useMediaQuery({ maxWidth: 768 });
  const handleVideo = () => {
    setVideo(true);
  };
  const handlePhoto = () => {
    setVideo(false);
  };
  const handleOpen = () => setOpen(true);

  return (
    <>
      <div className="suppliers-second-banner">
        <div className="suppliers-second-banner-video">
          {video ? (
            <>
              <video
                onClick={handleOpen}
                id="second-banner-video"
                autoPlay
                muted
                loop
                controls
                className="supplier-second-banner-video-player"
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
          <div className="suppliers-second-banner-view-section-controller">
            <div
              className="suppliers-second-banner-view-video-controller"
              style={video ? { backgroundColor: "#fff", color: "#000" } : {}}
              onClick={handleVideo}
            >
              <VideocamOutlinedIcon fontSize="medium" />
            </div>
            <div
              className="supplier-page-second-banner-view-photo-controller"
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
        <div className="suppliers-second-banner-right-side">
          <div className="suppliers-second-banner-header">
            <div className="suppliers-second-banner-title">
              <img
                className="suppliers-second-banner-manufacturer-logo"
                src="assets/Image/Suppliers/banner-supplier.png"
                alt="Top Manufacturer"
              />
              <div className="suppliers-second-banner-top-supplier-info">
                <div className="suppliers-second-banner-top-supplier-title">
                  <a href="#">Ningbo Hanyee Metal Product Co., Ltd.</a>
                </div>
                <div className="suppliers-second-banner-top-supplier-more-information">
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
            <div className="suppliers-second-banner-call-to-action">
              <button className="suppliers-second-banner-contact-now">
                <span>
                  <LocalPostOfficeOutlinedIcon fontSize="inherit" />
                </span>
                <p>Contact Now</p>
              </button>
            </div>
          </div>
          <div className="suppliers-second-banner-slider-container">
            <Swiper
              navigation={true}
              spaceBetween={10}
              slidesPerView={isTablet ? 3 : resize1 ? 2 : 3}
              slidesPerGroup={isTablet ? 3 : resize1 ? 2 : 3}
              scrollbar={{
                dragSize: 10,
              }}
              modules={[Scrollbar, Navigation]}
              id="supplier-second-banner-slider"
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

export default SuppliersMainSecondBanner;

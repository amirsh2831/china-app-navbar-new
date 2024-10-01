import React from "react";
import "./ProductsCardSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const ProductsCardSlider = ({ images }) => {
  //   const [sliderIndex, setSliderIndex] = useState(1);
  //   const handleSetIndex = (indexNumber) => {
  //     setSliderIndex(indexNumber);
  //   };
  return (
    <>
      <div className="products-page-card-photo-slider-container">
        <Swiper
          //   onSwiper={(swiper) => setTotalSlides(swiper.slides.length)}
          //   onActiveIndexChange={(siwperCore) => {
          //     handleSetIndex(siwperCore.activeIndex + 1);
          //   }}
          navigation={true}
          modules={[Navigation]}
          id="products-page-main-cards-photo-slider"
        >
          {images.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={item} alt="Top Manufacturer Images " />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductsCardSlider;

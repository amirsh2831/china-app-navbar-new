import React from "react";
import "./MainSlider.scss";
import ContentSlider from "../contentslider/Contentslider";
import { MainSliderProducts, IndustryItemsCat } from "../../../constants";
import BestSellers from "./mainSliderCards/BestSellers";
import SingleProd from "./mainSliderCards/SingleProd";
import MainProductContainer from "./mianProductSlider/MainProductContainer";
import { useInViewContext } from "../../../Context/ContextProvider";

const MainSlider = () => {
  const { section1Ref } = useInViewContext();
  return (
    <>
      <div className="mainslider-main-container" ref={section1Ref} id="prod-1">
        <div className="mainslider-cards">
          <BestSellers />
          <SingleProd />
        </div>
        <div className="mainslider-slider">
          <MainProductContainer
            products={MainSliderProducts}
            cat={IndustryItemsCat}
          />
        </div>
      </div>
    </>
  );
};

export default MainSlider;

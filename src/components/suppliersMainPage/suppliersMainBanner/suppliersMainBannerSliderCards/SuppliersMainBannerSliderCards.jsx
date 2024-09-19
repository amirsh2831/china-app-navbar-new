import React from "react";
import "./suppliersMainBannerSliderCards.scss";
const SuppliersMainBannerSliderCards = ({ image, title, price, type }) => {
  return (
    <>
      <div className="suppliers-main-banner-slider-card">
        <div className="suppliers-main-banner-slider-card-image">
          <img src={image} alt="Product Image" />
        </div>
        <div className="suppliers-main-banner-slider-card-info">
          <p>{title}</p>
          <h3>
            {price} / {type}
          </h3>
        </div>
      </div>
    </>
  );
};

export default SuppliersMainBannerSliderCards;

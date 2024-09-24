import React from "react";
import "./SuppliersManufacturersSampleCard.scss";
const SuppliersManufacturersSampleCards = ({ image, title, amount, type }) => {
  return (
    <>
      <div className="suppliers-page-body-manufacturers-card-body-sample-card">
        <div className="suppliers-page-body-manufacturers-card-body-sample-card-image">
          <img src={image} alt="Product Image" />
        </div>
        <div className="suppliers-page-body-manufacturers-card-body-sample-card-info">
          <p>
            {title} / <span>{type}</span>
          </p>
          <p>
            {amount} {type} <span>(MOQ)</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SuppliersManufacturersSampleCards;

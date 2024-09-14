import React from "react";
import "./ProductCard.scss";
const ProductCard = ({ image, title, type, orders }) => {
  return (
    <>
      <div className="product-card">
        <div className="product-image">
          <img alt="Product Image" src={image} />
        </div>
        <div className="product-card-title">
          <span>
            {title}/<span className="type">{type}</span>
          </span>
          <p>Min Order: {orders}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

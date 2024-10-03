import React from "react";
import "./ProductCard.scss";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
const ProductCard = ({ image, title, type, orders }) => {
  return (
    <>
      <div className="product-card-trading">
        <div className="product-image">
          <img alt="Product Image" src={image} />
        </div>
        <div className="product-card-title">
          <span>
            {title}/<span className="type">{type}</span>
          </span>
          <p>
            Min Order:{" "}
            <span>
              {orders} {type}
            </span>
          </p>
        </div>
        <div className="card-view-more">
          <span className="view-more-icon">
            <ArrowCircleRightOutlinedIcon fontSize="inherit" />
          </span>
          <span className="view-more-text">View More</span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

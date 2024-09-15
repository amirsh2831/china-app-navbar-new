import React from "react";
import "./SingleProd.scss";
const SingleProd = () => {
  return (
    <>
      <div className="single-prod-main-container">
        <div className="single-prod-info">
          <span>
            US$ 2.2-2.25 / <span className="type">Ream</span>
          </span>
          <p>
            Min. Order: <span>7800 Reams</span>
          </p>
          <a href="#">Start Order</a>
        </div>
        <div className="single-prod-image">
          <img
            alt="Single Product On Sale"
            src="assets/Image/TradingPage/bestseller/paper.png"
          />
        </div>
      </div>
    </>
  );
};

export default SingleProd;

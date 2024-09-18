import React from "react";
import "./TopRankingCards.scss";
const TopRankingCards = ({
  banner,
  title,
  tags,
  price,
  type,
  amount,
  demand,
}) => {
  return (
    <>
      <div className="top-ranking-product-card">
        <div className="top-ranking-product-banner">
          <img src={banner} alt="Product Image" />
        </div>
        <div className="top-ranking-product-card-info">
          <div className="top-ranking-product-card-title">
            <h5>{title}</h5>
          </div>
          <div className="top-ranking-product-card-tags-wrapper">
            {tags.map((item, i) => (
              <div className="top-ranking-product-card-tags" key={i}>
                {item}
              </div>
            ))}
          </div>
          <h3 className="top-ranking-product-card-price-tag">
            {price} / {type}
          </h3>
          <h5 className="top-ranking-product-card-amount">{amount}</h5>
          <div className="top-ranking-product-card-demand">
            {demand} In Demand
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRankingCards;

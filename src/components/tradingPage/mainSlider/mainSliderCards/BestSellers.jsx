import React from "react";
import "./BestSellers.scss";
import { BestSelleritems } from "../../../../constants";
const BestSellers = () => {
  return (
    <>
      <div className="bestseller-main-container">
        <h4>Best Sellers</h4>
        {BestSelleritems.map((item, i) => (
          <div key={i} className="bestseller-item">
            <div className="bestseller-item-image">
              <img alt="Best seller Image" src={item.image} />
            </div>
            <div className="bestseller-item-info">
              <span>
                {item.title} <span className="type">{item.type}</span>
              </span>
              <p>
                Min Order: <span>{item.order}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BestSellers;

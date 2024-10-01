import React from "react";
import "./Interested.scss";
import { ProductsInterested } from "../../../constants";
const Interested = () => {
  return (
    <>
      <div className="products-page-interested-container">
        <h3>You May Like</h3>
        <div className="products-page-interested-body">
          {ProductsInterested.map((item, i) => (
            <div key={i} className="products-page-interested-item">
              <div className="products-page-interested-image">
                <img src={item.image} alt="Products Interested Image" />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Interested;

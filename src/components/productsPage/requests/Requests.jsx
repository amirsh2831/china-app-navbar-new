import React from "react";
import "./Requests.scss";
const Requests = () => {
  return (
    <>
      <div className="products-page-request-container">
        <h3>Haven't found what you want?</h3>
        <div className="products-page-request-body">
          <div className="products-page-request-body-left">
            <h4>Easy Sourcing</h4>
            <p>Post sourcing requests and get quotations quickly.</p>
            <div className="products-page-request-input">
              <input placeholder="Made In China" />
              <div className="products-page-request-button">
                Post Sourcing Request
              </div>
            </div>
          </div>
          <div className="products-page-request-body-right">
            <h4>Product Alert</h4>
            <p>Stay updated to what's new and popular on the market.</p>
            <div className="products-page-request-input-2">
              <input placeholder="Made In China" />
              <div className="products-page-request-button-2">Subscribe</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requests;

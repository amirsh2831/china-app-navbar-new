import React from "react";
import "./TradingPageNavbar.scss";

const TradingPageNavbar = () => {
  return (
    <>
      <div className="trading-navbar">
        <div className="logo-and-title">
          <img
            src="/assets/Image/TradingPage/logo.png"
            className="logo"
            alt="Trading Page Logo"
          />
          <a className="title">Secured Trading</a>
        </div>
        <div className="call-to-action">
          <a href="#">Sign in</a>
          <a href="#">Join Free</a>
        </div>
      </div>
    </>
  );
};

export default TradingPageNavbar;

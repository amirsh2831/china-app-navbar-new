import React from "react";
import "./HeroSection.scss";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import { TradingCat } from "../../../constants";
const HeroSection = () => {
  return (
    <>
      <div className="main-hero">
        <div className="hero-background">
          <div className="hero-animated-icons">
            <div className="bg-icon car"></div>
            <div className="bg-icon case"></div>
            <div className="bg-icon makeup"></div>
            <duv className="bg-icon shoe"></duv>
            <div className="bg-icon watch"></div>
            <div className="bg-icon headphone"></div>
            <div className="bg-icon gift"></div>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-content-title">Start Your Order Now</h1>
          <div className="hero-content-items-container">
            <div className="hero-content-item">
              <VerifiedUserOutlinedIcon />
              <p>Funds Security</p>
            </div>
            <div className="hero-content-item">
              <VerifiedOutlinedIcon />
              <p>Audited Suppliers</p>
            </div>
            <div className="hero-content-item">
              <CurrencyExchangeOutlinedIcon />
              <p>Refund Policy</p>
            </div>
            <div className="hero-content-item">
              <VolunteerActivismOutlinedIcon />
              <p>Service Guarantee</p>
            </div>
          </div>
          <div className="hero-searchbar-container">
            <div className="hero-searchbar">
              <input placeholder="I'm shopping for" />
            </div>
            <button className="hero-searchbar-button">Search</button>
          </div>
        </div>
        <div className="hero-main-slider">
          {TradingCat.map((item, i) => (
            <div key={i} className="cat-container">
              <div className="cat-image">
                <img src={item.img} alt="Categories Image" />
              </div>
              <div className="cat-title">{item.text}</div>
            </div>
          ))}
        </div>
        <div className="guide-items"></div>
      </div>
    </>
  );
};

export default HeroSection;

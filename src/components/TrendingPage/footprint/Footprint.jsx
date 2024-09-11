import React from "react";
import "./Footprint.scss";
import SecondSlider from "../secondSlider/SecondSlider";
import { useMediaQuery } from "react-responsive";
const Footprint = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <>
      <div className="footprint-section">
        <div className="footprint-header">
          <div className="footprint-title">
            <h1>Footprints</h1>
            <h5>
              The latest reports of trade shows Made-in-China.com attended or
              partnered with
            </h5>
          </div>
          <a href="#">View More</a>
        </div>
        <SecondSlider />
        <img
          className="footprint-bottom-image"
          src="/assets/Image/Footprint-bottom-image.jpg"
          alt="Footprint Bottom Image"
        />
      </div>
    </>
  );
};

export default Footprint;

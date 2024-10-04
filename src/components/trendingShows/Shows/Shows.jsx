import React from "react";
import { TrendingShows } from "../data";
import "./Shows.scss";

const Shows = () => {
  return (
    <div className="shows">
      <div className="main-show">
        <img src="/public/assets/Image/TredingShowsImage.jpg" />
        <div className="main-show-info">
          <a href="#">
            <h3>VTG Vietnam 2024</h3>
          </a>
          <div className="main-show-info-more">
            <p>Duration: Sep 25 - 28, 2024</p>
            <p>Location: Vietnam</p>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="middle-line"></div>
      </div>
      <div className="more-trending-shows">
        {TrendingShows.map((item, i) => (
          <div key={i} className="shows-item">
            <div className="circle"></div>
            <div className="show-banner">
              <a href={item.link}>
                <img src={item.imgUrl} alt="Shows Image" />
              </a>
            </div>
            <div className="shows-item-info">
              <a href={item.link}>
                <h3>{item.title}</h3>
              </a>
              <div className="shows-item-info-more">
                <p>{item.duration}</p>
                <p>{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shows;

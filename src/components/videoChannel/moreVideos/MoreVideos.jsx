import React from "react";
import "./moreVideos.scss";
import { moreVideos } from "../data";

const MoreVideos = () => {
  return (
    <>
      <div className={`more-videos-section`}>
        <div className="more-videos-title">
          <img
            className="more-videos-title-image"
            src="src/assets/Yaomazhi-Ltd.png"
            alt="title Image Logo"
          />
          <a className="more-videos-title-link" href="#">
            Yaomazhi (Wuhan) Technology Co., Ltd
          </a>
        </div>
        <div className="more-videos">
          <h4>More Videos</h4>
          <div className="more-videos-main-container">
            {moreVideos.map((item, i) => (
              <div key={i} className="more-videos-container">
                <div className="video-preview">
                  <img src={item.imgUrl} alt="Video Preview" />
                </div>
                <a className="video-title" href={item.link}>
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreVideos;

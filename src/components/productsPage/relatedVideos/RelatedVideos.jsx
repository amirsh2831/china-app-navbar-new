import React from "react";
import "./RelatedVideos.scss";
import { ProductsVideos } from "../../../constants";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
const RelatedVideos = () => {
  return (
    <>
      <div className="products-page-more-videos-container">
        <h3>Related Videos</h3>
        <div className="products-page-more-videos-body">
          {ProductsVideos.map((item, i) => (
            <div className="products-page-more-videos-item">
              <div className="products-page-more-videos-preview">
                <img src={item.image} alt="More Videos Preview Image" />
                <div className="products-page-main-videos-play-button">
                  <PlayCircleFilledWhiteOutlinedIcon fontSize="large" />
                </div>
              </div>
              <div className="products-page-main-videos-info">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedVideos;

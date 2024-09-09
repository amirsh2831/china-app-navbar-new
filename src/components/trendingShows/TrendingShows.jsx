import React from "react";
import "./TrendingShows.scss";
import Shows from "./Shows/Shows";
const TrendingShows = () => {
  return (
    <>
      <div className="trending-shows-main-container">
        <div className="trending-shows-header">
          <div className="main-title">
            <h1>Trade Shows</h1>
            <h4>
              List of the trade shows Made-In-China.com will take part in.
            </h4>
          </div>
          <button className="trending-shows-view-button">View More</button>
        </div>
        <div className="trending-shows-content">
          <Shows />
        </div>
      </div>
    </>
  );
};

export default TrendingShows;

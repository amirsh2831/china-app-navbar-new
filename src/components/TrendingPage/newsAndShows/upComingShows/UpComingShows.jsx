import React from "react";
import { UpComingShowsData } from "../../../../constants";
import "./UpComingShows.scss";

const UpComingShows = () => {
  return (
    <>
      <div className="upcomming-shows">
        <div className="upcomming-shows-header">
          <h1>Upcomming Shows</h1>
          <a href="#">View More</a>
        </div>
        <div className="upcomming-shows-grid">
          {UpComingShowsData.map((item, i) => (
            <a href="#" key={i}>
              <img src={item.showsImage} alt="Upcomming Shows Images" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpComingShows;

import React from "react";
import UpComingShows from "./upComingShows/UpComingShows";
import TrendingShowsNews from "./News/TrendingShowsNews";
import "./NewsAndShows.scss";
const NewsAndShows = () => {
  return (
    <>
      <div className="news-and-shows">
        <UpComingShows />
        <TrendingShowsNews />
      </div>
    </>
  );
};

export default NewsAndShows;

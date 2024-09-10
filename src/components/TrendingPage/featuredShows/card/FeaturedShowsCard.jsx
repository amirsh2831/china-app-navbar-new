import React from "react";
import "./FeaturedShowsCard.scss";
const FeaturedShowsCard = ({ title, duration, location, imgUrl }) => {
  return (
    <div className="featured-shows-card">
      <div className="banner">
        <img src={imgUrl} alt="Featured Show Cards Banner" />
      </div>
      <div className="featured-shows-card-info">
        <h2>{title}</h2>
        <div className="featured-shows-card-information">
          <p>
            Duration: <span>{duration}</span>
          </p>
          <p>
            Location: <span>{location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedShowsCard;

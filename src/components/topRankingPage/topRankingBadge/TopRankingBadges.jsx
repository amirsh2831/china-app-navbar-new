import React from "react";
import "./TopRankingBadges.scss";
import { Badges } from "../data";
const TopRankingBadges = () => {
  return (
    <>
      <div className="top-ranking-badge-wrapper">
        {Badges.map((item, i) => (
          <div key={i} className="top-ranking-badge-item">
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default TopRankingBadges;

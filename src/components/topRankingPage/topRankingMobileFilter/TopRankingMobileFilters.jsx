import React from "react";
import "./TopRankingMobileFilters.scss";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import TopRankingFilters from "../topRankingFilters/TopRankingFilters";
const TopRankingMobileFilters = () => {
  return (
    <>
      <div className="top-ranking-mobile-filters">
        <div className="top-ranking-mobile-container">
          <div className="title">Recommended Rankings</div>
          <KeyboardArrowDownRoundedIcon />
          <div className="dropdown-container">
            <TopRankingFilters />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRankingMobileFilters;

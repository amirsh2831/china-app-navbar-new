import React from "react";
import AdsClickRoundedIcon from "@mui/icons-material/AdsClickRounded";
import "./LinksNomap.scss";
const LinksNomap = () => {
  return (
    <>
      <div className="nav-links">
        <div>
          <span>
            <AdsClickRoundedIcon />
          </span>
          <p className="icons_text">{item.text}</p>
        </div>
        <div>
          <span>
            <AdsClickRoundedIcon />
          </span>
          <p className="icons_text">{item.text}</p>
        </div>
        <div>
          <span>
            <AdsClickRoundedIcon />
          </span>
          <p className="icons_text">{item.text}</p>
        </div>
        <div>
          <span>
            <AdsClickRoundedIcon />
          </span>
          <p className="icons_text">{item.text}</p>
        </div>
      </div>
    </>
  );
};

export default LinksNomap;

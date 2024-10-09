import React from "react";
import { Navlinks } from "../data";
import AdsClickRoundedIcon from "@mui/icons-material/AdsClickRounded";
import { useMediaQuery } from "react-responsive";
import NavLinksDropDown from "../navLinksDropDown/NavLinksDropDown";
import "./Links.scss";
import { useState } from "react";
const Links = ({ scrollProps }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <>
      <div className="nav-links">
        {scrollProps ? (
          <div className="link-item">
            <span>
              <AdsClickRoundedIcon />
            </span>
            <p className="icons_text">Post My RFQ</p>
          </div>
        ) : isTabletOrMobile ? (
          <div className="link-item">
            <span>
              <AdsClickRoundedIcon />
            </span>
            <p className="icons_text">Post My RFQ</p>
          </div>
        ) : (
          Navlinks.map((item, i) => (
            <div
              class="link-item"
              key={item.text + i}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <span>{item.icon}</span>
              <p className="icons_text">{item.text}</p>
              {hoveredItem === item.id && <NavLinksDropDown id={item.id} />}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Links;

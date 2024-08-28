import React from "react";
import { Navlinks } from "../../constants";
import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded';
import { useMediaQuery } from "react-responsive";
const Links = ({scrollProps}) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <>
      <div className="nav-links">
        {scrollProps ? 
          (<div>
            <span><AdsClickRoundedIcon /></span>
            <p className="icons_text">Post My RFQ</p>
          </div>)
          :
          (isTabletOrMobile ? 
          (<div>
            <span><AdsClickRoundedIcon /></span>
            <p className="icons_text">Post My RFQ</p>
          </div>)
          :
          (Navlinks.map((item, i) => (
            <div key={item.text + i}>
              <span>{item.icon}</span>
              <p className="icons_text">{item.text}</p>
            </div>)
          )))
      }
      </div>
    </>
  );
};

export default Links;

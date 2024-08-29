import React from "react";
import { IoIosList } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const SubNavbar = () => {
  return (
    <>
      <div className="sub-nav">
        <div className="navbar">
          <div className="sub-flex">
            <div className="categories">
              <FormatListBulletedIcon fontSize="medium" />
              <p>All Categories</p>
              <KeyboardArrowDownRoundedIcon fontSize="medium" />
            <hr/>
              </div>
            <div className="sub-nav-links">
            <a href="#">
            Secured Trading Service
            </a>
            <a href="#">        
            Video Channel
            </a>
            <a href="#">
            Top-ranking Products
            </a>
            </div>
          </div>
          <div className="navigation-dropdown-section">
            <div className="flexbox">
              <p>Supply</p>
              <KeyboardArrowDownRoundedIcon fontSize="medium" />
            </div>
            <div className="flexbox">
              <p>Buyer</p>
              <KeyboardArrowDownRoundedIcon fontSize="medium" />
            </div>
            <hr />
            <div className="flexbox">
              <p>Help</p>
              <KeyboardArrowDownRoundedIcon fontSize="medium" />
            </div>
            <div className="flexbox">
              <p>Apps</p>
              <KeyboardArrowDownRoundedIcon fontSize="medium" />
            </div>
            <div className="flexbox">
              <p>English</p>
              <KeyboardArrowDownRoundedIcon fontSize="medium" />
            </div>
            <hr />
            <div className="flexbox">
              <p>Rules</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNavbar;

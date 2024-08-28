import React from "react";
import SearchBar from "./SearchBar";
import Links from "./Links.JSX";
import SubNavbar from "./SubNavbar";
import { useState, useEffect } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import "./Navbar.scss";
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  return (
    <>

        <div className="nav">
          <div className={`navbar ${scroll ? "sticky" : " "}`}>
            <img
              src="src/assets/Logo.png"
              alt="Main Logo"
              width={100}
              height={100}
              className="logo"
            />
            <div className="right-side">
            <div className="categories-resize">
              <div className="categories">
                <p>All Categories</p>
                <KeyboardArrowDownRoundedIcon fontSize="medium" />
                </div>
            </div>
            <SearchBar scrollProps={scroll}/>
            <Links scrollProps={scroll}/>
            </div>
          </div>
        </div>

          <SubNavbar />

    </>
  );
};

export default Navbar;

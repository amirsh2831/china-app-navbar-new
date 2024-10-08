import React from "react";
import SearchBar from "./searchbar/SearchBar.jsx";
import Links from "./links/Links.jsx";
import SubNavbar from "./subNavbar/SubNavbar";
import { useState, useEffect } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Navbar.scss";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Categories } from "./data";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <>
      <div className="nav">
        <div className={`navbar ${scroll ? "main-nav-sticky" : " "}`}>
          <div class="navbar-left-side">
            <div className="sidebar-icon">
              <button onClick={toggleDrawer(true)}>
                <MenuOutlinedIcon fontSize="medium" />
              </button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                <Sidebar />
              </Drawer>
            </div>
            <img
              src="src/assets/Logo.png"
              alt="Main Logo"
              width={100}
              height={100}
              className="main-navbar-logo"
            />
            <div class="search-icon-resize">
              <SearchOutlinedIcon fontSize="medium" />
            </div>
          </div>
          <div class="navbar-right-side">
            <div class="categories-resize">
              <div className="cat">
                <p>All Categories</p>
                <KeyboardArrowDownRoundedIcon fontSize="medium" />
              </div>
              <div class="dropdown-container">
                <ul class="dropdown-list">
                  {Categories.map((item) => (
                    <li class="dropdown-item">
                      <span>{item.icon}</span>
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <SearchBar scrollProps={scroll} />
            <Links scrollProps={scroll} />
          </div>
        </div>
      </div>

      <SubNavbar />
    </>
  );
};

export default Navbar;

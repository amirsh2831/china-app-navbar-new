import React from "react";
import SearchBar from "./SearchBar";
import Links from "./Links.JSX";
import SubNavbar from "./SubNavbar";
import { useState, useEffect } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Navbar.scss";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(true);
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
        <div className={`navbar ${scroll ? "sticky" : " "}`}>
          <div className="left-side">
            <div className="sidebar-icon">
              <Button onClick={toggleDrawer(true)} color="black">
                <MenuOutlinedIcon fontSize="medium" />
              </Button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                <Sidebar />
              </Drawer>
            </div>
            <img
              src="src/assets/Logo.png"
              alt="Main Logo"
              width={100}
              height={100}
              className="logo"
            />
            <div class="search-icon-resize">
              <SearchOutlinedIcon fontSize="medium" />
            </div>
          </div>
          <div className="right-side">
            <div className="categories-resize">
              <p>All Categories</p>
              <KeyboardArrowDownRoundedIcon fontSize="medium" />
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

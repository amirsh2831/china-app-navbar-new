import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import "./TrendingPageNavbar.scss";
import { Buyers, footerData, Lang, SupplySubMenu } from "../../constants";
import { Divider } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import TrendingPageSidebar from "./trendingPageSidebar/TrendingPageSidebar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
const TrendingPageNavbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="navbar">
      <div className="sidebar-menu-active">
        <button onClick={toggleDrawer(true)}>
          <MenuIcon color="black" />
        </button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <TrendingPageSidebar />
        </Drawer>
      </div>
      <div className="logo">
        <img
          src="public/assets/Image/logoNewNavbar.png"
          alt="Navigation Logo "
        />
      </div>
      <div className="nav-items">
        <ul className="nav-items-list">
          <li className="nav-items-list-item">
            <a href="#">Sign In</a>
          </li>
          <li className="nav-items-list-item">
            <a href="#">Join Free</a>
          </li>
          <li className="nav-items-list-item">
            <div className="navbar-item-title">
              <p>For Buyers</p>{" "}
              <KeyboardArrowDownRoundedIcon fontSize="medium" />
            </div>
            <div className="dropdown-container">
              <div className="dropdown-item-sections">
                <p className="title">Search Products & Suppliers</p>
                <ul>
                  {Buyers.Search.map((item, i) => (
                    <li key={i}>{item.text}</li>
                  ))}
                </ul>
              </div>
              <div className="dropdown-item-sections">
                <p className="trading-title">Sourcing Solutions</p>
                <ul>
                  {Buyers.sourcing.map((item, i) => (
                    <li key={i}>{item.text}</li>
                  ))}
                </ul>
              </div>
              <div className="dropdown-item-sections">
                <p className="title">Services</p>
                <ul>
                  {Buyers.Service.map((item, i) => (
                    <li key={i}>{item.text}</li>
                  ))}
                </ul>
              </div>
              <div className="dropdown-item-sections">
                <p className="title">Quick Links</p>
                <ul>
                  {Buyers.QuicLinks.map((item, i) => (
                    <li key={i}>{item.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
          <li className="nav-items-list-item">
            <div className="navbar-item-title">
              <p>For Suppliers</p>{" "}
              <KeyboardArrowDownRoundedIcon fontSize="medium" />
            </div>
            <div className="dropdown-item-sections">
              <div className="dropdown-container">
                <ul>
                  {/* Temprorary Content Loaded here  */}
                  {footerData.AboutUs.map((item, i) => (
                    <li key={i}>
                      <a href={item.link}>{item.text}</a>
                    </li>
                  ))}
                </ul>
                <Divider variant="fullWidth" component="ul" />
                <div className="for-suppliers-buttons">
                  <button>注册供应商</button>
                  <button>登录</button>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-items-list-item">
            <ShoppingCartOutlinedIcon fontSize="medium" /> <p>0</p>
          </li>
          <li className="nav-items-list-item">
            <div className="navbar-item-title">
              <PhoneAndroidOutlinedIcon fontSize="medium" />
              <p>Get Apps</p>
              <KeyboardArrowDownRoundedIcon fontSize="medium" />
            </div>
            <div className="dropdown-container">
              <h3>Download App!</h3>
              <h5>Explore App Exclusive Discounts</h5>
              <div className="icons">
                <img
                  className="barcode-img"
                  src="/public/assets/Image/code.png"
                  alt="barcode"
                />
                <div className="download-icons">
                  <img
                    src="/public/assets/Image/google.png"
                    alt="Google Play Icon"
                  />
                  <img src="/public/assets/Image/apple.png" alt="Apple Icon" />
                </div>
              </div>
            </div>
          </li>
          <li className="nav-items-list-item">
            <div className="navbar-item-title">
              <p>English</p>
              <KeyboardArrowDownRoundedIcon fontSize="medium" />
            </div>
            <div className="dropdown-container">
              <ul>
                {Lang.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrendingPageNavbar;

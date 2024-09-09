import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import "./TrendingPageNavbar.scss";
import { Buyers, Lang } from "../../constants";
const TrendingPageNavbar = () => {
  return (
    <div className="navbar">
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
            <p>For Buyers</p> <KeyboardArrowDownRoundedIcon fontSize="medium" />
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
                <p className="title">Sourcing Solutions</p>
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
            <p>For Suppliers</p>{" "}
            <KeyboardArrowDownRoundedIcon fontSize="medium" />
          </li>
          <li className="nav-items-list-item">
            <ShoppingCartOutlinedIcon fontSize="medium" /> <p>0</p>
          </li>
          <li className="nav-items-list-item">
            <PhoneAndroidOutlinedIcon fontSize="medium" />
            <p>Get Apps</p>
            <KeyboardArrowDownRoundedIcon fontSize="medium" />
          </li>
          <li className="nav-items-list-item">
            <p>English</p>
            <KeyboardArrowDownRoundedIcon fontSize="medium" />
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

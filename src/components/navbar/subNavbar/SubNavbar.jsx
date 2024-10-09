import React from "react";
// import { IoIosList } from "react-icons/io";
// import { FaChevronDown } from "react-icons/fa6";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Buyers, HelpSubMenu, SupplySubMenu, Categories, Lang } from "../data";
import "./subNavbar.scss";
const SubNavbar = () => {
  return (
    <>
      <div className="sub-nav" id="sub">
        <div className="sub-navbar">
          <div className="sub-flex">
            <div className="categories">
              <div class="dropdown-container">
                <ul class="dropdown-list">
                  {Categories.map((item) => (
                    <li class="dropdown-item">
                      <a href={item.link}>
                        <span>{item.icon}</span>
                        <p>{item.text}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cat">
                <FormatListBulletedIcon fontSize="medium" />
                <p>All Categories</p>
                <span>
                  <KeyboardArrowDownRoundedIcon
                    fontSize="medium"
                    sx={{ paddingTop: "8px" }}
                  />
                </span>
              </div>
              <hr />
            </div>
            <div className="sub-nav-links">
              <a href="#">Secured Trading Service</a>
              <a href="#">Video Channel</a>
            </div>
          </div>
          <div className="navigation-dropdown-section">
            <div class="flexbox">
              <p>Supply</p>
              <span>
                <KeyboardArrowDownRoundedIcon fontSize="small" />
              </span>

              <div class="dropdown-container">
                <div class="single-side">
                  <ul class="dropdown-list">
                    {SupplySubMenu.map((item, i) => (
                      <li key={i} class="dropdown-item">
                        <a href={item.link}>{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flexbox">
              <p>Buyer</p>
              <span>
                <KeyboardArrowDownRoundedIcon fontSize="small" />
              </span>
              <div class="dropdown-container">
                <div class="left">
                  <p class="title">Service</p>
                  <ul class="dropdown-list">
                    {Buyers.Service.map((item) => (
                      <li class="dropdown-item">{item.text}</li>
                    ))}
                  </ul>
                </div>
                <div class="right">
                  <p class="title">Search</p>
                  <ul class="dropdown-list">
                    {Buyers.Search.map((item) => (
                      <li class="dropdown-item">{item.text}</li>
                    ))}
                  </ul>
                  <p class="title">Quick Links</p>
                  <ul class="dropdown-list">
                    <br />
                    {Buyers.QuicLinks.map((item) => (
                      <li class="dropdown-item">{item.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="navigation-dropdown-section-middle">
              <div className="flexbox">
                <p>Help</p>
                <span>
                  <KeyboardArrowDownRoundedIcon fontSize="small" />
                </span>
                <div class="dropdown-container">
                  <div class="single-side">
                    <ul class="dropdown-list">
                      {HelpSubMenu.map((item, i) => (
                        <li key={i} class="dropdown-item">
                          <a href={item.link}>{item.text}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flexbox">
                <p>Apps</p>
                <span>
                  <KeyboardArrowDownRoundedIcon fontSize="small" />
                </span>
                <div className="dropdown-container">
                  <div className="single-side">
                    <div className="app-box">
                      <div className="title">
                        <p className="header">Download App!</p>
                        <p className="sub-header">
                          Explore App Exclusive Discounts
                        </p>
                      </div>
                      <div className="link-box">
                        <div className="left">
                          <p>For Buyers</p>
                          <img
                            className="play-store-image"
                            width={64}
                            height={24}
                            src="/src/assets/Google_Play_Store.png"
                            alt="google play button"
                          />
                          <img
                            className="apple-store-image"
                            src="/src/assets/App_store_Apple.png"
                            alt="google play button"
                          />
                        </div>
                        <div className="right">
                          <img
                            src="/src/assets/QrCode.png"
                            alt="google play button"
                          />
                        </div>
                      </div>
                      <div className="link-box">
                        <div className="left">
                          <p>For Suppliers</p>
                          <img
                            className="play-store-image"
                            width={64}
                            height={24}
                            src="/src/assets/Google_Play_Store.png"
                            alt="google play button"
                          />
                          <img
                            className="apple-store-image"
                            src="/src/assets/App_store_Apple.png"
                            alt="google play button"
                          />
                        </div>
                        <div className="right">
                          <img
                            src="/src/assets/QrCode.png"
                            alt="google play button"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flexbox">
                <p>English</p>
                <span>
                  <KeyboardArrowDownRoundedIcon fontSize="small" />
                </span>
                <div class="dropdown-container">
                  <div class="lang">
                    {Lang.map((item) => (
                      <li class="dropdown-item">
                        <a>{item.text}</a>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
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

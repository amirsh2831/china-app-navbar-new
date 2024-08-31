import React from "react";
// import { IoIosList } from "react-icons/io";
// import { FaChevronDown } from "react-icons/fa6";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Buyers } from "../../constants";
import { Lang } from "../../constants";
import { Categories } from "../../constants";
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
              <hr />
            </div>
            <div className="sub-nav-links">
              <a href="#">Secured Trading Service</a>
              <a href="#">Video Channel</a>
              <a href="#">Top-ranking Products</a>
            </div>
          </div>
          <div className="navigation-dropdown-section">
            <div class="flexbox">
              <p>Supply</p>
              <KeyboardArrowDownRoundedIcon fontSize="medium" />

              <div class="dropdown-container">
                <div class="single-side">
                  <ul class="dropdown-list">
                    <li class="dropdown-item">Solution Sprints</li>
                    <li class="dropdown-item">Service Synergy</li>
                    <li class="dropdown-item">Versatile Ventures</li>
                    <li class="dropdown-item">Task Triumph</li>
                    <li class="dropdown-item">Problem Solvers Co</li>
                    <li class="dropdown-item">Seamless Solutions</li>
                    <li class="dropdown-item">Resourceful Rendezvous</li>
                    <li class="dropdown-item">Swift Support Services</li>
                    <li class="dropdown-item">Skillful Solutions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flexbox">
              <p>Buyer</p>
              <KeyboardArrowDownRoundedIcon fontSize="medium" />
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
                <KeyboardArrowDownRoundedIcon fontSize="medium" />
                <div class="dropdown-container">
                  <div class="single-side">
                    <ul class="dropdown-list">
                      <li class="dropdown-item">Why Made-in-China.com</li>
                      <li class="dropdown-item">How do we audit suppliers</li>
                      <li class="dropdown-item">How do we secure payment</li>
                      <li class="dropdown-item">Submit a Complaint</li>
                      <li class="dropdown-item">Contact Us</li>
                      <li class="dropdown-item">FAQ</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flexbox">
                <p>Apps</p>
                <KeyboardArrowDownRoundedIcon fontSize="medium" />
              </div>
              <div className="flexbox">
                <p>English</p>
                <KeyboardArrowDownRoundedIcon fontSize="medium" />
                <div class="dropdown-container">
                  <div class="lang">
                    {Lang.map((item) => (
                      <li class="dropdown-item">{item.text}</li>
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

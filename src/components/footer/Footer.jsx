import React from "react";
import { footerData, footerLinks, Lang } from "../../constants";
import "./Footer.scss";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { X } from "@mui/icons-material";
import { Divider } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-map">
          <div className="box-1">
            <h4 className="title">Discover Products & Suppliers</h4>
            <ul>
              {footerData.Discover.map((item, i) => (
                <li>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
            <h4 className="title">Featured Service</h4>
            <ul>
              {footerData.FeaturedServices.map((item, i) => (
                <li>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="box-2">
            <h4 className="title">About Us</h4>
            <ul>
              {footerData.AboutUs.map((item, i) => (
                <li>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
            <h4 className="title">Help</h4>
            <ul>
              {footerData.Help.map((item, i) => (
                <li>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="box-3">
            <h4 className="title">Language Options</h4>
            <ul>
              {Lang.map((item, i) => (
                <li>{item.text}</li>
              ))}
            </ul>
          </div>
          <div className="box-4">
            <button className="button1"></button>
            <h4>Co brands</h4>
            <button className="button2"></button>
            <br />
            <button className="button3"></button>
            <br />
            <button className="button4"></button>
            <br />
            <button className="button5"></button>
          </div>
        </div>
        <div className="footer-map-resize">
          <div className="footer-resize-menu-item">
            <h4 className="title">Discover Products & Suppliers</h4>
            <KeyboardArrowDownRoundedIcon
              fontSize="medium"
              className="chevron"
            />
            <div class="footer-menu-container">
              <ul class="footer-menu-list">
                {footerData.Discover.map((item) => (
                  <li class="footer-menu-list-item">{item.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-resize-menu-item">
            <h4 className="title">Featured Service</h4>
            <KeyboardArrowDownRoundedIcon
              fontSize="medium"
              className="chevron"
            />

            <div class="footer-menu-container">
              <ul class="footer-menu-list">
                {footerData.FeaturedServices.map((item) => (
                  <li class="footer-menu-list-item">{item.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-resize-menu-item">
            <h4 className="title">About Us</h4>
            <KeyboardArrowDownRoundedIcon
              fontSize="medium"
              className="chevron"
            />

            <div class="footer-menu-container">
              <ul class="footer-menu-list">
                {footerData.AboutUs.map((item) => (
                  <li class="footer-menu-list-item">{item.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-resize-menu-item">
            <h4 className="title">Help</h4>
            <KeyboardArrowDownRoundedIcon
              fontSize="medium"
              className="chevron"
            />

            <div class="footer-menu-container">
              <ul class="footer-menu-list">
                {footerData.Help.map((item) => (
                  <li class="footer-menu-list-item">{item.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="socials">
          <div className="box-1">
            <p>Free App:</p>
            <button className="apple-button">
              <AppleIcon /> App Store
            </button>
            <button className="google-button">
              <AdbIcon /> Google Play
            </button>
          </div>
          <div className="box-2">
            <p>Text Massenger: </p>
            <a>
              <img src="/src/assets/download.png" />
            </a>
          </div>
          <div>
            <p>FollowUs: </p>
            <div className="icons">
              <FacebookIcon fontSize="medium" />
              <X fontSize="medium" />
              <InstagramIcon fontSize="medium" />
              <YouTubeIcon fontSize="medium" />
              <PinterestIcon fontSize="medium" />
              <LinkedInIcon fontSize="medium" />
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="first-line">
            {footerLinks.firstLine.map((item, i) => (
              <a href={item.link} key={i}>
                {item.text}
                <hr />
              </a>
            ))}
          </div>
          <div className="second-line">
            {footerLinks.secondLine.map((item, i) => (
              <a href={item.link} key={i}>
                {item.text}
                <hr />
              </a>
            ))}
          </div>
          <div className="third-line">
            {footerLinks.thirdLine.map((item, i) => (
              <a href={item.link} key={i}>
                {item.text}
                <hr />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

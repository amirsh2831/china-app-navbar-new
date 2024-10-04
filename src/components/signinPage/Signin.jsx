import React from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import "./Signin.scss";
import { Lang, SigninFooter } from "./data";
import { useState } from "react";
import SigninComp from "../signinComp/SigninComp";
const Signin = () => {
  return (
    <>
      <div className="signin-main">
        <div className="signin-main-container">
          <div className="signin-main-header">
            <div className="signin-main-header-logo-lang">
              <a href="#">
                <img
                  alt="Made In China Main Logo"
                  src="assets/Image/Signin/logo.png"
                />
              </a>
              <div className="signin-main-header-lang">
                <div className="lang-container">
                  <p>English</p>
                  <span>
                    <ExpandMoreRoundedIcon fontSize="inherit" />
                  </span>
                  <div className="dropdown-container">
                    <ul>
                      {Lang.map((item, i) => (
                        <li className="dropdown-item" key={i}>
                          <a href="#">{item.text}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="signin-main-header-help">
              <div className="lang-container-resize">
                <p>English</p>
                <span>
                  <ExpandMoreRoundedIcon fontSize="inherit" />
                </span>
                <div className="dropdown-container">
                  <ul>
                    {Lang.map((item, i) => (
                      <li className="dropdown-item" key={i}>
                        <a href="#">{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="helper-link">
                <p> Need Help ?</p>
                <a href="#">Click Here</a>
              </div>
            </div>
          </div>
          <div className="signin-main-body">
            <div className="left">
              <a href="#">
                <img src="assets/Image/Signin/logon.jpg" alt="Main Form Left" />
              </a>
            </div>
            <SigninComp />
            {/* {qrSignin ? (
              <div className="right">
                <div onClick={handleQrSelec}>
                  <img
                    className="qr-code"
                    src="assets/Image/Signin/computer-normal.png"
                    alt="Sigin in wit qr code"
                  />
                </div>
                <div className="signin-type-lable">
                  Sign in with Your Account
                </div>

                <div className="signin-main-form-qr">
                  <img src="assets/Image/Signin/QrCode.png" alt="Qr Code" />
                  <p>Sign in by scanning a QR code</p>
                </div>
                <div className="qr-link">
                  <p>
                    Use the QR code in <a href="#">中国制造网App</a> or{" "}
                    <a href="#">made-in-china.com App</a> to scan
                  </p>
                </div>
              </div>
            ) : (
              <div className="right">
                <div onClick={handleQrSelec}>
                  <img
                    className="qr-code"
                    src="assets/Image/Signin/qr-normal.png"
                    alt="Sigin in wit qr code"
                  />
                </div>
                <div className="signin-type-lable">Sign in with a QR code</div>
                <div className="signin-main-form">
                  <div className="signin-main-form-input">
                    <label htmlFor="email">Email Address or Member ID</label>
                    <input id="email" />
                  </div>
                  <div className="signin-main-form-input">
                    <label htmlFor="password">Password</label>
                    <input id="password" />
                  </div>
                  <div className="signin-main-submit">
                    <button type="submit" className="submit">
                      Sign In
                    </button>
                    <div className="signin-form-help">
                      <p>Forgot your password?</p>
                      <p>
                        New User ? <a href="#">Join Free</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="signin-main-form-options">
                  <p>Sign in With</p>
                  <div className="logos">
                    <a href="#">
                      <img
                        alt="Login With Face Book"
                        src="assets/Image/Signin/facebook-logo.svg"
                      />
                    </a>
                    <a href="#">
                      <img
                        alt="Login With Face Book"
                        src="assets/Image/Signin/linkedin-logo.svg"
                      />
                    </a>

                    <a href="#">
                      <img
                        alt="Login With Face Book"
                        src="assets/Image/Signin/x-logo.svg"
                      />
                    </a>

                    <a href="#">
                      <img
                        alt="Login With Face Book"
                        src="assets/Image/Signin/google-logo.svg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
        <div className="signin-main-footer">
          <div className="signin-main-footer-header">
            {SigninFooter.firstLine.map((item, i) => (
              <div key={i}>
                <a href="#">{item.text}</a>
                <hr />
              </div>
            ))}
          </div>
          <div className="signin-main-footer-body">
            {SigninFooter.secondLine.map((item, i) => (
              <div key={i}>
                <a href="#">{item.text}</a>
                <hr />
              </div>
            ))}
          </div>
          <div className="copy-right">
            <p>
              Copyright © 1998-2024
              <a href="#">Focus Technology Co., Ltd.</a>
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

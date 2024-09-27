import React from "react";
import "./SigninComp.scss";
import { useState } from "react";
const SigninComp = () => {
  const handleQrSelec = () => {
    setQrSignin(!qrSignin);
  };
  const [qrSignin, setQrSignin] = useState(false);
  return (
    <>
      {qrSignin ? (
        <div className="made-in-china-signin-component">
          <div onClick={handleQrSelec}>
            <img
              className="signin-qr-code"
              src="assets/Image/Signin/computer-normal.png"
              alt="Sigin in wit qr code"
            />
          </div>
          <div className="signin-type-lable">Sign in with Your Account</div>

          <div className="signin-main-form-qr">
            <img src="assets/Image/Signin/QrCode.png" alt="Qr Code" />
            <p>Sign in by scanning a QR code</p>
          </div>
          <div className="signin-qr-link">
            <p>
              Use the QR code in <a href="#">中国制造网App</a> or{" "}
              <a href="#">made-in-china.com App</a> to scan
            </p>
          </div>
        </div>
      ) : (
        <div className="made-in-china-signin-component">
          <div onClick={handleQrSelec}>
            <img
              className="signin-qr-code"
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
      )}
    </>
  );
};

export default SigninComp;

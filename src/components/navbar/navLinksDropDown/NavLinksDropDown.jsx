import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import "./NavLinksDropDown.scss";
const NavLinksDropDown = ({ id }) => {
  switch (id) {
    case 1: {
      return (
        <div className="dropdown-container">
          <div className="post-faq-text">
            <p>Tell us what you need and try the easy way to get quotes!</p>
          </div>
        </div>
      );
    }
    case 2: {
      return (
        <div class="dropdown-container">
          <div className="call-to-action-submenu">
            <button class="sign-in">Sign In</button>
            <button class="join">Join</button>
          </div>
          <div className="call-to-action-middle">
            <Divider>Or</Divider>
            <div className="call-to-action-icons">
              <img src="src/assets/facebook.png" clas />
              <img src="src/assets/linkdin.png" />
              <XIcon />
              <GoogleIcon />
            </div>
          </div>
          <div class="call-to-action-text">
            <p>
              By clicking Sign In, Join Free or Continue with Facebook,
              Linkedin, Twitter, Google, I agree to the <a>User Agreement</a>{" "}
              and the <a>Privacy Policy</a>
            </p>
          </div>
          <Divider variant="fullWidth" component="div" />
          <ul className="list">
            {[
              "Messages",
              "Quotes",
              "Orders",
              "Favorites",
              "Browsing History",
            ].map((text, index) => (
              <li>{text}</li>
            ))}
            <Divider
              variant="fullWidth"
              component="div"
              sx={{ marginTop: "16px" }}
            />
            <br />
            <li className="post-sourcing-request">Post Sourcing Request</li>
          </ul>
        </div>
      );
    }
    case 3: {
      return (
        <div className="dropdown-container">
          <p>Sign in to view the new messages</p>
          <div className="call-to-action-submenu">
            <button class="sign-in">Sign In</button>
            <button class="join">Join</button>
          </div>
        </div>
      );
    }
    default: {
      return null;
    }
  }
};

export default NavLinksDropDown;

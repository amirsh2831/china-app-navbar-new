import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Box from "@mui/material/Box";
import "./Sidebar.scss";
import { SupplySubMenu } from "../../constants";

const Sidebar = () => {
  return (
    <>
      <Box sx={{ width: 270 }} role="presentation">
        <List>
          <div className="sidebar-header">
            <CloseOutlinedIcon />
            <span>Menu</span>
          </div>
          <Divider variant="fullWidth" component="li" />

          <div className="call-to-action">
            <button class="sign-in">Sign In</button>
            <button class="join">Join</button>
          </div>
          <Divider>Or</Divider>
          <div className="call-to-action-icons">
            <img src="src/assets/facebook.png" />
            <img src="src/assets/linkdin.png" />
            <XIcon />
            <GoogleIcon />
          </div>
          <div class="call-to-action-text">
            <p>
              By clicking Sign In, Join Free or Continue with
              <br />
              Facebook, Linkedin, Twitter, Google, I agree to
              <br />
              the <a>User Agreement</a> and the <a>Privacy Policy</a>
            </p>
          </div>
          <Divider variant="fullWidth" component="div" />
          {[
            "Messages",
            "Quotes",
            "Orders",
            "Favorites",
            "Browsing History",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} disablePadding />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider variant="fullWidth" component="div" />
        <List disablePadding>
          <ListItem disablePadding sx={{ flexGrow: "1" }}>
            <ListItemButton>
              <ListItemText>Buyer</ListItemText>
              <ListItemIcon sx={{ justifyContent: "right" }}>
                <ChevronRightRoundedIcon fontSize="medium" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className="list">
            <ListItemButton>
              <ListItemText>Supplier</ListItemText>
              <ListItemIcon sx={{ justifyContent: "right" }}>
                <ChevronRightRoundedIcon fontSize="medium" />
              </ListItemIcon>
            </ListItemButton>
            <div className="sub-menu-container">
              <ul className="sub-menu-list">
                {SupplySubMenu.map((item, i) => (
                  <li key={i} className="sub-menu-list-item">
                    <a href={item.link}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Help</ListItemText>
              <ListItemIcon sx={{ justifyContent: "right" }}>
                <ChevronRightRoundedIcon fontSize="medium" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Apps</ListItemText>
              <ListItemIcon sx={{ justifyContent: "right" }}>
                <ChevronRightRoundedIcon fontSize="medium" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>English</ListItemText>
              <ListItemIcon sx={{ justifyContent: "right" }}>
                <ChevronRightRoundedIcon fontSize="medium" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Sidebar;

import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Lang, footerData, Buyers } from "../../../constants";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./TrendingPageSidebar.scss";
const TrendingPageSidebar = () => {
  return (
    <>
      <Box disablePadding sx={{ width: 250 }} role="presentation">
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Sign in"} />
            </ListItemButton>
          </ListItem>
          <Divider varient="fullWidth" component="li" />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Login"} />
            </ListItemButton>
          </ListItem>
          <Divider varient="fullWidth" component="li" />

          <ListItem disablePadding>
            <ListItemButton>
              <div className="sidebar-items-container">
                <div className="sidebar-item">
                  <ListItemText primary={"For Buyers"} />
                  <ListItemIcon disablePadding>
                    <KeyboardArrowRightOutlinedIcon />
                  </ListItemIcon>
                </div>
                <div className="dropleft-container">
                  <p className="title">Search Products & Suppliers</p>
                  <ul>
                    {Buyers.Search.map((item, i) => (
                      <li key={i}>{item.text}</li>
                    ))}
                  </ul>

                  <p className="title">Sourcing Solutions</p>
                  <ul>
                    {Buyers.sourcing.map((item, i) => (
                      <li key={i}>{item.text}</li>
                    ))}
                  </ul>

                  <p className="title">Services</p>
                  <ul>
                    {Buyers.Service.map((item, i) => (
                      <li key={i}>{item.text}</li>
                    ))}
                  </ul>

                  <p className="title">Quick Links</p>
                  <ul>
                    {Buyers.QuicLinks.map((item, i) => (
                      <li key={i}>{item.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ListItemButton>
          </ListItem>
          <Divider varient="fullWidth" component="li" />

          <ListItem disablePadding>
            <ListItemButton>
              <div className="sidebar-items-container">
                <div className="sidebar-item">
                  <ListItemText primary={"For Suppliers"} />
                  <ListItemIcon disablePadding>
                    <KeyboardArrowRightOutlinedIcon />
                  </ListItemIcon>
                </div>
                <div className="dropleft-container">
                  <ul>
                    {/* Temprorary Content Loaded here  */}
                    {footerData.AboutUs.map((item, i) => (
                      <li key={i}>
                        <a href={item.link}>{item.text}</a>
                      </li>
                    ))}
                  </ul>
                  {/* <Divider variant="fullWidth" component="ul" /> */}
                  <div className="for-suppliers-buttons">
                    <button>注册供应商</button>
                    <button>登录</button>
                  </div>
                </div>
              </div>
            </ListItemButton>
          </ListItem>
          <Divider varient="fullWidth" component="li" />
          <ListItem disablePadding>
            <ListItemButton>
              <div className="sidebar-items-container">
                <div className="sidebar-item">
                  <ListItemText primary={"English"} />
                  <ListItemIcon disablePadding>
                    <KeyboardArrowRightOutlinedIcon />
                  </ListItemIcon>
                </div>
                <div className="dropleft-container">
                  <ul>
                    {Lang.map((item, i) => (
                      <li key={i}>{item.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ListItemButton>
          </ListItem>
          <Divider varient="fullWidth" component="li" />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Shopping Cart"} />
            </ListItemButton>
          </ListItem>
          <Divider varient="fullWidth" component="li" />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PhoneAndroidOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Get Apps"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default TrendingPageSidebar;

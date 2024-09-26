import React from "react";
import "./SuppliersMobilieSubNav.scss";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useState } from "react";
import SuppliersMobileSidebar from "../suppliersMobileSidebar/SuppliersMobileSidebar";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const SuppliersMobilieSubNav = () => {
  const [navItemSelected, setNavItemSelected] = useState(1);
  const handleSetNavbarItemSelected = (id) => {
    setNavItemSelected(id);
  };
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <>
      <div className="suppliers-page-mobile-sub-navbar">
        <nav className="suppliers-page-mobile-sub-navbar-nav">
          <ul>
            <li
              className={`suppliers-mobile-sub-navbar-nav-items ${
                navItemSelected === 1 &&
                "suppliers-page-mobile-sub-navbar-active-item"
              }`}
              onClick={() => handleSetNavbarItemSelected(1)}
            >
              Products
            </li>
            <li
              className={`suppliers-mobile-sub-navbar-nav-items ${
                navItemSelected === 2 &&
                "suppliers-page-mobile-sub-navbar-active-item"
              }`}
              onClick={() => handleSetNavbarItemSelected(2)}
            >
              Suppliers
            </li>
            <li
              className={`suppliers-mobile-sub-navbar-nav-items ${
                navItemSelected === 3 &&
                "suppliers-page-mobile-sub-navbar-active-item"
              }`}
              onClick={() => handleSetNavbarItemSelected(3)}
            >
              Secured Trading
            </li>
          </ul>
        </nav>

        <div className="suppliers-page-mobile-sub-navbar-filter">
          <button onClick={toggleDrawer("right", true)}>
            <FilterAltOutlinedIcon
              fontSize="inherit"
              id="suppliers-page-mobile-sub-navbar-filter-icon"
            />

            <p>Filter</p>
          </button>
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            <SuppliersMobileSidebar anchor={"right"} />
          </SwipeableDrawer>
        </div>
      </div>
    </>
  );
};

export default SuppliersMobilieSubNav;

import React from "react";
import "./SuppliersMobileSidebar.scss";

import SuppliersMobileSidebarCategories from "./suppliersMobileSidebarCategories/SuppliersMobileSidebarCategories";
const SuppliersMobileSidebar = ({ anchor }) => {
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
      <div className="suppliers-page-moblie-sub-navbar-sidebar-container">
        <SuppliersMobileSidebarCategories />
        <SuppliersMobileSidebarCategories />
        <SuppliersMobileSidebarCategories />
        <SuppliersMobileSidebarCategories />
        <div className="suppliers-page-mobile-sub-navbar-sidebar-filters-save">
          <button id="suppliers-mobile-sidebar-save-button">Done</button>
          <button id="suppliers-mobile-sidebar-reset-button">Reset</button>
        </div>
      </div>
    </>
  );
};

export default SuppliersMobileSidebar;

import React from "react";
import "./SuppliersMainTabs.scss";
import { useState } from "react";
const SuppliersMainTabs = () => {
  const [active, setActive] = useState(1);
  const handleActive = (id) => {
    setActive(id);
  };
  return (
    <>
      <div className="main-suppliers-page-tab-navigation">
        <div
          className={`main-suppliers-page-tab-navigation-item-1 ${
            active === 1 ? "main-suppliers-page-tab-navigation-active" : " "
          }`}
          onClick={() => handleActive(1)}
        >
          Product List
        </div>
        <div
          className={`main-suppliers-page-tab-navigation-item-1 ${
            active === 2 ? "main-suppliers-page-tab-navigation-active" : " "
          }`}
          onClick={() => handleActive(2)}
        >
          Suppliers List
        </div>
        <div
          className={`main-suppliers-page-tab-navigation-item-1 ${
            active === 3 ? "main-suppliers-page-tab-navigation-active" : " "
          }`}
          onClick={() => handleActive(3)}
        >
          Secured Trading Service
        </div>
      </div>
    </>
  );
};

export default SuppliersMainTabs;

import React from "react";
import { SuppliersAnnualRevenue } from "../../data";
import { useState } from "react";
import "./SupplierMoblieSidebarCategories.scss";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

const SuppliersMobileSidebarCategories = () => {
  const [more, SetMore] = useState(false);
  const [filter, setFilter] = useState([]);
  const handleMoreLess = () => {
    SetMore(!more);
  };
  const handleFilter = (itemId) => {
    if (filter.includes(itemId)) {
      // Deselect: Remove the item
      setFilter((prev) => prev.filter((i) => i !== itemId));
    } else {
      // Select: Add the item
      setFilter((prev) => [...prev, itemId]);
    }
  };
  const slciedItems = SuppliersAnnualRevenue.slice(0, 4);
  return (
    <>
      <div className="suppliers-page-mobile-sub-navbar-sidebar-categories">
        <div className="suppliers-page-mobile-sub-navbar-sidebar-categories-header">
          <h3>Annual Revenue</h3>
          <button
            className="suppliers-more-less-secondary"
            onClick={handleMoreLess}
          >
            {more ? "Less" : "More"}
            {more ? (
              <ExpandLessRoundedIcon fontSize="inherit" />
            ) : (
              <ExpandMoreRoundedIcon fontSize="inherit" />
            )}
          </button>
        </div>
        <ul className="suppliers-page-mobile-sub-navbar-sidebar-categories-items-list">
          {more
            ? SuppliersAnnualRevenue.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleFilter(item.id)}
                  style={{
                    backgroundColor: `${
                      filter.includes(item.id) ? "crimson" : ""
                    }`,
                    color: `${filter.includes(item.id) ? "white" : ""}`,
                  }}
                >
                  {item.text}
                  <span> ({item.number})</span>
                </li>
              ))
            : slciedItems.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleFilter(item.id)}
                  style={{
                    backgroundColor: `${
                      filter.includes(item.id) ? "crimson" : ""
                    }`,
                    color: `${filter.includes(item.id) ? "white" : ""}`,
                  }}
                >
                  {item.text}
                  <span> ({item.number})</span>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
};

export default SuppliersMobileSidebarCategories;

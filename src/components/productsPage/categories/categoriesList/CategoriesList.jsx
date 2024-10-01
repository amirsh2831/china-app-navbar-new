import React from "react";
import { ProductsCategories } from "../../../../constants";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { suppliersCatCategries } from "../../../../constants/index";
import { useState } from "react";
import "./CategoriesList.scss";
const CategoriesList = ({ type }) => {
  const [more, setMore] = useState(false);
  const handleMoreLess = () => {
    setMore(!more);
  };
  const slciedItems = suppliersCatCategries.slice(0, 5);

  switch (type) {
    case "regular": {
      return (
        <>
          <ul className="products-page-categories-list">
            {ProductsCategories.map((item, i) => (
              <li key={i}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </>
      );
    }
    case "moreList": {
      return (
        <>
          <div className="products-main-page-categories-item-container">
            <ul className="products-main-page-categories-item-list">
              {more
                ? suppliersCatCategries.map((item, i) => (
                    <li key={i}>
                      {item.text}
                      <span> ({item.number})</span>
                    </li>
                  ))
                : slciedItems.map((item, i) => (
                    <li key={i}>
                      {item.text}
                      <span> ({item.number})</span>
                    </li>
                  ))}
            </ul>
            <button className="products-more-less" onClick={handleMoreLess}>
              {more ? "Less" : "More"}
            </button>
          </div>
        </>
      );
    }
    case "searchbox": {
      return (
        <>
          <div className="products-page-categories-list-item-searchbox">
            <input placeholder="Enter Attribiutes" />
            <button>
              <SearchOutlinedIcon />
            </button>
          </div>
        </>
      );
    }
    case "checkbox": {
      return (
        <>
          <div className="products-page-categories-checkbox-list">
            <div className="products-page-categoties-checkbox-list-contaier">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1">OEM/ODM</label>
            </div>
            <div className="products-page-categoties-checkbox-list-contaier">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1">OEM/ODM</label>
            </div>
            <div className="products-page-categoties-checkbox-list-contaier">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1">OEM/ODM</label>
            </div>
            <div className="products-page-categoties-checkbox-list-contaier">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1">OEM/ODM</label>
            </div>
          </div>
        </>
      );
    }
  }
};

export default CategoriesList;

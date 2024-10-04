import React from "react";
import { useState } from "react";
import { suppliersCatCategries } from "../../data";
const NoOfEmplyees = () => {
  const [more, SetMore] = useState(false);
  const handleMoreLess = () => {
    SetMore(!more);
  };
  const slciedItems = suppliersCatCategries.slice(0, 4);
  return (
    <>
      <div className="suppliers-main-page-categories-item-container">
        <h3>No. Of Emplyees</h3>
        <button
          className="suppliers-more-less-secondary"
          onClick={handleMoreLess}
        >
          {more ? "Less" : "More"}
        </button>
        <ul className="suppliers-main-page-categories-item-list">
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
        <button className="suppliers-more-less" onClick={handleMoreLess}>
          {more ? "Less" : "More"}
        </button>
      </div>
    </>
  );
};

export default NoOfEmplyees;

import React from "react";
import "./SuppliersRecommended.scss";
import { TrendingPageLinks } from "../data";
const SuppliersRecommended = () => {
  return (
    <>
      <div className="suppliers-page-recommended-products">
        <h3> Recommended Suppliers</h3>
        <ul className="suppliers-page-recommended-products-list">
          {TrendingPageLinks.RecommendedSupplier.map((item, i) => (
            <li key={i}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SuppliersRecommended;

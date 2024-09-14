import React from "react";
import "./Contentslider.scss";
import ProductSlider from "./productSlider/ProductSlider";
import { useState } from "react";
const Contentslider = ({ cat, products }) => {
  // const [catTitle, setCatTitle] = useState("all");
  // const handleCatId = (catTitle) => {
  //   setCatTitle(catTitle);
  // };

  return (
    <>
      <div className="products">
        <ul className="products-cat">
          {cat.map((item, i) => (
            <li key={i} className="cat-item">
              {item}
            </li>
          ))}
        </ul>
        <div className="products-sldier">
          <ProductSlider product={products} />
        </div>
      </div>
    </>
  );
};

export default Contentslider;

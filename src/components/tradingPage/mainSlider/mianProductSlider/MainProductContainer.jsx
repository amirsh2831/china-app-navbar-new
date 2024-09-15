import React from "react";
import "./MainProductContainer.scss";
import MainProductSlider from "./slider/MainProductSlider";
const MainProductContainer = ({ products, cat }) => {
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
          <MainProductSlider product={products} />
        </div>
      </div>
    </>
  );
};

export default MainProductContainer;

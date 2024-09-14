import React from "react";
import "./ProductSlider.scss";
import ProductCard from "../productCard/ProductCard";
export const ProductSlider = ({ product }) => {
  return (
    <>
      <div className="products-container">
        {product.map((item, i) => (
          <ProductCard
            key={i}
            image={item.image}
            title={item.title}
            type={item.type}
            orders={item.order}
          />
        ))}
      </div>
    </>
  );
};
export default ProductSlider;

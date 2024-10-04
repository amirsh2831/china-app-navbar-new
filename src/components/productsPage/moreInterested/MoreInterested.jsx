import React from "react";
import "./MoreInterested.scss";
import { ProductsAlsoInterested } from "../data";
import { useState } from "react";
const MoreInterested = () => {
  const [more, setMore] = useState(false);
  const handleMore = () => {
    setMore(!more);
  };
  return (
    <>
      <div className="products-page-also-interested">
        <h3>You may alo be interested in</h3>
        <div className="products-page-also-interested-item-container">
          {ProductsAlsoInterested.alsoInterested.map((item, i) => (
            <div key={i} className="products-page-also-interested-items">
              {item}
            </div>
          ))}
        </div>
        <h3>Wholesale & Price</h3>
        <div className="products-page-also-interested-item-container">
          {ProductsAlsoInterested.Wholsale.map((item, i) => (
            <div key={i} className="products-page-also-interested-items">
              {item}
            </div>
          ))}
        </div>
        {more && (
          <>
            <h3>Recommended Suppliers</h3>
            <div className="products-page-also-interested-item-container">
              {ProductsAlsoInterested.Recommended.map((item, i) => (
                <div key={i} className="products-page-also-interested-items">
                  {item}
                </div>
              ))}
            </div>
          </>
        )}
        <p
          id="products-page-interested-secondary-more-less"
          onClick={handleMore}
        >
          {more ? "Less" : "More"}
        </p>
        <div className="products-page-also-interested-text">
          <h3>Sourcing Guide for Made In China:</h3>
          <p>
            China manufacturing industries are full of strong and consistent
            exporters. We are here to bring together China factories that supply
            manufacturing systems and machinery that are used by processing
            industries including but not limited to: auto parts, car parts,
            motorcycle parts. Here we are going to show you some of the process
            equipments for sale that featured by our reliable suppliers and
            manufacturers, such as Made In China. We will do everything we can
            just to keep every buyer updated with this highly competitive
            industry & factory and its latest trends. Whether you are for group
            or individual sourcing, we will provide you with the latest
            technology and the comprehensive data of Chinese suppliers like Made
            In China factory list to enhance your sourcing performance in the
            business line of manufacturing & processing machinery.
          </p>
        </div>
      </div>
    </>
  );
};

export default MoreInterested;

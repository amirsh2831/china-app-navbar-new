import React from "react";
import { TrendingPageLinks } from "../../../constants";
import "./BottomLinks.scss";
const BottomLinks = () => {
  return (
    <>
      <div className="bottom-links">
        <h3 className="title">Quick products</h3>
        <div className="bottom-links-rows">
          <ul>
            {TrendingPageLinks.QuickProducts.map((item, i) => (
              <li>
                <a href={item.link} key={i}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="title">Recommended Suppliers</h3>
        <div className="bottom-links-rows">
          <ul>
            {TrendingPageLinks.RecommendedSupplier.map((item, i) => (
              <li>
                <a href={item.link} key={i}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="title">Friendly Link</h3>
        <div className="bottom-links-rows">
          <ul>
            {TrendingPageLinks.FriendlyLink.map((item, i) => (
              <li>
                <a href={item.link} key={i}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BottomLinks;

import React from "react";
import "./Categories.scss";
import { CategoriesItems } from "../data";
import { useState } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { ExpandLessRounded } from "@mui/icons-material";
import { useInView } from "react-cool-inview";
import { useRef } from "react";
import { observe } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
const Categories = () => {
  const [notVisiable1, setNotVisiable1] = useState(false);
  const [notVisiable2, setNotVisiable2] = useState(false);
  const [notVisiable3, setNotVisiable3] = useState(false);
  const { observe: item1 } = useInView({
    threshold: 0, // Default is 0
    onChange: ({ observe, unobserve, scrollDirection }) => {
      observe(); // To re-start observing the current target element
    },
    onEnter: () => {
      setNotVisiable1(false);
    },
    onLeave: ({ scrollDirection }) => {
      if (scrollDirection.vertical == "up") {
        setNotVisiable1(true);
      }
      // Triggered when the target leaves the viewport
    },
  });
  const { observe: item2, scrollDirection } = useInView({
    threshold: 1, // Default is 0
    onChange: ({ observe, unobserve, scrollDirection }) => {
      observe(); // To re-start observing the current target element
    },
    onEnter: ({ scrollDirection }) => {
      setNotVisiable2(false);
      // Triggered when the target enters the viewport
    },
    onLeave: ({ scrollDirection }) => {
      console.log(scrollDirection);
      if (scrollDirection.vertical == "up") {
        setNotVisiable2(true);
      }
      // Triggered when the target leaves the viewport
    },
    // More useful options...
  });
  const { observe: item3 } = useInView({
    threshold: 1, // Default is 0
    onChange: ({ observe, unobserve, scrollDirection }) => {
      observe();
    },
    onEnter: ({ scrollDirection }) => {
      setNotVisiable3(false);
    },
    onLeave: ({ scrollDirection }) => {
      if (scrollDirection.vertical == "up") {
        setNotVisiable3(true);
      }
    },
  });

  const [more, setMore] = useState(false);
  const handleMore = () => {
    setMore(!more);
  };
  const [moreCity, setMoreCity] = useState(false);
  const handleMoreCity = () => {
    setMoreCity(!moreCity);
  };
  const isLaptop = useMediaQuery({ maxWidth: 1024 });

  const slicedCityList = CategoriesItems.City.slice(0, 4);
  return (
    <>
      {notVisiable1 && (
        <div
          id="products-page-categories-fixed-item"
          style={{ top: `${60 * 1 + (isLaptop ? 1 : 17)}px` }}
        >
          <p>Categories</p>
        </div>
      )}
      {notVisiable2 && (
        <div
          id="products-page-categories-fixed-item"
          style={{ top: `${60 * 2 + (isLaptop ? 1 : 17)}px` }}
        >
          <p>Products</p>
        </div>
      )}
      {notVisiable3 && (
        <div
          id="products-page-categories-fixed-item"
          style={{ top: `${60 * 3 + (isLaptop ? 1 : 17)}px` }}
        >
          <p>Company Features</p>
        </div>
      )}
      <div className="spt-categories">
        <div className="spt-categories__container">
          <h3 ref={item1}>Category</h3>
          {/* <br /> */}
          <div className="spt-categories__container__catItem">
            <h4>Manufacturing & Processing Machinery</h4>
            <ul>
              {CategoriesItems.manufacturing.map((item, i) => (
                <li key={i}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="spt-categories__container__catItem">
            <h4>Industrial Equipment & Components</h4>
            <ul>
              {CategoriesItems.industry.map((item, i) => (
                <li key={i}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="spt-categories__container__links"
            style={{ display: `${more ? "block" : "none"}` }}
          >
            <a href="#">Transportation</a>
            <br />
            <a href="#">Apparel & Accessories</a>
          </div>
          <span onClick={() => handleMore()} id="more-less-button" ref={item2}>
            {more ? "Less" : "More"}
            {more ? (
              <ExpandLessRounded id="arrow-down-icon" fontSize="inherit" />
            ) : (
              <ExpandMoreRoundedIcon id="arrow-down-icon" fontSize="inherit" />
            )}
          </span>
        </div>
        <br />
        <div className="spt-categories__container">
          <h3 ref={item3}>Products Features</h3>
        </div>
        <br />
        <div className="spt-categories__container">
          <h3>Company Features</h3>
          <h4>Business Type</h4>
          <ul>
            {CategoriesItems.Business.map((item, i) => (
              <li key={i}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
          <h4>R&D Capacity</h4>
          <ul>
            {CategoriesItems.RND.map((item, i) => (
              <li key={i}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
          <h4>City</h4>
          <ul>
            {moreCity
              ? slicedCityList.map((item, i) => (
                  <li key={i}>
                    <a href={item.link}>{item.text}</a>
                  </li>
                ))
              : CategoriesItems.City.map((item, i) => (
                  <li key={i}>
                    <a href={item.link}>{item.text}</a>
                  </li>
                ))}
          </ul>
          <span onClick={() => handleMoreCity()} id="more-less-button">
            {moreCity ? "More" : "Less"}
            {moreCity ? (
              <ExpandMoreRoundedIcon id="arrow-down-icon" fontSize="inherit" />
            ) : (
              <ExpandLessRounded id="arrow-down-icon" fontSize="inherit" />
            )}
          </span>
        </div>
      </div>
    </>
  );
};
export default Categories;

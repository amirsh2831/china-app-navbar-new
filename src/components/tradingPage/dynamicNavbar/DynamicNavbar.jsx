import React, { useContext, useEffect, useState, useRef } from "react";
import { TradingCat } from "../../../constants";
import SearchIcon from "@mui/icons-material/Search";
import "./DynamicNavbar.scss";
import { useInViewContext } from "../../../Context/ContextProvider";

const DynamicNavbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 500);
    });
  });
  const [indexNumber, setIndex] = useState(-1);
  const {
    section1InView,
    section2InView,
    section3InView,
    section4InView,
    section5InView,
    section6InView,
    section7InView,
    section8InView,
    section2Ref,
    section3Ref,
    section4Ref,
    section5Ref,
    section6Ref,
    section7Ref,
    section8Ref,
  } = useInViewContext();

  useEffect(() => {
    if (section1InView) {
      setIndex(1);
    }
    if (section2InView) {
      setIndex(2);
    }
    if (section3InView) {
      setIndex(3);
    }
    if (section4InView) {
      setIndex(4);
    }
    if (section5InView) {
      setIndex(5);
    }
    if (section6InView) {
      setIndex(6);
    }
    if (section7InView) {
      setIndex(7);
    }
    if (section8InView) {
      setIndex(8);
    }
  }, [
    section1InView,
    section2InView,
    section3InView,
    section4InView,
    section5InView,
    section6InView,
    section7InView,
    section8InView,
  ]);

  return (
    <>
      <div className={`trading-dynamic-navbar ${scroll ? "sticky" : ""}`}>
        <div className="trading-dynamic-navbar-content">
          <ul>
            {TradingCat.map((item, index) => (
              <li
                key={index}
                style={index === indexNumber - 1 ? { color: "red" } : {}}
                onClick={() => {
                  const element = document.getElementById(
                    "prod-" + (index + 1).toString()
                  );
                  console.log("prod-" + (index + 1).toString());
                  element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.text}
              </li>
            ))}
          </ul>
          <div className="trading-dynamic-navbar-search-icon">
            <SearchIcon />
            <div className="click-search-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicNavbar;

import React, { useReducer, useRef } from "react";
import "./Categories.scss";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CategoriesList from "./categoriesList/CategoriesList";
import { useState } from "react";
import { useInView } from "react-cool-inview";
import { useMediaQuery } from "react-responsive";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // height: "60px",
  // borderBottom: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  height: "0px",

  fontWeight: "600",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  // borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const Categories = () => {
  const [notVisiable1, setNotVisiable1] = useState(false);
  const [notVisiable2, setNotVisiable2] = useState(false);
  const [notVisiable3, setNotVisiable3] = useState(false);
  const isLaptop = useMediaQuery({ maxWidth: 1024 });
  const { observe: item1 } = useInView({
    threshold: 0.25, // Default is 0
    onChange: ({ observe, unobserve, scrollDirection }) => {
      // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]

      // unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
    onEnter: () => {
      setNotVisiable1(false);
      // Triggered when the target enters the viewport
    },
    onLeave: ({ scrollDirection }) => {
      if (scrollDirection.vertical == "up") {
        setNotVisiable1(true);
      }
      // Triggered when the target leaves the viewport
    },
  });
  const { observe: item2, scrollDirection } = useInView({
    threshold: 0.25, // Default is 0
    onChange: ({ observe, unobserve, scrollDirection }) => {
      // unobserve(); // To stop observing the current target element
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
    threshold: 0.25, // Default is 0
    onChange: ({ observe, unobserve, scrollDirection }) => {
      // unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
    onEnter: ({ scrollDirection }) => {
      setNotVisiable3(false);
      // Triggered when the target enters the viewport
    },
    onLeave: ({ scrollDirection }) => {
      if (scrollDirection.vertical == "up") {
        setNotVisiable3(true);
      }
      // Triggered when the target leaves the viewport
    },
    // More useful options...
  });

  return (
    <>
      {notVisiable1 && (
        <div
          className="products-page-categories-fixed-item"
          style={{ top: `${60 * 1 + (isLaptop ? 1 : 17)}px` }}
        >
          <p>Categories</p>
        </div>
      )}
      {notVisiable2 && (
        <div
          className="products-page-categories-fixed-item"
          style={{ top: `${60 * 2 + (isLaptop ? 1 : 17)}px` }}
        >
          <p>Products</p>
        </div>
      )}
      {notVisiable3 && (
        <div
          className="products-page-categories-fixed-item"
          style={{ top: `${60 * 3 + (isLaptop ? 1 : 17)}px` }}
        >
          <p>Company Features</p>
        </div>
      )}
      <div className="products-page-categories">
        <Accordion defaultExpanded>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography ref={item1}>
              <span className="products-page-categories-accordion-title">
                Categories
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="regular" />
          </AccordionDetails>
        </Accordion>
        <Divider component={"div"} />
        <p className="products-page-categories-list-title" ref={item2}>
          Product Features
        </p>
        <Accordion>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>
              <span className="products-page-categories-accordion-title">
                Product Types
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <MemberAndType /> */}
            <CategoriesList type="checkbox" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              <span className="products-page-categories-accordion-title">
                Search Whitin
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="searchbox" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              <span className="products-page-categories-accordion-title">
                Max Order
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="searchbox" />
          </AccordionDetails>
        </Accordion>
        <Divider component={"div"} />
        <p className="products-page-categories-list-title" ref={item3}>
          Company Features
        </p>
        <br />

        <Accordion>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              <span className="products-page-categories-accordion-title">
                Member And Type
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="checkbox" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              <span className="products-page-categories-accordion-title">
                Business Type
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="regular" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              <span className="products-page-categories-accordion-title">
                R&D Capacity
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="regular" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              <span className="products-page-categories-accordion-title">
                City
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="regular" />
          </AccordionDetails>
        </Accordion>
        <Divider component={"div"} />
        <br />
        <Accordion>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              <span className="products-page-categories-accordion-title">
                Related Product Categorie
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="regular" />
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              <span className="products-page-categories-accordion-title">
                Popular Searches
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="moreList" />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default Categories;

import React, { useReducer, useRef } from "react";
import "./Categories.scss";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ProductsCategories } from "../../../constants";
import MemberAndType from "../../suppliersMainPage/suppliersMainCategories/MemberAndType/MemberAndType";
import Divider from "@mui/material/Divider";
import CategoriesList from "./categoriesList/CategoriesList";
import { useState, useEffect } from "react";
import { useInView } from "react-cool-inview";
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
  const { observe: item1 } = useInView({
    threshold: 0.25, // Default is 0
    onChange: ({ observe, unobserve }) => {
      // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
    onEnter: () => {
      setNotVisiable1(false);
      // Triggered when the target enters the viewport
    },
    onLeave: () => {
      setNotVisiable1(true);
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
      console.log("something");
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
      console.log(scrollDirection);
      if (scrollDirection.vertical == "up") {
        setNotVisiable3(true);
      }
      console.log("something");
      // Triggered when the target leaves the viewport
    },
    // More useful options...
  });

  return (
    <>
      {notVisiable1 && (
        <div className="products-page-categories-fixed-item-1">
          <p>Categories</p>
        </div>
      )}
      {notVisiable2 && (
        <div className="products-page-categories-fixed-item-2">
          <p>Products</p>
        </div>
      )}
      {notVisiable3 && (
        <div className="products-page-categories-fixed-item-3">
          <p>Company Features</p>
        </div>
      )}
      <div className="products-page-categories">
        <Accordion>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography ref={item1}>Categories</Typography>
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
            <Typography>Product Types</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <MemberAndType /> */}
            <CategoriesList type="checkbox" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Search Whitin</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="searchbox" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Max Order</Typography>
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
            <Typography>Member And Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="checkbox" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Business Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="regular" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>R&D Capacity</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="regular" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>City</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="regular" />
          </AccordionDetails>
        </Accordion>
        <Divider component={"div"} />
        <br />
        <Accordion>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Related Product Categorie</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="regular" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Popular Searches</Typography>
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

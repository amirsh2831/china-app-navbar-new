import React from "react";
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
  return (
    <>
      <div className="products-page-categories">
        <Accordion>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Categories</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoriesList type="regular" />
          </AccordionDetails>
        </Accordion>
        <Divider component={"div"} />
        <p className="products-page-categories-list-title">Product Features</p>
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
        <p className="products-page-categories-list-title">Company Features</p>
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

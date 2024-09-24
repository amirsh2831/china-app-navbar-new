import React from "react";
import "./SuppliersMain.scss";
import SuppliersMainBanner from "./suppliersMainBanner/SupplierMainBanner";
import SuppliersMainTabs from "./suppliersMainTabs/SuppliersMainTabs";
import SuppliersMainCategories from "./suppliersMainCategories/SuppliersMainCategories";
import SuppliersMainManufacturersCard from "./supplierMainManufacturersCard/SuppliersMainManufacturersCard";
import SuppliersRecommended from "./suppliersRecomended/SuppliersRecommended";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const SuppliersMain = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Supplier Discovery
    </Link>,
    <Link underline="hover" key="3" color="inherit">
      Manufacturing & Processing Machinary
    </Link>,
    <Link underline="hover" key="" color="inherit">
      Meta Processing Machinery Parts
    </Link>,
    <Link underline="hover" key="5" color="inherit">
      Mde In China Manufacturers And Suppliers
    </Link>,
  ];
  return (
    <>
      <div className="suppliers-main-page-container">
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ Color: "#555", fontSize: "12px", padding: "8px 0 " }}
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <SuppliersMainBanner />
        <span className="suppliers-page-text-under-main-banner">
          Made In China
          <p>
            {" "}
            <span id="total-manufacturers">Total 2,000+</span> manufacturers &
            suppliers found with 6,000+ products
          </p>
        </span>
        <SuppliersMainTabs />
        <div className="suppliers-page-main-body">
          <SuppliersMainCategories />
          <div className="suppliers-page-main-body-manufacturers-cards">
            <SuppliersMainManufacturersCard />
            <SuppliersMainManufacturersCard />
            <SuppliersMainManufacturersCard />
            <SuppliersMainManufacturersCard />
            <SuppliersMainManufacturersCard />
            <SuppliersMainManufacturersCard />
            <SuppliersMainManufacturersCard />
            <SuppliersMainManufacturersCard />
            <SuppliersMainManufacturersCard />
            <SuppliersMainManufacturersCard />
            <SuppliersMainManufacturersCard />
          </div>
          <SuppliersRecommended />
        </div>
      </div>
    </>
  );
};

export default SuppliersMain;

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
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import KeyboardTabOutlinedIcon from "@mui/icons-material/KeyboardTabOutlined";
import SuppliersMainSecondBanner from "./suppliersMainSecondBanner/SuppliersMainSecondBanner";
import { TrendingPageLinks } from "./data";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import SuppliersMobilieSubNav from "./suppliersMobileSubNab/SuppliersMobilieSubNav";
const SuppliersMain = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  const isMoblie = useMediaQuery({ maxWidth: 425 });
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
      {isMoblie ? (
        <SuppliersMobilieSubNav />
      ) : scroll ? (
        <SuppliersMobilieSubNav />
      ) : (
        ""
      )}
      <div className="suppliers-main-page-container">
        {!isMoblie && (
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              sx={{ Color: "#555", fontSize: "12px", padding: "8px 0 " }}
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        )}
        <SuppliersMainBanner />
        <span className="suppliers-page-text-under-main-banner">
          Made In China
          <p>
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
        <div className="suppliers-page-cards-pagination">
          <div className="suppliers-page-cards-pagination-count">
            <p>Items Per Range: </p>
            <span>10</span>/<span>30</span>/<span>60</span>
          </div>
          <div className="suppliers-page-cards-pagination-container">
            <Stack spacing={2} whiteSpace={"nowrap"}>
              <Pagination count={200} variant="outlined" shape="rounded" />
            </Stack>
            <button className="suppliers-page-cards-pagination-next-button">
              Next
              <KeyboardTabOutlinedIcon
                fontSize="inherit"
                id="next-button-icon"
              />
            </button>
          </div>
        </div>
        <div className="suppliers-page-second-banner">
          <SuppliersMainSecondBanner />
        </div>
        <div className="suppliers-page-footer-recommended-supplier">
          <h3>Recommended Suppliers:</h3>
          <ul className="suppliers-page-footer-recommended-supplier-list">
            {TrendingPageLinks.RecommendedSupplier.map((item, i) => (
              <li
                className="suppliers-page-footer-recommended-supplier-list-item"
                key={i}
              >
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SuppliersMain;

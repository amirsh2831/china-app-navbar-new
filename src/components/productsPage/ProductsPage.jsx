import React from "react";
import "./ProductsPage.scss";
import { useMediaQuery } from "react-responsive";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SuppliersMainBanner from "../suppliersMainPage/suppliersMainBanner/SupplierMainBanner";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import SuppliersMainBannerSliderCards from "../suppliersMainPage/suppliersMainBanner/suppliersMainBannerSliderCards/suppliersMainBannerSliderCards";
import SuppliersMainTabs from "../suppliersMainPage/suppliersMainTabs/SuppliersMainTabs";
import Categories from "./categories/Categories";
import MainPRoductsSlider from "./mainProductsSlider/MainProductsSlider";
import ProductCards from "./productCards/ProductCards";
import { ProductsCardInformation } from "../../constants";
import Pagination from "@mui/material/Pagination";
import KeyboardTabOutlinedIcon from "@mui/icons-material/KeyboardTabOutlined";
import SuppliersMainSecondBanner from "../suppliersMainPage/suppliersMainSecondBanner/SuppliersMainSecondBanner";
import Interested from "./interested/Interested";
import RelatedVideos from "./relatedVideos/RelatedVideos";
import Questions from "./questions/Questions";
import MoreInterested from "./moreInterested/MoreInterested";
import Requests from "./requests/Requests";
const ProductsPage = () => {
  const isMoblie = useMediaQuery({ maxWidth: 465 });
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
      <div className="products-main-page-container">
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
        <span className="products-page-text-under-main-banner">
          Made In China
          <p>products found from trusted manufacturers & suppliers</p>
        </span>
        <SuppliersMainTabs />
        <div className="products-main-body">
          {/* Main Page Categories */}
          <Categories />
          <div className="products-page-main-body-product-container">
            <MainPRoductsSlider />
            <div className="products-page-main-body-cards-container">
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
              <ProductCards productCardsInfo={ProductsCardInformation} />
            </div>
            <div className="products-page-main-body-cards-pagination">
              <Stack spacing={2} whiteSpace={"nowrap"}>
                <Pagination count={1000} variant="outlined" shape="rounded" />
              </Stack>
              <button className="products-page-cards-pagination-next-button">
                Next
                <KeyboardTabOutlinedIcon
                  fontSize="inherit"
                  id="next-button-icon"
                />
              </button>
            </div>
            <div className="products-page-secondary-banner">
              <SuppliersMainSecondBanner />
            </div>
            <Interested />
            <RelatedVideos />
            <Questions />
            <MoreInterested />
            <Requests />
            {/* Product Cards Goes Here */}
            {/* Related Videos Goes Here */}
            {/* Q & A Goes Here */}
            {/* You May Also Be Interested in goes Here */}
            {/* requests Goes Here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

import React from "react";
import "./SecuredProductsPage.scss";
import SuppliersMainTabs from "../suppliersMainPage/suppliersMainTabs/SuppliersMainTabs";
import ProductCards from "../productsPage/productCards/ProductCards";
import Stack from "@mui/material/Stack";
import KeyboardTabOutlinedIcon from "@mui/icons-material/KeyboardTabOutlined";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { ProductsCardInformation } from "./data";
import FilterSection from "./filterSection/FilterSection";
import Categories from "./categories/Categories";
const SecuredProductsPage = () => {
  const [counter, setCounter] = useState(1);
  const handleCounter = (id) => {
    setCounter(id);
  };
  return (
    <>
      {/* spt is = Secured Product Trading */}
      <div className="spt">
        <div className="spt__title">
          <strong>Made In China</strong> <span>65,579</span>
          <p>Products Found</p>
        </div>
        <SuppliersMainTabs />
        <div className="spt__body">
          <div className="spt__body__categories">
            <Categories />
          </div>
          <div className="spt__body__main ">
            <div className="spt__body__main__filter">
              <FilterSection />
            </div>
            <div className="spt__body__main__cards">
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
            <div className="spt__body__main__pagination">
              {/* pagination goes here ... */}
              <div className="spt__body__main__pagination__counter">
                <span>Show: </span>
                <p
                  onClick={() => handleCounter(1)}
                  style={{ color: `${counter == 1 ? "#e64545" : "#222"}` }}
                >
                  24
                </p>
                <hr />
                <p
                  onClick={() => handleCounter(2)}
                  style={{ color: `${counter == 2 ? "#e64545" : "#222"}` }}
                >
                  36
                </p>
                <hr />
                <p
                  onClick={() => handleCounter(3)}
                  style={{ color: `${counter == 3 ? "#e64545" : "#222"}` }}
                >
                  48
                </p>
              </div>
              <div className="spt__body__main__pagination__buttons">
                <Stack spacing={2} whiteSpace={"nowrap"}>
                  <Pagination count={1250} variant="outlined" shape="rounded" />
                </Stack>
                <button className="spt__body__main__pagination__buttons__next">
                  Next
                  <KeyboardTabOutlinedIcon
                    fontSize="inherit"
                    id="next-button-icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecuredProductsPage;

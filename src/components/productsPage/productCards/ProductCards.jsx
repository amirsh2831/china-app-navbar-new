import React from "react";
import "./ProductCards.scss";
import ProductsCardSlider from "./productsCardSlider/ProductsCardSlider";
import VideoLabelOutlinedIcon from "@mui/icons-material/VideoLabelOutlined";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SuppliersMobilieSubNav from "../../suppliersMainPage/suppliersMobileSubNab/SuppliersMobilieSubNav";
const ProductCards = ({ productCardsInfo }) => {
  return (
    <>
      <div className="products-main-cards-container">
        <div className="products-main-cards-header">
          <div className="products-main-cards-liked">
            {/* liked */}
            <FavoriteIcon sx={{ fontSize: "16px" }} />
          </div>
          <div className="products-main-cards-image-slider-container">
            {/* Products Image Slider Goes here */}
            <ProductsCardSlider images={productCardsInfo.image} />
          </div>
        </div>
        <div className="products-main-cards-info">
          <p className="products-main-cards-info-title">
            {/* title Text goes here  */}
            {productCardsInfo.title}
          </p>
          <div className="products-main-cards-information">
            {/* type and price goes here */}
            <div className="products-main-cards-information-1">
              <strong>{productCardsInfo.infoPrice}</strong>{" "}
              <p> / {productCardsInfo.infoType}</p>
            </div>
            <div className="products-main-card-information-2">
              <strong>
                {productCardsInfo.infoAmount} {productCardsInfo.infoType}{" "}
              </strong>
              <h4>(MOQ)</h4>
            </div>
          </div>
          <div className="products-main-cards-info-manufacturer">
            {/* manufacturer title and dropdown tooltip goes here */}
            <a href="#">{productCardsInfo.manufacturer} &#10095;</a>
            <div className="products-main-cards-info-manufacturer-dropdown">
              <div className="products-main-cards-info-manufacturer-dropdown-header">
                <h5>{productCardsInfo.manufacturer}</h5>
              </div>
              <div className="products-main-cards-info-manufacturer-dropdown-body">
                <ul>
                  <li>
                    {productCardsInfo.audited && (
                      <img
                        title="hello veredsndcfjk;baskl"
                        src="assets/Image/Products/Icons/ico-as.png"
                        className="products-main-cards-icons"
                        alt="cards icons"
                      />
                    )}{" "}
                    Audited Supplier
                  </li>
                  <li>
                    <img
                      src="assets/Image/Products/Icons/360.png"
                      className="products-main-cards-icons"
                      alt="cards icons"
                    />
                    {productCardsInfo.threesixty} 360 View
                  </li>
                  <li>
                    {productCardsInfo.largeImage && (
                      <VideoLabelOutlinedIcon
                        fontSize="small"
                        style={{ color: "crimson" }}
                      />
                    )}
                    {productCardsInfo.largeImage} Large Images
                  </li>
                </ul>
                <strong>Trading Comapny</strong>
                <p>ISO 9001, ISO 6001</p>
              </div>
            </div>
          </div>
          <div className="products-main-cards-info-more-info">
            {/* icons with their dropdown lables go here */}
            {productCardsInfo.audited && (
              <img
                title="hello veredsndcfjk;baskl"
                src="assets/Image/Products/Icons/ico-as.png"
                className="products-main-cards-icons"
                alt="cards icons"
              />
            )}
            {productCardsInfo.threesixty && (
              <img
                src="assets/Image/Products/Icons/360.png"
                className="products-main-cards-icons"
                alt="cards icons"
              />
            )}
            {productCardsInfo.largeImage && (
              <VideoLabelOutlinedIcon
                fontSize="small"
                style={{ color: "crimson" }}
              />
            )}
            {productCardsInfo.fast && (
              <a className="products-main-cards-info-more-info-fast">
                <StarIcon fontSize="small" style={{ color: "crimson" }} />
                <strong>5</strong>
                <span>(5.0)</span>"On Time Deliverly
              </a>
            )}
          </div>
          <div className="products-main-cards-info-call-to-action">
            <button className="products-main-cards-info-call-to-action-contact-now-button">
              Contact Now
            </button>
            <button className="products-main-cards-info-call-to-action-cart-button">
              {/* shopping cart icon */}
              <AddShoppingCartIcon color="red" fontSize="inherit" />
            </button>
            <button className="products-main-cards-info-call-to-action-massenger">
              {/* massenger icon  */}
              <img
                src="assets/Image/Suppliers/massege.png"
                alt="massege icon"
              />
            </button>
          </div>
          <div className="products-main-cards-info-hover">
            <ul className="products-main-cards-info-hover-list">
              {productCardsInfo.moreInfolist.map((item, i) => (
                <li key={i}>
                  <span>{item.title}</span> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* more info on card hover goes here */}
      </div>
    </>
  );
};

export default ProductCards;

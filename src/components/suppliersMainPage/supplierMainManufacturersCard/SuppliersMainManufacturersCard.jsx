import React from "react";
import "./SuppliersMainManufacturersCard.scss";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import SuppliersManufacturersSampleCards from "./SuppliersManufacturersSampleCards/SuppliersManufacturersSAmpleCard";
import Replay30OutlinedIcon from "@mui/icons-material/Replay30Outlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useMediaQuery } from "react-responsive";
import {
  SuppliersAuditedSupplier,
  SuppliersManufacturersCards,
} from "../../../constants";
const SuppliersMainManufacturersCard = () => {
  const resize1 = useMediaQuery({ maxWidth: 1150 });
  return (
    <>
      <div className="suppliers-page-manufacturers-card">
        <div className="suppliers-page-manufacturers-card-header">
          <div className="suppliers-page-manufacturers-card-header-info">
            {/* IMage and INfo for the manufacturers */}
            <img
              src="assets/Image/Suppliers/com-logo.png"
              alt="Manufacturer Logo"
              className="suppliers-page-manufacturers-card-company-logo"
            />
            <div className="suppliers-page-manufacturers-card-header-info-title">
              <h3>Shaoxing Naite Drive Technology Co., Ltd.</h3>
              <div className="suppliers-page-manufacturers-card-header-info-badges">
                <div className="suppliers-page-manufacturers-card-header-info-badge-item">
                  <img
                    src="assets/Image/Suppliers/diamond.png"
                    alt="Diamond Logo"
                  />
                  <span>Since 2021</span>
                </div>
                <div className="suppliers-page-manufacturers-card-header-info-badge-item">
                  <img
                    src="assets/Image/Suppliers/ico-as.png"
                    alt="Diamond Logo"
                  />
                  <span className="suppliers-page-manufacturers-card-info-badge-item-audited">
                    Audited Supplyer <ExpandMoreRoundedIcon fontSize="small" />
                  </span>
                  <div className="suppliers-page-manufactureres-card-info-item-tooltip">
                    <h3>Audited Supplier</h3>
                    <ul className="suppliers-page-manufacturers-card-info-item-tooltip-list">
                      {SuppliersAuditedSupplier.map((item, i) => (
                        <li key={i}>
                          {item.disabled ? (
                            <span className="suppliers-page-manufacturers-card-info-title-item-disabled">
                              {item.text}
                            </span>
                          ) : (
                            <div className="suppliers-page-manufacturers-card-info-tooltip-list-item">
                              <CheckRoundedIcon
                                fontSize="inherit"
                                className="supplier-page-audited-supplier-icon"
                              />
                              <span className="supplier-page-manufacturers-card-info-tooltip-item-text">
                                {item.text}
                              </span>
                            </div>
                          )}
                          <div className="suppliers-page-manufacturers-card-info-tooltip-list-item"></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="suppliers-page-manufacturers-card-header-info-badge-item">
                  <AspectRatioOutlinedIcon fontSize="inherit" />
                  <span>2000+</span>
                </div>
              </div>
            </div>
          </div>
          <div className="suppliers-page-manufacturers-card-header-like">
            {/* MAnufacturers card hedar like and compare */}
            <div className="suppliers-page-manufacturers-card-header-like-item">
              <div className="suppliers-page-manufacturers-hedaer-like-icon">
                <FavoriteBorderOutlinedIcon fontSize="inherit" />
              </div>
              <span>Follow</span>
            </div>
            <div className="suppliers-page-manufacturers-card-header-like-item">
              <div className="suppliers-page-manufacturers-hedaer-like-icon">
                <AddCircleOutlineOutlinedIcon fontSize="inherit" />
              </div>
              <span>Compare</span>
            </div>
          </div>
        </div>
        <div className="suppliers-page-manufacturers-card-body">
          <div className="supliers-page-manufacturers-card-body-info">
            <ul className="suppliers-page-manufacturers-card-body-info-list">
              <li className="suppliers-page-manufacturers-card-body-info-list-item">
                <p>Business Type: </p>
                <span>Trading Company</span>
              </li>
              <li className="suppliers-page-manufacturers-card-body-info-list-item">
                <p>Main Products: </p>
                <span>Car, New Energy Car</span>
              </li>
              <li className="suppliers-page-manufacturers-card-body-info-list-item">
                <p>City/Province: </p>
                <span>Hangzhou, Zhejiang</span>
              </li>
            </ul>
            <a href="#">
              Request Free Catalog <ChevronRightRoundedIcon fontSize="medium" />
            </a>
            <div className="suppliers-page-manufacturers-card-body-info-call-to-action">
              <button className="suppliers-page-manufacturers-card-body-info-call-to-action-contact-now">
                <span>
                  <LocalPostOfficeOutlinedIcon fontSize="inherit" />
                </span>
                <p>Contact Now</p>
              </button>
              <button className="suppliers-page-manufacturers-card-body-info-call-to-action-chat">
                <img
                  src="assets/Image/Suppliers/massege.png"
                  alt="Massenger icon"
                />
                <p>chat</p>
              </button>
            </div>
          </div>
          <div className="suppliers-page-manufacturers-card-body-img-samples">
            {/* Manufacturere Samples goes here */}
            {SuppliersManufacturersCards.map((item, i) => (
              <a href="#" key={i}>
                <SuppliersManufacturersSampleCards
                  image={item.image}
                  title={item.title}
                  type={item.type}
                  amount={item.amount}
                />
              </a>
            ))}
          </div>
          <div className="suppliers-page-manufacturers-card-body-look-around">
            {/* 360 Image goes here */}
            <a href="#">
              <img
                src="assets/Image/Suppliers/manufacturer-360.png"
                alt="Manufacturers Company 360 View"
              />
              <div className="full-view-icon-container">
                <Replay30OutlinedIcon fontSize="inherit" />
              </div>
            </a>
          </div>
        </div>
        <div className="suppliers-page-manufacturers-card-body-mobile-buttons">
          <button>Contact Now</button>
          <button>
            <img src="assets/Image/Suppliers/massege.png" alt="chat app icon" />
            Chat With Supplier
          </button>
        </div>
      </div>
    </>
  );
};

export default SuppliersMainManufacturersCard;

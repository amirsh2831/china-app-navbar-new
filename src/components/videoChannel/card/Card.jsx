import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useRef, useEffct, userState } from "react";
import "./Card.scss";
const Card = () => {
  return (
    <>
      <div className="card">
        <img
          className="product-image"
          src="/src/assets/product.webp"
          alt="Product Image"
        />
        <div className="card-details">
          <p>Yaomatec Portable Handheld Inkjet Printer Marking Date Qr Code</p>
          <h3>US$70.00-110.00 / Piece</h3>
          <span className="amount-text">1 Piece (MOQ)</span>
        </div>
        <div className="bottom-call-to-action">
          <button>
            <EmailOutlinedIcon />
            Contact Now
          </button>
          <img src="/src/assets/download.png" />
        </div>
      </div>
    </>
  );
};

export default Card;

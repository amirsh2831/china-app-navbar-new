import React from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



const SearchBar = ({scrollProps}) => {
  return (
    <>
      <div className={scrollProps ? "searchbar-resize" : "searchbar"}>
        <button className="products">
          <p>Products</p>
          <KeyboardArrowDownRoundedIcon fontSize="medium" />
        </button>
        <input placeholder="Enter a keyword to search products" />
        <div className="search-icons">
          <button class="camera-icon">
            <CameraAltOutlinedIcon fontSize="medium" style={{color: "gray"}} />
          </button>
          <button className="search-button">
            <SearchOutlinedIcon fontSize="medium" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;

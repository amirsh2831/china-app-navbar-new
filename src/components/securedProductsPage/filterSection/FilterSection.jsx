import React from "react";
import "./FilterSection.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterSection = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="spt-filter">
        <div className="spt-filter__odp">
          {/* left side of the filter */}
          <div className="spt-filter__odp__order">
            <span>Min Order: </span>
            <input placeholder="less than" />
            <button>OK</button>
          </div>
          <div className="spt-filter__odp__price">
            <span>Price: </span>
            <input placeholder="Min" />
            <span> - </span>
            <input placeholder="Max" />

            <button>OK</button>
          </div>
        </div>
        <div className="spt-filter__sort">
          <span>Sort by: </span>

          <FormControl sx={{ m: 1, Width: 100 }}>
            <Select
              sx={{
                fontSize: 13,
                height: 30,
                width: 150,
                borderColor: "#ced3d9",
              }}
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem
                value=""
                sx={{
                  fontSize: 13,
                }}
              >
                Best Match
              </MenuItem>
              <MenuItem
                value={10}
                sx={{
                  fontSize: 13,
                  overflow: "hidden",
                  textOverflow: "elipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Price Low to High
              </MenuItem>
              <MenuItem
                value={20}
                sx={{
                  fontSize: 13,

                  overflow: "hidden",
                  textOverflow: "elipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Price High to Low
              </MenuItem>
            </Select>
          </FormControl>
          {/* drop down item here */}
        </div>
      </div>
    </>
  );
};

export default FilterSection;

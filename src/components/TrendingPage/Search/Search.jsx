import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useRef, useEffect } from "react";
import "./Search.scss";
import { AllIndustries } from "../data";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { DateRange } from "react-date-range";
import { TextField } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { format } from "date-fns";
import { useMediaQuery } from "react-responsive";

const Search = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 728 });
  // all states
  const [age, setAge] = React.useState("");
  const [open, setOpen] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),

      endDate: new Date(),

      key: "selection",
    },
  ]);
  // refrences
  const calendarRef = useRef();

  //   use Effects
  useEffect(() => {
    const handler = (e) => {
      if (!calendarRef?.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const [formatDate, setFormatDate] = useState({
    startDate: new Date(),

    endDate: new Date(),
  });

  useEffect(() => {
    setFormatDate((prev) => {
      return {
        ...prev,

        startDate: format(state[0].startDate, "dd/MM/yyyy"),

        endDate: format(state[0].endDate, "dd/MM/yyyy"),
      };
    });
  }, [state]);

  //   handelers

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  return (
    <>
      <h3 className="search-form-title">Shows Searching</h3>
      <div className="search-container">
        <div className="search-form">
          <FormControl sx={{ width: `${isMobile ? "100%" : "30%"}` }}>
            <Select
              sx={{ height: 48, color: "gray" }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 300,
                    maxWidth: 260,
                  },
                },
              }}
              classes={{ maxHeight: 10 }}
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              className="select"
            >
              <MenuItem value="">
                <em>All Industries</em>
              </MenuItem>
              {AllIndustries.map((item, i) => (
                <MenuItem key={i} value={i} dense className="items">
                  {item.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: `${isMobile ? "100%" : "30%"}` }}>
            <Select
              sx={{ height: 48, color: "gray" }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 300,
                    maxWidth: 260,
                  },
                },
              }}
              classes={{ maxHeight: 10 }}
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              className="select"
            >
              <MenuItem value="">
                <em>All Locations</em>
              </MenuItem>
              {AllIndustries.map((item, i) => (
                <MenuItem key={i} value={i} dense className="items">
                  {item.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="date-picker-container">
            <div className="date-picker-element-container" ref={calendarRef}>
              <input
                type="text"
                className="single-calendar-input"
                onClick={() => {
                  setOpen(!open);
                }}
                readOnly
                value={`${formatDate.startDate}-${formatDate.endDate}`}
              />
              <div className="icon">
                <CalendarMonthIcon fontSize="medium" />
              </div>
              <div className={`dropdown ${open ? "active" : "inactive"}`}>
                <DateRange
                  months={isTabletOrMobile ? 1 : 2}
                  className="calendarStyle"
                  onChange={(item) => setState([item.selection])}
                  ranges={state}
                  showSelectionPreview={false}
                  editableDateInputs={false}
                  showMonthAndYearPickers={false}
                  showDateDisplay={false}
                  rangeColors={["#DA291C", "#DA291C", "#000000"]}
                  direction="horizontal"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="search">
          <input
            type="text"
            className="search-searchbar"
            placeholder="Plaese enter keywords to find a trade show"
          />
          <button className="search-button">Search</button>
        </div>
      </div>
    </>
  );
};

export default Search;

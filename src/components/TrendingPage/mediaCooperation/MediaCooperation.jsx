import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ReplayIcon from "@mui/icons-material/Replay";
import "./MediaCooperation.scss";
const MediaCooperation = () => {
  const [gender, setGender] = useState("");
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div className="media-form">
      <div className="media-form-container">
        <div className="media-form-items">
          <div className="media-form-left">
            <h1 className="media-form-header">Media Cooperation</h1>
            <div className="media-form-info">
              <p>
                Would you like to promote your trade show by Made-in-China.com?
                We will provide you with an excellent promotional channel with
                more than 10 million visitors
              </p>
              <p>
                After submitting the show, you will receive an Email for
                collecting further information, please check it and send it
                back.
              </p>
            </div>
          </div>
          <div className="media-form-right">
            <div className="media-form-right-form-section">
              <h1 className="right-side-title-resize">Media Cooperation</h1>
              <p className="media-form-title">
                Please fill in the information about the trade show.
              </p>
              <div className="media-form-right-rows">
                <FormControl sx={{ width: 120 }}>
                  <Select
                    sx={{ height: 44 }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          maxHeight: 300,
                          maxWidth: 260,
                        },
                      },
                    }}
                    classes={{ maxHeight: 10 }}
                    value={gender}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    className="select"
                  >
                    <MenuItem value="">
                      <em>Mr.</em>
                    </MenuItem>
                    <MenuItem value={20}>
                      <em>Mrs.</em>
                    </MenuItem>
                    <MenuItem value={30}>
                      <em>Miss.</em>
                    </MenuItem>
                    <MenuItem value={40}>
                      <em>Ms.</em>
                    </MenuItem>
                  </Select>
                </FormControl>
                <input type="text" placeholder="Your Full Name" />
              </div>
              <div className="media-form-right-rows">
                <input type="email" placeholder="Your Email Address" />
              </div>
              <div className="media-form-right-rows">
                <input
                  type="text"
                  placeholder="Official website of the show and other contact information"
                />
              </div>
              <div className="media-form-right-rows">
                <input type="text" />
                <div className="captcha">
                  <img src="assets/Image/captcha.png" alt="captcha" />
                  <ReplayIcon />
                </div>
              </div>
              <button type="submit" className="media-form-submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCooperation;

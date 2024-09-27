import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./VideoPlayerModal.scss";
const VideoPlayerModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
    console.log(open);
  };
  const style = {
    position: "absolute",
    top: "50%",
    bgcolor: "background.paper",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    boxShadow: 24,
  };
  return (
    <div style={{ position: "relative" }}>
      <Modal
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        open={open}
        onClose={() => handleClose()}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="supplier-modal-video-container">
              <video
                id="main-banner-video"
                autoPlay
                muted
                loop
                controls
                className="supplier-modal-video-player"
              >
                <source src="src/assets/video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="supplier-modal-info">
              <a href="#" className="supplier-modal-info-title">
                China Manufacturing High Flow General Package Catalytic
                Converter Factory Direct Sales for Euro 1/2/3/4/5/6
              </a>
              <div className="supplier-modal-info-list">
                <p>
                  FOB Price: <span id="supplier-modal-price">US$ 9.7-20</span> /
                  piece
                </p>
                <p>
                  Min. Order: <span id="supplier-modal-type">1 Piece</span>{" "}
                  <span id="supplier-modal-moq">(MOQ)</span>
                </p>
                <a href="#" id="supplier-modal-info-link">
                  Ningjin County Lijianfei Auto Parts Co., Ltd
                </a>
                <div className="supplier-modal-info-call-to-action">
                  <button className="supplier-modal-info-call-to-action-contact-now">
                    <span>
                      <LocalPostOfficeOutlinedIcon fontSize="inherit" />
                    </span>
                    <p>Contact Now</p>
                  </button>
                  <a href="#">
                    Visit More Details{" "}
                    <ArrowForwardIosRoundedIcon id="supplier-modal-info-more-details-icon" />
                  </a>
                </div>
              </div>
              <div
                className="supplier-modal-close"
                onClick={() => {
                  handleClose();
                  // console.log(open);
                }}
              >
                <CloseOutlinedIcon
                  fontSize="inherit"
                  className="supplier-modal-close-icon"
                />
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default VideoPlayerModal;

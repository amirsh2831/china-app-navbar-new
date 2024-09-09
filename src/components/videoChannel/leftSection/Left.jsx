import React from "react";
import Player from "../player/Player";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Card from "../card/Card";
import "../VideoChannel.scss";
export const Left = ({ scroll }) => {
  return (
    <>
      <div
        className={`player-section ${scroll ? "player-scetion-scroll" : " "}`}
      >
        <div className="player">
          <Player />
        </div>
        <div className="video-title">
          <p>
            Yaomatec Portable Handheld Inkjet Printer Marking Date Qr Code
            Coding Machine Handheld Inkjet Machinery
          </p>
          <button>
            <ShareOutlinedIcon />
            <span>Share</span>
          </button>
        </div>
        <div className="cards">
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

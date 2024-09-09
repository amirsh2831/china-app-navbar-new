import React from "react";
import { Left } from "./leftSection/Left";
import MoreVideos from "./moreVideos/MoreVideos";
import "./VideoChannel.scss";
import { useState, useEffect, useRef } from "react";
const VideoChannel = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <>
      <div className={`video-channel-navigation ${scroll ? "sticky" : " "}`}>
        top
      </div>

      <div
        className={`video-player-main-container ${
          scroll ? "video-player-main-container-scroll" : " "
        } `}
      >
        <Left scroll={scroll} />
        <MoreVideos />
      </div>
    </>
  );
};

export default VideoChannel;

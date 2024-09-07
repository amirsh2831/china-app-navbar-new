import React from "react";
import { Left } from "./leftSection/Left";
import MoreVideos from "./moreVideos/MoreVideos";
import "./VideoChannel.scss";
import { useState, useEffect } from "react";
const VideoChannel = ({ lockScroll, setLockScroll }) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
      setLockScroll(window.scroll > 10);
      // console.log(lockScroll);s
    });
  });
  useEffect(() => {
    window.style.body.scroll = "none";
  }, [lockScroll]);

  return (
    <>
      <div className={`video-channel-navigation ${scroll ? "sticky" : " "}`}>
        top
      </div>

      <div
        className="video-player-main-container"
        style={{ overflowY: lockScroll ? "hidden" : "auto" }}
      >
        <Left />
        <MoreVideos lockScroll={lockScroll} setLockScroll={setLockScroll} />
      </div>
    </>
  );
};

export default VideoChannel;

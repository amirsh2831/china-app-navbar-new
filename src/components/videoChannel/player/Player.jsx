import React from "react";
import ReactPlayer from "react-player";
import "./Player.scss";
// Render a YouTube video player
const Player = () => {
  return (
    <>
      <div className="video-player">
        <ReactPlayer
          url="src/assets/video.mp4"
          playing={true}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default Player;

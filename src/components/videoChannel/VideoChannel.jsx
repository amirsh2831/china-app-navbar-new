import React from "react";
import { Left } from "./leftSection/Left";
import MoreVideos from "./moreVideos/MoreVideos";
import "./VideoChannel.scss";
import { useState, useEffect, useRef } from "react";
const VideoChannel = () => {
  const [scroll, setScroll] = useState(false);
  const mainContentRef = useRef(null);
  const [isScrollingMain, setIsScrollingMain] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       setIsScrollingMain(true);
  //     }
  //     const mainContent = mainContentRef.current;
  //     console.log("ScrollTop:", mainContent.scrollTop);
  //     console.log("ClientHeight:", mainContent.clientHeight);
  //     console.log("ScrollHeight:", mainContent.scrollHeight);
  //     const position = mainContent.getBoundingClientRect();
  //     // const mainContentRect = mainContent.getBoundingClientRect();
  //     // const viewportHeight = window.innerHeight;

  //     // Check if the main content section is in the viewport
  //     // if (mainContentRect.top <= 0 && !isScrollingMain) {
  //     //   setIsScrollingMain(true);
  //     // }

  //     // Check if the main content section has been fully scrolled
  //     if (isScrollingMain) {
  //       const scrollTop = mainContent.scrollTop;
  //       const clientHeight = mainContent.clientHeight;
  //       const scrollHeight = mainContent.scrollHeight;
  //       if (scrollTop + clientHeight >= scrollHeight) {
  //         mainContent.style.backgroundColor = "red";
  //         setIsScrollingMain(false);
  //       }
  //     }
  //     // const mainContent = mainContentRef.current;
  //     // const scrolledTo = window.scrollY + window.innerHeigh
  //     // const isReachBottom = mainContent.scrollHeight === scrolledTo;
  //     // const suggestionsBottom =
  //     //   mainContent.scrollHeight - mainContent.clientHeight;
  //     // const mainContentBottom = mainContent.scrollTop >= suggestionsBottom;

  //     // Lock body scroll if scrolling within the main content section
  //     if (isScrollingMain) {
  //       const mainContent = mainContentRef.current;
  //       // document.body.style.overflow = "hidden";
  //       // mainContent.style.backgroundColor = "blue";
  //     } else {
  //       document.body.style.overflow = "auto";
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     document.body.style.overflow = "auto"; // Reset body overflow on cleanup
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scroll]);
  // useEffect(() => {
  //   console.log(scroll);
  // }, [scroll]);
  // useEffect(() => {
  //   const mainContent = mainContentRef.current;
  //   console.log(mainContent.scrollY);
  // }, []);

  return (
    <>
      <div className={`video-channel-navigation ${scroll ? "sticky" : " "}`}>
        top
      </div>

      <div
        className={`video-player-main-container ${
          scroll ? "video-player-main-container-scroll" : " "
        } `}
        ref={mainContentRef}
      >
        <Left scroll={scroll} />
        <MoreVideos />
      </div>
    </>
  );
};

export default VideoChannel;

import React from "react";
import "./moreVideos.scss";
import { moreVideos } from "../../../constants";
import { useRef, useEffect, useState } from "react";

const MoreVideos = () => {
  // const moreVideosRef = useRef(null);
  // const [isVideosLocked, setIsVideosLocked] = useState(false);

  // useEffect(() => {
  //   const moreVideos = moreVideosRef.current;
  //   let lastScrollTop = 0;

  //   const handleScroll = () => {
  //     const pageScrollY = window.scrollY;
  //     const moreVideosTop = moreVideos.getBoundingClientRect().top;
  //     const moreVideosBottom = moreVideos.scrollHeight - window.innerHeight;

  //     // Check if we've scrolled to the point where the more videos section should take over
  //     if (moreVideosTop <= 0 && !isVideosLocked) {
  //       setIsVideosLocked(true);
  //       document.body.style.overflow = "hidden";
  //     }

  //     if (isVideosLocked) {
  //       // Scroll the more videos section instead of the page
  //       const scrollDelta = pageScrollY - lastScrollTop;
  //       moreVideos.scrollTop += scrollDelta;

  //       // If the more videos section reaches the bottom, unlock the page scroll
  //       if (moreVideos.scrollTop >= moreVideosBottom) {
  //         setIsVideosLocked(false);
  //         document.body.style.overflow = "auto"; // Unlock page scrolling
  //       }
  //     }

  //     lastScrollTop = pageScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     document.body.style.overflow = "auto"; // Reset the overflow on component unmount
  //   };
  // }, [isVideosLocked]);

  return (
    <>
      <div className={`more-videos-section`}>
        <div className="more-videos-title">
          <img
            className="more-videos-title-image"
            src="src/assets/Yaomazhi-Ltd.png"
            alt="title Image Logo"
          />
          <a className="more-videos-title-link" href="#">
            Yaomazhi (Wuhan) Technology Co., Ltd
          </a>
        </div>
        <div className="more-videos">
          <h4>More Videos</h4>
          <div>
            {moreVideos.map((item, i) => (
              <div key={i} className="more-videos-container">
                <div className="video-preview">
                  <img src={item.imgUrl} alt="Video Preview" />
                </div>
                <a className="video-title" href={item.link}>
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreVideos;

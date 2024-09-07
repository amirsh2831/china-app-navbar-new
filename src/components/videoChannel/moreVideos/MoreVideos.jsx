import React from "react";
import "./moreVideos.scss";
import { moreVideos } from "../../../constants";
import { useRef, useEffect } from "react";

const MoreVideos = ({ lockScroll, setLockScroll }) => {
  const suggestionsRef = useRef(null);

  useEffect(() => {
    // Helper function to check if the suggestions are in the viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Check if suggestions are already in the viewport on initial render
    if (suggestionsRef.current && isInViewport(suggestionsRef.current)) {
      setLockScroll(true);
    }

    // IntersectionObserver to monitor when the suggestions section enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLockScroll(false); // Lock scrolling to suggestions when in view
        } else {
          setLockScroll(true); // Unlock scrolling when out of view
        }
      },
      { threshold: 0.5 }
    );

    if (suggestionsRef.current) {
      observer.observe(suggestionsRef.current);
    }

    return () => {
      if (suggestionsRef.current) {
        observer.unobserve(suggestionsRef.current);
      }
    };
  }, [setLockScroll]);

  const handleScroll = (e) => {
    const element = e.currentTarget;

    // Unlock scroll when user reaches the bottom of the suggestions
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      setLockScroll(false);
    }
  };
  useEffect(() => {
    console.log(lockScroll);
  }, [lockScroll]);
  return (
    <>
      <div
        className="more-videos-section"
        ref={suggestionsRef}
        onScroll={handleScroll}
        style={{ overflowY: lockScroll ? "scroll" : "hidden" }}
      >
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

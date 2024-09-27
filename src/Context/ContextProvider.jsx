import React, { createContext, useContext, useState } from "react";
import { useInView } from "react-intersection-observer";

// Create the context
const InViewContext = createContext();

// Context Provider component
export const InViewProvider = ({ children }) => {
  // Define all your states from useInView
  const [section1Ref, section1InView] = useInView({ threshold: 0.5 });
  const [section2Ref, section2InView] = useInView({ threshold: 0.6 });
  const [section3Ref, section3InView] = useInView({ threshold: 0.6 });
  const [section4Ref, section4InView] = useInView({ threshold: 0.6 });
  const [section5Ref, section5InView] = useInView({ threshold: 0.6 });
  const [section6Ref, section6InView] = useInView({ threshold: 0.6 });
  const [section7Ref, section7InView] = useInView({ threshold: 0.6 });
  const [section8Ref, section8InView] = useInView({ threshold: 0.6 });
  // Add any additional state if needed

  // Context value that can be accessed by components
  const value = {
    section1Ref,
    section1InView,
    section2Ref,
    section2InView,
    section3Ref,
    section3InView,
    section4Ref,
    section4InView,
    section5Ref,
    section5InView,
    section6Ref,
    section6InView,
    section7Ref,
    section7InView,
    section8Ref,
    section8InView,
  };

  return (
    <InViewContext.Provider value={value}>{children}</InViewContext.Provider>
  );
};

// Custom hook to use the InViewContext
export const useInViewContext = () => useContext(InViewContext);

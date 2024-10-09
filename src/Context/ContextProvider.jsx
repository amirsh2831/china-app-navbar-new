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
  const [sec3_Ref_1, sec3_InView_1] = useInView({ threshold: 0.01 });
  const [sec3_Ref_2, sec3_InView_2] = useInView({ threshold: 0.01 });
  const [sec3_Ref_3, sec3_InView_3] = useInView({ threshold: 0.01 });
  const [sec3_Ref_4, sec3_InView_4] = useInView({ threshold: 0.1 });
  const [sec3_Ref_5, sec3_InView_5] = useInView({ threshold: 0.1 });
  const [sec3_Ref_6, sec3_InView_6] = useInView({ threshold: 0.1 });
  const [sec3_Ref_7, sec3_InView_7] = useInView({ threshold: 0.1 });
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
    sec3_Ref_1,
    sec3_InView_1,
    sec3_Ref_2,
    sec3_InView_2,
    sec3_Ref_3,
    sec3_InView_3,
    sec3_Ref_4,
    sec3_InView_4,
    sec3_Ref_5,
    sec3_InView_5,
    sec3_Ref_6,
    sec3_InView_6,
    sec3_Ref_7,
    sec3_InView_7,
  };

  return (
    <InViewContext.Provider value={value}>{children}</InViewContext.Provider>
  );
};

// Custom hook to use the InViewContext
export const useInViewContext = () => useContext(InViewContext);

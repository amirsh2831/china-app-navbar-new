import React from "react";
import Footer from "../../components/footerMain/footer";
import TradingPageNavbar from "../../components/tradingPage/navbar/TradingPageNavbar";
import HeroScetion from "../../components/tradingPage/heroSection/HeroSection";
import Products from "../../components/tradingPage/products/Products";
import MainSlider from "../../components/tradingPage/mainSlider/MainSlider";
import DynamicNavbar from "../../components/tradingPage/dynamicNavbar/DynamicNavbar";
const tradingPage = () => {
  return (
    <>
      <TradingPageNavbar />
      <DynamicNavbar />
      <HeroScetion />
      <MainSlider />
      <Products />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default tradingPage;

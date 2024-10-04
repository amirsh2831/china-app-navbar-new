import Navbar from "./components/navbar/Navbar";
import SupplierMain from "./components/suppliersMainPage/SuppliersMain";
import Footer from "./components/footer/footer";
import SuppliersMobilieSubNav from "./components/suppliersMainPage/suppliersMobileSubNab/SuppliersMobilieSubNav";
import VideoChannel from "./components/videoChannel/VideoChannel";
import { useState } from "react";
import TrendingShows from "./components/trendingShows/TrendingShows";
import TrendingPageNavbar from "./components/trendingPageNavbar/TrendingPageNavbar";
import TrendingPageMainSlider from "./components/TrendingPage/trendingPageMainSlider/trendingPageMainSlider";
import Search from "./components/TrendingPage/Search/Search";
import Footprint from "./components/TrendingPage/Footprint/Footprint";
import FeaturedShows from "./components/TrendingPage/featuredShows/FeaturedShows";
import MediaCooperation from "./components/TrendingPage/mediaCooperation/MediaCooperation";
import UpComingShows from "./components/TrendingPage/newsAndShows/upComingShows/UpComingShows";
import TrendingShowsNews from "./components/TrendingPage/newsAndShows/News/TrendingShowsNews";
import NewsAndShows from "./components/TrendingPage/newsAndShows/NewsAndShows";
import BottomLinks from "./components/TrendingPage/BottomLinks/BottomLinks";
import TradingPageNavbar from "./components/tradingPage/navbar/TradingPageNavbar";
import HeroScetion from "./components/tradingPage/heroSection/HeroSection";
import Products from "./components/tradingPage/products/Products";
import MainSlider from "./components/tradingPage/mainSlider/MainSlider";
import DynamicNavbar from "./components/tradingPage/dynamicNavbar/DynamicNavbar";
import { useInView } from "react-intersection-observer";
import Signin from "./components/signinPage/Signin";
import SigninComp from "./components/signinComp/SigninComp";
import ProductsPage from "./components/productsPage/ProductsPage";
import TopRanking from "./components/topRankingPage/TopRanking";

function App() {
  return (
    <>
      <TrendingPageNavbar />
      <TrendingPageMainSlider />
      <Search />

      <Footprint />
      <FeaturedShows />
      <MediaCooperation />
      <NewsAndShows />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

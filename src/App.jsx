import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import VideoChannel from "./components/videoChannel/VideoChannel";
import { useState } from "react";
import TrendingShows from "./components/trendingShows/TrendingShows";
import TrendingPageNavbar from "./components/trendingPageNavbar/trendingPageNavbar";
import TrendingPageMainSlider from "./components/TrendingPage/trendingPageMainSlider/trendingPageMainSlider";
import Search from "./components/TrendingPage/Search/Search";
import Footprint from "./components/TrendingPage/Footprint/Footprint";
import FeaturedShows from "./components/TrendingPage/featuredShows/FeaturedShows";

function App() {
  return (
    <>
      <TrendingPageNavbar />
      <TrendingPageMainSlider />
      <Search />
      <br />

      <Footprint />
      <FeaturedShows />
      {/* <Navbar /> */}
      {/* <VideoChannel /> */}
      {/* .<br />
      .<br />
      .<br /> */}
      {/* <TrendingShows />
      .<br />
      .<br />
      .<br /> */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

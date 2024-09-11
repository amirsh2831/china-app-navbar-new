import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
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
      <BottomLinks />
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

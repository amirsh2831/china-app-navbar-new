import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import TopRanking from "./components/topRankingPage/TopRanking";

const TopRankingPage = () => {
  return (
    <>
      <Navbar />
      <TopRanking />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default TopRankingPage;

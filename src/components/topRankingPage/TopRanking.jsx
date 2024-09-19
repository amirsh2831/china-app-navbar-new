import React from "react";
import "./TopRanking.scss";
import TopRankingFilters from "./topRankingFilters/TopRankingFilters";
import TopRankingBadges from "./topRankingBadge/TopRankingBadges";
import TopRankingCards from "./topRankingCards/TopRankingCards";
import TopRankingMobileFilters from "./topRankingMobileFilter/TopRankingMobileFilters";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const TopRanking = () => {
  const isTablet = useMediaQuery({ maxWidth: 768 });
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  useEffect(() => {
    console.log(scroll);
  }, [scroll]);
  return (
    <>
      <div className="top-ranking-main-banner">
        <div className="top-ranking-banner-info">
          <h1>Top-Ranking Products</h1>
          <h4>
            The rankings are designed to help buyers find target products easier
            and faster. Discover more trends and make your sourcing efficient.
          </h4>
          <a href="" className="top-ranking-discover">
            Discover Top-ranking Suppliers
          </a>
        </div>
      </div>
      <div className="top-ranking-main-body">
        <div className="top-ranking-filters">
          <TopRankingFilters />
        </div>

        <div
          className={`top-ranking-filter-mobile ${
            scroll ? "sticky-top-ranking" : ""
          }`}
          style={
            !isTablet
              ? { display: "none" }
              : scroll
              ? {
                  display: "block",
                }
              : {
                  display: "none",
                }
          }
        >
          <TopRankingMobileFilters />
        </div>
        <div className="top-ranking-main-products">
          <div className="top-ranking-products-badge">
            <TopRankingBadges />
          </div>
          <div className="top-ranking-products-wrapper">
            <div className="top-ranking-products-header">
              <h3>Most Popular Bathroom Cabinets</h3>
              <a href="#">View More</a>
            </div>
            <div className="top-ranking-products-grid-wrapper">
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product2.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product3.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product4.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product5.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />

              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
            </div>
          </div>
          <div className="top-ranking-products-wrapper">
            <div className="top-ranking-products-header">
              <h3>Most Popular Bathroom Cabinets</h3>
              <a href="#">View More</a>
            </div>
            <div className="top-ranking-products-grid-wrapper">
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />

              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
              <TopRankingCards
                banner={"assets/Image/TopRanking/product1.png"}
                title={
                  "CNC Free Sample Dz47-63 AC Miniature Circuit Breaker 1p 2p 3p 4p 6A 16A 20A 40A 63A AC 230V 400V Electric MCB"
                }
                // title={"hello"}
                tags={["ODM/OEM", "Online Trading"]}
                price={"US$ 0.89-0.91 / Set"}
                amount={"200 Sets (MOQ)"}
                demand={"433"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRanking;

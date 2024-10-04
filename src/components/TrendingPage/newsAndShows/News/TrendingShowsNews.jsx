import React from "react";
import { ShowNews } from "../../data";
import "./TrendingShowsNews.scss";
const TrendingShowsNews = () => {
  return (
    <>
      <div className="news">
        <div className="news-header">
          <h1>Show News</h1>
          <a href="#">View More</a>
        </div>
        <div className="news-content">
          <div className="news-items">
            {ShowNews.map((item, i) => (
              <div className="news-data" key={i}>
                <div className="news-info">
                  {item.new && <span className="new">New !</span>}
                  <a href={item.link}>
                    <h4>{item.text}</h4>
                  </a>
                </div>
                <p>{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingShowsNews;

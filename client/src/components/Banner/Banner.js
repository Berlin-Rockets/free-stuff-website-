import React from "react";
import "./Banner.css";
import Searchbar from "../Searchbar/Searchbar";
// import bannerPic from './../../banner-pic-2.jpg';
import bannerPic from "./../../banner-pic-4.jpg";

function Banner() {
  return (
    <div className="banner-container">
      <div className="left-side">
        <div className="intro-text">
          <p>
            Wanna get rid of those pants you've bought but never wear? Tired of
            reading the same book and wish to trade it?
          </p>
        </div>
        <Searchbar className="search-bar" />
      </div>
      <div className="right-side">
        <div className="banner-pic-4">
          <img src={bannerPic} alt="boxes" />
        </div>
      </div>
    </div>
  );
}

export default Banner;

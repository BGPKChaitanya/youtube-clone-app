import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./Trending.scss";

const Trending = () => {
  return (
    <div>
      <Header />
      <div className="Trending-container">
        <SideBar />
        Trending
      </div>
    </div>
  );
};

export default Trending;

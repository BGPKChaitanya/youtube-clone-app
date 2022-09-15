import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./Gaming.scss";

const Gaming = () => {
  return (
    <div>
      <Header />
      <div className="Gaming-container">
        <SideBar />
        Gaming
      </div>
    </div>
  );
};

export default Gaming;

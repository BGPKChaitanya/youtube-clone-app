import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./SavedVideos.scss";

const SavedVideos = () => {
  return (
    <div>
      <Header />
      <div className="SV-container">
        <SideBar />
        SavedVideos
      </div>
    </div>
  );
};

export default SavedVideos;

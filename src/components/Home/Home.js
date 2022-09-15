// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
// import { fetchAsyncVideos } from "../../features/YoutubeSlice/YoutubeSlice";

import "./Home.scss";

const Home = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAsyncVideos());
  // }, [dispatch]);

  return (
    <div>
      <Header />
      <SideBar />
    </div>
  );
};

export default Home;

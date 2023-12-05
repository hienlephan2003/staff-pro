import React from "react";
import LeftSideBar from "../../components/shared/LeftSideBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-full w-full">
      <LeftSideBar />
      <Outlet />
    </div>
  );
};

export default Home;

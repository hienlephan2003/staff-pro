import React from "react";
import HeaderBar from "../components/shared/HeaderBar";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../components/shared/LeftSideBar";

const RootLayout = () => {
  return (
    <div className="w-full h-full">
      <HeaderBar />
      <div className="flex h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;

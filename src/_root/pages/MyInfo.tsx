import { Outlet } from "react-router-dom";

const MyInfo = () => {
  return (
    <div className="flex h-full w-full">
      {/* <LeftSideBar /> */}
      <Outlet />
    </div>
  );
};

export default MyInfo;

import { Outlet } from "react-router-dom";
import { SideBar } from "../component/Test/SideBar.jsx";

const Layout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};

export default Layout;
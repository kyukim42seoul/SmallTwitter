import NavigationBar from "src/component/Thread/NavigationBar.jsx";
import { Outlet } from "react-router-dom";
import TrendingSideBar from "src/component/Thread/TrendingSideBar.jsx";
import styled from "styled-components";

const Layout = () => {

  return (
    <StyledLayout>
      <NavigationBar />
      <Outlet />
      <TrendingSideBar />
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`
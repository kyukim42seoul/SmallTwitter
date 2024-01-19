import styled from "styled-components";
import NavigationBar from "../component/Thread/NavigationBar.jsx";
import FlexContainer from "src/component/Common/FlexContainer.jsx";
import { ThreadCard } from "src/component/Thread/ThreadCard.jsx";
import TrendingSideBar from "../component/Thread/TrendingSideBar.jsx";
import MainContent from "../component/Thread/MainContent.jsx";

export const Thread = () => {
  const threadInfo = {
    threadID: 0,
    userNickname: "",
    userEmail: "",
    uploadDate: 0,
    post: "",
    tag: [""],
  };

  return (
    <StyledWrapper>
      <NavigationBar className="navigationBar" />
      <MainContent className="mainSection" />
      <TrendingSideBar className="sideBar" />
    </StyledWrapper>
  );
};

  const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    & > .navigationBar {
      display: none;
    }
    & > .mainSection {
      max-width: 37.5rem;
      border-right: 1px solid var(--grey3);
      overflow-y: auto;
      scrollbar-width: none;
      &::-webkit-scrollbar { display: none; };
    }
    & > .sideBar {
      display: none;
    }

    @media screen and (min-width: 700px) {
      & > .navigationBar {
        display: flex;
        max-width: 15rem;
      }
    }
    
    @media screen and (min-width: 1000px) {
      & > .mainSection {
        max-width: 37.5rem;
      }
      & > .sideBar {
        display: flex;
        width: 350px;
      }
    }

    @media screen and (min-width: 1225px) {
      & > .navigationBar {
        width: 275px;
      }
      & > .mainSection {
      }
      & > .sideBar {
        display: flex;
        max-width: 350px;
      }
    }
  `;
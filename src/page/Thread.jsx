import React, { useState, useEffect, useRef, cloneElement } from "react";
import ThreadCard from "src/component/Thread/ThreadCard.jsx";
import DraftInput from "src/component/Thread/DraftInput.jsx";
import styled from "styled-components";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const Thread = (props) => {
  const Tab = {
    me: "me",
    follow: "follow"
  };

  const [currentTab, setCurrentTab] = useState(Tab.me);
  const componentRef = useRef();
  const [threadInfos, setThreadInfos] = useState([]);

  const isCurrentTab = (tabName) => {
    return tabName === currentTab;
  }

  // ThreadCard 에 보낼 컨텐츠 받아오는 부분
  const getThreadInfos = () => {
    const userId = window.localStorage.getItem("userId");
    
    axios.get("http://localhost:3232/threads", {
    headers: { "Content-Type": "application/json" },
    params: { userId },
    })
    .then((response) => {
      const newThreadInfos = response.data;

      setThreadInfos(newThreadInfos);
    })
    .catch(error => console.error("ERR_getThread : ", error));
  }

  useEffect(getThreadInfos, []);

  return (
    <StyledThread ref={componentRef} {...props}>
      <StyledMainNavigation>
        <StyledLink onClick={() => {setCurrentTab(Tab.me)}} className={isCurrentTab(Tab.me) ? "active" : ""}>For you</StyledLink>
        <StyledLink onClick={() => {setCurrentTab(Tab.follow)}} className={isCurrentTab(Tab.follow) ? "active" : ""}>Following</StyledLink>
      </StyledMainNavigation>
      <StyledInputContainer>
        <StyledImage src="./user.png" $size="2.5rem" />
        <StyledInputWrapper>
          <DraftInput />
        </StyledInputWrapper>
      </StyledInputContainer>
      {threadInfos.map(threadInfo => <ThreadCard key={uuidv4()} threadInfo={threadInfo} />)}
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
    </StyledThread>
  );
}

export default Thread;

const StyledThread = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 600px;
  border-right: 1px solid var(--grey3);
  overflow-y: auto;
  scrollbar-width: none;

  ::-webkit-scrollbar { display: none; };

  @media screen and (min-width: 700px) {
     width: 600px;
  }
`

const StyledMainNavigation = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  background-color: var(--white);
  border-bottom: 1px solid var(--grey3);
  .active {
    color: var(--black);
  }
  `

const StyledLink = styled.a`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  height: 3.5rem;
  color: var(--grey4);
  font-weight: bold;
  &:hover {
    background-color: var(--grey2);
  }
`

const StyledInputContainer = styled.div`
  display: flex;
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid var(--grey3);
`

const StyledImage = styled.img`
  width: ${({$size}) => $size || "1.5rem"};
  height: ${({$size}) => $size ||  "1.5rem"};
  margin-right: 0.75rem;
`

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const StyledPostInput = styled.span`
  display: inline-block;
  padding: 0.75rem 0;
  font-size: 1.25rem;
`
import React, { useState, useEffect, useRef, cloneElement } from "react";
import Button from "../Common/Button.jsx";
import { ThreadCard } from "./ThreadCard.jsx";
import DraftInput from "./DraftInput.jsx";
import styled from "styled-components";

const MainContent = (props) => {
  const Tab = {
    me: "me",
    follow: "follow"
  };

  const [currentTab, setCurrentTab] = useState(Tab.me);

  const isCurrentTab = (tabName) => {
    return tabName === currentTab;
  }

  /* AutoFocusing */
  //const focusRef = useRef(null);
  //const [focusedIndex, setFocusedIndex] = useState(-1);
  
  
  //const handleKeyDown = (e) => {
  //  if (e.key === "Enter") {
  //    e.preventDefault();
  //    const newDivs = [...divs, <div onKeyDown={(e) => handleKeyDown(e, divs.length)}><span contentEditable="true"></span></div>];
  //    setDivs(newDivs);
  //    setFocusedIndex(divs.length);
  //  }
  //};

  //const [divs, setDivs] = useState([<div key="0" onKeyDown={(e) => handleKeyDown(e, divs.length)}><span contentEditable="true">편집 가능한 텍스트</span></div>]);

  //useEffect(() => {
  //  if (focusRef.current && focusedIndex >= 0) {
  //    focusRef.current.focus();
  //  }
  //}, [focusedIndex, divs.length])

  return (
    <StyledMainContent {...props}>
      <StyledMainNavigation>
        <StyledLink onClick={() => {setCurrentTab(Tab.me)}} className={isCurrentTab(Tab.me) ? "active" : ""}>For you</StyledLink>
        <StyledLink onClick={() => {setCurrentTab(Tab.follow)}} className={isCurrentTab(Tab.follow) ? "active" : ""}>Following</StyledLink>
      </StyledMainNavigation>
      <StyledInputContainer>
        <StyledImage src="./user.png" $size="2.5rem" />
        <StyledInputWrapper>
          <DraftInput />
          {/*{divs.map((div, index) => div)}*/}
          <Button className="postButton" $border="0" $backgroundColor="var(--main)" color="var(--white)">Post</Button>
        </StyledInputWrapper>
      </StyledInputContainer>
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
    </StyledMainContent>
  );
}

export default MainContent;

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledMainNavigation = styled.nav`
  display: flex;
  border-bottom: 1px solid var(--grey3);
  /*:nth-child(1) {
    border-right: 1px solid var(--grey3);
  }*/
  .active {
    color: var(--black);
  }
  `

const StyledLink = styled.a`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 4rem;
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
  gap: 0.5rem;
  & > .postButton {
    align-self: flex-end;
  }
`

const StyledPostInput = styled.span`
  display: inline-block;
  padding: 0.75rem 0;
  font-size: 1.25rem;
`
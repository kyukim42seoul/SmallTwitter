import styled from "styled-components";
import { Header } from "src/component/Common/Header.jsx";
import FlexContainer from "src/component/Common/FlexContainer.jsx";
import { ThreadCard } from "src/component/Thread/ThreadCard.jsx";

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
      <Header />
      <FlexContainer direction="column">
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
      </FlexContainer>
    </StyledWrapper>
  );
};

  const StyledWrapper = styled.div`
    
  `;
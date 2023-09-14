import styled from "styled-components";
import { Header } from "src/component/Header.jsx";
import { FlexContainer } from "src/container/FlexContainer.jsx";
import { ThreadCard } from "src/component/ThreadCard.jsx";

const StyledWrapper = styled.div`
  
`;

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

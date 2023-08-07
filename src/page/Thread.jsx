import styled from "styled-components";
import { Header } from "src/component/Header.jsx";
import { DefaultContainer } from "src/container/DefaultContainer.jsx";
import { ThreadCard } from "src/component/ThreadCard.jsx";

const StyledThread = styled.div`
  
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
    <StyledThread>
      <Header />
      <DefaultContainer direction="column">
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
      </DefaultContainer>
    </StyledThread>
  );
};

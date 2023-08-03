import styled from "styled-components";
import { Header } from "src/component/Header";
import { DefaultContainer } from "src/container/DefaultContainer";
import { ThreadCard } from "src/component/ThreadCard";

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

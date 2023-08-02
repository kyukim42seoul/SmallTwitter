import { Header } from "../Header";
import { DefaultContainer } from "../container/DefaultContainer";
import { ThreadCard } from "../component/ThreadCard";
import styled from "styled-components";

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

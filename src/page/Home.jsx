import { useState } from "react";
import { Header } from "../Header";
import { DefaultContainer } from "../container/DefaultContainer";
import { ThreadCard } from "../component/ThreadCard";

export const Home = () => {
  const threadInfo = {
    threadID: 0,
    userNickname: "",
    userEmail: "",
    uploadDate: 0,
    post: "",
    tag: [""],
  };

  return (
    <div>
      <Header />
      <DefaultContainer direction="column">
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
      </DefaultContainer>
    </div>
  );
};

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

  const mobData = [
    { contentId: 1, userName: "a" },
    { contentId: 2, userName: "b" },
  ];
  const [contentList, setContentList] = useState(mobData);

  return (
    <div>
      <Header />
      <DefaultContainer direction="column">
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        {contentList.map((item, index) => (
          <div key={index}>{`${item.contentId}: ${item.userName}`}</div>
        ))}
      </DefaultContainer>
    </div>
  );
};

import { useState } from "react";
import { Header } from "../Header";
import { DefaultContainer } from "../container/DefaultContainer";
import { ThreadCard } from "../component/ThreadCard";
import { DefaultList } from "../list/DefaultList";

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
        {contentList.map((item, index) => (
          <div key={index}>{`${item.contentId}: ${item.userName}`}</div>
        ))}
      </DefaultContainer>
      <DefaultList element="DefaultButton" length='3' />
    </div>
  );
};

/*
  go profile page onClick photo, nickname, email
  check favorite by click star
  expose update, remove card by click more_dots
  expose comment by click comment icon
  list up sorted cards by tag when click #tag
*/

import styled from "styled-components";
import { DefaultContainer } from "src/container/DefaultContainer";
import { TextButton } from "src/button/TextButton";

const StyledThreadCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 200px;
  padding: 20px;
  border-bottom: solid 1px;
`;

export const ThreadCard = (props) => {
  const prefix = "#";
  const commentCount = props.commentCount || 12;
  const tagList =
    props.tagList || ["apple", "banana", "orange"].map((tag) => prefix + tag);
  return (
    <StyledThreadCard>
      <DefaultContainer
        direction="row"
        justify="space-between"
        width="900px"
        height="36px"
      >
        <DefaultContainer direction="row" between="2px">
          <img src="./chat.png" width="36px" height="36px" />
          <TextButton label="kyukim" />
          <TextButton label="kyukim@student.42seoul.kr" />
          <p style={{ fontSize: "12px" }}>yyyy-mm-dd</p>
        </DefaultContainer>
        <DefaultContainer direction="row" between="20px">
          <img src="./off_star.png" width="36px" height="36px" />
          <img src="./more.png" width="36px" height="36px" />
        </DefaultContainer>
      </DefaultContainer>
      <pre
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0",
          padding: "0 36px",
          height: "120px",
          whiteSpace: "pre-wrap",
        }}
      >
        여기는 글입니다. 여기는 글입니다.여기는 글입니다.여기는 글입니다.여기는
        글입니다.여기는 글입니다.여기는 글입니다.여기는 글입니다.여기는
        글입니다.여기는 글입니다.
      </pre>
      <DefaultContainer direction="row" justify="space-between">
        <DefaultContainer>
          <img src="comment.png" width="36px" height="36px" />
          <TextButton label={String(commentCount)} />
        </DefaultContainer>
        <DefaultContainer>
          {tagList.map((tag, index) => {
            return <TextButton key={index} label={tag} />;
          })}
        </DefaultContainer>
      </DefaultContainer>
    </StyledThreadCard>
  );
};

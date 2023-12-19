/*
  go profile page onClick photo, nickname, email
  check favorite by click star
  expose update, remove card by click more_dots
  expose comment by click comment icon
  list up sorted cards by tag when click #tag
*/

import styled from "styled-components";
import FlexContainer from "src/component/Common/FlexContainer.jsx";
import TextButton from "src/component/Common/TextButton.jsx";

export const ThreadCard = (props) => {
  const prefix = "#";
  const commentCount = props.commentCount || 12;
  const tagList =
    props.tagList || ["apple", "banana", "orange"].map((tag) => prefix + tag);
  return (
    <StyledThreadCard>
      <FlexContainer
        direction="row"
        justify="space-between"
        width="900px"
        height="36px"
      >
        <FlexContainer direction="row" between="2px">
          <img src="./chat.png" width="36px" height="36px" />
          <TextButton>kyukim</TextButton>
          <TextButton>kyukim@student.42seoul.kr</TextButton>
          <p style={{ fontSize: "12px" }}>yyyy-mm-dd</p>
        </FlexContainer>
        <FlexContainer direction="row" between="20px">
          <img src="./off_star.png" width="36px" height="36px" />
          <img src="./more.png" width="36px" height="36px" />
        </FlexContainer>
      </FlexContainer>
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
      <FlexContainer direction="row" justify="space-between">
        <FlexContainer>
          <img src="comment.png" width="36px" height="36px" />
          <TextButton>{String(commentCount)}</TextButton>
        </FlexContainer>
        <FlexContainer>
          {tagList.map((tag, index) => {
            return <TextButton key={index}>{tag}</TextButton>;
          })}
        </FlexContainer>
      </FlexContainer>
    </StyledThreadCard>
  );
};

const StyledThreadCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 200px;
  padding: 20px;
  border-bottom: solid 1px;
`;
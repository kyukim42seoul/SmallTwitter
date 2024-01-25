/*
  go profile page onClick photo, nickname, email
  check favorite by click star
  expose update, remove card by click more_dots
  expose comment by click comment icon
  list up sorted cards by tag when click #tag
*/

import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { timeCalculator } from "src/common/Utils.js";
import FlexContainer from "src/component/Common/FlexContainer.jsx";
import TextButton from "src/component/Common/TextButton.jsx";

const ThreadCard = ({ threadInfo }, ...props) => {
  console.log(`threadInfo: `, threadInfo);

  // 시간 관련 처리
  const uploadTime = threadInfo ? new Date(threadInfo.upload_time) : new Date();
  const uploadTimeString = timeCalculator(uploadTime);

  const userName = threadInfo ? threadInfo.user_name : "홍길동";

  const makeShortEmail = (email) => {
    const username = email.split('@')[0];
    return '@' + username;
  };
  const shortenedEmail = threadInfo ? makeShortEmail(threadInfo.user_email) : "@test";

  const threadContent = threadInfo ? threadInfo.thread_content : "빈 카드입니다.";
  const prefix = "#";
  const commentCount = props.commentCount || 12;
  const tagList =
    props.tagList || ["apple", "banana", "orange"].map((tag) => prefix + tag);

  return (
    <StyledThreadCard>
      <StyledProfile src="./user.png" $size="2.5rem" />
      <FlexContainer className="contentWrapper" direction="column" align="normal">
        <FlexContainer
          className="cardHeader"
          direction="row"
          justify="space-between"
        >
          <FlexContainer className="meta" direction="row" between="2px">
            <TextButton className="nickName">{userName}</TextButton>
            <TextButton>{shortenedEmail}</TextButton>
            <p className="uploadDate" style={{ fontSize: "12px" }}>{uploadTimeString}</p>
          </FlexContainer>
          <FlexContainer direction="row" between="1.25rem">
            <StyledIcon src="./off_star.png" $size="1.5rem" />
            <StyledIcon src="./more.png" $size="1.5rem" />
          </FlexContainer>
        </FlexContainer>
        <StyledContetnt>
          {threadContent}
        </StyledContetnt>
        <FlexContainer className="cardFooter" direction="row" justify="space-between">
          <FlexContainer justify="flex-start" height="1.25rem">
            <StyledIcon src="comment.png" $size="1.25rem" />
            <TextButton>{String(commentCount)}</TextButton>
          </FlexContainer>
          <FlexContainer className="tagList">
            {tagList.map((tag, index) => {
              return <TextButton key={index}>{tag}</TextButton>;
            })}
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </StyledThreadCard>
  );
};

export default ThreadCard;

const StyledThreadCard = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 1.25rem;
  border-bottom: solid 1px var(--grey2);

  &:hover {
    background-color: var(--grey2);
  }

  .contentWrapper {
    flex: 1;
  }

  .cardFooter {
    height: 2rem;
    > .tagList {
      :nth-child(n+1) {
        padding-left: 0.5rem;
      }
    }
  }

  .meta {
    height: 1.25rem;
    > .uploadDate {
      display: none;
      @media screen and (min-width: 768px) {
        display: inline-block;
      }
    }
    > .nickName {
      font-weight: bold;
    }
  }
`;

const StyledProfile = styled.img`
  width: ${({$size}) => $size || "1.5rem"};
  height: ${({$size}) => $size || "1.5rem"};
  margin-right: 0.75rem;
`;

const StyledIcon = styled.img`
  width: ${({$size}) => $size || "1.5rem"};
  height: ${({$size}) => $size || "1.5rem"};
`;

const StyledContetnt = styled.pre`
  display: flex;
  align-items: center;
  white-space: pre-wrap;
`
/*
  go profile page onClick photo, nickname, email
  check favorite by click star
  expose update, remove card by click more_dots
  expose comment by click comment icon
  list up sorted cards by tag when click #tag
*/
import axios from "axios";
import { makeShortEmail, timeCalculator } from "src/common/Utils.js";
import FlexContainer from "src/component/Common/FlexContainer.jsx";
import TextButton from "src/component/Common/TextButton.jsx";

import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BsBookmark, BsBookmarkFill, BsThreeDots } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";

import styled from "styled-components";

const ThreadCard = ({ threadInfo }, ...props) => {
  console.log(`threadInfo: `, threadInfo);

  // 시간 관련 처리
  const uploadTime = threadInfo ? new Date(threadInfo.upload_time) : new Date();
  const uploadTimeString = timeCalculator(uploadTime);

  const userName = threadInfo ? threadInfo.user_name : "홍길동";

  const shortenedEmail = threadInfo
    ? makeShortEmail(threadInfo.user_email)
    : "@test";

  const [isBookmarked, setIsBookmarked] = useState(false);

  const threadContent = threadInfo
    ? threadInfo.thread_content
    : "빈 카드입니다.";
  //const commentCount = threadInfo ? threadInfo.comment_count : 0;
  const commentCount = 0;

  const prefix = "#";
  //let tagList = threadInfo ? threadInfo.tags : ["apple", "banana", "orange"];
  let tagList = ["apple", "banana", "orange"];
  tagList = tagList.map((tag) => prefix + tag);

  return (
    <StyledThreadCard>
      <IconContext.Provider value={{ size: "1.25rem" }}>
        <StyledProfile src="./user.png" $size="2.5rem" />
        <StyledContentWrapper>
          <StyledContentHeader>
            <StyledMetaWrapper>
              <StyledUserName>{userName}</StyledUserName>
              <StyledShortEmail>{shortenedEmail}</StyledShortEmail>
              <StyledUploadDate>{uploadTimeString}</StyledUploadDate>
            </StyledMetaWrapper>
            <StyledMoreWrapper>
              {isBookmarked ? (
                <StyledIconWrapper>
                  <BsBookmarkFill
                    onClick={() => setIsBookmarked((prev) => !prev)}
                  />
                </StyledIconWrapper>
              ) : (
                <StyledIconWrapper>
                  <BsBookmark
                    onClick={() => setIsBookmarked((prev) => !prev)}
                  />
                </StyledIconWrapper>
              )}
              <StyledIconWrapper>
                <BsThreeDots />
              </StyledIconWrapper>
            </StyledMoreWrapper>
          </StyledContentHeader>
          <StyledContentMain>{threadContent}</StyledContentMain>
          <StyledCardFooter>
            <StyledCommentWrapper>
              <StyledIconWrapper>
                <FaRegComments />
              </StyledIconWrapper>
              <StyledCommentCount>{String(commentCount)}</StyledCommentCount>
            </StyledCommentWrapper>
            <StyledTagWrapper>
              {tagList.map((tag, index) => {
                return <StyledTagButton key={index}>{tag}</StyledTagButton>;
              })}
            </StyledTagWrapper>
          </StyledCardFooter>
        </StyledContentWrapper>
      </IconContext.Provider>
    </StyledThreadCard>
  );
};

export default ThreadCard;

const StyledThreadCard = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 0.75rem 1rem;
  border-bottom: solid 1px var(--grey2);

  &:hover {
    background-color: var(--grey1);
    cursor: pointer;
  }

  .cardFooter {
    height: 2rem;
    > .tagList {
      :nth-child(n + 1) {
        padding-left: 0.5rem;
      }
    }
  }
`;

const StyledProfile = styled.img`
  width: ${({ $size }) => $size || "1.5rem"};
  height: ${({ $size }) => $size || "1.5rem"};
  margin-right: 0.75rem;
`;

const StyledContentWrapper = styled(FlexContainer)`
  display: flex;
  flex-direction: column;
  align-items: normal;
  flex: 1;
`;

const StyledContentHeader = styled(FlexContainer)`
  display: flex;
  justify-content: space-between;
  height: 1.5rem;
  font-size: 1rem;
`;

const StyledMetaWrapper = styled(FlexContainer)`
  display: flex;
  gap: 4px;
`;

const StyledUserName = styled(TextButton)`
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledShortEmail = styled(TextButton)`
  font-size: 0.75rem;
  color: var(--grey5);
  &:hover {
    font-weight: unset;
  }
`;

const StyledUploadDate = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.75rem;
    color: var(--grey5);
    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledMoreWrapper = styled(FlexContainer)`
  display: flex;
  gap: 0.75rem;
`;

const StyledIconWrapper = styled(FlexContainer)`
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  &:hover {
    color: var(--main);
  }
`;

const StyledContentMain = styled.pre`
  display: flex;
  align-items: center;
  white-space: pre-wrap;
`;

const StyledCardFooter = styled(FlexContainer)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 2rem;
  gap: 0.5rem;
`;

const StyledCommentWrapper = styled(FlexContainer)`
  display: flex;
  justify-content: flex-start;
  height: 1.25rem;
  gap: 0.5rem;
`;

const StyledCommentCount = styled(TextButton)`
  &:hover {
    font-weight: unset;
  }
`;

const StyledTagWrapper = styled(FlexContainer)`
  display: flex;
  gap: 0.5rem;
`;

const StyledTagButton = styled(TextButton)``;

/*
  toggle exposing fav_star, edit dots by props(MyThead or MyFavorite)
  pop up full content TheadCard onClick
  check favorite by click star
  expose update, remove card by click more_dots
  get props.callType {myThread || myComment || favorite}(String)
  myThread => Content, UploadTime, Tags && !fav_star && more_dots && onCick(popUp fullThreadCard)
  myComment => Content, UploadTime && more_dots && onClick(parentThreadCard, cursor on myComment)
  favorite => Profile, UserID, Content, UploadTime, Tags && fav_star && !more_dots
*/

/*
  () === ComponentDevide

  full
    (profile, userID), UploadTime, Content, (Tags), (fav_star), (more_dots)

  myThread
    UploadTime, Content, Tags, more_dots

  myComment
    UploadTime, Content, more_dots

  favorite
    profile, userID, UploadTime, Content, Tags, fav_star
*/

/*
  Component hidden logic

  profile, userID, fav_star: self(boolean)
  more_dots: readOnly(boolean)
  tags, fav_star: isComment(boolean)
  fav_star: self(false) && isComment(false)
*/

/*
  일단은 각 요소에서 논리비교를 하고, 나중엔 컴포넌트에서 미리 비교 후 넘버링에 따른 return 을 다르게 적자.
*/

import styled from "styled-components";
import FlexContainer from "src/component/Common/FlexContainer.jsx";
import TextButton from "src/component/Common/TextButton.jsx";

/**
 * return customed ThreadCard by self, readOnly, isComment
 * @param {boolean} self
 * @param {boolean} readOnly
 * @param {boolean} isComment
 * @param {Number} commentCount
 * @param {Array<String>} tagList
 * @returns {JSX}
 */

const MiniCard = ({ self, readOnly, isComment, ...props }) => {
  const prefix = "#";
  const commentCount = props.commentCount || 12;
  const tagList =
    props.tagList || ["apple", "banana", "orange"].map((tag) => prefix + tag);
  if (self) {
    return (
      <StyledMiniCard>
        <FlexContainer
          direction="row"
          justify="space-between"
          width="inherited"
        >
          <pre
            style={{
              display: "flex",
              alignItems: "center",
              margin: "0",
              padding: "0",
              height: "80px",
              width: "80%",
              whiteSpace: "normal",
              fontSize: "16px",
            }}
          >
            여기는 글입니다. 여기는 글입니다.여기는 글입니다.여기는
            글입니다.여기는 글입니다.여기는 글입니다.여기는 글입니다.여기는
            글입니다.여기는 글입니다.여기는 글입니다.
          </pre>
          <FlexContainer
            direction="row"
            justify="right"
            between="10px"
          >
            {" "}
            {/* 별, 더보기 */}
            {!isComment && (
              <img src="./off_star.png" width="32px" height="32px" />
            )}{" "}
            {/* fav_star */}
            {!readOnly && (
              <img src="./more.png" width="32px" height="32px" />
            )}{" "}
            {/* more_dots */}
          </FlexContainer>
        </FlexContainer>
        <FlexContainer direction="row" justify="space-between">
          <FlexContainer>
            <img src="comment.png" width="16px" height="16px" />
            <TextButton fontSize="16px">
              {String(commentCount)}
            </TextButton>
          </FlexContainer>
          <FlexContainer>
            {tagList.map((tag, index) => {
              return <TextButton key={index}>{tag}</TextButton>;
            })}
          </FlexContainer>
        </FlexContainer>
      </StyledMiniCard>
    );
  } else {
    return (
      <StyledMiniCard>
        <FlexContainer
          class="cardHead"
          direction="row"
          justify="space-between"
          width="900px"
          height="36px"
        >
          {" "}
          {/* cardHead */}
          <FlexContainer className="leftHead" direction="row" between="2px">
            {" "}
            {/* profile, userID, userEmail */}
            <img src="./chat.png" width="36px" height="36px" />
            <TextButton>kyukim</TextButton>
            <TextButton>kyukim@student.42seoul.kr</TextButton>
            <p style={{ fontSize: "12px" }}>yyyy-mm-dd</p>
          </FlexContainer>
          <FlexContainer className="rightHead" direction="row" between="20px">
            {" "}
            {/* 별, 더보기 */}
            {!isComment && (
              <img src="./off_star.png" width="36px" height="36px" />
            )}{" "}
            {/* fav_star */}
            {!readOnly && (
              <img src="./more.png" width="36px" height="36px" />
            )}{" "}
            {/* more_dots */}
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
          여기는 글입니다. 여기는 글입니다.여기는 글입니다.여기는
          글입니다.여기는 글입니다.여기는 글입니다.여기는 글입니다.여기는
          글입니다.여기는 글입니다.여기는 글입니다.
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
      </StyledMiniCard>
    );
  }
};

export default MiniCard;

const StyledMiniCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  padding: 20px;
  border-bottom: solid 1px;

  .leftHead {
    justify-content: left;
  }
  .rightHead {
    justify-content: right;
  }
`;
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
  more_dots: read_only(boolean)
  tags, fav_star: isComment(boolean)
  fav_star: self(false) && isComment(false)
*/

/*
  일단은 각 요소에서 논리비교를 하고, 나중엔 컴포넌트에서 미리 비교 후 넘버링에 따른 return 을 다르게 적자.
*/

import styled from "styled-components";
import { DefaultContainer } from "src/container/DefaultContainer";
import { TextButton } from "src/button/TextButton";

const StyledMiniCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 860px;
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

/**
 * return customed ThreadCard by self, read_only, isComment
 * @param {boolean} self
 * @param {boolean} readOnly
 * @param {boolean} isComment
 * @returns {JSX}
 */

export const MiniCard = (props) => {
  const prefix = "#";
  const commentCount = props.commentCount || 12;
  const tagList =
    props.tagList || ["apple", "banana", "orange"].map((tag) => prefix + tag);
  if (props.self) {
	return (
	  <StyledMiniCard>
		<DefaultContainer direction="row" justify="space-between" width="inherited">
			<pre style={{
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
			  여기는 글입니다. 여기는 글입니다.여기는 글입니다.여기는 글입니다.여기는
			  글입니다.여기는 글입니다.여기는 글입니다.여기는 글입니다.여기는
			  글입니다.여기는 글입니다.
			</pre>
			<DefaultContainer direction="row" justify="right" between="10px" width="82px"> {/* 별, 더보기 */}
				{!(props.isComment) && <img src="./off_star.png" width="32px" height="32px" />} {/* fav_star */}
				{!(props.read_only) && <img src="./more.png" width="32px" height="32px" />} {/* more_dots */}
			</DefaultContainer>
		</DefaultContainer>
		<DefaultContainer direction="row" justify="space-between">
		  <DefaultContainer>
			<img src="comment.png" width="16px" height="16px" />
			<TextButton label={String(commentCount)} fontSize="16px" />
		  </DefaultContainer>
		  <DefaultContainer>
			{tagList.map((tag, index) => {
			  return <TextButton key={index} label={tag} />;
			})}
		  </DefaultContainer>
		</DefaultContainer>
	  </StyledMiniCard>
	)
  } else {
	  return (
		<StyledMiniCard>
		  <DefaultContainer
			class="cardHead"
			direction="row"
			justify="space-between"
			width="900px"
			height="36px"
		  > {/* cardHead */}
			<DefaultContainer className="leftHead" direction="row" between="2px"> {/* profile, userID, userEmail */}
			  <img src="./chat.png" width="36px" height="36px" />
			  <TextButton label="kyukim" />
			  <TextButton label="kyukim@student.42seoul.kr" />
			  <p style={{ fontSize: "12px" }}>yyyy-mm-dd</p>
			</DefaultContainer>
			<DefaultContainer className="rightHead" direction="row" between="20px"> {/* 별, 더보기 */}
			  {!(props.isComment) && <img src="./off_star.png" width="36px" height="36px" />} {/* fav_star */}
			  {!(props.read_only) && <img src="./more.png" width="36px" height="36px" />} {/* more_dots */}
			</DefaultContainer>
		  </DefaultContainer>
		  <pre
			style={{
			  display: "flex",
			  alignItems: "center",
			  margin: "0",
			  padding: "0 36px",
			  height: "120px",
			  width: "auto",
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
		</StyledMiniCard>
	  );
  }
};

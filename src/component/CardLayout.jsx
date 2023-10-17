/*  
  왜인지 모르겠지만 여러 요소를 품은 래퍼를 다른 래퍼로 한 번 감싸는데 일단 따라해본다.
  카드 구성이 헤드, 바디, 푸터에서 사이드, 헤드, 바디, 푸터로 바뀔 수 있는데 어떻게 대처해야하나?
  요소가 새로 추가되는 것이니  CSS 가 아닌 리액트 쪽에서 분기를 타야하겠다.
  넘겨주는 데이터만 동일하게 하고
  small, full-size 로 나누자
*/

import { useState } from "react";
import "./CardLayout.css";

const getCommentByCardId = ({cardId}) => {};

/**
 * 글을 보는 동안 실시간 갱신을 할까 했지만 서버 비용 때문인지 트위터에선 유의미한 동작(새로고침, 버튼 클릭)을 하기 전에는 정보가 갱신되지 않음
 * 아래 파라미터 중 어느 것이 바뀌어도 다시 렌더링 되지 않는 것으로 보아 전부 요청을 통해 가져올 뿐 상태로 관리하는건 아닌 것 같다
 * @param {} nickName
 * @param {} userId
 * @param {} uploadTime
 * @param {} favoriteCount
 * @param {} textContent
 * @param {} commentCount
 */

export const CardLayout = (props) => {
  const {isMine, nickName, userId, uploadTime, isFavorite, favoriteCount, textContent, commentCount} = props;
  // 일단 여기서 isFavorite 을 상태로 처리해서 렌덜이 결과를 확인하자. 나중에 Recoil 로 바꾸자.
  const [currentFavorite, setCurrentFavorite] = useState(isFavorite);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className="card-wrapper" onClick={() => {}} style={{display: "flex"}}>
      <div className="card-side">
        <button className="profile-button" onClick={() => {}}>
          <img src="./user.png" width="40px" height="40px" />
        </button>
      </div>
      <div className="card-main" style={{display: "flex", flexDirection: "column"}}>
        <div className="card-header" style={{display: "flex"}}>
          <div className="card-header-left">
            <span className="nick-name">{nickName}</span>
            <span className="user-id">{userId}</span>
            <span className="upload-time">{uploadTime}</span>
          </div>
          <div className="card-header-right" style={{display: "flex"}}>
            <div style={{display: "flex"}}>
              <button className="favorite-button" onClick={() => {setCurrentFavorite((prev) => !prev)}}>
                <img className="" src={currentFavorite ? "./on_star.png" : "off_star.png"} width="20px" height="20px" />
              </button>
              <p className="favorite-count">{favoriteCount}</p>
            </div>
            <button className="more-button" onClick={() => {setMoreOpen((prev) => !prev)}}>
              <img className="" src="./more.png" width="20px" height="20px"/>
              {moreOpen ? <div className="more-detail">
                {isMine? 
                <ul>
                  <button onClick={(e) => {e.stopPropagation()}} className="correct-card-button">수정</button>
                  <button onClick={(e) => {e.stopPropagation()}} className="delete-card-button">삭제</button>
                </ul> : 
                <ul>
                  <button onClick={(e) => {e.stopPropagation()}} className="hide-card-button">안 보이기</button>
                </ul>}
                <button onClick={(e) => {e.stopPropagation(); setMoreOpen(false);}} >Close</button>
              </div> : null }
            </button>
          </div>
        </div>

        <div className="card-body">
          <div className="text-content">
            <p>{textContent}</p>
          </div>
        </div>

        <div className="card-footer">
          <div>
            <div style={{display: "flex"}}>
              <button className="comments" onClick={() => {getCommentByCardId()}}>
                <img src="./comment.png" width="20px" height="20px" />
              </button>
              <span className="comment-count">{commentCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
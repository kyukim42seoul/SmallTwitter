import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FlexContainer from "src/component/Common/FlexContainer";
import Button from "src/component/Common/Button.jsx";

export const SideBar = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientX < 10) {
          setIsVisible(true);
      } else if (e.clientX >= 250) {
          setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
    return () => {
      console.log('SideBar unmounted');
      window.removeEventListener('mousemove', handleMouseMove);
    };
}, []);

  return <StyledSidebar isVisible={isVisible}>
    <StyledItem isVisible={isVisible}>
      <FlexContainer direction="column" between="20px">
        <img src="./chat.png" width="100px" height="100px" />
        <Button onClick={() => navigate("/thread")}>스레드</Button>
        <Button onClick={() => navigate("/profile")}>프로필</Button>
        <Button onClick={() => navigate("/empty")}>빈페이지</Button>
        <Button onClick={() => navigate("/post")}>포스트</Button>
        <Button onClick={() => navigate("/write")}>쓰기</Button>
        <Button onClick={() => navigate("/date")}>날짜 축약</Button>
        <Button onClick={() => navigate("/createUser")}>유저 생성 테스트</Button>
        <Button onClick={() => navigate("/loginTest")}>로그인 테스트</Button>
        <Button onClick={() => navigate("/createThread")}>글 생성 테스트</Button>
      </FlexContainer>
    </StyledItem>
  </StyledSidebar>;
};

const StyledSidebar = styled.div`
  height: 100%; /* 전체 높이 */
  width: ${({isVisible}) => isVisible ? "250px" : "0"}; /* 사이드바의 너비 */
  overflow: ${({isVisible}) => isVisible ? "visible" : "hidden"};
  transition: 0.2s;
  position: fixed; /* 고정된 위치 */
  top: 0; /* 상단에서부터 시작 */
  left: 0; /* 좌측에서부터 시작 */
  background-color: #fff; /* 배경 색상 */
  overflow-x: hidden; /* 가로 스크롤 숨김 */
  padding-top: 20px; /* 상단 패딩 */
  /*border: 1px solid grey;*/
`;

const StyledItem = styled.div`
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(-250px)'};
  transition: transform 0.2s;
`;
/**
 * Todos
 *  로그인에 실패했을 경우 팝업 설정
 */

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FlexContainer } from "src/container/FlexContainer.jsx";
import { CustomButton } from "src/button/CustomButton.ts";
import { LoginForm } from "../component/LoginForm.jsx";
import { Popup } from "../component/Popup.jsx";
import { useState } from "react";

const StyledWrapper = styled.div`
  
`;

export const Login = () => {
	const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWrapper>
			<FlexContainer className="dev-header" direction="row" between="20px">
          <CustomButton onClick={() => navigate("/thread")}>스레드</CustomButton>
          <CustomButton onClick={() => navigate("/profile")}>프로필</CustomButton>
			</FlexContainer>
      <FlexContainer
        direction="column"
        padding="0px"
        between="50px"
        width="100%"
        height="100vh"
      >
        <img src="./chat.png" width="100px" height="100px" />
        <LoginForm />
        <CustomButton onClick={() => setIsOpen(true)}>회원가입</CustomButton>
        {isOpen && <Popup setIsOpen={setIsOpen} />}
      </FlexContainer>
    </StyledWrapper>
  );
}
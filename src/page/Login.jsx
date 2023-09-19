/**
 * Todos
 *  로그인에 실패했을 경우 팝업 설정
 */

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FlexContainer } from "src/container/FlexContainer.jsx";
import { StyledButton } from "src/styled/StyledButton.js";
import { LoginForm } from "../component/LoginForm.jsx";
import { SignUpForm } from "../component/SignUpForm.jsx";
import { useState } from "react";

const StyledWrapper = styled.div``;

export const Login = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWrapper>
      <FlexContainer className="dev-header" direction="row" between="20px">
        <StyledButton onClick={() => navigate("/thread")}>스레드</StyledButton>
        <StyledButton onClick={() => navigate("/profile")}>프로필</StyledButton>
        <StyledButton onClick={() => navigate("/empty")}>빈페이지</StyledButton>
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
        <StyledButton onClick={() => setIsOpen(true)}>회원가입</StyledButton>
        {isOpen && <SignUpForm setIsOpen={setIsOpen} />}
      </FlexContainer>
    </StyledWrapper>
  );
};

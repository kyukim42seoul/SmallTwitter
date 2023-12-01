import { useState } from "react";
import styled from "styled-components";
import { FlexContainer } from "src/component/Common/FlexContainer.jsx";
import { StyledButton } from "src/styled/StyledButton.js";
import { LoginForm } from "src/component/Login/LoginForm.jsx";
import { SignUpForm } from "src/component/Login/SignUpForm.jsx";
import { SideBar } from "src/component/Test/SideBar";

const StyledWrapper = styled.div``;

export const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <StyledWrapper>
      <SideBar/>
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

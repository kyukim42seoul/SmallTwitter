import { useState } from "react";
import styled from "styled-components";
import FlexContainer from "src/component/Common/FlexContainer.jsx";
import Button from "src/component/Common/Button.jsx";
import { LoginForm } from "src/component/Login/LoginForm.jsx";
import { SignUpForm } from "src/component/Login/SignUpForm.jsx";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <StyledWrapper>
      <FlexContainer
        direction="column"
        padding="0px"
        between="50px"
        width="100%"
        height="100vh"
        >
        <img src="./chat.png" width="100px" height="100px" />
        <LoginForm />
        <Button onClick={() => setIsOpen(true)}>회원가입</Button>
        {isOpen && <SignUpForm setIsOpen={setIsOpen} />}
      </FlexContainer>
    </StyledWrapper>
  );
};

export default Login;

const StyledWrapper = styled.div``;
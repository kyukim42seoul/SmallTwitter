import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { isValidForm, keyDownHandler } from "src/common/Utils.js";
import { emailRegExp, passwordRegExp } from "src/data/regex.js";
import Input from "src/component/Common/Input.jsx";
import Button from "src/component/Common/Button.jsx";
import FlexContainer from "../Common/FlexContainer";

export const SignUpForm = ({ setIsOpen }) => {
  const [newID, setNewID] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(`signup submit occured`);
    // 모든 엔터에서 이벤트 발생 중...
  };

  return (
    <StyledWrapper>
      <StyledSignUpForm onSubmit={onSubmitHandler}>
        <FlexContainer direction="column" between="10px">
          <Input
            placeholder="아이디를 입력해주세요"
            onKeyDown={(event) => keyDownHandler(event, setNewID)}
          />
          {isValidForm(newID, emailRegExp) && (
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onKeyDown={(event) => keyDownHandler(event, setNewPassword)}
            />
          )}
          {isValidForm(newPassword, passwordRegExp) && (
            <Input
              type="password"
              placeholder="비밀번호를 확인해주세요"
              onKeyDown={(event) =>
                keyDownHandler(event, setNewConfirmPassword)
              }
            />
          )}
          {newConfirmPassword && !(newPassword === newConfirmPassword) && (
            <p style={{ color: "red" }}>비밀번호를 다시 확인해주십시오</p>
          )}
          <Button onClick={() => {}}>Submit</Button>
          <Button onClick={() => setIsOpen(false)}>close</Button>
        </FlexContainer>
      </StyledSignUpForm>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* 기존 컨텐츠보다 위에 두기 위함 */
  z-index: 1;
`;

const StyledSignUpForm = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  /* Wrapper 보다 위에 있기 위함 */
  z-index: 2;
`;

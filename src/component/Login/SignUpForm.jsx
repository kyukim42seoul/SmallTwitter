// onKeyDown 에서 shift 도 이벤트를 발생시키기 때문에 워닝이 발생한다. Enter 를 확인할 다른 방법을 생각해야 한다.
/*
Uncaught TypeError: inputTypes.contains is not a function
    at isTextElement (<anonymous>:14:31)
    at <anonymous>:31:26
    at <anonymous>:66:3
*/

import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { isValidForm, keyDownHandler } from "src/common/Utils.js";
import { emailRegExp, passwordRegExp } from "src/data/regex.js";
import Input from "src/component/Common/Input.jsx";
import Button from "src/component/Common/Button.jsx";
import FlexContainer from "../Common/FlexContainer";

export const SignUpForm = ({ setIsOpen }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [checkingPassword, setCheckingPassword] = useState("");
  const [userName, setUserName] = useState("");
  const allFieldsFilled = userEmail && userPassword && checkingPassword && userName;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(`signup submit occured`);
    // 모든 엔터에서 이벤트 발생 중...
    if (allFieldsFilled) {
      axios.post("http://localhost:3232/users/signup", {
        userEmail,
        userPassword,
        userName
      }, {
        headers: { "Content-Type": `application/json` },
      })
      .then(res => {
        if (res.status === 200) {
          console.log(res.status, res.data);
          setIsOpen(false);
        }
      })
      .catch(err => console.error(err.message))
    } else {
      console.log('Please fill all the fields');
    }
  };

  return (
    <StyledWrapper>
      <StyledSignUpForm onSubmit={onSubmitHandler}>
        <FlexContainer direction="column" between="10px">
          <Input
            placeholder="이메일을 입력해주세요"
            value={userEmail}
            onKeyDown={(event) => keyDownHandler(event, setUserEmail)}
            onChange={(e) => {setUserEmail(e.target.value)}}
          />
          {isValidForm(userEmail, emailRegExp) && (
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={userPassword}
              onKeyDown={(event) => keyDownHandler(event, setUserPassword)}
              onChange={(e) => {setUserPassword(e.target.value)}}
            />
          )}
          {isValidForm(userPassword, passwordRegExp) && (
            <Input
              type="password"
              placeholder="비밀번호를 확인해주세요"
              value={checkingPassword}
              onKeyDown={(event) =>
                keyDownHandler(event, setCheckingPassword)
              }
              onChange={(e) => {setCheckingPassword(e.target.value)}}
            />
          )}
          {checkingPassword && !(userPassword === checkingPassword) && (
            <p style={{ color: "red" }}>비밀번호를 다시 확인해주십시오</p>
          )}
          <Input placeholder="닉네임을 적어주세요" value={userName} onChange={(e) => {setUserName(e.target.value)}} />
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

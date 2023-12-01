/**
 * Todos
 *  아이디 검사 통과 후 새로 생길 패스워드 칸으로 마우스 커서 이동
 */

import { useState, useEffect } from "react";
import { FlexContainer } from "src/component/Common/FlexContainer.jsx";
import { StyledInput } from "src/styled/StyledInput.js";
import { StyledButton } from "src/styled/StyledButton.js";
import { keyDownHandler, isValidForm } from "src/common/Utils.js";
import { emailRegExp, passwordRegExp } from "src/data/regex.js";
import axios from "axios";

export const LoginForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidId, setIsValidId] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [idPlaceholder, setIdPlaceholer] = useState("아이디를 입력해 주십시오.");
  const [passwordPlaceholder, setPasswordPlaceholer] = useState("비밀번호를 입력해 주십시오.");


  const inValidFormInputText = "잘못된 형식입니다.";
  const existedIdText = "이미 사용 중인 아이디입니다."; 

  useEffect(()=>{
    if (isValidPassword) {
      axios.post("http://127.0.0.1:3232/api/validation", {userEmail: userEmail, userPw: password})
      .then((res) => console.log(`Response from server validation: ${res.data}`))
      .catch((error)=> console.error(`Error validation: ${error}`))
    } else {
      console.log("Is not valid from password");
    }
  }, [isValidPassword]);

  useEffect(()=>{
    axios.post("http://127.0.0.1:3232/api/validation/email", {userEmail: userEmail})
    .then((res) => {})
    .catch((error) => console.error("Error email validation: ", error));
  }, [isValidId]);

  return (
    <FlexContainer direction="column" padding="15px" between="15px">
      <StyledInput
        placeholder={idPlaceholder}
        value={userEmail}
        onChange={(event)=>{setUserEmail(event.target.value)}}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setIsValidId(isValidForm(userEmail, emailRegExp));
          };
        }}
        />
      {isValidId && (
        <>
          <StyledInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            autoFocus={true}
            onChange={(event)=>{setPassword(event.target.value)}}
            onKeyDown={(event)=>{
            if (event.key === "Enter") {
              setIsValidPassword(isValidForm(password, passwordRegExp));
              }
            }}
          />
          <span>영문 대문자/소문자/특수문자(!#@)를 포함하여 8 ~ 12자리</span>
        </>
      )}
      {isValidPassword && (
        <StyledInput placeholder="어떤 닉네임을 사용하시겠습니까?" onKeyDown={(event)=> keyDownHandler(event, setNickname)} />
      )}
      <StyledButton onClick={() => console.log(`google login clicked!`)}>
        Google 계정으로 로그인
      </StyledButton>
      <StyledButton onClick={() => console.log(`github login clicked!`)}>
        github 계정으로 로그인
      </StyledButton>
    </FlexContainer>
  );
};

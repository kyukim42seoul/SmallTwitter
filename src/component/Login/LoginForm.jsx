/**
 * Todos
 *  아이디 검사 통과 후 새로 생길 패스워드 칸으로 마우스 커서 이동
 *
 * 제출 버튼이 조건부 렌더링으로 갔을 땐 네트워크 요청이 큐에 들어가고(pending), 일반적으로 렌더링 됐을 땐 바로 요청을 수행하는 이유가 뭘까?
 */
import axios from "axios";
import { isValidForm, keyDownHandler } from "src/common/Utils.js";
import Button from "src/component/Common/Button.jsx";
import FlexContainer from "src/component/Common/FlexContainer.jsx";
import Input from "src/component/Common/Input.jsx";
import { emailRegExp, passwordRegExp } from "src/data/regex.js";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isValidId, setIsValidId] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [idPlaceholder, setIdPlaceholer] =
    useState("아이디를 입력해 주십시오.");
  const [passwordPlaceholder, setPasswordPlaceholer] =
    useState("비밀번호를 입력해 주십시오.");

  const inValidFormInputText = "잘못된 형식입니다.";
  const existedIdText = "이미 사용 중인 아이디입니다.";

  const allFieldsFilled = userEmail && userPassword;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (allFieldsFilled) {
      axios
        .post(
          "http://localhost:3232/users/login",
          {
            userEmail,
            userPassword,
          },
          {
            headers: { "Content-Type": `application/json` },
          },
        )
        .then((res) => {
          if (res.status === 200) {
            console.log(`Login Data : `, res.data);
            window.localStorage.setItem("userId", res.data);
            navigate("/thread");
            return;
          }
          console.log(`res received : `, res.data);
        })
        .catch((err) => console.error(err.message));
    } else {
      console.log("Please fill all the fields");
    }
  };

  return (
    <FlexContainer direction="column" padding="15px" between="15px">
      <StyledForm onSubmit={onSubmitHandler}>
        <Input
          placeholder={idPlaceholder}
          value={userEmail}
          onChange={(event) => {
            setUserEmail(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setIsValidId(isValidForm(userEmail, emailRegExp));
            }
          }}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={userPassword}
          autoFocus={true}
          onChange={(event) => {
            setUserPassword(event.target.value);
          }}
        />
        {allFieldsFilled && <Button>로그인</Button>}
      </StyledForm>
      <Button onClick={() => console.log(`google login clicked!`)}>
        Google 계정으로 로그인
      </Button>
      <Button onClick={() => console.log(`github login clicked!`)}>
        github 계정으로 로그인
      </Button>
    </FlexContainer>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  > input,
  button {
    margin-top: 1rem;
  }
`;

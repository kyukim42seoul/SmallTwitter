/**
 * Todos
 *  아이디 검사 통과 후 새로 생길 패스워드 칸으로 마우스 커서 이동
 */

import { useState, useEffect } from "react";
import { FlexContainer } from "src/container/FlexContainer.jsx";
import { CustomInput } from "src/input/CustomInput.js";
import { CustomButton } from "src/button/CustomButton.ts";
import { keyDownHandler, isValidForm } from "src/utils/Utils.js";
import { emailRegExp, passwordRegExp } from "../data/regex.js";

export const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const sendIdPassword = () => {
	  isValidForm(password, passwordRegExp) && axios.post("http://localhost:3000/validation", {id, password}, {
		headers: { "Content-Type": `application/json` },
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
	};

  //password 의 상태가 변경됐을 때 서버에 검증요청 + then ...
	useEffect(sendIdPassword, [password]);

  return (
    <FlexContainer direction="column" padding="15px" between="15px">
      <CustomInput placeholder="아이디를 입력해주세요" onKeyDown={(event) => keyDownHandler(event, setId)} />
      {isValidForm(id, emailRegExp) && <CustomInput type="password" placeholder="비밀번호를 입력해주세요" autoFocus={true} onKeyDown={(event) => keyDownHandler(event, setPassword)} />}
      <CustomButton
        onClick={() => console.log(`google login clicked!`)}
      >Google 계정으로 로그인</CustomButton>
      <CustomButton
        onClick={() => console.log(`github login clicked!`)}
      >github 계정으로 로그인</CustomButton>
    </FlexContainer>
  );
}
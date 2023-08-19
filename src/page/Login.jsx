import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { DefaultContainer } from "src/container/DefaultContainer.jsx";
import { AxiosTest} from "src/api/AxiosTest.jsx";
import { DefaultButton } from "src/button/DefaultButton.jsx";
import { DefaultInput } from "src/input/DefaultInput.jsx";
import { useEffect, useState } from "react";
import { couldStartTrivia } from "typescript";
import axios from "axios";

const StyledLogin = styled.div`
  
`;

export const Login = () => {
	const navigate = useNavigate();
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");

	const isValidEmail = (email) => {
	  const emailRegex = new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`);

	  return emailRegex.exec(email);
	};

	const isValidPassword = (password) => {
	  const passwordRegex = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,12}$`);

	  return passwordRegex.exec(password);
	}

	const keyDownHandler = (e ,setter) => {
	  if (e.key === "Enter") {
		setter(e.target.value);
	  };
	};

	const sendIdPassword = () => {
	  isValidPassword(password) && axios.post("http://localhost:3000/validation", {id, password}, {
		headers: { "Content-Type": `application/json` },
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
	};

	useEffect(sendIdPassword, [password]);

  return (
    <StyledLogin>
      <DefaultContainer
        direction="column"
        padding="0px"
        between="70px"
        width="100%"
        height="100vh"
      >
        <img src="./chat.png" width="100px" height="100px" />
        <AxiosTest payLoad={{user_id: "kyukim", user_name: "apple"}}>TEST</AxiosTest>
        <DefaultContainer direction="column" padding="15px" between="15px">
          <DefaultButton onClick={() => navigate("/thread")} label="스레드" />
          <DefaultButton onClick={() => navigate("/profile")} label="프로필" />
          <DefaultInput placeholder="아이디를 입력해주세요" onKeyDown={(event) => keyDownHandler(event, setId)} />
		  {isValidEmail(id) && <DefaultInput placeholder="비밀번호를 입력해주세요" onKeyDown={(event) => keyDownHandler(event, setPassword)} />}
          <DefaultButton
            onClick={() => console.log(`signin clicked!`)}
            label="회원가입"
          />
          <DefaultButton
            onClick={() => console.log(`google login clicked!`)}
            label="Google 계정으로 로그인"
          />
          <DefaultButton
            onClick={() => console.log(`github login clicked!`)}
            label="github 계정으로 로그인"
          />
        </DefaultContainer>
      </DefaultContainer>
    </StyledLogin>
  );
}
/* App : page routing */

import { useNavigate } from "react-router-dom";
import "./App.css";
import { DefaultButton } from "./button/DefaultButton";
import { DefaultContainer } from "./container/DefaultContainer";
import { DefaultInput } from "./input/DefaultInput";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <DefaultContainer
        direction="column"
        padding="0px"
        between="70px"
        width="100%"
        height="100vh"
      >
        <img src="./chat.png" width="100px" height="100px" />
        <DefaultContainer direction="column" padding="15px" between="15px">
          <DefaultButton onClick={() => navigate("/home")} label="Home" />
          <DefaultInput placeholder="아이디를 입력해주세요" />
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
    </div>
  );
}

export default App;

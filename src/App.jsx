/* App : page routing */

import axios from "axios";
import "./App.css";
import { Header } from "./Header";
import { DefaultButton } from "./button/DefaultButton";
import { DefaultContainer } from "./container/DefaultContainer";
import { DefaultInput } from "./input/DefaultInput";

function App() {
  const formData = {
    user_id: "3",
    user_name: "webUser",
  };
  const payLoad = JSON.stringify(formData);
  const onClickHandler = () => {
    console.log("Clicked!");
    axios
      .post("http://localhost:3000/post", payLoad, {
        headers: { "Content-Type": `application/json` },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={onClickHandler}>axios test</button>
      <pre className="text"></pre>
      <DefaultContainer
        direction="column"
        padding="0px"
        between="70px"
        width="100%"
        height="100vh"
      >
        <img src="./chat.png" width="100px" height="100px" />
        <DefaultContainer direction="column" padding="15px" between="15px">
          <DefaultInput placeholder="아이디를 입력해주세요" />
          <DefaultButton
            onClick={() => console.log(`signin clicked!`)}
            text="회원가입"
          />
          <DefaultButton
            onClick={() => console.log(`google login clicked!`)}
            text="Google 계정으로 로그인"
          />
          <DefaultButton
            onClick={() => console.log(`github login clicked!`)}
            text="github 계정으로 로그인"
          />
        </DefaultContainer>
      </DefaultContainer>
    </div>
  );
}

export default App;

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { DefaultContainer } from "src/container/DefaultContainer";
import { AxiosTest} from "src/api/AxiosTest";
import { DefaultButton } from "src/button/DefaultButton";
import { DefaultInput } from "src/input/DefaultInput";

const StyledLogin = styled.div`
  
`;

export const Login = () => {
  const navigate = useNavigate();
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
    </StyledLogin>
  );
}
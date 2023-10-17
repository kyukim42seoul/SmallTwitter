import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FlexContainer } from "src/container/FlexContainer.jsx";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  border-bottom: solid 1px;
`;

export const Header = () => {
  const navList = ["채팅", "대시보드"];
  const navListMap = {
    "스레드": "thread",
    "프로필": "profile",
  };
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <img
        src="./chat.png"
        width="50px"
        height="50px"
        onClick={() => navigate("/")}
      />
      <FlexContainer direction="row" between="10px" padding="20px">
        {navList.map((item, index) => (
          <button
            key={index}
            style={{ border: "unset", background: "unset", fontSize: "1.5em" }}
            onClick={(index) => console.log(`${index}: clicked`)}
          >
            {item}
          </button>
        ))}
      </FlexContainer>
    </StyledHeader>
  );
};

export const VerticalHeader = () => {
  const navList = [];

  return (
    <header>
      <Logo></Logo>
      <nav>
        {navList.map((category) => <a>{category}</a>)}
      </nav>
    </header>
  );
}
import styled from "styled-components";
import { DefaultContainer } from "./container/DefaultContainer";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  border-bottom: solid 1px;
`;

export const Header = () => {
  const navList = ["채팅", "대시보드"];
  return (
    <StyledHeader>
      <img src="./chat.png" width="50px" height="50px" />
      <DefaultContainer direction="row" between="10px" padding="20px">
        {navList.map((item, index) => (
          <button
            key={index}
            style={{ border: "unset", background: "unset", fontSize: "1.5em" }}
            onClick={(index) => console.log(`${index}: clicked`)}
          >
            {item}
          </button>
        ))}
      </DefaultContainer>
    </StyledHeader>
  );
};

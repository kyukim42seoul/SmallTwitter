import styled from "styled-components";
import { DefaultContainer } from "src/container/DefaultContainer.jsx";
import { TextButton } from "src/button/TextButton.jsx";
import { MiniCard } from "src/component/MiniCard.jsx";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;

export const Profile = () => {
  return (
    <StyledProfile>
      <DefaultContainer direction="row" width="900px"> {/* 윗 부분 래퍼 */}
        <img src="./user.png" width="100px" height="100px" />
        <DefaultContainer direction="row" justify="space-between" width="800px" padding="20px">
          <DefaultContainer direction="column" between="5px">
            <p>nickname</p>
            <p>user_email</p>
          </DefaultContainer>
          <DefaultContainer direction="row" between="10px">
            <TextButton label="내 스레드" />
            <TextButton label="내가 쓴 댓글" />
            <TextButton label="즐겨찾기" />
          </DefaultContainer>
        </DefaultContainer>
      </DefaultContainer>
	  <MiniCard self={false}/>
    </StyledProfile>
  );
};
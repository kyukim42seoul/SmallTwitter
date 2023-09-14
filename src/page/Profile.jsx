import styled from "styled-components";
import { FlexContainer } from "src/container/FlexContainer.jsx";
import { TextButton } from "src/button/TextButton.jsx";
import { MiniCard } from "src/component/MiniCard.jsx";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;

export const Profile = () => {
  return (
    <StyledWrapper>
      <FlexContainer direction="row" width="900px"> {/* 윗 부분 래퍼 */}
        <img src="./user.png" width="100px" height="100px" />
        <FlexContainer direction="row" justify="space-between" width="800px" padding="20px">
          <FlexContainer direction="column" between="5px">
            <p>nickname</p>
            <p>user_email</p>
          </FlexContainer>
          <FlexContainer direction="row" between="10px">
            <TextButton label="내 스레드" />
            <TextButton label="내가 쓴 댓글" />
            <TextButton label="즐겨찾기" />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
	  <MiniCard self={false}/>
    </StyledWrapper>
  );
};
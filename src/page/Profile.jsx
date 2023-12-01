import styled from "styled-components";
import { FlexContainer } from "src/component/Common/FlexContainer.jsx";
import { StyledTextButton } from "src/styled/StyledTextButton.js";
import { MiniCard } from "src/component/Profile/MiniCard.jsx";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;

export const Profile = () => {
  return (
    <StyledWrapper>
      <FlexContainer direction="row" width="900px">
        <img src="./user.png" width="100px" height="100px" />
        <FlexContainer
          direction="row"
          justify="space-between"
          width="800px"
          padding="20px"
        >
          <FlexContainer direction="column" between="5px">
            <p>nickname</p>
            <p>user_email</p>
          </FlexContainer>
          <FlexContainer direction="row" between="10px">
            <StyledTextButton>내 스레드</StyledTextButton>
            <StyledTextButton>내가 쓴 댓글</StyledTextButton>
            <StyledTextButton>즐겨찾기</StyledTextButton>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <MiniCard self={false} />
    </StyledWrapper>
  );
};

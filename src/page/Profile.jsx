import styled from "styled-components";
import FlexContainer from "src/component/Common/FlexContainer.jsx";
import TextButton from "src/component/Common/TextButton.jsx";
import MiniCard from "src/component/Profile/MiniCard.jsx";

const Profile = () => {
  return (
    <StyledProfile>
      <FlexContainer direction="row">
        <img src="./user.png" width="100px" height="100px" />
        <FlexContainer
          direction="row"
          justify="space-between"
          padding="20px"
        >
          <FlexContainer direction="column" between="5px">
            <p>nickname</p>
            <p>user_email</p>
          </FlexContainer>
          <FlexContainer direction="row" between="10px">
            <TextButton>내 스레드</TextButton>
            <TextButton>내가 쓴 댓글</TextButton>
            <TextButton>즐겨찾기</TextButton>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      {/*<MiniCard self={false} />*/}
    </StyledProfile>
  );
};

export default Profile;

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  max-width: 600px;
  border-right: 1px solid var(--grey3);
  border-left: 1px solid var(--grey3);

  @media screen and (min-width: 700px) {
    width: 600px;
  }
`;
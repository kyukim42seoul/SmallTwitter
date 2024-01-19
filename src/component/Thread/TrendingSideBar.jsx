import styled from "styled-components";

const TrendingSideBar = (props) => {
  return (
    <StyledTrendingSideBar {...props}>
      <StyledSearch placeholder="Search" />
      <StyledTopContainer>
        TopContainer
      </StyledTopContainer>
      <StyledBottomContainer>
        BottomContainer
      </StyledBottomContainer>
    </StyledTrendingSideBar>
  );
}

export default TrendingSideBar;

const StyledTrendingSideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0.75rem 1rem 0 1rem;
  border-left: 1px solid var(--grey3);
`

const StyledSearch = styled.input`
  padding: 0.75rem;
  background-color: var(--grey2);
  border-radius: 9999px;
  &:focus {
    background-color: var(--white);
    border: 1px solid var(--mainLighten);
  }
`

const StyledTopContainer = styled.div`
  padding: 1rem;
  background-color: var(--grey2);
  border-radius: 1rem;
  `

const StyledBottomContainer = styled.div`
  padding: 1rem;
  background-color: var(--grey2);
  border-radius: 1rem;
`
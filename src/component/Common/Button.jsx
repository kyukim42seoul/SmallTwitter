import styled from "styled-components";

const Button = (props) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
)};

const StyledButton = styled.button`
  width: ${({width}) => width || "250px"};
  height: 40px;
  border-radius: 30px;
  border: ${($border) => $border || "1px solid var(--grey3)"};
  background-color: ${({$backgroundColor}) => $backgroundColor || "var(--white)"};
  color: ${(color) => color || "var(--black)"};
  margin: ${({ margin }) => margin || "0"};

  &.point {
    background-color: var(--mainLighten);
  }

  &:hover {
    background-color: var(--grey1);
  }

  &:active {
    background-color: var(--grey2);
  }
`;

export default Button;
import styled from "styled-components";

const TextButton = (props) => {
  return <StyledTextButton {...props}>{props.children}</StyledTextButton>;
};

const StyledTextButton = styled.button`
  width: auto;
  height: ${({ fontSize }) => fontSize * 1.2 || "1.5rem"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  border: 0;
  background: transparent;

  &:hover {
    font-weight: bold;
  }
`;

export default TextButton;

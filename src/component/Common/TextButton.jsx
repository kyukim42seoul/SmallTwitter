import styled from "styled-components";

const TextButton = (props) => {
  return (
    <StyledTextButton {...props}>
      {props.children}
    </StyledTextButton>
  );
};

const StyledTextButton = styled.button`
  width: auto;
  height: ${({ fontSize }) => fontSize * 1.2 || "1.2em"};
  font-size: ${({ fontSize }) => fontSize || "1em"};
  border: 0;
  background: transparent;

  &:hover {
    font-weight: bold;
  }
`;

export default TextButton;
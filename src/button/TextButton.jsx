import styled from "styled-components";

/**
 * @param {String} fontSize
 * @return {JSX}
 */

const StyledTextButton = styled.button`
  width: auto;
  height: ${({fontSize}) => fontSize * 1.2 || "1.2em"};
  font-size: ${({fontSize}) => fontSize || "1em"};
  border: 0;
  background: transparent;
  margin: 0;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

/**
 * return JSX button for text which has cutomed onClickHandler, text, font-size
 * @param {Function} onClick
 * @param {String} label
 * @param {String} fontSize
 * @returns {JSX}
 */

export const TextButton = ({ onClick, label, fontSize }) => {
  return (
    <StyledTextButton onClick={onClick} fontSize={fontSize}>
      {label}
    </StyledTextButton>
  );
};

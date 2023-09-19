import styled from "styled-components";

/**
 * @param {String} fontSize
 * @return {JSX}
 */
export const StyledTextButton = styled.button`
  width: auto;
  height: ${({ fontSize }) => fontSize * 1.2 || "1.2em"};
  font-size: ${({ fontSize }) => fontSize || "1em"};
  border: 0;
  background: transparent;
  margin: 0;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

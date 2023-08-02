/**
 * dynamic label
 * no border, background
 * bold text onClick
 */

import styled from "styled-components";

/**
 * return customed JSX button
 */

export const StyledTextButton = styled.button`
  width: auto;
  height: ${(props) => props.fontSize * 1.2 || "1.2em"};
  font-size: ${(props) => props.fontSize || "1em"};
  border: 0;
  background: transparent;
  margin: 0;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

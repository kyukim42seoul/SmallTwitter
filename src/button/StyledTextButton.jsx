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
  height: 1em;
  font-size: ${(props) => props.fontSize || "1em"};
  border: 0;
  background: transparent;
  margin: 0px;

  &:hover {
    font-weight: bold;
  }
`;

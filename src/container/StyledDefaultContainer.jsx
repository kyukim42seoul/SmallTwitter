/**
 * use flex
 * align children vertical or horizontal by props(default: row)
 * centralize children
 */

/* 자식이 짝수냐 홀수냐에 따라 컨테이너에서 들어온 between 수치만큼 간격을 가지게 수정 */

import styled from "styled-components";

/**
 * return JSX div which has dynamic size, flex-direction, padding
 * @param {String} direction
 * @param {String} padding
 * @returns {JSX}
 */

export const StyledDefaultContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding || "0px"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  overflow: overlay;

  > :nth-child(n + 2) {
    margin: ${(props) => props.between || "0px"};
  }
`;

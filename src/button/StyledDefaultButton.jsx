/**
 * become little darker onHover
 * become more darker onActive
 */

import styled from "styled-components";

/**
 * return JSX button which has customed margin.
 * @param {String} margin
 * @returns {JSX}
 */

export const StyledDefaultButton = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid #bababa;
  background: #fff;
  margin: ${(props) => props.margin || "0"};

  &:hover {
    background: #f1f1f1;
  }

  &:active {
    background: #e7e7e7;
  }
`;

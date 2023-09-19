import styled from "styled-components";

/**
 * @param {String} margin
 * @return {JSX}
 */
export const StyledButton = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid #bababa;
  background: #fff;
  margin: ${({ margin }) => margin || "0"};
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
  }

  &:active {
    background: #e7e7e7;
  }
`;

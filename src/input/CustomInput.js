import styled from "styled-components";

export const CustomInput = styled.input`
  width: 250px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #bababa;
  background: #fff;

  &:focus {
    outline: none;
    background: #e7e7e7;
  }
`;


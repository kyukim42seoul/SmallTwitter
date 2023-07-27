/*
  
*/

import styled from "styled-components";
import { TextButton } from "../button/TextButton";

const StyledThreadCard = styled.div`
  display: flex;
  width: 900px;
  height: 200px;
  border-bottom: solid 1px;
`;

export const ThreadCard = () => {
  return (
    <StyledThreadCard>
      <img src="./chat.png" width="36px" height="36px" />
      <TextButton label="kyukim" />
      <TextButton label="kyukim@student.42seoul.kr" />
    </StyledThreadCard>
  );
};

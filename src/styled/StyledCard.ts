import styled from 'styled-components';

export const RoundCard = styled.div`
  padding: 10px;
  margin: 0;
  border-radius: 15px;
  color: ${({color}) => color || "black"};
  background-color: ${({backgroundColor}) => backgroundColor || "transparent"};
`
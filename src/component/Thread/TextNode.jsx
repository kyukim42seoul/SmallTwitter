import { Children } from "react";

import styled from "styled-components";

const TextNode = (props) => {
  return <StyledTextNode {...props}>{props.children}</StyledTextNode>;
};

export default TextNode;

const StyledTextNode = styled.span`
  display: inline-block;
  white-space: pre-wrap;
  /*max-width: 100%;*/
  word-break: break-all;
`;

import styled from "styled-components";

const TextNode = (props) => {
  return (
    <StyledTextNode contentEditable={true} onInput={() => {}}></StyledTextNode>
  );
};

export default TextNode;

const StyledTextNode = styled.span``;

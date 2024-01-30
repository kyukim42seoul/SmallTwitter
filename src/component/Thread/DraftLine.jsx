import { useState, useRef } from "react";
import styled from "styled-components";

const DraftLine = (props) => {
  const [caretPosition, setCaretPosition] = useState(0);
  const [mergedText, setMergedText] = useState("");
  let textNodeRefs = useRef([]);
  const [textNodeList, setTextNodeList] = useState([]);

  // key, ref, onClick, onKeyDown, onInput
  const getNewTextNode = (attributes) => {
    return <span {...attributes} contentEditable="true"></span>
  };

  const updateCaretPosition = (event) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const localCaretPosition = range.startOffset;
    const triggeredNode = event.target;

    let globalCaretPosition = 0;

    for (const node in textNodeRefs.current) {
      if (node === triggeredNode) {
        globalCaretPosition += localCaretPosition;
        break ;
      } else {
        globalCaretPosition += node.innerText.length;
      }
    }
    setCaretPosition(globalCaretPosition);
  };

  return (
    <StyledDraftLine {...props}>
      {textNodeList.map((textNode, index) => textNode)}
    </StyledDraftLine>
  );
}

export DraftLine;

const StyledDraftLine = styled.div`
  
`
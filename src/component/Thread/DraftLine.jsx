import TextNode from "src/component/Thread/TextNode.jsx";

import { useEffect, useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import styled from "styled-components";

const tagRegex = new RegExp("(#[A-Za-z0-9]+)"); // \w+ 를 인식하지 못함.

const DraftLine = (props) => {
  const { onChild, ...otherProps } = props;
  const [textNodeList, setTextNodeList] = useState([]);
  let textNodeRefs = useRef([]);
  const [caretPosition, setCaretPosition] = useState(0);
  const [nodeTextBeforeCaret, setNodeTextBeforeCaret] = useState("");
  const [mergedText, setMergedText] = useState("hi #hello there");
  const [textList, setTextList] = useState([""]);

  useEffect(() => {
    setTextList(mergedText.split(tagRegex));
  }, []);

  // keyUp, click 이벤트에서 globalCaretPosition 갱신
  const updateCaretPosition = (event) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const localCaretPosition = range.startOffset;
    const triggeredNode = event.target;

    let globalCaretPosition = 0;

    for (const node in textNodeRefs.current) {
      if (node === triggeredNode) {
        globalCaretPosition += localCaretPosition;
        break;
      } else {
        globalCaretPosition += node.innerText.length;
      }
    }
    setCaretPosition(globalCaretPosition);
  };

  const handleClick = (event) => {
    event.stopPropagation();
    updateCaretPosition(event);
  };

  // 입력에 따라 mergedText 및 textList 갱신
  const handleInput = (event, index) => {
    //console.log("handleInput: ", event.target);
    console.log("handleInput textNodeRefs.current: ", textNodeRefs.current);
    //setMergedText(textNodeRefs.current.map((node) => node.innerText).join(""));

    // 최신 mergedText 가져오기
    //setMergedText((prev) => {
    //  setTextList(prev.split(tagRegex));
    //});
  };

  const refCallback = (ref) => {
    if (ref) {
      textNodeRefs.current[index] = ref;
    }
  };

  const mergedHandleKeyDown = (event) => {
    console.log("mergedHandleKeyDown: ", event.target);
    onChild.onKeyDown(event);
    //onChild.handleKeyDown(event);
  };

  console.log("DraftLine -> textList: ", textList);

  return (
    <StyledDraftLine {...otherProps}>
      {textList.map((innerText) => {
        return (
          <TextNode
            key={uuidv4()}
            ref={refCallback}
            onKeyUp={updateCaretPosition}
            onKeyDown={mergedHandleKeyDown}
            onClick={handleClick}
            onInput={handleInput}
            contentEditable="true"
          >
            {innerText}
          </TextNode>
        );
      })}
    </StyledDraftLine>
  );
};

export default DraftLine;

const StyledDraftLine = styled.div`
  min-height: 1.5rem;
  max-width: 100%;
  &:hover {
    cursor: text;
  }
`;

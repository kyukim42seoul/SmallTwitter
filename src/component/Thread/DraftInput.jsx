import { useRef, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from "src/component/Common/Button.jsx";
import styled from "styled-components";

const DraftInput = () => {
  const focusRefs = useRef([]);
  const [Lines, setLines] = useState([]);
  const getNewLine = (index, handler) => {
    const refCallback = (ref) => {
      if (ref) {
        focusRefs.current[index] = ref;
      };
    };
    return (
      <div key={index} data-rowkey={uuidv4()}>
        <span key={index} ref={refCallback} onKeyDown={handler} contentEditable="true"></span>
      </div>
    );
  };

  // 라인 배열 하나로 초기화
  const initLines = () => {
    const firstKey = uuidv4();
    const initialLine = (
      <div key={uuidv4()} data-rowkey={firstKey}>
        <span key={uuidv4()} ref={(ref) => focusRefs.current = [ref]} onKeyDown={handleKeyDown} contentEditable="true"></span>
      </div>
    );
    setLines([initialLine]);
  };
  
  // 초기 라인 세팅
  useEffect(() => {
    initLines();
  }, []);
  
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      
      // 각 클로저에서 최신의 Lines 상태를 받은 스코프
      setLines((prev) => {

        // 새 라인 만들기
        const newLine = getNewLine(prev.length, handleKeyDown);
        
        // 자신의 인덱스 찾기
        const currentDiv = event.target.parentElement;
        const currentRowKey = currentDiv.getAttribute("data-rowkey");

        let currentIndex = -1;

        prev.forEach((line, index) => {
          const check = line.props["data-rowkey"];
          if (line.props["data-rowkey"] == currentRowKey) {
            currentIndex = index;
          };
        });
        
        // 기존 라인을 대체할 새 라인 배열 생성
        const updateLines = [
          ...prev.slice(0, currentIndex + 1),
          newLine,
          ...prev.slice(currentIndex + 1)
        ];
        return updateLines;
      });
    }
  };

  const concatenateLines = () => {
    const allLinesContent = focusRefs.current.map(span => span.innerText).join('\n');

    return allLinesContent;
  };

  const clearText = () => {
    focusRefs.current.forEach((span) => {
      span.innerText = null;
    });

    focusRefs.current = [focusRefs.current[0]]; // 이러면 남은 요소는 알아서 정리가 되나...? 메모리 누수 나지 않나.
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullText = concatenateLines();

    console.log(`fullText : ${fullText}`);
    clearText();
    initLines();
  }
  
  useEffect(() => {
    if (focusRefs && focusRefs.current.length > 0) {
      const focusIndex = Lines.length - 1;
      focusRefs.current[focusIndex].focus();
    }
  }, [Lines]);

  return (
    <StyledDraftForm onSubmit={handleSubmit}>
      {Lines && Lines.map((line, index) => line)}
      <Button className="postButton" $border="0" $backgroundColor="var(--main)" color="var(--white)">Post</Button>
    </StyledDraftForm>
  );
};

export default DraftInput;

const StyledDraftForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    height: 1.5rem;
  }

  span {
    display: inline-block;
    min-width: 1.5rem;
  }

  & > .postButton {
    align-self: flex-end;
  }
`
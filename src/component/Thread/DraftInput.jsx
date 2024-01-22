import { useRef, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";

const DraftInput = () => {
  const focusRefs = useRef([]);
  const [Lines, setLines] = useState([]);
  const getNewLine = (index, handler) => <div key={index} data-rowkey={uuidv4()}><span key={index} ref={(ref) => focusRefs.current.push(ref)} onKeyDown={handler} contentEditable="true">{index}</span></div>;

  useEffect(() => {
    const firstKey = uuidv4();
    const initialLine = (
      <div key={uuidv4()} data-rowkey={firstKey}>
        <span key={uuidv4()} ref={(ref) => focusRefs.current.push(ref)} onKeyDown={handleKeyDown} contentEditable="true" placeholder="What is happening?" ></span>
      </div>
    );
    setLines([initialLine]);
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      
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
  
  useEffect(() => {
    if (focusRefs && focusRefs.current.length > 0) {
      const focusIndex = Lines.length - 1;
      focusRefs.current[focusIndex].focus();
    }
  }, [Lines]);

  return (
    <StyledDraftInput>
      {Lines && Lines.map((line, index) => line)}
    </StyledDraftInput>
  );
};

export default DraftInput;

const StyledDraftInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    height: 1.5rem;
  }
`
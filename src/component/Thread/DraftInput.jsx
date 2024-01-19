import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const DraftInput = () => {
  const focusRefs = useRef([]);
  const [Lines, setLines] = useState([]);
  const getNewLine = (index, row, handler) => <div key={index} data-rowKey={row}><span key={index} ref={(ref) => focusRefs.current.push(ref)} onKeyDown={handler} contentEditable="true">{index}</span></div>;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      //const currentRow = parseInt(event.target.parentElement.getAttribute("data-rowKey"), 10);
      const cureentDiv = event.target.parentElement;
      const currentRow = Lines.findIndex(cureentDiv.getAttribute("data-rowKey"));
      console.log(`currentRow ${currentRow}`);
      const newRow = currentRow + 1;
      console.log(currentRow);
      setLines((prev) => {
        const newLine = getNewLine(prev.length, newRow, handleKeyDown);
        const updateLines = [
          ...prev.slice(0, currentRow + 1),
          newLine,
          ...prev.slice(currentRow + 1)
        ];

        //updateLines.forEach((line, index) => {
        //  line.props.row = index;
        //});

        return updateLines;
      });
    }
  }

  useEffect(() => {
    if (focusRefs && focusRefs.current.length > 0) {
      const focusIndex = Lines.length - 1;
      focusRefs.current[focusIndex].focus();
    }
    console.log(Lines);
  }, [Lines]);

  return (
    <StyledDraftInput>
      <div row="1">
        <span onKeyDown={handleKeyDown} contentEditable="true">
          Start
        </span>
      </div>
      {Lines && Lines.map((line, index) => line)}
    </StyledDraftInput>
  );
};

export default DraftInput;

const StyledDraftInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
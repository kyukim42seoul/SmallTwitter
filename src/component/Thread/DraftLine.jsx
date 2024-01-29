import { useState } from "react";
import styled from "styled-components";

const DraftLine = () => {
  const [sentence, setSentence] = useState("");

  return (
    <StyledDraftLine>
      <StyledPiece contentEditable={true} onChange={(event) => {setSentence}}>

      </StyledPiece>
    </StyledDraftLine>
  );
}

export DraftLine;

const StyledDraftLine = styled.div`
  
`

const StyledPiece = styled.span`
  text-align: center;
`
import Button from "src/component/Common/Button.jsx";
import DraftLine from "src/component/Thread/DraftLine.jsx";

import { useEffect, useRef, useState } from "react";
import { Await } from "react-router-dom";

import axios from "axios";

import { v4 as uuidv4 } from "uuid";

import styled from "styled-components";

//const tagRegex = new RegExp("#[A-Za-z0-9]");
//const tagRegex = new RegExp("\u00A0");

// 게시글 생성 요청
const createPost = (threadContent) => {
  const currentTime = new Date().toISOString();
  const userId = window.localStorage.getItem("userId");

  const postCreatePromise = axios
    .post(
      "http://localhost:3232/threads",
      {
        uploadTime: currentTime,
        threadContent,
        userId,
      },
      {
        headers: { "Content-Type": `application/json` },
      },
    )
    .then((res) => console.log(res.status, res.data))
    .catch((error) => console.error("ERR_createPost : ", error));
};

const DraftInput = () => {
  const focusRefs = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [Lines, setLines] = useState([]);
  const [prevLines, setPrevLines] = useState([]);
  const [textAfterCaret, setTextAfterCaret] = useState("");
  const [caretPosition, setCaretPosition] = useState();
  const getNewLine = (index, keydownHandler, inputHandler) => {
    const refCallback = (ref) => {
      if (ref) {
        focusRefs.current[index] = ref;
      }
    };
    return (
      <DraftLine
        key={uuidv4()}
        data-rowkey={uuidv4()}
        onClick={(e) => {
          e.target.lastElementChild.focus();
        }}
        onChild={{ onKeyDown: keydownHandler }}
      ></DraftLine>
    );
  };

  // 라인 배열 하나로 초기화
  const initLines = () => {
    const initialLine = (
      <DraftLine
        key="0"
        data-rowkey={uuidv4()}
        onClick={(e) => {
          e.target.lastElementChild.focus();
        }}
        onChild={{
          onKeyDown: handleKeyDown,
        }}
      />
    );
    setLines([initialLine]);
  };

  // 초기 라인 세팅
  useEffect(() => {
    initLines();
  }, []);

  const handleKeyDown = (event) => {
    console.log("handleKeyDown from : ", event.target);
    // 라인 추가
    if (event.key === "Enter") {
      event.preventDefault();

      // 각 클로저에서 최신의 Lines 상태를 받은 스코프
      setLines((prev) => {
        // 자신의 인덱스 찾기
        const currentDiv = event.target.parentElement;
        const currentRowKey = currentDiv.getAttribute("data-rowkey");

        let currentIndex = -1;

        prev.forEach((line, index) => {
          if (line.props["data-rowkey"] == currentRowKey) {
            currentIndex = index;
            setFocusedIndex(currentIndex);
          }
        });

        // ref 자리 준비
        focusRefs.current = [
          ...focusRefs.current.slice(0, currentIndex + 1),
          null,
          ...focusRefs.current.slice(currentIndex + 1),
        ];

        // 새 라인 만들기 & newRef 삽입 to (currentIndex + 1)
        const newLine = getNewLine(currentIndex + 1, handleKeyDown);

        // 기존 라인을 대체할 새 라인 배열 생성
        const updateLines = [
          ...prev.slice(0, currentIndex + 1),
          newLine,
          ...prev.slice(currentIndex + 1),
        ];

        return updateLines;
      });
    }

    // 라인 삭제
    if (event.key === "Backspace") {
      if (event.target.innerText === "") {
        setLines((prev) => {
          if (prev.length <= 1) {
            return prev;
          }
          const currentDiv = event.target.parentElement;
          const currentRowKey = currentDiv.getAttribute("data-rowkey");

          let currentIndex = -1;

          prev.forEach((line, index) => {
            if (line.props["data-rowkey"] == currentRowKey) {
              currentIndex = index;
              setFocusedIndex(currentIndex);
            }
          });

          // 삭제를 시도한 라인이 첫번째 줄인 경우
          if (currentIndex === 0) {
            return prev;
          }

          const updateLines = prev.filter(
            (line, index) => index !== currentIndex,
          );
          focusRefs.current.splice(currentIndex, 1);

          return updateLines;
        });
      }
    }
  };

  // 라인별 문장 합치기
  const concatenateLines = () => {
    const allLinesContent = focusRefs.current
      .map((span) => span.innerText)
      .join("\n");

    return allLinesContent;
  };

  // 라인에 남은 텍스트 제거
  const clearText = () => {
    focusRefs.current.forEach((span) => {
      span.innerText = null;
    });

    focusRefs.current = [focusRefs.current[0]]; // 이러면 남은 요소는 알아서 정리가 되나...? 메모리 누수 나지 않나.
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullText = concatenateLines();

    createPost(fullText);
    clearText();
    initLines();
  };

  // 포커스 조절
  useEffect(() => {
    if (focusRefs && focusRefs.current.length > 1) {
      if (prevLines.length < Lines.length) {
        // 라인이 추가된 경우
        focusRefs.current[focusedIndex + 1].focus();
      } else if (prevLines.length > Lines.length) {
        // 라인이 삭제된 경우
        const focusIndex = focusedIndex != 0 ? focusedIndex - 1 : 0;
        focusRefs.current[focusIndex].focus();
      }
    }
    setPrevLines(Lines);
  }, [Lines]);

  return (
    <StyledDraftForm onSubmit={handleSubmit}>
      {Lines && Lines.map((line, index) => line)}
      <Button
        className="postButton"
        $border="0"
        $backgroundColor="var(--main)"
        color="var(--white)"
      >
        Post
      </Button>
    </StyledDraftForm>
  );
};

export default DraftInput;

const StyledDraftForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;

  & > :last-child {
    margin-top: 0.75rem;
  }

  & > .postButton {
    align-self: flex-end;
  }
`;

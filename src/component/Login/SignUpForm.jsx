import React, { useState } from "react";
import styled from "styled-components";
import { isValidForm, keyDownHandler } from "src/common/Utils.js";
import { emailRegExp, passwordRegExp } from "src/data/regex.js";
import { StyledButton } from "src/styled/StyledButton.js";
import { StyledInput } from "src/styled/StyledInput.js";

/**
 * 레이아웃만 제공할 목적
 * 들어 온 정보에 따라 프로모션 팝업, 회원가입 팝업이 될 수 있음
 */

/**
 * 아이디에서는 형식 확인
 *  아이디 정규표현식 환경변수화
 * 비밀번호에서도 형식 확인
 * 비밀번호 확인에서는 비밀번호와 일치여부 확인
 * 전부 확인이 끝나면 제출 가능
 * 제출시 서버로 전송 후 인증결과 출력
 */

/**
 * Todos
 * 검증된 폼이 입력됐을 때 서버로 요청 보내기
 */

export const SignUpForm = ({ setIsOpen }) => {
  const [newID, setNewID] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <StyledWrapper>
      <StyledSignUpForm>
        <form onSubmit={onSubmitHandler}>
          <StyledInput
            placeholder="아이디를 입력해주세요"
            onKeyDown={(event) => keyDownHandler(event, setNewID)}
          />
          {isValidForm(newID, emailRegExp) && (
            <StyledInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onKeyDown={(event) => keyDownHandler(event, setNewPassword)}
            />
          )}
          {isValidForm(newPassword, passwordRegExp) && (
            <StyledInput
              type="password"
              placeholder="비밀번호를 확인해주세요"
              onKeyDown={(event) =>
                keyDownHandler(event, setNewConfirmPassword)
              }
            />
          )}
          {newConfirmPassword && !(newPassword === newConfirmPassword) && (
            <p style={{ color: "red" }}>비밀번호를 다시 확인해주십시오</p>
          )}
          <StyledButton>Submit</StyledButton>
        </form>
        <StyledButton onClick={() => setIsOpen(false)}>close</StyledButton>
      </StyledSignUpForm>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* 기존 컨텐츠보다 위에 두기 위함 */
  z-index: 1;
`;

const StyledSignUpForm = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  /* Wrapper 보다 위에 있기 위함 */
  z-index: 2;
`;

import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;

const StyledPopup = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	border: 1px solid #ccc;
	padding: 20px;
	z-index: 2;
`;

export const popup = () => {
	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(e.target);
	};
	return	(
	<StyledWrapper>
			<StyledPopup>
				<form onSubmit={onSubmitHandler}>
					<input placeholder="아이디를 입력해주세요" />
					<input placeholder="비밀번호를 입력해주세요" />
				</form>
			</StyledPopup>
	</StyledWrapper>
	);
}
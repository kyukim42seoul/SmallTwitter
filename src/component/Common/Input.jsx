import styled from "styled-components";

const Input = (props) => {
  return (
    <StyledInput {...props} />
  );
}

const StyledInput = styled.input`
  width: 250px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--grey3);
  background: var(--white);

  &:focus {
    outline: none;
    background: var(--grey1);
  }
`;

export default Input;
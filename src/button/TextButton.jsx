import { StyledTextButton } from "./StyledTextButton";

/**
 * return JSX button for text which has cutomed onClickHandler, text, font-size
 * @param {Function} onClick
 * @param {String} label
 * @param {String} fontSize
 * @returns {JSX}
 */

export const TextButton = ({ onClick, label, fontSize }) => {
  return (
    <StyledTextButton onClick={onClick} fontSize={fontSize}>
      {label}
    </StyledTextButton>
  );
};

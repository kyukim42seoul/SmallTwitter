/**
 * get onClickHandler by props
 * get label by props
 */
import { StyledDefaultButton } from "src/button/StyledDefaultButton.jsx";

/**
 * return JSX button which has cutomed onClickHandler, label, margin.
 * @param {Function} onClick
 * @param {String} label
 * @param {String} margin
 * @returns {JSX}
 */

export const DefaultButton = ({onClick, label, margin, ...props}) => {
  return (
    <StyledDefaultButton onClick={onClick} margin={margin}>
      {label}
    </StyledDefaultButton>
  );
};

/**
 * get onClickHandler by props
 * get label by props
 */
import { StyledDefaultButton } from "src/button/StyledDefaultButton.tsx";

/**
 * return JSX button which has cutomed onClickHandler, label, margin.
 * @param {Function} onClick
 * @param {String} label
 * @param {String} margin
 * @returns {JSX}
 */

export const DefaultButton = (props) => {
  return (
    <StyledDefaultButton onClick={props.onClick} margin={props.margin}>
      {props.label}
    </StyledDefaultButton>
  );
};

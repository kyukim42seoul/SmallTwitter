/**
 * get onClickHandler by props
 * get text by props
 */
import { StyledDefaultButton } from "./StyledDefaultButton";

/**
 * return JSX button which has cutomed onClickHandler, text, margin.
 * @param {Function} onClick
 * @param {String} text
 * @param {String} margin
 * @returns {JSX}
 */

export const DefaultButton = (props) => {
  return (
    <StyledDefaultButton onClick={props.onClick} margin={props.margin}>
      {props.text}
    </StyledDefaultButton>
  );
};

/**
 * Optional input check
 * when it has check role, changable color and text onCheckFailed
 */

import { StyledDefaultInput } from "src/input/StyledDefaultInput.jsx";

/**
 * return round style input with customed placeholder
 * @param {String} placeholder
 * @param {Function} onChangeHandler
 * @param {Function} onKeyDown
 * @returns {JSX}
 */

export const DefaultInput = (props) => {
  return <StyledDefaultInput placeholder={props.placeholder} onChange={props.onChange} onKeyDown={props.onKeyDown} />;
};

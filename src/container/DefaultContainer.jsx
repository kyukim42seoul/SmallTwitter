/**
 * get flex direction as "vertical" or "horizon"
 * get space between children by px
 */

import { StyledDefaultContainer } from "./StyledDefaultContainer";

/**
 * return JSX div for wrapping children. It has customed flex-direction and padding.
 * @param {String} direction
 * @param {String} justify
 * @param {String} padding
 * @param {String} between
 * @param {String} width
 * @param {String} height
 * @returns {JSX}
 */

export const DefaultContainer = (props) => {
  let between = `0`;
  if (props.between && props.direction === "column") {
    between = `${props.between} 0 0 0`;
  } else if (props.between && props.direction === "row") {
    between = `0 0 0 ${props.between}`;
  }
  return (
    <StyledDefaultContainer
      direction={props.direction}
      justify={props.justify}
      padding={props.padding}
      between={between}
      width={props.width}
      height={props.height}
    >
      {props.children}
    </StyledDefaultContainer>
  );
};

/**
 * get flex direction as "vertical" or "horizon"
 * get space between children by px
 */

import { StyledDefaultContainer } from "src/container/StyledDefaultContainer.jsx";

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

export const DefaultContainer = ({direction, justify, padding, between, width, height, ...props}) => {
  let gap = `0`;
  if (between && direction === "column") {
    gap = `${between} 0 0 0`;
  } else if (between && direction === "row") {
    gap = `0 0 0 ${between}`;
  }
  return (
    <StyledDefaultContainer
      direction={direction}
      justify={justify}
      padding={padding}
      between={gap}
      width={width}
      height={height}
    >
      {props.children}
    </StyledDefaultContainer>
  );
};

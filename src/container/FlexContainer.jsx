import styled from "styled-components";

/**
 * @param {String} direction
 * @param {String} justify
 * @param {String} padding
 * @param {String} width
 * @param {String} height
 * @param {String} between
 * @returns {JSX}
 */

const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: center;
  padding: ${(props) => props.padding || "0px"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  overflow: auto;

  > :nth-child(n + 2) {
    margin: ${(props) => props.between || "0px"};
  }
`;

/**
 * return JSX div for wrapping children. It has customed flex-direction and padding, gap between children.
 * @param {String} direction
 * @param {String} justify
 * @param {String} padding
 * @param {String} width
 * @param {String} height
 * @param {String} between
 * @returns {JSX}
 */

export const FlexContainer = ({direction, justify, padding, between, width, height, ...props}) => {
  let gap = `0`;
  if (between && direction === "column") {
    gap = `${between} 0 0 0`;
  } else if (between && direction === "row") {
    gap = `0 0 0 ${between}`;
  }
  return (
    <StyledFlexContainer
      direction={direction}
      justify={justify}
      padding={padding}
      between={gap}
      width={width}
      height={height}
    >
      {props.children}
    </StyledFlexContainer>
  );
};

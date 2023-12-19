import styled from "styled-components";

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

const FlexContainer = ({direction, justify, padding, between, width, height, ...props}) => {
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
      $padding={padding}
      $between={gap}
      width={width}
      height={height}
    >
      {props.children}
    </StyledFlexContainer>
  );
};

const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction || "row"};
  justify-content: ${({justify}) => justify || "center"};
  align-items: center;
  padding: ${({padding}) => padding || "0px"};
  width: ${({width}) => width || "auto"};
  height: ${({height}) => height || "auto"};
  overflow: auto;

  > :nth-child(n + 2) {
    margin: ${({$between}) => $between || "0px"};
  }
`;

export default FlexContainer;
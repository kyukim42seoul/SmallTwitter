import styled from "styled-components";

const Card = (props) => {
  return (
    <StyledCard {...props} />
  );
};

/**
 * @param {String} color
 * @param {String} backgroundColor
 * @return {JSX}
 */
const StyledCard = styled.div`
  padding: 10px;
  border-radius: 15px;
  color: ${({ color }) => color || var(--black)};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
`;

export default Card;
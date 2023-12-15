import styled from "styled-components";

/**
 * @Array itemList
 * @Boolean isClosable
 * @Function setIsOpen
 * @returns ButtonList in ul tag
 */

export const ButtonList = ({itemList, isClosable=false, setIsOpen=()=>{}, setValue=()=>{}}) => {
  const listHeight = (20 * itemList.length).toString() + "px";

  return (
    <StyledList height={listHeight}>
      {itemList.map((item, index) => <button key={index} onClick={(e)=>{setIsOpen(false); setValue(item);}}>{item}</button>)}
      {isClosable ? <button onClick={(e) => {e.stopPropagation(); setIsOpen(false)}}>Close</button> : null}
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height || "1.5rem"};
`;

export default ButtonList;
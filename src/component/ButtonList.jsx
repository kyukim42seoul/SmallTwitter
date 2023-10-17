/**
 * 
 * @Array itemList
 * @Boolean isClosable
 * @Function setIsOpen
 * @returns ButtonList in ul tag
 */

export const ButtonList = ({itemList, isClosable=false, setIsOpen=()=>{}}) => {
  console.log(itemList);
  const listHeight = (20 * itemList.length).toString() + "px";
  return (
    <ul style={{display:"flex", flexDirection:"column", height:{listHeight}}}>
      {itemList.map((item, index) => <button key={index}>{item}</button>)}
      {isClosable ? <button onClick={(e) => {e.stopPropagation(); setIsOpen(false)}}>Close</button> : null}
    </ul>
  );
}
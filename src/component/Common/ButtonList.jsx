/**
 * 
 * @Array itemList
 * @Boolean isClosable
 * @Function setIsOpen
 * @returns ButtonList in ul tag
 */

export const ButtonList = ({itemList, isClosable=false, setIsOpen=()=>{}, setValue=()=>{}}) => {
  const listHeight = (20 * itemList.length).toString() + "px";
  return (
    <ul style={{display:"flex", flexDirection:"column", height:{listHeight}}}>
      {itemList.map((item, index) => <button key={index} onClick={(e)=>{setIsOpen(false); setValue(item);}}>{item}</button>)}
      {isClosable ? <button onClick={(e) => {e.stopPropagation(); setIsOpen(false)}}>Close</button> : null}
    </ul>
  );
}
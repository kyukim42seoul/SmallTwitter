import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FlexContainer from "src/component/Common/FlexContainer.jsx";
import ButtonList from "src/component/Common/ButtonList.jsx";
import Button from "src/component/Common/Button.jsx";

//import "./Write.css";

import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineEye, AiOutlineArrowUp } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa6";


export const Write = () => {
  const navigate = useNavigate();
  const [seeRight, setSeeRight] = useState("private");
  const [isOpenSeeRight, setIsOpenSeeRight] = useState(false);
  const [commentRight, setCommentRight] = useState("private");
  const [isOpenCommentRight, setIsOpenCommentRight] = useState(false);
  const [text, setText] = useState("");

  return (
    <div style={{display:"flex", flexDirection:"column", height:"inherit", padding:"0 1.6em"}}>
      <header>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"1em", height:"54px"}}>
          <button onClick={()=>navigate("/")} style={{width:"54px"}}>
            <FiArrowLeft size={"2em"}/>
          </button>
          <span style={{fontSize:"20px", fontWeight:"bold"}}>Write</span>
        </div>
      </header>
      <main style={{flex:"1 0 auto"}}>
        <div>
          <textarea className="new-post-text" placeholder="What is happening?" onChange={(e)=>setText(e.target.value)} ></textarea>
        </div>
      </main>
      <FlexContainer direction="row" justify="flex-end" between="0.5rem" height="3rem">
        <Button className="point" onClick={()=>setIsOpenSeeRight(true)} width="3rem"><AiOutlineEye size={"2em"} color="#FFF" /></Button>
            {isOpenSeeRight ? <ButtonList itemList={["everyone", "friends", "private"]} isClosable={true} setIsOpen={setIsOpenSeeRight} setValue={setSeeRight} /> : null }
        <Button onClick={()=>setIsOpenCommentRight(true)}><FaRegComments size={"2em"} color="#FFF" /></Button>
          {isOpenCommentRight ? <ButtonList itemList={["everyone", "friends", "private"]} isClosable={true} setIsOpen={setIsOpenCommentRight} setValue={setCommentRight} /> : null }
        <Button className="upload-button" onClick={()=>{console.log(`text: ${text} seeRight: ${seeRight} commentRight: ${commentRight}`)}}>
            <AiOutlineArrowUp size={"2em"} color="#FFF" />
          </Button>
      </FlexContainer>
      <footer style={{justifySelf:"flex-end", height:"54px", padding:"0", backgroundColor:"#D9D9D9"}}></footer>
    </div>
  );
}
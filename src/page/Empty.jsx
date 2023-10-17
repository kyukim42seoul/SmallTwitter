/* have to remove all element after Test for next */
import { CardLayout } from "../component/CardLayout.jsx";
import { FullsizeCardLayout } from "../component/FullsizeCardLayout.jsx";
import threadDataGenerator from "../data/testThreadDataGenerator.js";

import { FiArrowLeft } from "react-icons/fi"
import { AiOutlineEye, AiOutlineArrowUp } from "react-icons/ai"
import { FaRegComments } from "react-icons/fa6"

import { useNavigate } from "react-router-dom";
import { ButtonList } from "../component/ButtonList.jsx";
import { useState } from "react";

export const Empty = () => {
  const navigate = useNavigate();
  const uploadTime = new Date();
  const testData = [
    {
      CardId: "",
      parentCardId: "",
      isMine: true,
      nickName: "kyukim",
      userId: "aaa@naver.com",
      uploadTime: "2023년 10월 10일 화요일",
      isFavorite: false,
      favoriteCount: "10",
      textContent: "여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.",
      commentCount: "20"
    },
    {
      CardId: "",
      parentCardId: "",
      isMine: true,
      nickName: "kyukim",
      userId: "aaa@naver.com",
      uploadTime: "2023년 10월 10일 화요일",
      isFavorite: false,
      favoriteCount: "10",
      textContent: "여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.",
      commentCount: "20"
    }
  ];

  const [isOpenSeeRight, setIsOpenSeeRight] = useState(false);

  return (
    <div>
      <header>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"1em", height:"54px", padding:"0 1.6em"}}>
          <FiArrowLeft/>
          <p style={{fontSize:"20px", fontWeight:"bold"}}>Test</p>
        </div>
      </header>
      <main>
        {testData.map((data, index)=> <CardLayout key={index} {...data} />)}
      </main>
      <div style={{display:"flex", justifyContent:"flex-end", gap:"1.6em", padding:"1.6em"}}>
        <button style={{height:"54px", width:"54px", borderRadius:"27px", backgroundColor:"#D9D9D9"}} onClick={()=>setIsOpenSeeRight(true)} ><AiOutlineEye /></button>
        {isOpenSeeRight ? <ButtonList itemList={["everyone", "friends", "private"]} isClosable={true} setIsOpen={setIsOpenSeeRight} /> : null }
        <button style={{height:"54px", width:"54px", borderRadius:"27px", backgroundColor:"#D9D9D9"}}><FaRegComments /></button>
        <button style={{height:"54px", width:"54px", borderRadius:"27px", backgroundColor:"#D9D9D9"}} onClick={()=>{navigate("/write")}}><AiOutlineArrowUp /></button>
      </div>
      <footer>
        <div style={{height:"54px", backgroundColor:"#D9D9D9"}}>
          <button onClick={() => navigate("/login")}>Go Login</button>
        </div>
      </footer>
    </div>
    );
};

import { useNavigate } from "react-router-dom";

import "./Post.css"

import { FiArrowLeft } from "react-icons/fi";

import axios from "axios";

export const Post = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {};
  return (
    <div className="post-wrapper">
      <header style={{ display:"flex", alignItems:"center", height:"54px"}}>
        <div>
          <button onClick={()=>navigate(-1)} style={{width:"54px", height:"54px"}}>
            <FiArrowLeft size={"20px"}/>
          </button>
          <span style={{fontSize:"2em", fontWeight:"bold"}}>Post</span>
        </div>
        <div className="post-header-right">
          <button>Draft</button>
          <button>Post</button>
        </div>
      </header>
      <main>
        <div className="main-left">
          <button>
            <img src="./user.png" width="40px" height="40px" />
          </button>
        </div>
        <div className="main-right">
          <textarea placeholder="What's happening?"/>
        </div>
      </main>
    </div>
  );
}

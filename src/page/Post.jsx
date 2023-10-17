import "./Post.css"
import { FiArrowLeft } from "react-icons/fi";

export const Post = () => {
  return (
    <div className="post-wrapper">
      <header>
        <FiArrowLeft/>
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

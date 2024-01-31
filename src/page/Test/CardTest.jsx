/* have to remove all element after Test for next */
import { CardLayout } from "src/component/Test/CardLayout.jsx";

import { AiOutlinePlus } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

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
      textContent:
        "여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.",
      commentCount: "20",
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
      textContent:
        "여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.여기는 글입니다. 여기는 글입니다.",
      commentCount: "20",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "inherit",
        padding: "0 1.6em",
      }}
    >
      <header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1em",
            height: "54px",
          }}
        >
          <button onClick={() => navigate(-1)}>
            <FiArrowLeft size={"2em"} />
          </button>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>Home</p>
        </div>
      </header>
      <main style={{ flex: "1" }}>
        {testData.map((data, index) => (
          <CardLayout key={index} {...data} />
        ))}
      </main>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1.6em",
          padding: "1.2em 0",
        }}
      >
        <button
          style={{
            height: "54px",
            width: "54px",
            borderRadius: "27px",
            backgroundColor: "#80ACEF",
          }}
          onClick={() => {
            navigate("/write");
          }}
        >
          <AiOutlinePlus size={"2em"} color="#FFF" />
        </button>
      </div>
      <footer
        style={{
          justifySelf: "flex-end",
          height: "5.4em",
          backgroundColor: "#D9D9D9",
        }}
      ></footer>
    </div>
  );
};

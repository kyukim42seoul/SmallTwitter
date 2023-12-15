import { useState } from "react";
import axios from "axios";
import Button from "../../component/Common/Button.jsx";

// uploadTime, threadContent, userId

export const CreateThreadTestForm = () => {
  const [threadContent, setThreadContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentTime = new Date().toISOString();
    const userId = window.localStorage.getItem("userId");

    try {
      console.log(`value check : `, currentTime, threadContent, userId);

      axios.post("http://localhost:3232/threads", {
        uploadTime: currentTime,
        threadContent,
        userId
      }, {
        headers: { "Content-Type": `application/json` }
      })
      .then(res => console.log(res.status, res.data))
      .catch(error => console.error("ERR_createThreadTest : ", error));
    } catch (error) {
      console.error("ERR_createThread : ", error);
      return ;
    }
  };

  return <form onSubmit={handleSubmit}>
    <textarea placeholder="What's happen?" value={threadContent} onChange={e => setThreadContent(e.target.value)} />
    <button type="submit">Submit</button>
  </form>
};
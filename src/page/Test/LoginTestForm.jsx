import { useState } from "react";
import axios from 'axios';

export const LoginTestForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const allFieldsFilled = userEmail && userPassword;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (allFieldsFilled) {
      axios.post("http://localhost:3232/users/login", {
        userEmail,
        userPassword
      }, {
        headers: { "Content-Type": `application/json` },
      })
      .then(res => {
        // 로그인 성공
        if (res.status === 200) {
          console.log(`Login Data : `, res.data);
          window.localStorage.setItem("userId", res.data);
          return ;
        }
        console.log(`res received : `, res.data);
      })
      .catch(err => console.error(err.message));
    } else {
      console.log('Please fill all the fields');
    };
  };

  return <form onSubmit={handleSubmit}>
    <input placeholder="userEmail" value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
    <input placeholder="userPassword" value={userPassword} onChange={e => setUserPassword(e.target.value)}/>
    <button type="submit" disabled={!allFieldsFilled}>Sign In</button>
  </form>
};
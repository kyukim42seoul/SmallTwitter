/* have to remove all element after Test for next */
import axios, { Axios } from "axios";

import { useState } from "react";

export const Empty = () => {
  const [userName, setUserName] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const baseUrl = "http://localhost:3232/api";

  return (
    <div>
      <div className="GET-wrapper">
        <button
          onClick={() => {
            axios
              .get(baseUrl, { params: { userName, userPw } })
              .then((response) => {
                console.log(`response from server ${response.data}`);
              })
              .catch((error) => {
                console.error(`GET Request ERROR:  ${error}`);
              });
          }}
        >
          GET
        </button>
      </div>
      <div className="POST-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            placeholder="user_id"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            placeholder="user_pw"
            onChange={(e) => {
              setUserPw(e.target.value);
            }}
          />
          <input
            placeholder="user_email"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />

          <button
            onClick={() => {
              axios
                .post(`${baseUrl + "/post"}`, { userName, userPw, userEmail })
                .then((response) => {
                  console.log(`Response from server: ${response.data}`);
                })
                .catch((error) => {
                  console.error(`Error: ${error}`);
                });
            }}
          >
            POST
          </button>
        </form>
      </div>
    </div>
  );
};

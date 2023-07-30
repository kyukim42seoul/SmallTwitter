import axios from "axios";

/**
 * return button which send post with payload using axios
 * @param {String} payLoad
 * @returns {JSX}
 */
export const AxiosTest = () => {
  const sendPost = () => {
    console.log("Clicked!");
    axios
      .post("http://localhost:3000/post", payLoad, {
        headers: { "Content-Type": `application/json` },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return <button onClick={sendPost}>POST</button>;
};

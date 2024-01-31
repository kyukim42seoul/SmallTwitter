import axios from "axios";

/**
 * return button which send post with payload using axios
 * payLoad object must have user_id, user_name property
 * @param {String} payLoad
 * @returns {JSX}
 */

export const AxiosTest = ({ payLoad }) => {
  const sendPost = () => {
    axios
      .post("http://localhost:3000/post", payLoad, {
        headers: { "Content-Type": `application/json` },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return <button onClick={sendPost}>POST</button>;
};

/**
 * basic axios instance to localhost:3000 withCredentials
 */
export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  withCredentials: true,
});

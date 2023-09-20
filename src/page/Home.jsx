import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookieValueByName } from "src/utils/CookieUtils.js";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if (getCookieValueByName("logged_in") === "yes") {
      navigate("/thread");
    } else {
      navigate("/login");
    };
  });
  
  return <div>It's Home</div>
};
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookieValueByName } from "src/utils/CookieUtils.js";
import { useRecoilState } from "recoil";
import { loginState } from "src/state/AuthStates.js";

export const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  useEffect(()=>{
    if (getCookieValueByName("logged_in") === "yes") {
      setIsLoggedIn(true);
      navigate("/thread");
    } else {
      setIsLoggedIn(false);
      navigate("/login");
    };
  });
  
  return <div>It's Home</div>
};
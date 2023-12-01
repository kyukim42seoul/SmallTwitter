import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookieValueByName } from "src/common/CookieUtils.js";
import { useRecoilState } from "recoil";
import { loginState } from "src/common/AuthStates.js";

// localstorage/logged_in 에 따른 페이지 라우팅
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
  
  return <></>
};
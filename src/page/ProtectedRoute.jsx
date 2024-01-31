import { getCookieValueByName } from "src/common/CookieUtils.js";

import { Navigate } from "react-router-dom";

// localstorage/logged_in 에 따른 페이지 라우팅
export const ProtectedRoute = ({ children }) => {
  if (!window.localStorage.getItem("userId")) {
    return <Navigate to="/login" />;
  }
  return children;
};

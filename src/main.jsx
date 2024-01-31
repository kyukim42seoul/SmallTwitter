/* ENTRY POINT -- main : 전역 상태관리 App 호출 app 이 여러개로 나뉜다면 여기서 라우팅 해도 됨*/
import { App } from "src/App.jsx";
import "src/index.css";
import "src/reset.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <App />,
  //</React.StrictMode>
);

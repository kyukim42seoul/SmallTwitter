/* App : page routing */

import "./App.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./page/ErrorPage";
import { Login } from "./page/Login";
import { Thread } from "./page/Thread";
import { Profile } from "./page/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} errorElement={<ErrorPage />} />
      <Route path="/thread" element={<Thread />} />
      <Route path="/profile" element={<Profile />} />
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

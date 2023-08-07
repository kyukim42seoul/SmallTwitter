/* App : page routing */

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Routes, Route } from "react-router-dom";
import { Login } from "src/page/Login.jsx";
import { ErrorPage } from "src/page/ErrorPage.jsx";
import { Thread } from "src/page/Thread.jsx";
import { Profile } from "src/page/Profile.jsx";
import "src/App.css";

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

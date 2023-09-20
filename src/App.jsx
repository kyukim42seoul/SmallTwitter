/* App : page routing */

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "src/page/Home.jsx";
import { Login } from "src/page/Login.jsx";
import { ErrorPage } from "src/page/ErrorPage.jsx";
import { Thread } from "src/page/Thread.jsx";
import { Profile } from "src/page/Profile.jsx";
import { Empty } from "src/page/Empty.jsx";
import "src/App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/thread" element={<Thread />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/empty" element={<Empty />} />
    </>
  )
);

document.cookie = "logged_in=yes";

export function App() {
  return <RouterProvider router={router} />;
}

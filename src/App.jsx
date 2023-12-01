/* App : page routing */

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home } from "src/page/Home.jsx";
import { Login } from "src/page/Login.jsx";
import { ErrorPage } from "src/page/ErrorPage.jsx";
import { Thread } from "src/page/Thread.jsx";
import { Profile } from "src/page/Profile.jsx";
import { Empty } from "src/page/Empty.jsx";
import { Post } from "src/page/Post.jsx";
import { Write } from "src/page/Write.jsx";
import { DateShortcutTest } from "src/page/test/DateShortCutTest.jsx";
import "src/App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="/home" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/thread" element={<Thread />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/empty" element={<Empty />} />
      <Route path="/post" element={<Post />} />
      <Route path="/write" element={<Write />} />
      <Route path="/date" element={<DateShortcutTest />} />
    </>
  )
);

if (document.cookie === "") {
  document.cookie = "logged_in=yes";
}

export function App() {
  return (
    <RouterProvider router={router} />
  );
}

/* App : page routing */
import "src/App.css";
import { Empty } from "src/page/Empty.jsx";
import { ErrorPage } from "src/page/ErrorPage.jsx";
import Layout from "src/page/Layout.jsx";
import Login from "src/page/Login.jsx";
import { Post } from "src/page/Post.jsx";
import Profile from "src/page/Profile.jsx";
import { ProtectedRoute } from "src/page/ProtectedRoute.jsx";
import Thread from "src/page/Thread.jsx";
import { Write } from "src/page/Write.jsx";

import { useEffect, useState } from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Bookmarks from "./page/Bookmarks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <Thread />
          </ProtectedRoute>
        ),
      },
      //{
      //  path: "login",
      //  element: (
      //    <Login />
      //  ),
      //},
      {
        path: "thread",
        element: (
          <ProtectedRoute>
            <Thread />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "empty",
        element: (
          <ProtectedRoute>
            <Empty />
          </ProtectedRoute>
        ),
      },
      {
        path: "post",
        element: (
          <ProtectedRoute>
            <Post />
          </ProtectedRoute>
        ),
      },
      {
        path: "write",
        element: (
          <ProtectedRoute>
            <Write />
          </ProtectedRoute>
        ),
      },
      {
        path: "bookmarks",
        element: (
          <ProtectedRoute>
            <Bookmarks />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (document.cookie === "yes") {
      console.log(document.cookie);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

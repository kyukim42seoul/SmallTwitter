/* App : page routing */

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Login from "src/page/Login.jsx";
import { ErrorPage } from "src/page/ErrorPage.jsx";
import Thread from "src/page/Thread.jsx";
import Bookmarks from "./page/Bookmarks.jsx";
import Profile from "src/page/Profile.jsx";
import { Empty } from "src/page/Empty.jsx";
import { Post } from "src/page/Post.jsx";
import { Write } from "src/page/Write.jsx";
import { DateShortcutTest } from "src/page/Test/DateShortCutTest.jsx";
import { CreateUserTestForm } from "src/page/Test/createUserTestForm.jsx";
import { LoginTestForm } from "src/page/Test/LoginTestForm.jsx";
import { ProtectedRoute } from "src/page/ProtectedRoute.jsx";
import Layout from "src/page/Layout.jsx";
import "src/App.css";
import { useEffect, useState } from "react";

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
        )
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
        )
      },
      {
        path: "empty",
        element: (
          <ProtectedRoute>
            <Empty />
          </ProtectedRoute>
        )
      },
      {
        path: "post",
        element: (
          <ProtectedRoute>
            <Post />
          </ProtectedRoute>
        )
      },
      {
        path: "write",
        element: (
          <ProtectedRoute>
            <Write />
          </ProtectedRoute>
        )
      },
      {
        path: "date",
        element: (
          <ProtectedRoute>
            <DateShortcutTest />
          </ProtectedRoute>
        )
      },
      {
        path: "createUser",
        element: (
          <CreateUserTestForm />
        )
      },
      {
        path: "loginTest",
        element: (
          <LoginTestForm />
        )
      },
      {
        path: "bookmarks",
        element: (
          <ProtectedRoute>
            <Bookmarks />
          </ProtectedRoute>
        )
      },
    ]
  },
  {
    path: "/login",
    element: (
      <Login />
    ),
    errorElement: (
      <ErrorPage />
    )
  }
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

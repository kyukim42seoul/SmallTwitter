/* App : page routing */

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import { Login } from "src/page/Login.jsx";
import { ErrorPage } from "src/page/ErrorPage.jsx";
import { Thread } from "src/page/Thread.jsx";
import { Profile } from "src/page/Profile.jsx";
import { Empty } from "src/page/Empty.jsx";
import { Post } from "src/page/Post.jsx";
import { Write } from "src/page/Write.jsx";
import { DateShortcutTest } from "src/page/Test/DateShortCutTest.jsx";
import { CreateUserTestForm } from "src/page/Test/createUserTestForm.jsx";
import { LoginTestForm } from "src/page/Test/LoginTestForm.jsx";
import { CreateThreadTestForm } from "src/page/Test/CreateThreadTestForm.jsx";
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
            <Login />
        )
      },
      {
        path: "login",
        element: (
          <Login />
        ),
      },
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
        path: "createThread",
        element: (
          <CreateThreadTestForm />
        )
      },
    ]
  },
]);

//const router = createBrowserRouter(
//  createRoutesFromElements(
//    <>
//      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>  
//        <Route path="/login" element={<Login />} />
//        <Route path="/thread" element={<Thread />} />
//        <Route path="/profile" element={<Profile />} />
//        <Route path="/empty" element={<Empty />} />
//        <Route path="/post" element={<Post />} />
//        <Route path="/write" element={<Write />} />
//        <Route path="/date" element={<DateShortcutTest />} />
//        <Route path="/createUser" element={<CreateUserTestForm />} />
//        <Route path="/loginTest" element={<LoginTestForm />} />
//        <Route path="/createThread" element={<CreateThreadTestForm />} />
//      </Route>
//    </>
//  )
//);

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

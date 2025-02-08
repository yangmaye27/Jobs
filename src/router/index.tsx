import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Alldata from "../pages/Alldata/Alldata";
import Visualization1 from "../pages/Visualization/Visualization1";
import Visualization2 from "../pages/Visualization/Visualization2";
import Visualization3 from "../pages/Visualization/Visualization3";
import Visualization4 from "../pages/Visualization/Visualization4";
import SalaryPredict from "../pages/SalaryPredict/SalaryPredict";
import Recommend from "../pages/Recommend/Recommend";
import SelfMessage from "../pages/SelfMessage/Selfmessage";
import Resume from "../pages/Resume/Resume";
import Visualization5 from "../pages/Visualization/Visualization5";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/main",
        element: <Main></Main>,
      },
      {
        path: "/alldata",
        element: <Alldata></Alldata>,
      },
      {
        path: "/visualization",
        children: [
          {
            path: "vis1",
            element: <Visualization1></Visualization1>,
          },
          {
            path: "vis2",
            element: <Visualization2></Visualization2>,
          },
          {
            path: "vis3",
            element: <Visualization3></Visualization3>,
          },
          {
            path: "vis4",
            element: <Visualization4></Visualization4>,
          },
          {
            path: "vis5",
            element: <Visualization5></Visualization5>,
          },
        ],
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
      {
        path: "/salaryPrediction",
        element: <SalaryPredict></SalaryPredict>,
      },
      {
        path: "/recommendation",
        element: <Recommend></Recommend>,
      },
      {
        path: "/selfMessage",
        element: <SelfMessage></SelfMessage>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export const HOME_PATHNAME = "/";
export const MAIN_PATHNAME = "/main";
export const LOGIN_PATHNAME = "/login";
export const REGISTER_PATHNAME = "/register";

// 是否是登录注册页面
export function isLoginOrRegister(pathname: string) {
  if ([LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname)) {
    return true;
  } else {
    return false;
  }
}
// 是否不需要用户信息的页面
export function isNoNeedUserInfo(pathname: string) {
  if ([LOGIN_PATHNAME, REGISTER_PATHNAME, HOME_PATHNAME].includes(pathname)) {
    return true;
  }
  return false;
}

export default router;

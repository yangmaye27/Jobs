import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import MainLayout from "../Layout/MainLayout";

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
        path: "/main",
        element: <Main></Main>,
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

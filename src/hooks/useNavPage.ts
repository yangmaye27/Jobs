import { useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import {
  isLoginOrRegister,
  isNoNeedUserInfo,
  LOGIN_PATHNAME,
  MAIN_PATHNAME,
} from "../router";
import useGetUserInfo from "./useGetUserInfo";
import { message } from "antd";

function useNavPage() {
  const { username } = useGetUserInfo();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (username) {
      if (isLoginOrRegister(pathname)) {
        navigate(MAIN_PATHNAME);
      }
      return;
    }
    if (isNoNeedUserInfo(pathname)) {
      return;
    } else {
      message.warning("请先登录");
      navigate(LOGIN_PATHNAME);
    }
  }, [username, pathname]);
}

export default useNavPage;

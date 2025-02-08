import { useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import {
  isLoginOrRegister,
  isNoNeedUserInfo,
  LOGIN_PATHNAME,
  MAIN_PATHNAME,
} from "../router";

function useNavPage(waitingUserData: boolean) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
}

export default useNavPage;

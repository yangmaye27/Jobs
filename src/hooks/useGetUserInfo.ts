import { useSelector } from "react-redux";
import { RootStateType } from "../store";
import { UserStateType } from "../store/userReducer";

function useGetUserInfo() {
  const user = useSelector<RootStateType>(
    (state) => state.user
  ) as UserStateType;
  return user;
}

export default useGetUserInfo;

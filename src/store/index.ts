import { configureStore } from "@reduxjs/toolkit";
import userReducer, { UserStateType } from "./userReducer";

export type RootStateType = {
  user: UserStateType;
};

export default configureStore({
  reducer: {
    user: userReducer,
    // Add your reducers here
  },
});

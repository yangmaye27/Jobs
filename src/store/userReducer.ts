import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserStateType = {
  username: string;
  email: string;
  password: string;
  phone: string;
};

const initialState: UserStateType = {
  username: "",
  email: "",
  password: "",
  phone: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginReducer: (state, action: PayloadAction<UserStateType>) => {
      return action.payload;
    },
    logoutReducer: () => {
      return initialState;
    },
  },
});

export const { loginReducer, logoutReducer } = userSlice.actions;
export default userSlice.reducer;

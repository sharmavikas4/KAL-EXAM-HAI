import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLogin: false,
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;

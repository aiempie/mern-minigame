import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isLoading: false,
      error: false,
    },
    reducers: {
      loginStart: (state) => {
        state.login.isLoading = true;
      },
      loginSuccess: (state, action) => {
        state.login.isLoading = false;
        state.login.currentUser = action.payload;
        state.login.error = false;
      },
      loginFailed: (state) => {
        state.login.isLoading = false;
        state.login.error = true;
      },
    },
  },
});

export const { loginStart, loginSuccess, loginFailed } = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthendicated: false,
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      localStorage.setItem("user", action.payload.user);
      localStorage.setItem("token", action.payload.token);
      state.isAuthendicated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    signOut: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      state.isAuthendicated = false;
      state.user = null;
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;

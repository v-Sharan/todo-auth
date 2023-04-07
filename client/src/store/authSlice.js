import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthendicated: false,
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      try {
        localStorage.setItem("user", action.payload.user);
        localStorage.setItem("token", action.payload.token);
        state.isAuthendicated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      } catch (error) {
        console.log(error);
      }
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

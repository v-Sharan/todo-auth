import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import TodoReducer from "./todoSclice";
import dataReducer from "./userSclice";

export const store = configureStore({
  reducer: { auth: authReducer, Todo: TodoReducer, data: dataReducer },
});

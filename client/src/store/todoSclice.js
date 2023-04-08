import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  isLoading: false,
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    Addtodo: (state, action) => {
      state.todo = action.payload.todo;
      state.isLoading = action.payload.isLoading;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Addtodo } = TodoSlice.actions;

export default TodoSlice.reducer;

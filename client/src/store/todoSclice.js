import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    Addtodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Addtodo } = TodoSlice.actions;

export default TodoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  userPhoto: null,
  id: null,
};

export const userSlice = createSlice({
  name: "Data",
  initialState,
  reducers: {
    storeData: (state, action) => {
      localStorage.setItem("id", action.payload.id);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.userPhoto = action.payload.userPhoto;
      state.id = action.payload.id;
    },
    reStoreData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.userPhoto = action.payload.userPhoto;
      state.id = action.payload.id;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeData, reStoreData } = userSlice.actions;

export default userSlice.reducer;

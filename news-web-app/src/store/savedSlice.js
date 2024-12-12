import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: "saved",
  initialState: {
    savedNews: [],
  },
  reducers: {
    addSavedNews: (state, action) => {
      state.savedNews.push(action.payload);
    },
    removeSavedNews: (state, action) => {
      state.savedNews = state.savedNews.filter(
        (news) => news._id !== action.payload
      );
    },
  },
});

export const { addSavedNews, removeSavedNews } = savedSlice.actions;
export default savedSlice.reducer;

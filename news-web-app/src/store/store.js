import { configureStore } from "@reduxjs/toolkit";
import savedReducer from "./savedSlice";
import apiReducer from "./apiSlice";

const store = configureStore({
  reducer: {
    saved: savedReducer,
    api: apiReducer,
  },
});

export default store;

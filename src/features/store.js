import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./YoutubeSlice/LoginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

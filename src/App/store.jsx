import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "../Features/BookSlice";

export const Store = configureStore({
  reducer : {
    BookReducer : BookReducer
  }
});

import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "../features/postSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer
    }
});
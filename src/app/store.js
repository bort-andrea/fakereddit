import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/postSlice";
import subredditsReducer from "../features/sidebarSlice";

//import il reducer di postslice e configuro lo store
export const store = configureStore({
    reducer: {
        posts: postsReducer,
        subreddits: subredditsReducer
    }
});
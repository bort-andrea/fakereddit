import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    searchTerm: "",
    subReddit: "reactjs"
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSubReddit: (state,action) => {
            state.subReddit = action.payload;
        }
    }
});

export default postsSlice.reducer;
export const {setPosts, setSearchTerm, setSubReddit} = postsSlice.actions;
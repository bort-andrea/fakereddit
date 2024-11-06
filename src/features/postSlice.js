import { createSlice } from "@reduxjs/toolkit";

//lo stato iniziale di questa slice deve contenere
//tutti i post, ricevere il termine di ricerca, e 
//il nome della subreddit della quale visualizzare il contenuto
const initialState = {
    posts: [],
    searchTerm: "",
    subReddit: "reactjs"
}

//come azioni ha l'impostazione delle varie voci dello stato
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
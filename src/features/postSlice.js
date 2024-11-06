import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//lo stato iniziale di questa slice deve contenere
//tutti i post, ricevere il termine di ricerca, e 
//il nome della subreddit della quale visualizzare il contenuto
const initialState = {
    posts: [],
    searchTerm: "",
    subreddit:"reactjs",
    status: "",
    error: null
}

//creo la richiesta per ottenere i post di ogni slice dall'Api di reddit
//e aggiungo la variabile per gestire la richiesta nello stato
//poi introduco gli extrareducers per gestire la richiesta
export const fetchPost = createAsyncThunk('posts/fetchPost', async(selectedSubReddit)=>{
    const response = await fetch(`https://www.reddit.com/r/${selectedSubReddit}.json`);
    const json = await response.json();
    return json.data.children.map((child) => child.data);
});

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
            state.subreddit = action.payload;
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchPost.pending, (state) => {
            state.status = "loading";
        }).addCase(fetchPost.rejected, (state, action) =>{
            state.status = "failed";
            state.error = action.error.message;
        }).addCase(fetchPost.fulfilled, (state, action) =>{
            state.status = "success";
            state.posts = action.payload;
        })
    }
});

export default postsSlice.reducer;
export const {setPosts, setSearchTerm, setSubReddit} = postsSlice.actions;
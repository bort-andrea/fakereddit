import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    subreddits: ["Home"],
    status: '',
    error:null
}

export const fetchSubreddit = createAsyncThunk('subreddits/fetchSubreddit', async()=>{
    const response = await fetch("https://www.reddit.com/subreddits.json");
    const json = await response.json();
    return json.data.children.map((child) => child.data.display_name);
});

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(fetchSubreddit.pending, (state) =>{
            state.status = "loading";
        }).addCase(fetchSubreddit.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }).addCase(fetchSubreddit.fulfilled, (state,action)=>{
            state.status ="success";
            state.subreddits=action.payload;
        })
    }
});

export default subredditsSlice.reducer;
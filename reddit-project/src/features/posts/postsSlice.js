import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import { subreddits } from '../../data/subreddits';

export const loadHomepagePosts = createAsyncThunk(
    'posts/loadHomepagePosts', // action type
    async (arg, thunkAPI) => { // payload creator
        const response = await fetch('https://www.reddit.com/best.json');
        return response.json();
    }
);

export const loadPostsBySubreddit = createAsyncThunk(
    'posts/loadPostsBySubreddit', // action type
    async (id, thunkAPI) => { // payload creator
        const selectedSubreddit = subreddits.find(subreddit => subreddit.id === id);
        const response = await fetch(`https://www.reddit.com/${selectedSubreddit.name}.json`);
        return response.json();
    }
);

export const loadPostsByButton = createAsyncThunk(
    'posts/loadPostsBySubreddit', // action type
    async (button, thunkAPI) => { // payload creator
        const response = await fetch(`https://www.reddit.com/${button}.json`);
        return response.json();
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
        },
    extraReducers: {
        [loadHomepagePosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadHomepagePosts.fulfilled]: (state, action) => {
            state.posts = action.payload.data.children;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadHomepagePosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadPostsBySubreddit.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPostsBySubreddit.fulfilled]: (state, action) => {
            state.posts = action.payload.data.children;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPostsBySubreddit.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadPostsByButton.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPostsByButton.fulfilled]: (state, action) => {
            state.posts = action.payload.data.children;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPostsByButton.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
});

export const selectPosts = (state) => state.posts.posts;
export default postsSlice.reducer;





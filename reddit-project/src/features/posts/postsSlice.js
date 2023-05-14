import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 

const loadHomepagePosts = createAsyncThunk(
    'posts/loadHomepagePosts', // action type
    async (arg, thunkAPI) => { // payload creator
    const response = await fetch('https://www.reddit.com/best.json');
    return response.json();
    }
);

const loadPostsBySubreddit = createAsyncThunk(
    'posts/loadHomepagePosts', // action type
    async (arg, thunkAPI) => { // payload creator
    const response = await fetch('https://www.reddit.com/best.json');
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
            state.isLoading = false;state.hasError = false;
        },
        [loadHomepagePosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }

    }
});

export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;





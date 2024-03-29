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
    'posts/loadPostsByButton', // action type
    async ({button, selectedSubreddit}, thunkAPI) => { // payload creator
      console.log('slice button: ' + button)
      console.log('slice subreddit: ' + selectedSubreddit)
      let url;
        if (selectedSubreddit && 
          selectedSubreddit.name !== 'top' &&
          selectedSubreddit.name !== 'hot') {
          url = `https://www.reddit.com/${selectedSubreddit.name}/${button}.json`;
          console.log('url: ' + url)
        } else {
          url = `https://www.reddit.com/${button}.json`;
          console.log('url: ' + url)
        }
        const response = await fetch(url);
        return response.json();
    }
);

export const loadPostsBySearch = createAsyncThunk(
    'posts/loadPostsBySearch', // action type
    async ({term, selectedSubreddit}, thunkAPI) => { // payload creator
        let url;
        if (term) {
          if (selectedSubreddit &&
              selectedSubreddit.name !== 'top' &&
              selectedSubreddit.name !== 'hot') {
                url = `https://www.reddit.com/${selectedSubreddit.name}/search.json?q=${term}&restrict_sr=1`;
            } else {
                url = `https://www.reddit.com/search.json?q=${term}&sort=top`

            }
            console.log(url);
            const response = await fetch(url)
            return response.json();
        }
    }
);


const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
        },
        extraReducers: (builder) => {
            builder
              .addCase(loadHomepagePosts.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
              })
              .addCase(loadHomepagePosts.fulfilled, (state, action) => {
                state.posts = action.payload.data.children;
                state.isLoading = false;
                state.hasError = false;
              })
              .addCase(loadHomepagePosts.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
              })
              .addCase(loadPostsBySubreddit.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
              })
              .addCase(loadPostsBySubreddit.fulfilled, (state, action) => {
                state.posts = action.payload.data.children;
                state.isLoading = false;
                state.hasError = false;
              })
              .addCase(loadPostsBySubreddit.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
              })
              .addCase(loadPostsByButton.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
              })
              .addCase(loadPostsByButton.fulfilled, (state, action) => {
                state.posts = action.payload.data.children;
                state.isLoading = false;
                state.hasError = false;
              })
              .addCase(loadPostsByButton.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
              })
              .addCase(loadPostsBySearch.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
              })
              .addCase(loadPostsBySearch.fulfilled, (state, action) => {
                state.posts = action.payload.data.children;
                state.isLoading = false;
                state.hasError = false;
              })
              .addCase(loadPostsBySearch.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
              });          
    }
});

export const selectPosts = (state) => state.posts.posts;
export const selectIsLoading = (state) => state.posts.isLoading;
export const selectHasError = (state) => state.posts.hasError;
export default postsSlice.reducer;





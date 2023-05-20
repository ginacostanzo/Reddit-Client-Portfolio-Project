import {subreddits} from '../../data/subreddits';
import {createSlice} from '@reduxjs/toolkit'; 

const popularSubredditsSlice = createSlice({
    name: 'popularSubreddits',
    initialState: subreddits,
    reducers: {
        hideSubreddit: (state, action) => {
            return state.filter(subreddit => subreddit.id !== action.payload.id);
        }
    }
});

export const selectPopularSubreddits = (state) => state.popularSubreddits;
export const {hideSubreddit} = popularSubredditsSlice.actions;
export default popularSubredditsSlice.reducer;

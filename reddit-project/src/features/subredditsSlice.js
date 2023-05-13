import {subreddits} from '../data/subreddits';
import {createSlice} from '@reduxjs/toolkit'; 

const popularSubredditsSlice = createSlice({
    name: 'popularSubreddits',
    initialState: subreddits,
    reducers: {
        
    }
});

export const selectPopularSubreddits = (state) => state.popularSubreddits;
export default popularSubredditsSlice.reducer;
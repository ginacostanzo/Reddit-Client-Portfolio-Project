import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from '../features/subreddits/subredditsSlice';

export default configureStore({
  reducer: {
    popularSubreddits: subredditsReducer,
  },
});
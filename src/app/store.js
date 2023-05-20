import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from '../features/subreddits/subredditsSlice';
import postsReducer from '../features/posts/postsSlice';

export default configureStore({
  reducer: {
    popularSubreddits: subredditsReducer,
    posts: postsReducer,
  },
});
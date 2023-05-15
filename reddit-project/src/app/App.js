import './App.css';
import { PopularSubreddits } from '../features/subreddits/PopularSubreddits';
import { Posts } from '../features/posts/Posts';
import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { loadHomepagePosts } from '../features/posts/postsSlice';
import { useDispatch } from 'react-redux';


function App() {
  const [selectedSubreddit, setSelectedSubreddit] = useState(null);
  const dispatch = useDispatch();

  const handleSubredditClick = (subreddit) => {
    setSelectedSubreddit(subreddit);
  }

  useEffect(() => {
    // Load posts when the component mounts or when the selectedSubreddit changes
    if (!selectedSubreddit) {
      dispatch(loadHomepagePosts());
    }
  }, [dispatch, selectedSubreddit]);

  return (
    <div className="App">
      <Navigation onBtnClick={handleSubredditClick} selectedSubreddit={selectedSubreddit}/>
      <div className="grid">
        <PopularSubreddits onSubredditClick={handleSubredditClick} />
        <Posts selectedSubreddit={selectedSubreddit} />
      </div>
    </div>
  );
}

export default App;

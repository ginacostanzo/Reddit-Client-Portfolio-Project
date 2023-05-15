import './App.css';
import { SideNavigation } from '../components/SideNavigation';
import { Posts } from '../features/posts/Posts';
import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { loadHomepagePosts } from '../features/posts/postsSlice';
import { useDispatch } from 'react-redux';


function App() {
  const [selectedSubreddit, setSelectedSubreddit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubredditClick = (subreddit) => {
    setSelectedSubreddit(subreddit);
  }

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  }
 
  useEffect(() => {
    // Load posts when the component mounts or when the selectedSubreddit changes
    if (!selectedSubreddit && !searchTerm) {
      dispatch(loadHomepagePosts());
    }
  }, [dispatch, selectedSubreddit, searchTerm]);

  return (
    <div className="App">
      <Navigation onBtnClick={handleSubredditClick} selectedSubreddit={selectedSubreddit} />
      <div className="grid">
        <SideNavigation selectedSubreddit={selectedSubreddit} onSearchChange={handleSearchChange} onSubredditClick={handleSubredditClick} />
        <Posts selectedSubreddit={selectedSubreddit} />
      </div>
    </div>
  );
}

export default App;

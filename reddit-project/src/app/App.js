import './App.css';
import { PopularSubreddits } from '../features/subreddits/PopularSubreddits';
import { Posts } from '../features/posts/Posts';
import Navigation from '../components/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation />
      <div class="grid">
        <PopularSubreddits />
        <Posts />
      </div>
    </div>
  );
}

export default App;

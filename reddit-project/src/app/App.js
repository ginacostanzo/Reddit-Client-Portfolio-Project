import './App.css';
import { PopularSubreddits } from '../features/subreddits/PopularSubreddits';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import { Posts } from '../features/posts/Posts';


function App() {
  return (
    <div className="App">
      <section id="navigation">
        <FontAwesomeIcon icon={faReddit} size="2xl" style={{color: "#ff4500",}} />
        <h1>The Best of Reddit</h1>
        <button>Top</button>
        <button>Hot</button>
        <button>Popular</button>
      </section>
      <div class="grid">
        <PopularSubreddits />
        <Posts />
      </div>
    </div>
  );
}

export default App;

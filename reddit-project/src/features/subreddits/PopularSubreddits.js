import { selectPopularSubreddits } from "./subredditsSlice";
import { useSelector, useDispatch } from 'react-redux';
import { hideSubreddit } from './subredditsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export function PopularSubreddits() {
    const subreddits = useSelector(selectPopularSubreddits);
    const dispatch = useDispatch();

    const hideSubredditById = (id) => () => {
        dispatch(hideSubreddit({ id: id }));
    }

    const displayBtn = (id) => () => {
        document.getElementById(`subreddit${id}`).className = 'visibleBtn';
    }
    const hideBtn = (id) => () => {
        document.getElementById(`subreddit${id}`).className = 'hiddenBtn';
    }
    const viewSubreddit = (id) => () => {
        
    }

    return(
        <section id="sideNav">
            <h2>the best of subreddits</h2>
            <ul>
                {subreddits.map(subreddit => (
                    <li 
                        onMouseOver={displayBtn(subreddit.id)} 
                        onMouseOut={hideBtn(subreddit.id)} 
                        onClick={viewSubreddit(subreddit.id)} 
                        key={subreddit.id}>
                            <button 
                                id={`subreddit${subreddit.id}`} 
                                className="hiddenBtn" 
                                onClick={hideSubredditById(subreddit.id)}>
                                    <FontAwesomeIcon icon={faEyeSlash} style={{color: "#000000",}} />
                            </button>
                            {subreddit.name}
                    </li>
            ))}
            </ul>
        </section>
    )
}
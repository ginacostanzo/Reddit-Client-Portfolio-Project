import { selectPopularSubreddits } from "./subredditsSlice";
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import { loadPostsBySubreddit} from '../posts/postsSlice';


export function PopularSubreddits({onSubredditClick}) {
    const subreddits = useSelector(selectPopularSubreddits);
    const subredditNames = subreddits.map(subreddit => subreddit.name).sort(Intl.Collator().compare);
    const dispatch = useDispatch();

    const viewSubreddit = (id) => () => {
        onSubredditClick(subreddits.find(sub => sub.id === id));
        dispatch(loadPostsBySubreddit(id));
    }

    return(
        <section className="subreddits">
            <div className="desktop">
                <h2>the best of subreddits</h2>
                <ul>
                {subredditNames.map(name => {
                    const subreddit = subreddits.find(sub => sub.name === name);
                    if (subreddit) {
                        return (
                        <li
                            onClick={viewSubreddit(subreddit.id)}
                            key={subreddit.id}
                        >
                            {subreddit.icon ? (
                            <img className="subredditImg" alt={name} src={require(`../../data/images/${subreddit.icon}`)} />
                            ) : (
                            <FontAwesomeIcon icon={faReddit} size="xl" style={{ color: "#ff4500", marginRight: 5 }} />
                            )}
                            {name}
                        </li>
                        );
                    }
                    return null;
                    })}
                </ul>
            </div>
            <div className="mobile">
                <label htmlFor="subredditSelect">subreddit: </label>
                <select id="subredditSelect" onChange={(event) => {
                    const id = parseInt(event.target.value, 10);
                    viewSubreddit(id)();
                    }}>

                    <option disabled>Subreddit...</option>
                {subredditNames.map(name => {
                    const subreddit = subreddits.find(sub => sub.name === name);
                    if (subreddit) {
                        return (
                        <option
                            value={subreddit.id}
                            key={subreddit.id}
                        >
                            {name}
                        </option>
                        );
                    }
                    return null;
                    })}
                </select>
            </div>
            
        </section>
    )
}
import { selectPopularSubreddits } from "./subredditsSlice";
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import Search from '../search/Search';
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
        <section id="sideNav">
            <Search />
            <hr />
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
        </section>
    )
}
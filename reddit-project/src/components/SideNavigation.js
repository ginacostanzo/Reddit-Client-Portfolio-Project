import Search from '../features/search/Search';
import { PopularSubreddits} from '../features/subreddits/PopularSubreddits';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

export function SideNavigation({onSearchChange, onSubredditClick, selectedSubreddit}) {
    const subredditImage = selectedSubreddit && selectedSubreddit.icon ? require(`../data/images/${selectedSubreddit.icon}`) : null;

    return (
        <section id="sideNav">
            <p id="viewing">
                {selectedSubreddit && selectedSubreddit.icon ? (
                <img className="subredditImgViewing" alt={selectedSubreddit.name} src={subredditImage} />
                ) : (
                <FontAwesomeIcon icon={faReddit} size="xl" style={{ color: "#ff4500", marginRight: 5 }} />
                )}
                {selectedSubreddit ? selectedSubreddit.name : 'the best of reddit'}
            </p>
            <hr />
            <Search onSearchChange={onSearchChange} selectedSubreddit={selectedSubreddit} />
            <hr />
            <PopularSubreddits onSubredditClick={onSubredditClick} />
        </section>
    )
}
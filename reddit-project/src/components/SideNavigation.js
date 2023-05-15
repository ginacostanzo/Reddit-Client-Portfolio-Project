import Search from '../features/search/Search';
import { PopularSubreddits} from '../features/subreddits/PopularSubreddits';


export function SideNavigation({onSearchChange, onSubredditClick, selectedSubreddit}) {

    return(
        <section id="sideNav">
            <Search onSearchChange={onSearchChange} selectedSubreddit={selectedSubreddit} />
            <hr />
            <PopularSubreddits onSubredditClick={onSubredditClick} />
        </section>
    )
}
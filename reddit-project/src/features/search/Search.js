import { useDispatch } from "react-redux";
import { loadPostsBySearch } from "../posts/postsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search({onSearchChange, selectedSubreddit}) {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        const term = document.getElementById('searchBar').value;
        onSearchChange(term);
        dispatch(loadPostsBySearch({term, selectedSubreddit}));
        }

    return(
        <section id="search">
            <label htmlFor="searchBar">search posts: </label>
            <input id="searchBar" type="text" placeholder="Search the best of reddit"></input>
            <button className="searchBtn" type="submit" onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} /></button>
        </section>
    )
}
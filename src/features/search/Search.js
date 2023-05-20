import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadPostsBySearch } from "../posts/postsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search({ onSearchChange, selectedSubreddit }) {
  const dispatch = useDispatch();
  const [searchTermCurrent, setSearchTermCurrent] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchChange(searchTermCurrent);
    dispatch(loadPostsBySearch({ term: searchTermCurrent, selectedSubreddit }));
    setSearchTermCurrent("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  const handleInputChange = (e) => {
    setSearchTermCurrent(e.target.value);
  };

  return (
    <section id="search">
      <label htmlFor="searchBar">search posts:</label>
      <input
        id="searchBar"
        type="text"
        placeholder="Search the best of reddit"
        value={searchTermCurrent}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button className="searchBtn" type="submit" onClick={handleSearch}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#ffffff" }}
        />
      </button>
    </section>
  );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import { faFire, faUpLong, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { loadPostsByButton } from '../features/posts/postsSlice';

export default function Navigation({onBtnClick, selectedSubreddit}) {
    const dispatch = useDispatch();

    const handleBtnClick = (e) => {
      const button = e.target.value;
      onBtnClick({name: button});
      dispatch(loadPostsByButton(button));
    }

    return(
        <section id="navigation">
          <FontAwesomeIcon icon={faReddit} size="2xl" style={{color: "#ff4500",}} />
          <h1>The Best of Reddit</h1>
          <button className="navBtn" value="top" onClick={handleBtnClick}>Top <FontAwesomeIcon icon={faUpLong} style={{color: "#ffffff",}} /></button>
          <button className="navBtn" value="hot" onClick={handleBtnClick}>Hot <FontAwesomeIcon icon={faFire} style={{color: "#ffffff",}} /></button>
          <button className="navBtn" value="r/popular" onClick={handleBtnClick}>Popular <FontAwesomeIcon icon={faArrowTrendUp} style={{color: "#ffffff",}} /></button>
          <br />
          <p id="viewing">Currently viewing: {selectedSubreddit ? selectedSubreddit.name : 'Best' }</p>
      </section>
    )
}
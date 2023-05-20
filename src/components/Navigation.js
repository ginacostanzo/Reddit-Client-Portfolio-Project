import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import { faFire, faUpLong, faRocket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { loadHomepagePosts, loadPostsByButton } from '../features/posts/postsSlice';

export default function Navigation({onBtnClick, selectedSubreddit}) {
    const dispatch = useDispatch();

    const handleBtnClick = (e) => {
      const button = e.target.value;
      console.log('subreddit: ' + selectedSubreddit);
      if (selectedSubreddit) {
        console.log(selectedSubreddit)
        console.log('button in function: ' + button);
        dispatch(loadPostsByButton({button, selectedSubreddit}));
        console.log('object being dispatched: ' + {button, selectedSubreddit})
      } else {
        console.log('button: ' + button)
        onBtnClick({name: button});
        dispatch(loadPostsByButton(button));
      }
    }

    return(
        <section id="navigation">
          <FontAwesomeIcon icon={faReddit} size="2xl" style={{color: "#ff4500",}} />
          <h1 onClick={() => {
            dispatch(loadHomepagePosts());
            onBtnClick(null)}
            }>The Best of Reddit</h1>
          <button className="navBtn" value="home" onClick={() => {
            dispatch(loadHomepagePosts());
            onBtnClick(null)}
            }>Home <FontAwesomeIcon icon={faRocket} style={{color: "#ffffff",}} /></button>
          <button className="navBtn" value="top" onClick={handleBtnClick}>Top <FontAwesomeIcon icon={faUpLong} style={{color: "#ffffff",}} /></button>
          <button className="navBtn" value="hot" onClick={handleBtnClick}>Hot <FontAwesomeIcon icon={faFire} style={{color: "#ffffff",}} /></button>
          <br />
      </section>
    )
}
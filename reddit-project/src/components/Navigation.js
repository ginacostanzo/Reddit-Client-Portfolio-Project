import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import { faFire, faUpLong, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import Search from '../features/search/Search';

export default function Navigation() {
    return(
        <section id="navigation">
        <FontAwesomeIcon icon={faReddit} size="2xl" style={{color: "#ff4500",}} />
        <h1>The Best of Reddit</h1>
        <button className="navBtn">Top <FontAwesomeIcon icon={faUpLong} style={{color: "#ffffff",}} /></button>
        <button className="navBtn">Hot <FontAwesomeIcon icon={faFire} style={{color: "#ffffff",}} /></button>
        <button className="navBtn">Popular <FontAwesomeIcon icon={faArrowTrendUp} style={{color: "#ffffff",}} /></button>
      </section>
    )
}
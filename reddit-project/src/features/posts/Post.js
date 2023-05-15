import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from '@fortawesome/free-solid-svg-icons';

export default function Post({post}) {
    return(
        <a href={post.url} className="postLink">
            <div className="post">
                r/{post.subreddit} - Posted by u/{post.author}
                <br />
                {post.title}
                <br />
                {post.media_metadata && 
                <img alt='preview of the post' src='../../data/images/gaming.png' />
                }
                {post.score}
                <br />
                {post.selftext}
                <br />
                <FontAwesomeIcon icon={faComments} style={{color: "#000000",}} /> {post.num_comments} comments
            </div>
        </a>
    )
}
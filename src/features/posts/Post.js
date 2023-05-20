import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faArrowUpRightFromSquare, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Post({post}) {
    let decodedText = '';

    if (post.selftext_html) {
        const decoder = new DOMParser().parseFromString(post.selftext_html, 'text/html');
        decodedText = decoder.documentElement.textContent;
    }
    

    return(
            <div className="post">
                <section className="postScore">
                    <FontAwesomeIcon icon={faChevronUp} size="xl" style={{color: "#000000",}} />
                    {post.score}
                    <FontAwesomeIcon icon={faChevronDown} size="xl" style={{color: "#000000",}} />
                    
                </section>
                <section className="postContent">
                <h4>r/{post.subreddit} - Posted by u/{post.author}</h4>
                <br />
                <h3>{post.title}</h3>
                <br />
                <section className="postMedia">
                {post.secure_media && post.secure_media.type === "youtube.com" && (
                    <div dangerouslySetInnerHTML={{ __html: new DOMParser().parseFromString(post.secure_media.oembed.html, "text/html").documentElement.textContent }} />
                )}

                {post.url.startsWith('https://v.red') && post.secure_media && post.secure_media.reddit_video ? (
                    <video src={post.secure_media.reddit_video.fallback_url} controls width="400" height="300">
                    Your browser does not support the video tag.
                    </video>
                ) : (post.url.startsWith('https://i.red') ? (
                    <img className="postImage" alt={post.description} src={post.url} />
                ) : (!post.url.includes('youtube') && !post.url.includes('youtu.be')) ? (
                    <a href={post.url} className="postArticleLink" target="_blank" rel="noopener noreferrer">
                    {post.url} <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ color: "#000000" }} />
                </a>
                ) : null)}
                </section>
                <br />
                {decodedText && 
                (<p className="postText" dangerouslySetInnerHTML={{ __html: decodedText }}></p>)
                }
                <hr />
                <section className="postComments">
                    <div><FontAwesomeIcon icon={faComments} style={{color: "#000000",}} /> {post.num_comments} comments</div>
                    <a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noreferrer" className="postLink"><h4>View post on reddit <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#000000",}} /></h4></a>
                </section>
            </section>
        </div>
    )
}
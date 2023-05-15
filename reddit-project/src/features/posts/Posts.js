import { useSelector } from 'react-redux';
import Post from './Post';
import { selectPosts } from './postsSlice';


export function Posts() {
    const posts = useSelector(selectPosts);

    return(
        <section id="posts">
            {posts.map(post => (
                <Post key={post.data.id} post={post.data} />
            ))}
        </section>
    )
}
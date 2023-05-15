import { useSelector } from 'react-redux';
import Post from './Post';
import { selectPosts, selectHasError, selectIsLoading } from './postsSlice';


export function Posts() {
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(selectIsLoading);
    const hasError = useSelector(selectHasError);

    return(
        <section id="posts">
            {!isLoading && !hasError && (
                posts.map(post => (
                    <Post key={post.data.id} post={post.data} />
                ))
            )}
            {isLoading && (
                <p>Loading posts...</p>
            )}
            {hasError && (
                <p>Error loading posts. Try again later.</p>
            )}
        </section>
    )
}
import { useSelector, useDispatch } from 'react-redux';
import { loadHomepagePosts, selectPosts } from './postsSlice';
import { useEffect } from 'react';
import Post from './Post';


export function Posts({ selectedSubreddit }) {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    useEffect(() => {
        // Load posts when the component mounts or when the selectedSubreddit changes
        if (!selectedSubreddit) {
          dispatch(loadHomepagePosts());
        }
      }, [dispatch, selectedSubreddit]);

    return(
        <section id="posts">
            {posts.map(post => (
                <Post post={post} />
            ))}
        </section>
    )
}
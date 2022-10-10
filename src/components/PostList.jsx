import Post from "./Post";
import { getPosts } from "../service/data-service";
import { useEffect, useState } from "react";

const initialState = [];

function PostList({ post }) {

    const [posts, setPosts] = useState(initialState);

    useEffect(() => {

        getPosts().then((posts) => {
            setPosts(posts);
        });

    }, []);

    return (
        <div className="row">
            {
                posts === initialState
                    ? <h3 className="mt-3">Loading...</h3>
                    : posts
                        .filter((e) => (post === "" ? true : e.description.toLowerCase().includes(post.toLowerCase())))
                        .map((post, i) => (
                            <Post
                                key={i}
                                img={post.img}
                                fecha={post.fechaGMT}
                                description={post.description}
                                user={post.user}
                                comments={post.comments}
                                likes={post.likes}
                            />
                        ))}
        </div>
    );
}

export default PostList;
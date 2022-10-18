import Post from "./Post";
import { getPosts } from "../service/data-service";
import { useEffect, useState } from "react";

const initialState = [];

function PostList({ search }) {

    const [posts, setPosts] = useState(initialState);
    // console.log(posts);
    useEffect(() => {

        getPosts().then((posts) => {
            // console.log(posts);
            setPosts(posts);
        });

    }, []);

    return (
        <div className="row">
            {
                posts === initialState
                    ? <h3 className="mt-3">Loading...</h3>
                    : posts
                        .filter((e) => (search === "" ? true : e.text.toLowerCase().includes(search.toLowerCase())))
                        .map((post, i) => (
                            <Post
                                key={post.id}
                                img={post.image}
                                fecha={post.createdAt}
                                description={post.text}
                                user={'@'+post.author.username}
                                comments={post.comments}
                                likes={post.likes}
                            />
                        ))}
        </div>
    );
}

export default PostList;
import Post from "./Post";

const posts = [
    {
        img: "https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales.jpg",
        fecha: 1664755200000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        user: "@leo",
        comments: 10,
        likes: 200
    },
    {
        img: "https://t1.ev.ltmcdn.com/es/posts/6/7/4/animales_de_la_ciudad_3476_orig.jpg",
        fecha: 1664755800000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        user: "@ricardo",
        comments: 12,
        likes: 1500
    },
    {
        img: "https://assets.afcdn.com/story/20161017/989289_w1200h630c1cx511cy250.jpg",
        fecha: 1664755860000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        user: "@pedro",
        comments: 15,
        likes: 5000
    },
    {
        img: "https://www.ambientum.com/wp-content/uploads/2018/06/tigre-portada-696x464.jpg",
        fecha: 1664755890000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        user: "@sergio",
        comments: 9,
        likes: 21000
    },
    {
        img: "https://educacion30.b-cdn.net/wp-content/uploads/2016/04/animales-destacada-978x652.jpg",
        fecha: 1664756395000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        user: "@raul",
        comments: 32,
        likes: 35000
    },
];

function PostList() {
    return (
        <div className="row">
            {posts.map((post, i) => (
                <Post
                    key={i}
                    img={post.img}
                    fecha={post.fecha}
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
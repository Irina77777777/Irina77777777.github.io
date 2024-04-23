import { useState, useEffect } from "react";


function Post({}) {
    const [post, setPost] = useState([]);


   const [likes, setLikes] = useState(0);
   function likeThis() {
       return setLikes(likes + 1);
   }
useEffect(
    () => document.getElementById("like").addEventListener("Click", likeThis) ,
    [likes]
);

    const fetchData = async () => {
        const data = await(
            await fetch(
                "https://my-json-server.typicode.com/https://github.com/Irina77777777//db/posts/1"
            )
        ).json();
        setPost(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <article className="post">
                <div className="cover-container">
                    <img src={post.cover} alt={post.title} />
                </div>
                <div className="post-footer">
                    <h3>
                        {post.title} {post.id}
                    </h3>
                    <p>{post.content}</p>
                    <button id="like">
                        Like this post <strong>{likes}</strong>
                    </button>
                </div>
            </article>
        </>
    );
}

export default Post;

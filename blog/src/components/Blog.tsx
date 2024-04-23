// src/components/Blog.tsx

//  import React from "react";
import  { useState } from 'react';

//   class Blog extends React.Component {
    //   constructor(props: any) {
      //    super(props);
       //    this.state = { post: props.post };
    //   }


    const Blog = () => {
        const [posts, setPosts] = useState([]);
        
 const post = {
     id: "1",
     title: "Що таке Lorem Ipsum?",
     content:
         "Lorem Ipsum - це текст-риба, що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною рибою аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів.",
     cover: "https://couchjanus.github.io/images/product-5.jpg",
     likes: 7,
 };


    const dataFetch = async () => {
        const data =  await (
            await fetch('https://jsonplaceholder.typicode.com/posts')
        ).json();
     //   setPosts([...posts, data]);
    }

   //   render() {
        return (
            <>  
            <article className="post">
                <div className="cover-container">
                    <img
                        src={post.cover}
                        alt={post.title}
                    />
                </div>
                <div className="post-footer">
                    <h3>
                        {post.title} {post.id}
                    </h3>
                    <p>{post.content}</p>
                </div>
                </article>
                </>
        );
    }
// }
export default Blog;


import { useState, useEffect, useContext,   createContext } from 'react';
import Layout from './Layout';
import Header from './Header';
import PostMain from './PostMain';
import PostTitle from './PostTitle';


function Posts() {
    const [post, setPost] = useState([]);

    const PostContext = createContext("");

    const Layout = ({  }) => {
        return (
            <div>
                <Header />
                <main>{"children"}</main>
            </div>
        );
    };

    const Header = () => {
        return (
            <header>
                <InfoContext />
            </header>
        );
    };

 
   const InfoContext = () => {
       const blogHeader = useContext(PostContext);
       return (
           <>
               <h2>blogHeader.blogName</h2>
               <p>blogHeader.blogDescription</p>
           </>
       );
   };
       const  blogHeader = {
           blogName: "Our blog",
           blogDescription:
               "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi culpa odio asperiores a tempore.",
       };
  



    const fetchData = async () => {
        const data = await (
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
       // <PostContext.Provider  >
            <Layout>
            </Layout>
      //  </PostContext.Provider>
    );
}
export default Posts;

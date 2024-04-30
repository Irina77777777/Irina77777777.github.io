


import {  createContext } from 'react';
import Layout from "./Layout"
import Posts from './Posts';

const Blog = () => {
     
    const BlogContext = createContext("");
    const blogName = "My favorite Blog1";
        
    return (
        <>
            <BlogContext.Provider value={blogName}>
                <Layout>
                    <Posts />
                </Layout>
            </BlogContext.Provider>
        </>
    );
}
export default Blog;

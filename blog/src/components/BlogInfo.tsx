import { useContext, createContext } from "react";
function BlogInfo() {
     const BlogContext = createContext("");
    const blogName = useContext(BlogContext);
    return <span className="text-3xl font-bold">{blogName}</span>;
}
export default BlogInfo
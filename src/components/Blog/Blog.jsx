import BlogItems from "./Blog-Content";
import { BLOG } from "../../data";

const Blog = () => {
  return (
    <section className="font-body text-orange-700 border-2 border-red-300">
      <h1 className="text-center text-3xl font-medium text-orange-700 mt-8 mb-3">
        Blog
      </h1>
      {BLOG.map((blogContent) => (
        <BlogItems key={blogContent.blogTitle} {...blogContent} />
      ))}
    </section>
  );
};

export default Blog;

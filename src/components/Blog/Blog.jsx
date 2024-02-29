import BlogItems from "./Blog-Content";
import { BLOG } from "../../data";

const Blog = () => {
  return (
    <section className="font-body text-orange-700 xl:w-90 xl:mx-auto">
      <h1 className="text-center text-4xl font-bold text-orange-700 mt-10 mb-3 lg:text-7xl">
        Blog
      </h1>
      <section className="md:grid md:grid-cols-2 md:gap-8 md:mb-8 lg:grid-cols-3">
        {BLOG.map((blogContent) => (
          <BlogItems key={blogContent.id} {...blogContent} />
        ))}
      </section>
    </section>
  );
};

export default Blog;

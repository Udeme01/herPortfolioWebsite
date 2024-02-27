import PropTypes from "prop-types";

const BlogItems = ({
  blogImage,
  blogTitle,
  blogDescription,
  profileImage,
  profileName,
  profileTag,
}) => {
  return (
    <article className="px-6 mb-8">
      {blogImage}
      {blogTitle}
      {blogDescription}
      <div className="flex flex-row items-center gap-3 mt-2">
        {profileImage}
        <span className="text-xs">
          {profileName}
          {profileTag}
        </span>
      </div>
    </article>
  );
};

BlogItems.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  blogImage: PropTypes.object,
  blogTitle: PropTypes.object,
  blogDescription: PropTypes.string,
  profileImage: PropTypes.object,
  profileName: PropTypes.string,
  profileTag: PropTypes.string,
};

export default BlogItems;

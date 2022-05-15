import MoreStories from "../more-stories";

const Blogs = ({ posts }) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      <MoreStories posts={posts} />
    </main>
  );
};

export default Blogs;

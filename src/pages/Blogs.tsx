import { BlogCard } from "../componenets/BlogCard";
import { Loading } from "../componenets/Loading";
import { Appbar } from "../componenets/Appbar";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { blogs, loading } = useBlogs();
  if (loading) {
    return (
      <div className="p-10 bg-slate-200 h-screen">
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-200 p-5">
      <Appbar />

      <div className="flex justify-center items-center flex-grow">
        <div className="w-full">
          {blogs.map((b) => (
            <BlogCard
              key={b.id}
              id={b.id}
              title={b.title}
              content={b.content}
              name={b.author.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

import { Appbar } from "../componenets/Appbar";
import { FullBlog } from "../componenets/FullBlog";
import { Loading } from "../componenets/Loading";
import { useBlog } from "../hooks";

export const Blog = () => {
  const { blog, loading } = useBlog();
  if (loading) {
    return (
      <div>
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
    <div className="bg-slate-200 p-5 min-h-screen">
      <Appbar />
      
      <FullBlog
        id={blog?.id || ""}
        name={blog?.author.name || ""}
        title={blog?.title || ""}
        content={blog?.content || ""}
      />
    

    </div>
    
  );
};

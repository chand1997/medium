import { Avatar, BlogCardInput } from "./BlogCard";

export const FullBlog = ({ id, name, title, content }: BlogCardInput) => {
  return (
    <div className="flex flex-col lg:flex-row mt-5 mx-5 lg:mx-20">
      <div className="w-full lg:w-3/4 bg-slate-300 flex flex-col p-5 space-y-2 font-mono">
        <div className="font-extrabold text-3xl lg:text-5xl">{title}</div>
        <div className="text-blue-400 font-thin">Posted on 11th Feb 1887</div>
        <div className="font-light text-lg lg:text-2xl">{content}</div>
      </div>
      <div className="hidden lg:block w-1/4 bg-slate-400 p-5 font-mono space-y-5 lg:space-y-10">
        <div className="italic">Author</div>
        <div className="flex items-center">
          <Avatar name={name} />
          <div className="flex flex-col ml-3">
            <div className="font-bold text-lg lg:text-xl">{name}</div>
            <div className="font-extralight text-xs lg:text-sm">
              &bull; {id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

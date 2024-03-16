import { Link } from "react-router-dom";

export interface BlogCardInput {
  id: string;
  name: string;
  title: string;
  content: string;
}
export const BlogCard = ({ id, name, title, content }: BlogCardInput) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="bg-slate-300 m-3 rounded-2xl p-5 border-b-[5px] border-slate-500 min-w-fit">
        <div className="flex justify-between ">
          <div className="flex justify-start items-center space-x-2 ">
            <Avatar name={name} />
            <div className=" collapse md:visible font-bold font-mono">
              {name}
            </div>
            <FullStop />
            <div className=" collapse md:visible font-thin text-blue-500">
              11th February 1877
            </div>
          </div>

          <div className="flex items-center font-thin text-[12px] collapse md:visible">
            {id}
          </div>
        </div>
        <div className="text-left  font-mono  px-5  ">
          <div className="text-[30px] font-extrabold">{title.length>30?title.slice(0,30)+'...':title}</div>
          <div className="text-[20px]   px-5">
            {content.length > 50
              ? content.slice(0, 50) + "..."
              : content.slice(0, 50)}
          </div>
          <div className="bg-gray-300 mt-5 w-fit text-[12px] font-extrabold border-[1px] border-gray-950 rounded-md p-1">
            {content.length / 100 > 1
              ? content.length / 100 + " minutes read"
              : "1 minute read"}
          </div>
        </div>
      </div>
    </Link>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <>
      <div className="relative inline-flex items-center justify-center  min-w-10 min-h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-extrabold text-black-600 dark:text-gray-600 font-mono italic">
          {name.slice(0, 2).toUpperCase()}
        </span>
      </div>
    </>
  );
}

export function FullStop() {
  return <div className=" collapse md:visible font-extrabold ">&#x2E;</div>;
}

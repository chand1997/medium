import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  const path = window.location.pathname;
  const arr = path.split("/");
  const val = arr[arr.length - 1];
  const navigate=useNavigate();
  return (
    <div className="flex justify-between bg-slate-400 p-5  rounded-full ">
      <Link to={"/blogs"}>
        <div className="flex justify-start space-x-4">
          <div className="bg-blue-200 font-mono font-extrabold  rounded-full p-2 italic">
            Medium
          </div>
        </div>
      </Link>

      <div className="collapse flex justify-end items-center space-x-4  md:visible">
        {val == "publish" ? (
          <Button to={"/blogs"} label={"Publish"} />
        ) : (
          <Button to={"/publish"} label={"Add"} />
        )}

        <button onClick={()=>{
          localStorage.removeItem('token');
          navigate("/signin");
          }} className="bg-green-500 p-2 rounded-md font-medium">Logout</button>

        <Avatar name={"ch"} />
      </div>
    </div>
  );
};
interface Input {
  to: string;
  label: string;
}
function Button({ to, label }: Input) {
  return (
    <Link to={to}>
      <div className="bg-green-500 p-2 rounded-md font-medium">{label}</div>
    </Link>
  );
}

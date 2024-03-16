import { useState } from "react";
import { Appbar } from "./Appbar";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { DATABASE_URL } from "../context";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  async function onClickHandler() {
    try {
      const res = await axios.post(
        `${DATABASE_URL}/api/v1/blog`,
        { title, content },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      navigate(`/blog/${res.data.blog.id}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="bg-slate-200 h-screen p-5">
      <Appbar />
      <div className="mt-5">
        <label className="text-xl font-mono font-medium text-gray-900">
          Title
        </label>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Title"
          className="mt-2 bg-slate-300 p-5 w-full rounded-lg border border-slate-800"
        />
      </div>

      <div className="mt-5">
        <label className="block mb-2 text-xl font-mono font-medium text-gray-900">
          Content
        </label>
        <textarea
          onChange={(e) => {
            setContent(e.target.value);
          }}
          className="block p-10 w-full text-sm text-gray-900 bg-slate-300 rounded-lg border border-slate-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <div className="mt-5">
        <button
          onClick={onClickHandler}
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

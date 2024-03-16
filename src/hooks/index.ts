import { useEffect, useState } from "react";

import axios from "axios";
import { DATABASE_URL } from "../context";

interface BlogInput {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
}
export const useBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogInput>();

 const pathName=window.location.pathname;
 const pathArray=pathName.split('/');
 const val=pathArray[pathArray.length-1];
  useEffect(() => {
    axios
      .get(`${DATABASE_URL}/api/v1/blog/${val}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlog(res.data.blog);
        setLoading(false);
      });
  }, []);
  return {
    loading,
    blog,
  };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogInput[]>([]);
  useEffect(() => {
    axios
      .get(`${DATABASE_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlogs(res.data.blogs);
        setLoading(false);
        console.log(blogs);
      });
  }, []);
  return {
    loading,
    blogs,
  };
};

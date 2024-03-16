import { Quote } from "../componenets/Quote";
import { TopText } from "../componenets/TopText";
import { Button } from "../componenets/Button";
import { SingleInput } from "../componenets/SingleInput";
import { useState } from "react";
import type { SignupInput } from "@chadchandan/medium-common";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DATABASE_URL } from "../context";

export const Signup = () => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  async function sendRequest() {
    try {
      const res = await axios.post(
        `${DATABASE_URL}/api/v1/user/signup`,
        postInputs
      );
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
      navigate("/blogs");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
  
      <div className="flex flex-col w-full md:flex-row">
        <div className=" w-full md:w-1/2 flex flex-col justify-center items-center h-screen bg-slate-300 ">
          <div className=" flex flex-col  justify-center  items-center p-6 max-w-sm mx-auto   bg-slate-200 rounded-xl drop-shadow-lg">
            <TopText page={"signup"} />
            <SingleInput
              onChange={(e) => {
                setPostInputs({ ...postInputs, email: e.target.value });
              }}
              label={"Email"}
              type={"email"}
              placeholder={"john@gmail.com"}
              d={
                "m31.59 11.19-15-11a1 1 0 0 0-1.18 0l-15 11A1 1 0 0 0 0 12v17a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V12a1 1 0 0 0-.41-.81zM16 2.24l13.2 9.68L16 19.83 2.8 11.92zM2 28.59V13.77l9.26 5.56zM3.41 30 13 20.38l2.46 1.47a1 1 0 0 0 1 0L19 20.38 28.59 30zM30 28.59l-9.26-9.26L30 13.77z"
              }
              view={"0 0 40 40"}
            />
            <SingleInput
              onChange={(e) => {
                setPostInputs({ ...postInputs, name: e.target.value });
              }}
              label={"Name"}
              type={"text"}
              placeholder={"John Doe"}
              d={
                "M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
              }
              view={"0 0 20 20"}
            />
            <SingleInput
              onChange={(e) => {
                setPostInputs({ ...postInputs, password: e.target.value });
              }}
              label={"Password"}
              type={"password"}
              placeholder={"*********"}
              d={
                "M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 8 14 C 8.55 14 9 14.45 9 15 C 9 15.55 8.55 16 8 16 C 7.45 16 7 15.55 7 15 C 7 14.45 7.45 14 8 14 z M 12 14 C 12.55 14 13 14.45 13 15 C 13 15.55 12.55 16 12 16 C 11.45 16 11 15.55 11 15 C 11 14.45 11.45 14 12 14 z M 16 14 C 16.55 14 17 14.45 17 15 C 17 15.55 16.55 16 16 16 C 15.45 16 15 15.55 15 15 C 15 14.45 15.45 14 16 14 z"
              }
              view={"0 0 20 20"}
            />
            <Button onClick={sendRequest} label={"Sign up"} />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center h-screen bg-slate-400 p-10  ">
          <Quote />
        </div>
      </div>
    </>
  );
};

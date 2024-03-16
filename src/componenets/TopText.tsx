type input = {
  page: string;
};
export const TopText = ({ page }: input) => {
  return (
    <>
      <div className="text-center">
        <div className=" font-extrabold text-4xl mb-2">
          {page == "signup" ? "Create an account." : "Login"}
        </div>

        <div className="font-[400px] text-gray-700 mb-5 ">
          {page == "signup"
            ? "Already have an account?"
            : "Don't have an account?"}
          {page == "signup" ? (
            <a
              href="/signin"
              className="underline decoration-blue-950 font-bold italic"
            >
              &nbsp;Login
            </a>
          ) : (
            <a
              href="/signup"
              className="underline decoration-blue-950 font-bold italic"
            >
              &nbsp;Signup
            </a>
          )}
        </div>
      </div>
    </>
  );
};

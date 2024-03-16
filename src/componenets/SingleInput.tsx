import { ChangeEventHandler } from "react";

interface InputType {
  label: string;
  d: string;
  placeholder: string;
  type?: string;
  view: string;
  onChange:ChangeEventHandler<HTMLInputElement>;
}
export const SingleInput = ({
  label,
  d,
  placeholder,
  type,
  view,
  onChange,
}: InputType) => {
  return (
    <>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox={view}
            >
              <path d={d} />
            </svg>
          </div>
          <input
            onChange={onChange}
            type={type || "text"}
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  );
};

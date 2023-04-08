import React from "react";

const Card = ({ todo }) => {
  return (
    <div className="group flex justify-center">
      <div className="flex justify-between w-full text-xl font-semibold bg-white xl:w-[50%] lg:w-[60%] sm:w-[70&] md:w-[80%] p-3 rounded-md border-2 border-blue-600 cursor-pointer group-hover:bg-cyan-500 group-hover:text-white">
        {todo.title}
        <svg
          className="w-8 h-8 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Card;

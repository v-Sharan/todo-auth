import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../UI components/Card";

const Home = () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const todos = useSelector((state) => state.Todo.todo);

  console.log("data", todos);

  return (
    <div className="pt-10 flex flex-col">
      <div className="pb-5">
        <label
          htmlFor="first_name"
          classNAme="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Todo
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add some Todo..."
          required
        />
      </div>
      <div>
        {todos?.map((todo, index) => (
          <Card todo={todo} key={`${todo}-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Home;

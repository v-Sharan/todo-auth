import React, { useEffect } from "react";
import axios from "axios";
import { useFetchTodo } from "../../hook/use-todo";

const Home = () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  return <div>Home</div>;
};

export default Home;

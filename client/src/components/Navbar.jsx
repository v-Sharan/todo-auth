import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { signOut } from "../store/authSlice";
import { Addtodo } from "../store/todoSclice";
import { storeData } from "../store/userSclice";
import axios from "axios";

const Navbar = () => {
  const id = localStorage.getItem("id");
  const token = useSelector((state) => state.auth.token);
  const photo = useSelector((state) => state.data.userPhoto);
  const dispatch = useDispatch();
  const [isLoadingTodo, setIsLoadingTodo] = useState(false);
  const { data, isLoading } = useQuery("Todo", () => {
    return axios.get(`http://localhost:8080/api/todo/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        dispatch(
          storeData({
            name: res.data.user.name,
            email: res.data.user.email,
            userPhoto: res.data.user.userPhoto,
            id: res.data.user._id,
          })
        );
      })
      .catch((error) => console.log(error));
    dispatch(Addtodo({ todo: data?.data?.Todos, isLoading: isLoadingTodo }));
  }, []);
  return (
    <nav className="border-gray-200 bg-[#6a00f4]  dark:bg-gray-900 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27MZDQYf1Mo7PYVBY2Z6Etc0ncpgy6JPiaJ_y7H2mug&s"
            className="h-12 w-12 mr-3 rounded-full"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Todo List
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          <div className="dropdown dropdown-bottom dropdown-end">
            <button
              id="dropdownHoverButton"
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-expanded="false"
              tabIndex={0}
            >
              <img
                className="w-12 h-12 rounded-full"
                src={photo}
                alt="user photo"
              />
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52 border"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive && "text-white bg-violet-700"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/complete"}
                  className={({ isActive }) =>
                    `${isActive && "text-white bg-violet-700"}`
                  }
                >
                  Completed
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/profile"}
                  className={({ isActive }) =>
                    `${isActive && "text-white bg-violet-700"}`
                  }
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <Button
                  onClick={() => {
                    dispatch(signOut());
                  }}
                >
                  Sign out
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

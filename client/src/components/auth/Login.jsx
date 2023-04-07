import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signIn } from "../../store/authSlice";
import { storeData } from "../../store/userSclice";

const Login = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setform({ ...form, [target.name]: target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/api/users/login", form).then((res) => {
      console.log(res);
      dispatch(
        signIn({
          user: res.data.user.name,
          token: res.data.token,
        })
      );
      dispatch(
        storeData({
          name: res.data.user.name,
          email: res.data.user.email,
          userPhoto: res.data.user.userPhoto,
          id: res.data.user._id,
        })
      );
      navigate("/");
    });
  };

  return (
    <>
      <section className="min-h-screen bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/dfje97i0k/image/upload/c_scale,h_1200,w_1500/v1680861064/checklist-check-list-marker_s1mwyu.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="max-w-screen-xl text-center py-10 lg:py-14">
          <div className="w-full my-auto mx-auto max-w-sm px-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleLogin} className="space-y-6">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Login to our platform
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="ex: name@company.com"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-start">
                <Link
                  to="/"
                  className="mr-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Forget Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Signup
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Don't have an account?
                <Link
                  to="/"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Click to Signup
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

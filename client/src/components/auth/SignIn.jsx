import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../../store/authSlice";

const SignIn = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    userPhoto: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setform({ ...form, [target.name]: target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/users/signup", form)
      .then((res) => {
        console.log("login", res);
        dispatch(
          signIn({
            user: res.data.user.name,
            token: res.data.token,
          })
        );
      })
      .catch((error) => console.log(error));
    console.log(form);
  };

  return (
    <>
      <section className="min-h-screen bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/dfje97i0k/image/upload/c_scale,h_1200,w_1500/v1680861064/checklist-check-list-marker_s1mwyu.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="max-w-screen-xl text-center py-10 lg:py-14">
          <div className="w-full my-auto mx-auto max-w-lg px-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleSignIn} className="space-y-6">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign up to our platform
              </h5>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="ex: sharan"
                  onChange={handleChange}
                  required
                />
              </div>
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
                  htmlFor="userPhoto"
                  className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="text"
                  name="userPhoto"
                  id="userPhoto"
                  placeholder="ex: https://photo.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Signup
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Already have an account?
                <Link
                  to="/login"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Click to Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;

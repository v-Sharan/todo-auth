import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Footer,
  Card,
  CreateTodoList,
  Home,
  Navbar,
  SignIn,
  Login,
  Complete,
  ProtectedRoute,
} from "./components";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "./store/authSlice";
import axios from "axios";

function App() {
  const Auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token && !Auth.isAuthendicated) {
      axios
        .post("http://localhost:8080", { token })
        .then((res) => {
          if (res.data.login) {
            dispatch(signIn({ user, token }));
          }
        })
        .catch((err) => console.log(err));
    }
  }, [token, Auth.isAuthendicated]);

  let route;

  if (Auth.isAuthendicated) {
    route = (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTodoList />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </>
    );
  } else {
    route = (
      <>
        <Routes>
          <Route
            path="/"
            element={
              // <ProtectedRoute>
              <SignIn />
              // </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    );
  }

  return <React.Fragment>{route}</React.Fragment>;
}

export default App;

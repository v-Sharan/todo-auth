import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Footer,
  Card,
  CreateTodoList,
  Home,
  Navbar,
  SignIn,
  Complete,
} from "./components";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "./store/authSlice";

function App() {
  const Auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      dispatch(signIn({ user, token }));
    }
  }, []);

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
          <Route path="/" element={<SignIn />} />
        </Routes>
      </>
    );
  }

  return <React.Fragment>{route}</React.Fragment>;
}

export default App;

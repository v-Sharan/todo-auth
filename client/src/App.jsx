import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Footer,
  Card,
  CreateTodoList,
  Home,
  Navbar,
  SignIn,
} from "./components";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const Auth = useSelector((state) => state.auth);

  let route;

  if (Auth.isAuthendicated) {
    route = (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTodoList />} />
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

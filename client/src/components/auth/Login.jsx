import axios from "axios";
import { Button } from "flowbite-react";
import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { signIn, signOut } from "../../store/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        axios
          .post("http://localhost:8080/api/users/login", {
            email: "sharan@gmail.com",
            password: "sagosharan",
          })
          .then((res) => {
            dispatch(
              signIn({
                user: res.data.user.name,
                token: res.data.token,
              })
            );
            navigate("/");
          });
      }}
    >
      Login
    </Button>
  );
};

export default Login;

import axios from "axios";
import { Button } from "flowbite-react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../store/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/users/signup", {
        name: "baskar",
        email: "sharan@gmail.com",
        userPhoto: "https//photo.com",
        password: "sagosharan",
      })
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
  };

  return (
    <>
      <form onSubmit={handleSignIn}>
        <Button type="submit">Sign in</Button>
      </form>
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        Log in
      </Button>
    </>
  );
};

export default SignIn;

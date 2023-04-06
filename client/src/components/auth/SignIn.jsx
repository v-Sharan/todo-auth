import { Button } from "flowbite-react";
import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(signIn({ user: "sharan", token: "token" }));
      }}
    >
      Sign in
    </Button>
  );
};

export default SignIn;

import { Button } from "flowbite-react";
import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/authSlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(signOut());
      }}
    >
      Sign out
    </Button>
  );
};

export default Home;

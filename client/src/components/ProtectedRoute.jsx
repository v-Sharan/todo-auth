import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthendicated } = useSelector((state) => state.auth);

  if (!isAuthendicated) {
    return <Navigate to="/sign-in" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default ProtectedRoute;

import React, { useContext } from "react";
import { AuthContext } from "../backend/context/Auth"; // adjust path according to your folder structure
import { Navigate } from "react-router-dom";

const Requireauth = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Requireauth;

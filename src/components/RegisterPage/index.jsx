import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../SignUp/SignUp";

const RegisterPage = () => {
  return (
    <div>
      <h1>register</h1>
      <SignUp />
      <p>
        if u have an account?
        <Link to="/login"> Sign In</Link>
      </p>
    </div>
  );
};

export default RegisterPage;

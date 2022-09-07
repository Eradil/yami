import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import style from "./RegisterPage.module.scss";

const RegisterPage = () => {
  return (
    <div className={style.root}>
      <h1>Регистрация</h1>
      <SignUp />
      <p>
        Или у Bас есть аккаунт? 👉
        <Link className={style.link} to="/login">
          Войти
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;

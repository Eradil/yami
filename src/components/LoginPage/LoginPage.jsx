import React from "react";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import style from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={style.root}>
      <h1 className={style.root_title}>Логин</h1>
      <Login />
      <p>
        или 👉
        <Link className={style.link} to="/register">
          регистрация
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { useState } from "react";
import style from "./Form.module.scss";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className={style.root}>
      <input
        className={style.input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        className={style.input}
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />

      <button
        className={style.button}
        onClick={() => {
          pass.length < 6
            ? alert("длина пароля должно содержать не меньше 6 символов")
            : handleClick(email, pass);
        }}
      >
        {title}
      </button>
    </div>
  );
};

export default Form;

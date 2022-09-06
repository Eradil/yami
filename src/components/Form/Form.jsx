import React from "react";
import { useState } from "react";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const handleClick2 = (email, pass) => {
  //   if (pass.length < 6) {
  //     alert();
  //   } else {
  //    ;
  //   }
  // };
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button
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

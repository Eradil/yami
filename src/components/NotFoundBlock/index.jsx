import React from "react";

import style from "./NotFoundBlock.module.scss";
const NotFoundBlock = () => {
  return (
    <div className={style.root}>
      <h1>
        <span>😕</span>
        <br />
        Страница пустая, ничего не найдено
      </h1>
    </div>
  );
};

export default NotFoundBlock;

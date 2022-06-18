import React, { useEffect, useState } from "react";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/PizzaBlock/Sceleton";
import Sort from "../components/Sort";

const Home = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLOading] = useState(true);

  useEffect(() => {
    fetch("https://62aa0b24371180affbce1a8a.mockapi.io/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItem(data);
        setIsLOading(false);
        window.scrollTo(0, 0);
      });
  });
  return (
    <div>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((index) => <Sceleton key={index} />)
          : item.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;

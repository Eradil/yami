import React, { useEffect, useState } from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";

import "./scss/app.scss";

const App = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://62aa0b24371180affbce1a8a.mockapi.io/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItem(data);
      });
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {item.map((obj) => (
                <PizzaBlock key={obj.id} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

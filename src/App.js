import React from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
// import "./App.css";
import "./scss/app.scss";

const App = () => {
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
              <PizzaBlock title="Четыре-сыра" price={345} />
              <PizzaBlock title="Pepproni" price={123} />
              <PizzaBlock title="Четыре-пять" price={222} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

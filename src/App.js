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
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
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

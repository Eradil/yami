import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../App";

import Categories from "../components/Categories";
import Pagination from "../components/Pagination/Pagination";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/PizzaBlock/Sceleton";
import Sort from "../components/Sort";
const API = "https://62aa0b24371180affbce1a8a.mockapi.io/items?";

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [activeCategory, SetActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState({
    name: "популярности",
    sortProperty: "raiting",
  });
  const [item, setItem] = useState([]);
  const [isLoading, setIsLOading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const pizzas = item.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const sceleton = [...new Array(6)].map((_, index) => (
    <Sceleton key={index} />
  ));
  const order = activeSort.sortProperty.includes("-") ? `asc` : "desc";
  const sortBy = activeSort.sortProperty.replace("-", "");
  const category = activeCategory > 0 ? `category=${activeCategory}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  useEffect(() => {
    setIsLOading(true);
    fetch(
      `${API}page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItem(data);
        setIsLOading(false);
        window.scrollTo(0, 0);
      });
  }, [activeCategory, activeSort, searchValue, currentPage]);
  return (
    <div>
      <div className="content__top">
        <Categories
          value={activeCategory}
          clickToChangeIndex={(i) => SetActiveCategory(i)}
        />
        <Sort value={activeSort} clickToChangeSort={(i) => setActiveSort(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sceleton : pizzas}</div>
      {/* pagination */}
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;

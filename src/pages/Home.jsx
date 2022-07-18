import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux/es/exports";

import Categories from "../components/Categories";
import Pagination from "../components/Pagination/Pagination";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/PizzaBlock/Sceleton";
import Sort from "../components/Sort";
import {
  SetActiveCategory,
  setSort,
  setCurrentPage,
} from "../redux/slices/filterSlice";
const API = "https://62aa0b24371180affbce1a8a.mockapi.io/items?";

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  // const activeCategory = useSelector((state) => state.filter.activeCategory);
  const { sort, activeCategory, currentPage } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  const [item, setItem] = useState([]);
  const [isLoading, setIsLOading] = useState(true);

  const pizzas = item.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const sceleton = [...new Array(6)].map((_, index) => (
    <Sceleton key={index} />
  ));
  const order = sort.sortProperty.includes("-") ? `asc` : "desc";
  const sortBy = sort.sortProperty.replace("-", "");
  const category = activeCategory > 0 ? `category=${activeCategory}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  useEffect(() => {
    setIsLOading(true);
    fetch(
      `${API}page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItem(data);
        setIsLOading(false);
        window.scrollTo(0, 0);
      });
  }, [activeCategory, sort, searchValue, currentPage]);
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  return (
    <div>
      <div className="content__top">
        <Categories
          value={activeCategory}
          clickToChangeIndex={(i) => dispatch(SetActiveCategory(i))}
        />
        <Sort value={sort} clickToChangeSort={(i) => dispatch(setSort(i))} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sceleton : pizzas}</div>
      {/* pagination */}
      <Pagination onChangePage={onChangePage} />
    </div>
  );
};

export default Home;

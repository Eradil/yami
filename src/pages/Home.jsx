import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useSearchParams } from "react-router-dom";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination/Pagination";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/PizzaBlock/Sceleton";
import Sort from "../components/Sort";
import { useAuth } from "../hooks/use-auth";
import {
  SetActiveCategory,
  setSort,
  setCurrentPage,
  selectFilter,
  selectPizzaData,
} from "../redux/slices/filterSlice";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { sort, activeCategory, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);
  const { isAuth } = useAuth();

  const dispatch = useDispatch();

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const sceleton = [...new Array(6)].map((_, index) => (
    <Sceleton key={index} />
  ));

  const order = sort.sortProperty.includes("-") ? `asc` : "desc";
  const sortBy = sort.sortProperty.replace("-", "");
  const category = activeCategory > 0 ? `category=${activeCategory}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  const getPizzas = async () => {
    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage,
      })
    );
  };

  useEffect(() => {
    getPizzas();
  }, [
    activeCategory,
    sort,
    searchValue,
    currentPage,
    category,
    order,
    sortBy,
    search,
    searchParams,
    isAuth,
  ]);
  useEffect(() => {
    setSearchParams({
      category,
      sortBy,
      order,
      search,
      currentPage,
    });
  }, [currentPage]);

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
      {status === "error" ? (
        <div style={{ textAlign: "center", margin: "100px 0" }}>
          <h2>Произошла ошибка, данные не обнаружены!</h2>
          <br />
          <p>Попробуйте войти позже. Спасибо!</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? sceleton : pizzas}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useSearchParams, Link } from "react-router-dom";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination/Pagination";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/PizzaBlock/Sceleton";
import Sort from "../components/Sort";
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

  const dispatch = useDispatch();

  const pizzas = items.map((obj) => (
    <Link key={obj.id} to={`pizza/${obj.id}`}>
      <PizzaBlock {...obj} />
    </Link>
  ));
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
        <div style={{ textAlign: "center" }}>
          <h2>Произошла ошибка, данные не обнаружены!</h2>
          <br />
          <p>любуйтесь котиком</p>
          <img
            width={500}
            src="https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
            alt="empty"
          />
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

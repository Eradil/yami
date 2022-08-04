import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  activeCategory: 0,
  currentPage: 1,
  sort: {
    name: "популярности",
    sortProperty: "raiting",
  },
};
export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    SetActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});
export const selectPizzaData = (state) => state.pizza;
export const selectFilter = (state) => state.filter;
export const { SetActiveCategory, setSort, setCurrentPage, setSearchValue } =
  filterSlice.actions;
export default filterSlice.reducer;

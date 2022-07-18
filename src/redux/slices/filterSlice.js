import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    SetActiveCategory(state, action) {
      console.log("action from slice", action);
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

export const { SetActiveCategory, setSort, setCurrentPage } =
  filterSlice.actions;
export default filterSlice.reducer;

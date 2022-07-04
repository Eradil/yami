import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: 0,
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
  },
});

export const { SetActiveCategory, setSort } = filterSlice.actions;
export default filterSlice.reducer;

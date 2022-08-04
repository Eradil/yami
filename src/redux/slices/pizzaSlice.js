import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API = "https://62aa0b24371180affbce1a8a.mockapi.io/items?";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzaStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get(
      `${API}page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "",
};
export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;

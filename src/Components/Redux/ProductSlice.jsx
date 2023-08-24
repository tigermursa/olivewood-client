import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
};

export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await axios.get(
    "https://my-json-server-tigermursa.vercel.app/products/"
  );
  return response.data;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

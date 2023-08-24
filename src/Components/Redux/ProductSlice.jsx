import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
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

export const { fetchProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch(
    "https://my-json-server-tigermursa.vercel.app/products/"
  );
  const result = await data.json();
  return result;
});

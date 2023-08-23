import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductSlice,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  cart: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, actions) {
      const { id, title } = actions.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1; //if the item already there this will increase by 1
        toast(`${title} quantity updated in the cart `, {
          position: "bottom-left",
          className: "toast-message",
          progressClassName: "custom-toast-icon",
        });
      } else {
        state.cart.push({ ...actions.payload, quantity: 1 }); //if does not exist add the item with 1 quantity ,
        toast(`${title} added to cart`, {
          position: "bottom-left",
          className: "toast-message",
          progressClassName: "custom-toast-icon",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart)); // Update the localStorage with value of  state.cart
    },
    remove(state, action) {
      const itemId = action.payload;
      const item = state.cart.find((item) => item.id === itemId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1; // Decrease the quantity by 1
        } else {
          state.cart = state.cart.filter((item) => item.id !== itemId); // Remove the item if the quantity is 1
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cart)); // Update localStorage with the updated state.cart
      }
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;

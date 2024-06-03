import { createSlice } from "@reduxjs/toolkit";
import { CartStateType } from "@/lib/types";
import { sumPrice, sumQuantity } from "@/helpers/cart";

const initialState: CartStateType = {
  cart: [],
  counter: 0,
  total: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (!existInCart) {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.cart);
        state.counter = sumQuantity(state.cart);
        state.checkout = false;
      }
    },
    removeItem: (state, action) => {
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = newCart;
      state.total = sumPrice(state.cart);
      state.counter = sumQuantity(state.cart);
    },
    increase: (state, action) => {
      const increaseIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (increaseIndex !== -1) {
        const updatedCart = state.cart.map((item, index) =>
          index === increaseIndex
            ? { ...item, quantity: (item.quantity ?? 0) + 1 }
            : item
        );
        state.cart = updatedCart;
        state.total = sumPrice(state.cart);
        state.counter = sumQuantity(state.cart);
      }
    },
    decrease: (state, action) => {
      const decreaseIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (
        decreaseIndex !== -1 &&
        (state.cart[decreaseIndex].quantity ?? 0) > 0
      ) {
        const updatedCart = state.cart.map((item, index) =>
          index === decreaseIndex
            ? { ...item, quantity: (item.quantity ?? 0) - 1 }
            : item
        );
        state.cart = updatedCart;
        state.total = sumPrice(state.cart);
        state.counter = sumQuantity(state.cart);
      }
    },
    checkout: (state) => {
      state.cart = [];
      state.counter = 0;
      state.total = 0;
      state.checkout = true;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout } =
  cartSlice.actions;

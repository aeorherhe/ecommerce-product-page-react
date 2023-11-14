import { createSlice } from "@reduxjs/toolkit";
import { calcQuantity } from "../services/calcDiscount";
import { item } from "../services/item";

const initialState = {
  cartItems: [],
  item,
  totalQuantity: 0,
  totalPrice: 0,
  cartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // open cart
    openCart(state) {
      state.cartOpen = !state.cartOpen;
    },

    // close cart
    closeCart(state) {
      state.cartOpen = false;
    },

    // increase item quantity
    increaseItemQuantity(state) {
      state.item.quantity++;
    },

    // decrease item quantity
    decreaseItemQuantity(state) {
      if (state.item.quantity > 1) {
        state.item.quantity--;
        return;
      }
      return state;
    },

    // increase item in cart quantity
    increaseItemInCartQuantity(state, { payload }) {
      const item = state.cartItems.find((item) => item.id === payload);
      if (item) {
        item.quantity++;
        state.totalQuantity = calcQuantity(state.cartItems);
        return;
      }
    },

    // decrease item in cart quantity
    decreaseItemInCartQuantity(state, { payload }) {
      const item = state.cartItems.find((item) => item.id === payload);
      if (item?.quantity > 1) {
        item.quantity--;
        state.totalQuantity = calcQuantity(state.cartItems);
        return;
      }
      return state;
    },

    // add to cart
    addToCart(state, { payload }) {
      const item = state.cartItems.find((item) => item.id === payload.id);
      if (item) {
        item.quantity += state.item.quantity;
      } else {
        state.cartItems.push(state.item);
      }

      state.totalQuantity = calcQuantity(state.cartItems);
    },

    // remover from cart
    removeFromCart(state, { payload }) {
      console.log(payload);
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
      state.totalQuantity = calcQuantity(state.cartItems);
    },

    // // increase item quantity
    // increaseQuantity(state, { payload }) {
    //   const item = state.items.find((item) => item.id === payload.id);
    //   if (item) {
    //     item.quantity++;
    //   }
    // },

    // // decrease item quantity
    // decreaseQuantity(state, { payload }) {
    //   const item = state.items.find((item) => item.id === payload.id);
    //   if (item) {
    //     item.quantity--;
    //   }
    // },
  },
});

// prettier-ignore
export const { addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity, 
openCart, closeCart, increaseItemInCartQuantity, decreaseItemInCartQuantity} =
  cartSlice.actions;

export default cartSlice.reducer;

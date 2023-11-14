import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import navMenuReducer from "../features/navMenuSlice";
import displayImgSliceReducer from "../features/displayImgSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    navMenu: navMenuReducer,
    displayImg: displayImgSliceReducer,
  },
});

export default store;

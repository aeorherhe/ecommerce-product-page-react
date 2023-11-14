import { createSlice } from "@reduxjs/toolkit";

const navMenuSlice = createSlice({
  name: "navMenu",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    // open menu
    openMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },

    // close menu
    closeMenu(state) {
      state.isMenuOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = navMenuSlice.actions;

export default navMenuSlice.reducer;

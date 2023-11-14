import { createSlice } from "@reduxjs/toolkit";
import { itemImages } from "../services/item";

const initialState = {
  currentSlide: 1,
  images: itemImages,
  isSlideOpen: false,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    // next slide
    nextSlide(state) {
      if (state.currentSlide >= state.images.length) {
        state.currentSlide = state.currentSlide % state.images.length;
      }
      state.currentSlide++;
    },

    // prev slide
    prevSlide(state) {
      if (state.currentSlide <= 1) {
        state.currentSlide = state.images.length;
        return;
      }
      state.currentSlide--;
    },

    // set slide
    setSlide(state, action) {
      state.currentSlide = action.payload;
      state.isSlideOpen = true;
    },

    // close slide
    closeSlide(state) {
      state.isSlideOpen = false;
    },
  },
});

export const { nextSlide, prevSlide, setSlide, closeSlide } =
  sliderSlice.actions;

export default sliderSlice.reducer;

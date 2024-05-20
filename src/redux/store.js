import { configureStore } from "@reduxjs/toolkit";
import wishiesSlice from "./wishiesSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    wishes: wishiesSlice,
    carts: cartSlice,
  },
});

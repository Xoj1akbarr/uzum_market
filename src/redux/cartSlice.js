import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cart")) || [],
  },

  reducers: {
    incCart(state, { payload }) {
      let index = state.value.findIndex((el) => el.id === payload.id);
      console.log(index);
      if (index < 0) {
        state.value = [...state.value, { ...payload, quantity: 1 }];
        console.log(state.value);
        toast.success("Mahsulot savatchaga qo'shildi");
      } else {
        state.value = state.value.map((item, inx) => {
          console.log(inx);
          if (inx === index) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        toast.info("Mahsulot soni oshirildi");
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    decCart(state, { payload }) {
      let index = state.value.findIndex((el) => el.id === payload.id);
      state.value = state.value.map((item, inx) =>
        index === inx ? { ...item, quantity: item.quantity - 1 } : item
      );
      toast.info("Mahsulot soni kamaytirildi");
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeCart(state, { payload }) {
      state.value = state.value.filter((item) => item.id !== payload.id);
      toast.error("Mahsulot savatchadan o'chirildi");
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeAllCart(state) {
      state.value = [];
      toast.warning("Barcha mahsulotlar savatchadan o'chirildi");
      localStorage.removeItem("cart");
    },
  },
});

export const { incCart, decCart, removeCart, removeAllCart } =
  cartSlice.actions;
export default cartSlice.reducer;

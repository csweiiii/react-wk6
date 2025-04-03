import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItems: (state, action) => {
      const { ID, qty } = action.payload;
      const existingItem = state.cartItems.find((item) => item.ID === ID);

      if (existingItem) {
        existingItem.qty += qty;
      } else {
        state.cartItems.push(action.payload);
      }
    },
  },
});

export const { addCartItems } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numOfIceCream: 20
}

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    iceCreamOrdered: (state, action) => {
      state.numOfIceCream--;
    },
    iceCreamRestored: (state, action) => {
      state.numOfIceCream += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(cakeOrdered, (state, action) => {
      state.numOfIceCream -=2;
    })
  }
})

export default iceCreamSlice.reducer;
export const { iceCreamOrdered, iceCreamRestored } = iceCreamSlice.actions;

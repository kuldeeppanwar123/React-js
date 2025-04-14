import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCake: 10
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    cakeOrdered: (state, action) => {
      state.numOfCake -= action.payload;
    },

    cakeRestored: (state, action) => {
      state.numOfCake += action.payload;
    }
  }
})

export default cakeSlice.reducer;
export const { cakeOrdered, cakeRestored } = cakeSlice.actions;

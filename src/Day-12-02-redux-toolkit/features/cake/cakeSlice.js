const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfCake: 10
}
const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCake--;
    },
    restored: (state, action) => {
      state.numOfCake += action.payload
    }
  }
})

// console.log(cakeSlice.actions.ordered(8))
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
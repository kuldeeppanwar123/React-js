
const createSlice = require('@reduxjs/toolkit').createSlice;
const createAction = require('@reduxjs/toolkit').createAction;
const cakeActions = require('../cake/cakeSlice').cakeActions;

const decrementByTwo = createAction('DECREMENT_BY_TWO')

const initialState = {
  numOfIceCream: 20
}

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCream--;
    },
    restored: (state, action) => {
      state.numOfIceCream += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(cakeActions.ordered, (state, action) => {
      state.numOfIceCream--;
    })
    .addCase({type: 'DECREMENT_BY_TWO'}, (state, action) => {
      state.numOfIceCream -= 2;
    })
  }
})

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
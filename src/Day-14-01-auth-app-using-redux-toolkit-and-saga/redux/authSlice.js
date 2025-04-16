import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  state: 'idle'
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUserStart(state, action) {
      state.status = 'pending';
    },

    loginUserSuccess(state, action){
      state.user = action.payload;
      state.error = null;
      state.status = 'complete';
    },

    loginUserFailure(state, action) {
      state.user = null;
      state.error = action.payload;
      state.status = 'failed';
    }
  }
})

export default authSlice.reducer;
export const {loginUserStart, loginUserSuccess, loginUserFailure} = authSlice.actions;

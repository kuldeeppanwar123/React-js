import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas";
import authReducer from './authSlice'

const sageMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: getDefaulMiddleware => getDefaulMiddleware().concat([sageMiddleware])
})

sageMiddleware.run(rootSaga);

export default store;
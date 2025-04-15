import { combineReducers, createStore } from "redux";
import reducer from "./reducer";
import { applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({user: reducer});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default store;
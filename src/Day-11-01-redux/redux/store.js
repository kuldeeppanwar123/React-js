import {applyMiddleware, combineReducers, createStore} from 'redux'
import { thunk as thunkMiddleware } from 'redux-thunk';
import postReducer from './posts/postReducer'

const rootReducer = combineReducers({
  post: postReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store;

const redux = require('redux')
const logger = require('redux-logger').createLogger()
const produce = require('immer').produce

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const bindActionCreators = redux.bindActionCreators


const ORDER_CAKE = 'ORDER_CAKE'
const RESTORE_CAKE = 'RESTORE_CAKE'
const ORDER_ICECREAM = 'ORDER_ICECREAM'
const RESTORE_ICECREAM = 'RESTORE_ICECREAM'

const orderCake = (qty = 1) => {
  return {
    type: ORDER_CAKE,
    payload: qty
  }
}

const restoreCake = (qty = 1) => {
  return {
    type: RESTORE_CAKE,
    payload: qty
  }
}

const orderIceCream = (qty = 1) => {
  return {
    type: ORDER_ICECREAM,
    payload: qty
  }
}

const restoreIceCream = (qty = 1) => {
  return {
    type: RESTORE_ICECREAM,
    payload: qty
  }
}

const initialCakeState = {
  numOfCake: 10
}

const initialIceCreamState = {
  numOfIceCream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return produce(state, (draft) => {
        draft.numOfCake = draft.numOfCake - action.payload
      })

    case RESTORE_CAKE:
      return produce(state, (draft) => {
        draft.numOfCake = draft.numOfCake + action.payload
      })
  
    default:
      return state;
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ORDER_ICECREAM:
      return produce(state, (draft) => {
        draft.numOfIceCream = draft.numOfIceCream - action.payload
      })

    case RESTORE_ICECREAM:
      return produce(state, (draft) => {
        draft.numOfIceCream = draft.numOfIceCream + action.payload
      })
  
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
const actions = bindActionCreators({orderCake, orderIceCream, restoreCake, restoreIceCream}, store.dispatch)

actions.orderCake(2);
actions.restoreIceCream(4)

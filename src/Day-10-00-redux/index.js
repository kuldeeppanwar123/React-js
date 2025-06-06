
const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'redux action for buying cake'
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: 'redux action for buying ice-cream'
  }
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// }

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

// const reducer = (state = initialState, action) => {
//   switch(action.type) {
//     case BUY_CAKE: 
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes -1
//       };

//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams -1
//       }

//     default:
//       return state;
//   }
// }

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: 
      return {
        ...state,
        numOfCakes: state.numOfCakes -1
      };

    default:
      return state;
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams -1
      }

    default:
      return state;
  }
}

// const store = createStore(reducer)

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applMiddleware(logger))

console.log('inital state: ', store.getState())
// const unsubscibe = store.subscribe(() => console.log('updated state: ', store.getState()))
const unsubscibe = store.subscribe(() =>{})

store.dispatch(buyCake())
// store.dispatch(buyIceCream())
unsubscibe()
store.dispatch(buyCake())
store.dispatch(buyCake())
const { ReactReduxContext } = require('react-redux')
const redux = require('redux')
const produce  = require('immer').produce
const logger = require('redux-logger').createLogger()

const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const initalState = {
  name: 'kuldeep',
  address: {
    street: 'xyz street',
    city: 'indore',
    state: 'mp'
  }
}

const STREET_UPDATED = 'STREET_UPDATED';
const streetUpdate = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street
  }
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload
      //   }
      // }
      return produce(state, (draft) => {
        draft.address.street = action.payload
      })
  
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(logger))
const actions = bindActionCreators({streetUpdate}, store.dispatch)
// store.subscribe(()=>{console.log( store.getState())})
actions.streetUpdate('abc street')
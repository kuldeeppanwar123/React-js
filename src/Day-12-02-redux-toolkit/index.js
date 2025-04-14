const { createAction } = require('@reduxjs/toolkit');
const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceCreamActions =  require('./features/iceCream/iceCreamSlice').iceCreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('initial state: ', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log('updated state: ', store.getState())
})
console.log(fetchUsers.fulfilled([11,22,33]))

// const decrementByTwo = createAction('DECREMENT_BY_TWO')
// store.dispatch({type: 'DECREMENT_BY_TWO'})
// store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restored(4))
// store.dispatch(iceCreamActions.restored(2))
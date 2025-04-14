const redux = require('redux')
const thunkMiddleware = require('redux-thunk').thunk
const logger = require('redux-logger').createLogger()
const axios = require('axios')
const produce = require('immer').produce

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const bindActionCreators = redux.bindActionCreators


const initialState = {
  loading: false,
  users: [],
  error: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users
  }
}

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error
  }
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUESTED:
      return produce(state, (draft) => {
        draft.loading = true
      })

    case FETCH_USERS_SUCCEEDED: 
      return produce(state, (draft) => {
        draft.loading = false;
        draft.users = action.payload;
        draft.error = '';
      })

    case FETCH_USERS_FAILED:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.users = [];
        draft.error= '';
      })
  }
}

const fetchUsers = () => {
  return function (dispatch, getState) {
      const actions = bindActionCreators({fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure}, dispatch)
      actions.fetchUsersRequest()
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data.map(user => user.id)
        actions.fetchUsersSuccess(users)
      })
      .catch(error => {
        actions.fetchUsersFailure(error.message)
      })
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger))
store.subscribe(() => {})
store.dispatch(fetchUsers())
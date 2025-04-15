import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import User from './User'

function Main() {
  return (
    <Provider store={store}>
      <User/>
    </Provider>
  )
}

export default Main
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Counter from './Counter'

function Main() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}

export default Main

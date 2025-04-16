import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Index from './components/Index'

function Main() {
  return (
    <Provider store={store}>
      <Index/>
    </Provider>
  )
}

export default Main
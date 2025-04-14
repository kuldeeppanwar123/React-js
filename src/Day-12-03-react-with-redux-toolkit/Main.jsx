import React from 'react'
import CakeView from './features/cake/CakeView'
import IceCream from './features/iceCream/iceCream'
import User from './features/user/User'
import { Provider } from 'react-redux'
import store from './app/store'

function Main() {
  return (
    <Provider store={store}>
      <div>
        <CakeView/>
        {/* <IceCream/> */}
        <User/>
      </div>
    </Provider>
  )
}

export default Main
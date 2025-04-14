import { Stack } from '@mui/material'
import React from 'react'
import PostComponent from './components/PostsComponent'
import { Provider } from 'react-redux'
import store from './redux/store'

function Main() {
  return (
    <Provider store={store}>
      <Stack>
        <PostComponent/>
      </Stack>
    </Provider>
  )
}

export default Main
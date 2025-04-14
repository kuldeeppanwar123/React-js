import React, { useEffect, useRef, useState } from 'react'
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import IceCreamContainer from './components/IceCreamContainer'
import { Button, Grid, Stack, Typography } from '@mui/material'

function Main() {
  const[forceRender, setForceRender] = useState(0)
  const unsubscribeRef = useRef(null)

  useEffect(() => {
    const unsubscribe = store.subscribe((val) => {
      // console.log('state changed')
      setForceRender(forceRender => forceRender + 1)
    })
    unsubscribeRef.current = unsubscribe

    return () => unsubscribe()
  },[])

  console.log('main rendering')
  return (
    <Provider store={store}>
      <Grid container justifySelf='center' alignSelf='center' m='auto' border={1} borderRadius={2} p={3} gap={5} justifyContent='center' alignItems='center' width={300}>
        <Stack gap={2}>
          <Typography>cakes:{ store.getState().cake.numberOfCakes }</Typography>
          <Typography>iceCreams: { store.getState().iceCream.numberOfIceCream } </Typography>
        </Stack>

        <Stack gap={2}>
          <Button variant='outlined' color='primary' onClick={()=>{store.dispatch({type: 'BUY_CAKE'})}}>buy cake</Button>
          <Button variant='outlined' color='warning' onClick={()=>{store.dispatch({type: 'BUY_ICECREAM'})}}>buy cake</Button>
          <Button variant='contained' color='error' onClick={()=>{unsubscribeRef.current()}}>unsubscribe</Button>
        </Stack>

      </Grid>

      <Grid container justifyContent='center'>
        <CakeContainer/>
        <IceCreamContainer/>
      </Grid>

    </Provider>
  )
}

export default Main
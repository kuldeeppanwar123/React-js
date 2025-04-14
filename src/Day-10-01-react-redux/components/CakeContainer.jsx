import React from 'react'
import {connect } from 'react-redux'
import { buyCake } from '../redux/index'
import { Button, Stack, Typography } from '@mui/material'

function CakeContainer(props) {
  console.log('cake container renders')
  return (
    <Stack direction='column' sx={{width: 300}} border={1} borderRadius={2} m={2} p={5} gap={4}>
      <Typography variant='h6'>Number of cakes: {props.numberOfCakes}</Typography>
      <Button variant='contained' onClick={props.k}>buy cake</Button>
      {/* <button onClick={()=>{props.dispatch({type: 'BUY_CAKE'})}}>buy cake</button> */}
    </Stack>
    
  )
}

const mapStateToProps = state => {
  return {
    numberOfCakes: state.cake.numberOfCakes 
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     buyCake: () => dispatch(buyCake())
//   }
// }

const mapDispatchToProps = {
  k: () =>({type: 'BUY_CAKE'})
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
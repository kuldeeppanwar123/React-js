import React, { Component } from 'react'
import { buyIceCream } from '../redux/iceCreams/iceCreamActions'
import { connect } from 'react-redux'
import { Button, Stack, Typography } from '@mui/material'


class IceCreamContainer extends Component {
  render() {
    const {numberOfIceCreams, buyIceCream} = this.props;
    console.log('icecream container render')
    return (
      <Stack width={300} border={1} borderRadius={2} m={2} p={5} gap={4}>
        <Typography variant='h6'>Number of IceCreams: {numberOfIceCreams}</Typography>
        <Button variant='contained'  color='warning' onClick={buyIceCream}>buy ice-cream</Button>
      </Stack>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCream
  }
}

const mapDispatchToProps = {
  buyIceCream
}

const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
export default WrappedComponent;
import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Welcome() {
  const user = useSelector(state => state.auth.user)
  console.log({user})
  return (
    <div>
      <Typography variant='h4' color='success'>Welcome! Login successfully</Typography>
      <Typography variant='body1'>hello! {user.firstName} {user.lastName}</Typography>
    </div>
  )
}

export default Welcome
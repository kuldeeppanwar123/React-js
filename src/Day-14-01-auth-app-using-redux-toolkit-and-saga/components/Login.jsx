import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUserStart } from '../redux/authSlice';

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUserStart({username, password}))
  }
  return (
    <Box>
      <TextField
        label='Name'
        variant='outlined'
        placeholder='Username'
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
      />

      <TextField
        label='Password'
        type='password'
        variant='outlined'
        placeholder='Password'
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
      />

      <Button variant='contained' color='primary' onClick={handleLogin}>Login</Button>
    </Box>
  )
}

export default Login
import React, { useState } from 'react'
import { useAuth } from './auth'
import { useLocation, useNavigate } from 'react-router-dom'

function Login() {
  const [user, setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  console.log({location})
  const redirectPath = location.state?.path || '/'

  const handleLogin = () =>{
    auth.login(user)
    navigate(redirectPath, {replace: true})
  }
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" name='username' id='username' onChange={(e)=>{setUser(e.target.value)}} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
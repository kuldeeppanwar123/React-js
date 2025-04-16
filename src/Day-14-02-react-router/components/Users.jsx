import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Users() {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <button onClick={() => {navigate('1')}}>user 1</button>
        <button onClick={() => {navigate('2')}}>user 2</button>
        <button onClick={() => {navigate('3')}}>user 3</button>
        <button onClick={() => {navigate('admin')}}>Admin</button>
      </div>
      <Outlet/>
    </div>
  )
}

export default Users
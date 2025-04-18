/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom'

function Users() {
  const navigate = useNavigate()
  const [searchParam , setSearchParam] = useSearchParams();
  return (
    <div>
      <div>
        <button onClick={() => {navigate('1')}}>user 1</button>
        <button onClick={() => {navigate('2')}}>user 2</button>
        <button onClick={() => {navigate('3')}}>user 3</button>
        <button onClick={() => {navigate('admin')}}>Admin</button>
      </div>
      <Outlet/>
      <div>
        <button onClick={(() => {setSearchParam({filter: 'active'})})}>active users</button>
        <button onClick={() => {setSearchParam({})}}>reset filter</button>
      </div>
    </div>
  )
}

export default Users

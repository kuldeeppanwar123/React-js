import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

function User() {
  const users = useSelector(state => state.user.users)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>list of users</h2>
      <div>
      {users?.map((u) => (
        <div key={u.id}>
          {u}
        </div>
      ))}
      </div>
      <button onClick={()=>{dispatch(fetchUsers())}}>click</button>
      
    </div>
  )
}

export default User
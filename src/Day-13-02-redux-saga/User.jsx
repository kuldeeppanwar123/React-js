import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersFetch } from './actions'

function User() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.user.users)
  return (
      <div >
        <div>Users</div>
        <button onClick={()=> {dispatch(getUsersFetch())}}>click</button>
        <div>
          {
            users?.map(u => (
              <div>
                {u.name}
              </div>
            ))
          }
        </div>  
      </div>
  )
}

export default User;
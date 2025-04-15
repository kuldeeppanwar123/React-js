import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function User() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.user.users)
  return (
      <div >
        <div>Users</div>
        <button onClick={()=> {dispatch({type: 'FETCH_USERS_REQUEST'})}}>click</button>
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
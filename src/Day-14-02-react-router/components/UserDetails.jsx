import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
  const { userId } = useParams();
  return (
    <div>User Details for: {userId}</div>
  )
}

export default UserDetails
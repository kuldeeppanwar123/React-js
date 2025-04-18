import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({children}) {
  console.log({children})
  const authenticated = false;
  if(authenticated){
    // return <Outlet/>
    return children
  }
  return <Navigate to='/login'/>
}

export default ProtectedRoute
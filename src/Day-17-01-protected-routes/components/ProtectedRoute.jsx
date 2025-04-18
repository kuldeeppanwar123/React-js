import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({children}) {
  const authenticated = true;
  if(authenticated){
    return <Outlet/>
  }
  return <Navigate to='/login'/>
}

export default ProtectedRoute
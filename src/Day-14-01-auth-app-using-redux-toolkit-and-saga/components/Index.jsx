import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login';
import Welcome from './Welcome';

function Index() {
  const user = useSelector(state => state.auth.user);
  const status = useSelector(state => state.auth.status);
  return (
    <div>
      {status==='pending' && <p>Logging...</p>}
      {!user && <Login/>}
      {user && <Welcome/>}
    </div>
  )
}

export default Index
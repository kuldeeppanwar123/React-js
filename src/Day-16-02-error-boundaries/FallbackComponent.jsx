import React from 'react'

function FallbackComponent({error, resetErrorBoundary}) {

  return (
    <div>
      <div>Something went wrong!!!</div>
      <div style={{color:'red'}}>{error.message}</div>
      <button onClick={resetErrorBoundary}>Click</button>
    </div>
  )
}

export default FallbackComponent;
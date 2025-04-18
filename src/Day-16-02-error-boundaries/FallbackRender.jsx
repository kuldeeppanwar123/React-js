import React from 'react'

function FallbackRender({error, resetErrorBoundary}) {
  return (
    <div>
      <div>FallbackRender</div>
      <div style={{color: 'red'}}>{error.message}</div>
      <button onClick={resetErrorBoundary}>reset error boundary</button>
    </div>
  )
}

export default FallbackRender
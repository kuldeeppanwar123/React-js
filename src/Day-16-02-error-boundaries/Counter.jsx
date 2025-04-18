import React, { useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary'
const MAX_COUNT_ALLOWED = 5;


function Counter() {
  const [count, setCount] = useState(0);
  const {showBoundary, resetBoundary} = useErrorBoundary();

  const handleClick = () => {
    try {
      if(count === MAX_COUNT_ALLOWED) {
        throw new Error('Count limit exceeded')
      }
      setCount(c=>c+1)
    } catch (error) {
      showBoundary(error)
      // console.log({error})
      throw error;
    }
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>click</button>
      <button onClick={resetBoundary}>reset</button>
    </div>
  )
}

export default Counter
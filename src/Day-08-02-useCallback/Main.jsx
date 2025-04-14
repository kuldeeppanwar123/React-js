import React, { memo, useCallback, useState } from 'react'

export default function Main() {
  const[count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count=>count+1)
  }

  const memoizedFn = useCallback(incrementCount, [])
  console.log('main render')
  return (
    <div>
      <div>count: {count}</div>
      <MemoizedButton handleClick={memoizedFn}>increase ++</MemoizedButton>
    </div>
  )
}


const Button = ({handleClick, children}) => {
  console.log('button render')
  return <button onClick={handleClick}>{children}</button>
}

const MemoizedButton = memo(Button)

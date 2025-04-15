import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
  const dispatch  = useDispatch();
  const count = useSelector(state => state.count)
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => {dispatch({type: 'INCREMENT'})}}>increment</button>
      <button onClick={() => {dispatch({type: 'DECREMENT'})}}>decrement</button>
      <button onClick={() => {dispatch({type: 'INCREMENT_ASYNC'})}}>increment async</button>
      <button onClick={() => {dispatch({type: 'DECREMENT_ASYNC'})}}>decrement async</button>
    </div>
  )
}

export default Counter
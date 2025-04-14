import React, { useContext } from 'react'
import { CountContext } from './Main'

export default function ComponentA() {
  const countContext = useContext(CountContext)
  return (
    <>
    <div>Component A</div>
    <button onClick={() => countContext.countDispatch('increment')}>A inc</button>
    <button onClick={() => countContext.countDispatch('decrement')}>A dec</button>
    <button onClick={() => countContext.countDispatch('reset')}>A reset</button>
    </>
  )
}

import React, { useContext } from 'react'
import { CountContext } from './Main'

export default function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <>
      <div>Component B</div>
      <button onClick={()=>{countContext.countDispatch("increment")}}>B inc</button>
      <button onClick={()=>{countContext.countDispatch("decrement")}}>B dec</button>
      <button onClick={()=>{countContext.countDispatch("reset")}}>B reset</button>
    </>
  )
}

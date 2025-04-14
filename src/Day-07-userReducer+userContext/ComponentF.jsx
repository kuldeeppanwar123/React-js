import React, { useContext } from 'react'
import { CountContext } from './Main';

export default function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <>
      <div>Component F</div>
      <button onClick={()=>{countContext.countDispatch("increment")}}>F inc</button>
      <button onClick={()=>{countContext.countDispatch("decrement")}}>F dec</button>
      <button onClick={()=>{countContext.countDispatch("reset")}}>F reset</button>
    </>
  )
}

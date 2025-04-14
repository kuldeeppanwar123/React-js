import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cakeOrdered, cakeRestored } from './cakeSlice';
import { iceCreamOrdered, iceCreamRestored } from '../iceCream/iceCream';

function CakeView() {
  const numOfCake = useSelector(state => state.cake.numOfCake)
  const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes: {numOfCake} </h2>
      <h2>Number of IceCream: {numOfIceCream} </h2>
      <button onClick={() => {dispatch(cakeOrdered(1))}}>Order cake</button>
      <button onClick={() => {dispatch(cakeRestored(2))}}>Restore cake</button>
      <button onClick={() => {dispatch(iceCreamOrdered(1))}}>Order iceCream</button>
      <button onClick={() => {dispatch(iceCreamRestored(2))}}>Restore iceCream</button>
    </div>
  )
}

export default CakeView
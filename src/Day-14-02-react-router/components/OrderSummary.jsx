import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div>ordered confirmed!</div>
      <button onClick={()=>{navigate(-20)}}>back</button>
    </>
  )
}

export default OrderSummary
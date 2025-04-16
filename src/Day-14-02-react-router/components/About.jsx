import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <>
      <div>About</div>
      <button onClick={() => {navigate('order-summary')}}>order</button>
    </>
  )
}

export default About
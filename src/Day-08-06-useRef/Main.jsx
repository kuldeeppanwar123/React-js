import React, { useRef } from 'react'
import ComponentA from './ComponentA'
import { Button } from '@mui/material';

function Main() {
  const componentRef = useRef();
  console.log({componentRef});

  const handleClick = () => {
    console.log({componentRef})
    componentRef.current.style.backgroundColor = "red"
  }


  return (
    <div>
      <div>Main</div>
      <Button variant="contained" onClick={handleClick}>Click</Button>
      <ComponentA ref={componentRef}/>
    </div>
  )
}

export default Main
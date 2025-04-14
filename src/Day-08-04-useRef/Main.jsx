import React, { useEffect, useRef } from 'react'

function Main() {
  const inputRef = useRef(null);
  useEffect(() => {
    console.log({inputRef})
    inputRef.current.value = "Kuldeep"
    inputRef.current.disabled = true;
    inputRef.current.focus()
  }, [])
  
  return (
    <div>
      <input type="text" ref={inputRef}/>
    </div>
  )
}

export default Main
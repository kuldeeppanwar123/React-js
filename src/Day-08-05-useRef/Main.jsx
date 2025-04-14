import React, { useEffect, useRef, useState } from 'react'

function Main() {
  const [timer, setTimer] = useState(0);
  // const [intervalId , setIntervalId] = useState();
  let intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prev=>prev+1)
    }, 1000);
    // setIntervalId(interval)
  
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  console.log({intervalRef})
  
  return (
    <div>
      <div>Timer: {timer}</div>
      <button onClick={() => {clearInterval(intervalRef.current)}}>clear</button>
    </div>
  )
}

export default Main
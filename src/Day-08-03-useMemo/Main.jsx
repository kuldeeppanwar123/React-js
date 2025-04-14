import React, { useMemo, useState } from 'react'

export default function Main() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const even = useMemo(() => {
    let i = 0;
    while( i< 800000000) i++;
    console.log(count1%2===0)
    return count1%2===0;
  },[count1])

  return (
    <>
    <button onClick={()=>{setCount1(count1+1)}}>count1-{count1}-{even ? 'even' : 'odd'}</button>
    <button onClick={()=>{setCount2(count2+1)}}>count2-{count2}</button>
    </>
  )
}

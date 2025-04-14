import { useState } from "react";
import Child from "./Child";

function Main() {
  const[name, setName] = useState("");
  const[address, setAddress] = useState("");
  console.log('main called')

  return(
    <>
    <h1>Day-06</h1>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" onChange={e=>setName(e.target.value)}/>

    <label htmlFor="address">Address</label>
    <input type="text" id="address" name="address" onChange={e=>setAddress(e.target.value)}/>
    <hr />
    <Child name={name}/>
    </>
  )
}

export default Main;
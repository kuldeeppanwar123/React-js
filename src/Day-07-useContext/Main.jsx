import React from 'react'
import ComponentA from './ComponentA'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export default function Main() {
  return (
    <>
    <UserContext.Provider value={"Kuldeep"} >
      <ChannelContext.Provider value={"CodeEvaluation"}>
        <ComponentA />
      </ChannelContext.Provider>
    </UserContext.Provider>
    </>
  )
}

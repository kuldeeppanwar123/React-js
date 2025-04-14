import React from 'react'
import { UserContext, ChannelContext } from './Main'

export default function ComponentC() {
  return (
    <>
    <div>Component C</div>
    <UserContext.Consumer>
      {
        user=>{
          return (
            <ChannelContext.Consumer>
              {
                channel => {
                  return <div>User : {user} Channel: {channel}</div>
                }
              }
            </ChannelContext.Consumer>
          )
        }
      }
    </UserContext.Consumer>
    </>
  )
}

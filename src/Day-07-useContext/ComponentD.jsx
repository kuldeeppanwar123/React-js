import React, { useContext } from 'react'
import { ChannelContext, UserContext } from './Main'

export default function ComponentD() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <>
    <div>ComponentD</div>
    <div>User: {user} Channel: {channel}</div>
    </>
  )
}

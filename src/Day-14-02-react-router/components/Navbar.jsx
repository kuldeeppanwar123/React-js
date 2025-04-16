import { Stack } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navLinkStyle = (obj) => {
    console.log({obj})
    return {
      fontWeight: obj.isActive ? 'bold' : 'normal',
      textDecoration: obj.isActive ? 'none' : 'underline'
    }
  }
  return (
    <Stack direction='row' gap={3} mx={2} my={4}>
      <NavLink style = {navLinkStyle} to = '/'>Home</NavLink>
      <NavLink style = {navLinkStyle} to = '/about'>About</NavLink>
      <NavLink style = {navLinkStyle} to = '/products'>Products</NavLink>
      <NavLink style = {navLinkStyle} to = '/users'>Users</NavLink>
    </Stack>
  )
}

export default Navbar
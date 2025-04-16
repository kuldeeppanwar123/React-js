import { Stack } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
      <input placeholder='search product'/>
      <Stack direction='row' gap={2} my={2}>
        <Link to='featured'>featured</Link>
        <Link to='new'>new</Link>
      </Stack>
      <Outlet/>
    </div>
  )
}

export default Products
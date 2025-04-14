import { Box } from '@mui/material'
import React from 'react'

function MuiBox() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'error.dark',
        padding: 22,
        '&:hover': {
          backgroundColor: 'secondary.main',
          color: 'white'
        }
      }}
    >MuiBox
    </Box>
  )
}

export default MuiBox
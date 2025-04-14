import React from 'react'
import { createTheme, ThemeProvider, Typography } from '@mui/material'

function Main() {
  const theme = createTheme({
    typography: {
      h1: {
        color: 'red'
      },
      h2: {
        color: 'blue',
        backgroundColor: 'yellow'
      }
    }
  })
  return (
    <div>
      {/* <Typography variant='h1' gutterBottom component='h2'>Learn Typography</Typography>
      <Typography variant='h2'>Learn Typography</Typography>
      <Typography variant='h3'>Learn Typography</Typography>
      <Typography variant='h4'>Learn Typography</Typography>
      <Typography variant='h5'>Learn Typography</Typography>
      <Typography align='center' gutterBottom variant='h6'>Learn Typography</Typography> */}

      {/* <Typography variant='h2' sx={{bgcolor:'red'}} padding={20} align='center'>Learn Typography</Typography> */}

      {/* <ThemeProvider theme={theme}>
        <Typography variant='h1'>Hello World</Typography>
        <Typography variant='h2'>Hello World</Typography>
      </ThemeProvider> */}

      <Typography variant="button">
        CLICK ME
      </Typography>
    </div>
  )
}

export default Main
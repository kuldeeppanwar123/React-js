import React from 'react'
import { Stack, Button, Typography, createTheme, ThemeProvider } from '@mui/material'
import { pink, yellow } from '@mui/material/colors'

function MuiButton() {
  const theme = createTheme({
    palette: {
      primary: {
        light: yellow[900],
        main: pink[500]
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
    <Stack alignItems='center' margin={5} rowGap={4}>
      <Stack direction='row' spacing={3}>
        <Button variant='text' href='https://www.google.com'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>

      <Stack direction='column' >
        <Typography variant='h5' color={yellow[900]}>primary color</Typography>
        <Stack direction='row' gap={3}>
          <Button color='primary' variant='contained'>default</Button>
          <Button sx={{backgroundColor: 'primary.light'}} variant='contained'>light</Button>
          <Button sx={{backgroundColor: 'primary.main'}} variant='contained'>main</Button>
          <Button sx={{backgroundColor: 'primary.dark'}} variant='contained'>dark</Button>
        </Stack>
      </Stack>

      <Stack direction='column' >
        <Typography variant='h5'>Secondary color</Typography>
        <Stack direction='row' gap={3}>
          <Button color='secondary' variant='contained'>default</Button>
          <Button sx={{backgroundColor: 'secondary.light'}} variant='contained'>light</Button>
          <Button sx={{backgroundColor: 'secondary.main'}} variant='contained'>main</Button>
          <Button sx={{backgroundColor: 'secondary.dark'}} variant='contained'>dark</Button>
        </Stack>
      </Stack>

      <Stack direction='column' >
        <Typography variant='h5'>Error color</Typography>
        <Stack direction='row' gap={3}>
          <Button color='error' variant='contained'>default</Button>
          <Button sx={{backgroundColor: 'error.light'}} variant='contained'>light</Button>
          <Button sx={{backgroundColor: 'error.main'}} variant='contained'>main</Button>
          <Button sx={{backgroundColor: 'error.dark'}} variant='contained'>dark</Button>
        </Stack>
      </Stack>

      <Stack direction='column' >
        <Typography variant='h5'>Warning color</Typography>
        <Stack direction='row' gap={3}>
          <Button color='warning' variant='contained'>default</Button>
          <Button sx={{backgroundColor: 'warning.light'}} variant='contained'>light</Button>
          <Button sx={{backgroundColor: 'warning.main'}} variant='contained'>main</Button>
          <Button sx={{backgroundColor: 'warning.dark'}} variant='contained'>dark</Button>
        </Stack>
      </Stack>

      <Stack direction='column' >
        <Typography variant='h5'>Info color</Typography>
        <Stack direction='row' gap={3}>
          <Button color='info' variant='contained'>default</Button>
          <Button sx={{backgroundColor: 'info.light'}} variant='contained'>light</Button>
          <Button sx={{backgroundColor: 'info.main'}} variant='contained'>main</Button>
          <Button sx={{backgroundColor: 'info.dark'}} variant='contained'>dark</Button>
        </Stack>
      </Stack>

      <Stack direction='column' >
        <Typography variant='h5'>Success color</Typography>
        <Stack direction='row' gap={3}>
          <Button color='success' variant='contained'>default</Button>
          <Button sx={{backgroundColor: 'success.light'}} variant='contained'>light</Button>
          <Button sx={{backgroundColor: 'success.main'}} variant='contained'>main</Button>
          <Button sx={{backgroundColor: 'success.dark'}} variant='contained'>dark</Button>
        </Stack>
      </Stack>

      <Stack direction='column' >
        <Typography variant='h5'>Botton Size</Typography>
        <Stack direction='row' gap={3}>
          <Button color='success' size='small' variant='contained'>small</Button>
          <Button color='success' size='medium' variant='contained'>medium</Button>
          <Button color='success' size='large' variant='contained'>large</Button>
        </Stack>
      </Stack>
    </Stack>
  </ThemeProvider>
  )
}

export default MuiButton
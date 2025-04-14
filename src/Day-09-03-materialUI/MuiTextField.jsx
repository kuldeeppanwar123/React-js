import { InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';

function MuiTextField() {
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='standard'  onChange={(e)=>{}}/>
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField label='Name' size='small' required color='secondary' variant='outlined' helperText='dont share your password' type='password'  onChange={(e)=>{}}/>
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField
          label='Amount' 
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }}
        />

        <TextField
          label='Quantity'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
          }}
        />
      </Stack>

      <TextField
          label='Quantity'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
          }}
        />

      <TextField 
        label='Password' 
        type='password'
        error
        helperText="wrong password"
        InputProps={{
          endAdornment: <InputAdornment position='end' ><VisibilityIcon onClick={()=>{}}/></InputAdornment>
        }}
      />
    </Stack>
  )
}

export default MuiTextField
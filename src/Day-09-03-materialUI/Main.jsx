import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

function Main() {
  const top100Films = ['abc', 'xyx']
  return (
    <div>
      <Autocomplete
            disablePortal
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  )
}

export default Main
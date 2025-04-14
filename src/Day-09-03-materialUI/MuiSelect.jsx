import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

function MuiSelect() {
  const [country, setCountry] = useState([]) 
  const handleChange = (e) => {
    console.log(e.target.value)
    setCountry(e.target.value)
  }
  return (
    <Box >
      <TextField 
        label='select country' 
        fullWidth 
        value={country}
        onChange={handleChange}
        select
        error={true}
        helperText='please select country'
        SelectProps={{
          multiple:true
        }}
        >
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='UK'>UK</MenuItem>
      </TextField>
    </Box>
  )
}

export default MuiSelect
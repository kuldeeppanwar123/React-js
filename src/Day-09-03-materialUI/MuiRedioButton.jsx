import React, { useState } from 'react'
import { Box, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel } from '@mui/material'

function MuiRedioButton() {
  const [exp, setExp] = useState('')
  const handleClick = (e) => {
    console.log(e.target.value)
    setExp(e.target.value)
  }
  return (
    <Box>
      <FormControl>
        <FormLabel>Year Experience</FormLabel>
        <RadioGroup 
          name='experience'
          value={exp}
          onChange={handleClick}
        >
          <FormControlLabel control={<Radio size='small'/>} labelPlacement="end" label='0-2' value='0-2'/>
          <FormControlLabel control={<Radio size='medium'/>} label='2-4' value='2-4'/>
          <FormControlLabel control={<Radio size='large'/>} label='4-6' value='4-6'/>
          <FormControlLabel control={<Radio sx={{}}/>} label='6-8' value='6-8'/>
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default MuiRedioButton
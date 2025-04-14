import { Box, FormControlLabel, FormGroup, Switch} from '@mui/material'
import React, { useState } from 'react'

function MuiSwitch() {
  const[checked, setChecked] = useState(false)
  return (
    <Box>
      <FormGroup>
        <FormControlLabel label='Dark Mode' control={<Switch/>}/>
      </FormGroup>

    </Box>
  )
}

export default MuiSwitch
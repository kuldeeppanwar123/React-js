import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

function MuiToggleButton() {
  const[formats, setFormats] = useState([]);

  const handleFormatChange = (e, updatedFormat) =>{
    console.log(updatedFormat)
    setFormats(updatedFormat)

  }
  return (
    <div>
      <Stack>
        <ToggleButtonGroup value={formats} onChange={handleFormatChange} size='small' color='success'>
          <ToggleButton value="bold">
            <FormatBoldIcon/>
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon/>
          </ToggleButton>
          <ToggleButton value='underline'>
            <FormatUnderlinedIcon/>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      
    </div>
  )
}

export default MuiToggleButton
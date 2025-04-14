import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import { Button, ButtonGroup, IconButton, Stack } from '@mui/material';
import { purple } from '@mui/material/colors';
import { Palette, Pallet } from '@mui/icons-material';

function MuiIcon() {
  return (
    <div>
      {/* <Button variant='contained' startIcon={<HomeIcon color='success' sx={{bgcolor: 'primary.light'}}/>} sx={{backgroundColor: purple[300]}}>Home</Button> */}

      {/* <IconButton disableRipple color='secondary' onClick={(e)=>{}}>
        <SendIcon sx={{fontSize: 90}}/>
      </IconButton> */}

      <Stack>
      <ButtonGroup variant='contained'>
        <Button variant='outlined'>left</Button>
        <Button>center</Button>
        <Button>right</Button>
      </ButtonGroup>
      </Stack>

      <ButtonGroup variant='contained' orientation='vertical'>
        <Button variant='outlined'>left</Button>
        <Button>center</Button>
        <Button>right</Button>
      </ButtonGroup>

      
    </div>
  )
}

export default MuiIcon
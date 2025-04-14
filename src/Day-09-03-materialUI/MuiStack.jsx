import React from 'react'
import Stack from '@mui/material/Stack';
import { Box, Divider } from '@mui/material';


function MuiStack() {
  return (
    <Stack 
      direction={{xs: 'column', sm: 'row'}}
      spacing={2}
      divider={<Divider orientation= {{xs:'vertical', sm:'horizontal'}} flexItem/>}
      >
      <Box sx={{p: 5, bgcolor: 'primary.main'}}>Box 1</Box>
      <Box sx={{p: 5, bgcolor: 'secondary.main'}}>Box 1</Box>
      <Box sx={{p: 5, bgcolor: 'error.main'}}>Box 1</Box>

    </Stack>
  )
}

export default MuiStack
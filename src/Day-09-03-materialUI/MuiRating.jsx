import { Box, Rating } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function MuiRating() {
  return (
    <Box>
      <Rating 
        defaultValue={2.5} 
        precision={0.5} 
        size='large' 
        max={10}
        icon={<FavoriteIcon/>}
        emptyIcon={<FavoriteBorderIcon/>}
        highlightSelectedOnly
        />
    </Box>
  )
}

export default MuiRating
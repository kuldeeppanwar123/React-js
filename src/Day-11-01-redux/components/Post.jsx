import { Grid, Typography } from '@mui/material';
import React from 'react'

function Post({post}) {
  return (
    <Grid border={2} p={2} borderRadius={2} width={300} >
      {/* <Typography variant='h4' component='h1'>{post?.id}</Typography> */}
      <Typography variant='h6' component='h2'>{post?.title}</Typography>
      <Typography variant='body1' component='p'>{post?.body}</Typography>
    </Grid>
  )
}

export default Post;
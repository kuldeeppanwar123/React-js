import { Grid } from '@mui/material';
import React from 'react'
import Post from './Post';

function Posts({posts}) {
  return (
    <Grid container direction='row' justifyContent='space-around' rowGap={3}>
      {
        posts?.map(post => {
          return(
            <Post post = {post} key={post.id}/>
          )
        })
      }
      
    </Grid>
  )
}

export default Posts;
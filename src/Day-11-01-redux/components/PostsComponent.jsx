import { Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { fetchPosts } from '../redux/posts/postActions'
import { connect } from 'react-redux'
import Posts from './Posts'
import { PacmanLoader } from 'react-spinners'

function PostsComponent({isLoading, posts, error, fetchPosts}) {
  useEffect(() => {
    AbortController
      fetchPosts()
  }, [])
  
  return (
    <Grid border={2} borderRadius={2} >
      <Typography m={3} variant='h2' align='center'>Posts</Typography>
      {isLoading ? 
      <Stack justifyContent='center' alignItems='center' m='auto'> <PacmanLoader /> </Stack> 
      : error ? 
      <Typography variant='h5' align='center' color='error'>{error}</Typography> :
       <Posts posts = {posts}/>}
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.post.isLoading,
    posts: state.post.posts,
    error: state.post.error
  }
}

const mapDispatchToProps = {
  fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent)

import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function DataFechA() {
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState('');
  const[post, setPost] = useState({});

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      setLoading(false)
      setPost(response.data)
      setError("")
    }).catch(error => {
      setLoading(false)
      setPost({})
      setError('something went wrong')
    })
  }, [])
  return (
    <>
    {
      loading ? 'loading...' : post.title
    }
    {error && error}
    </>
  )
}

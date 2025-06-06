import axios from 'axios';
import React, { useEffect, useReducer } from 'react'

const initialState = {
  loading: true,
  error: '',
  post: {}
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: ''
      };
    case 'FETCH_ERROR':
       return {
        loading: false,
        post: {},
        error: 'something went wrong'
       }
    default: 
      return initialState;
  }
}

export default function DataFetchB() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      dispatch({
        type: 'FETCH_SUCCESS', 
        payload: response.data
      })

    }).catch(error => {
      dispatch({
        type: 'FETCH_ERROR'
      })
    })
  }, [])
  return (
    <>
    { state.loading ? 'loading...' : state.post.title }
    {state.error && state.error}
    </>
  )
}

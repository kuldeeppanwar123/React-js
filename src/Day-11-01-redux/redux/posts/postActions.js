import axios from "axios"
import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./postActionTypes"


export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST
  }
}

export const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts
  }
}

export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error
  }
}

export const fetchPosts = () => {
  return function (dispatch) {
     dispatch(fetchPostRequest());
     setTimeout(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          dispatch(fetchPostSuccess(response.data))
        })
        .catch(error => {
          dispatch(fetchPostFailure(error.message))
        })    
     }, 4000);
  }
}

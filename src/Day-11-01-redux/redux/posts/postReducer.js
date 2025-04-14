import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./postActionTypes";

const initialState = {
  isLoading: false,
  posts: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
      
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
        error: ''
      }

    case FETCH_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        posts: [],
        error: action.payload
      }
  
    default:
      return state;
  }
}

export default reducer;

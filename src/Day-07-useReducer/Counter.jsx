import { useReducer } from "react";

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return ({ ...state, count: state.count + action.payload });
    
    case 'decrement':
      return ({...state, count: state.count - action.payload });
    
    case 'reset':
      return initialState;
  }
}

function Counter () {
  const[countOne, dispatchOne] = useReducer(reducer, initialState);
  const[countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <>
      <div>CountOne: {countOne.count}</div>
      <div>CountTwo: {countTwo.count}</div>
      <button onClick={() => {dispatchOne({type: 'increment', payload: 3})}}>1st +</button>
      <button onClick={() => {dispatchOne({type: 'decrement', payload: 1})}}>1st -</button>
      <button onClick={() => {dispatchTwo({type: 'increment', payload: 3})}}>2st +</button>
      <button onClick={() => {dispatchTwo({type: 'decrement', payload: 1})}}>2st -</button>

    </>
  )
}

export default Counter;
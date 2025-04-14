import { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, firstCount: state.firstCount + action.payload };
    
    case 'decrement':
      return {...state, firstCount: state.firstCount - action.payload };

    case 'increment2':
      return {...state, secondCount: state.secondCount + action.payload };

    case 'decrement2':
      return {...state, secondCount: state.secondCount - action.payload };

    case 'reset':
      return initialState;

    default:
      return state;
  }
}

function Main () {
  const [countState, dispatch] = useReducer(reducer, initialState);
  return(
    <>
    <h1>Day-07</h1>
    <div>Count: {countState.firstCount}</div>
    <div>Count: {countState.secondCount}</div>
    <button onClick={() => {dispatch({type: 'increment', payload: 3})}}>1st +</button>
    <button onClick={() => {dispatch({type: 'decrement', payload: 1})}}>1st -</button>
    <button onClick={() => {dispatch({type: 'increment2', payload: 3})}}>2nd +</button>
    <button onClick={() => {dispatch({type: 'decrement2', payload: 1})}}>2nd -</button>
    <button onClick={() => {dispatch({type: 'reset'})}}>reset</button>
    </>
  )
}

export default Main;
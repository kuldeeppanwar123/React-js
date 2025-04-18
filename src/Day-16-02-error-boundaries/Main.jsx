import React from 'react'
import Person from './Person'
import Counter from './Counter'
// import ErrorBoundary from './ErrorBoundary'
import { ErrorBoundary } from "react-error-boundary"
import Fallback from './Fallback'

function Main() {
  const errorHandler = (error, errorInfo) => {
    console.log({error, errorInfo})
  }
  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Person person={{firstname: 'Kuldeep', lastname: 'Panwar'}}/>
        <Counter/>
        {/* <Person/> */}
      </ErrorBoundary>
    </div>
  )
}

export default Main
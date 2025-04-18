import React from 'react'
import Person from './Person'
import Counter from './Counter'
// import ErrorBoundary from './ErrorBoundary'
import { ErrorBoundary } from "react-error-boundary"
import FallbackComponent from './FallbackComponent'
// import FallbackRender from './FallbackRender'

function Main() {
  const onErrorHandler = (error, errorInfo) => {
    console.log({error, errorInfo})
  }

  const onResetHandler = () => {
    console.log('retrying...')
  }
  return (
    <div>
      {/* <ErrorBoundary fallback={<h1> something went wrong </h1>}>
        <Person person={{firstname: 'Kuldeep', lastname: 'Panwar'}}/>
        <Counter/>
        <Person/>
      </ErrorBoundary> */}

      {/* <ErrorBoundary fallbackRender={FallbackRender} onError={errorHandler}>
        <Person person={{firstname: 'Kuldeep', lastname: 'Panwar'}}/>
        <Counter/>
        <Person/>
      </ErrorBoundary> */}

      <ErrorBoundary 
        FallbackComponent={FallbackComponent} 
        onError={(e)=>{console.log({e})}} 
        onReset={(e)=>{console.log({e})}}>
        <Person person={{firstname: 'Kuldeep', lastname: 'Panwar'}}/>
        <Counter/>
        {/* <Person/> */}
      </ErrorBoundary>

    </div>
  )
}

export default Main
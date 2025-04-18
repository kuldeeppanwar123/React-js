import React from 'react'
import Hero from './Hero'
import ErrorBoundary from './ErroBoundary'

function Main() {
  return (
    <div>
      <ErrorBoundary>
       <Hero heroName={'Kuldeep'}/>
      </ErrorBoundary>
      <ErrorBoundary>
       <Hero heroName={'Superman'}/>
      </ErrorBoundary>
      <ErrorBoundary>
       <Hero heroName={'Joker'}/>
      </ErrorBoundary>
    </div>
  )
}

export default Main
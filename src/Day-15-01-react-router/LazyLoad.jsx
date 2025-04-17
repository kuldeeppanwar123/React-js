import React, { Suspense } from 'react'
const LazyAbout = React.lazy(() => delaySimulate(import('./About')));

function LazyLoad() {
  return (
    <div>
      <div> Hello guys</div>
      <Suspense fallback = {<h2>Loading...</h2>}>
        <LazyAbout/>
      </Suspense>
      
    </div>
  )
}

function delaySimulate (promise) {
  return new Promise(resolve => setTimeout(resolve, 2000)).then(() => promise);
}

export default LazyLoad
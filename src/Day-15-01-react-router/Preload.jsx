import React, { Suspense, useEffect } from 'react'
const LazyAbout = React.lazy(() => delaySimulate(import('./About')));

// Although here it doen't make any diff but this is how we lazy load.
const preloadAbout = () => {
 import('./About')
}

function Preload() {
  useEffect(()=>{
    preloadAbout()
  },[])
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

export default Preload;
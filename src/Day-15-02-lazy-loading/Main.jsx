import React, { Suspense } from 'react'
import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom'


const LazyAbout = React.lazy(() => delaySimulate(import('./About')))
const LazyHome = React.lazy(() => delaySimulate(import('./Home')))
const LazyIndex = React.lazy(() => delaySimulate(import('./Index')))

function Main() {
  return (
    <div>
      <BrowserRouter>
      <div style={{ display:'flex', gap: '8px'}}>
        <NavLink to='/'>Index</NavLink>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>

      </div>
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path='/' element = {<LazyIndex/>}/>
          <Route path='/home' element = {<LazyHome/>}/>
          <Route path='/about' element = {<LazyAbout/>}/>
        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  )
}

function delaySimulate (promise) {
  return new Promise(resolve => setTimeout(resolve, 2000)).then(() => promise);
}

export default Main

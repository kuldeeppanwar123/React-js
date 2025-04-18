import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

function Main() {
  return (
  <>
    <BrowserRouter>
    <div style={{display:'flex',gap:12}}>
      <NavLink to={'/'}>index</NavLink>
      <NavLink to={'/home'}>home</NavLink>
      <NavLink to={'/about'}>about</NavLink>
    </div>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route index element = {<Index/>}/>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
        </Route>
        <Route path='/login' element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default Main
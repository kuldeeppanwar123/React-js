import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
import { Container } from '@mui/material'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'
import NoMatch from './components/NoMatch'
import Products from './components/Products'
import FeaturedProduct from './components/FeaturedProduct'
import NewProducts from './components/NewProducts'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'
import Profile from './components/Profile'
import { AuthProvider } from './components/auth'
import Login from './components/Login'
import RequireAuth from './components/RequireAuth'
const LazyAbout = React.lazy(() => import('./components/About'))
console.log({LazyAbout})

function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<React.Suspense fallback='loading...'><LazyAbout/></React.Suspense>} />
        <Route path='order-summary' element={<OrderSummary/>} />
        <Route path='products' element={<Products/>}> 
          <Route index element={<FeaturedProduct/>}/>
          <Route path='featured' element={<FeaturedProduct/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>}/>    {/* user/100  */}
          <Route path='admin' element={<Admin/>}/>            {/* users/admin */}
        </Route>
        <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path = 'login' element = {<Login/>}/>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App

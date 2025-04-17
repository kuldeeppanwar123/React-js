import React from 'react'
import SearchForm from './SearchForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main
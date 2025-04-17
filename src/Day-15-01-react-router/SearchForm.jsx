import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function SearchForm() {
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(searchParam.get('q') || '')
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchParam({ q: searchQuery})
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
  }
  return (
    <div>
      <form>
        <input 
          type='text'
          placeholder='search..'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSubmit} type='submit'>search</button>
      </form>
    </div>
  )
}

export default SearchForm;

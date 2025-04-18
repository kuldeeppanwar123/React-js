import React from 'react'

function Person({person}) {
  return (
    <div>
      {person.firstname.toUpperCase()} {person.lastname.toUpperCase()}
    </div>
  )
}

export default Person

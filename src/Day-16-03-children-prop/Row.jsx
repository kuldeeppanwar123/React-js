import React, { Children } from 'react'

function Row({children}) {

  const rowStyle = {
    border:'dotted 2px',
    width:'300px',
    padding: '10px',
    margin: '20px'
  }

  return (
    <div style={rowStyle}>
      {children}
    </div>
  )
}

export default Row
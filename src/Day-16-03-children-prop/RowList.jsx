import React, { Children } from 'react'

function RowList({children}) {
  // console.log((Children.count(children)))
  
  const rowListStyle = {
    border: '2px solid',
    width: '400px',
  }
  return (
    <div style={rowListStyle}>
      {children}
    </div>
  )
}

export default RowList
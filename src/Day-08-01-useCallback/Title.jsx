
import React from 'react'

function Title() {
  console.log('rendering title')
  return (
    <div>useCallback hook</div>
  )
}


export default React.memo(Title);

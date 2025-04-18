import React from 'react'
import Row from './Row'
import RowList from './RowList'
import { ErrorBoundary } from 'react-error-boundary'

function Main() {
  return (
    <div>
      <ErrorBoundary fallbackRender={(error, info)=>{
        console.log({info})
        return(
          <>
            <h1>some thing went wrong!</h1>
            <p>{error.error.message}</p>
          </>
        )
      }}>
        <RowList>
          <Row><div>This is first row</div></Row>
          <Row><div>This is second row</div></Row>
          {/* <Row>This is third row</Row> */}
        </RowList>
      </ErrorBoundary>
    </div>
  )
}

export default Main
